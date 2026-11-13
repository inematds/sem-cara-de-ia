const fs=require('node:fs/promises');
const path=require('node:path');
function decodificar(s){return s.replace(/&#(x[\da-f]+|\d+);/gi,(_,n)=>String.fromCodePoint(n[0].toLowerCase()==='x'?parseInt(n.slice(1),16):+n)).replace(/&(amp|lt|gt|quot|apos|nbsp);/g,(_,n)=>({amp:'&',lt:'<',gt:'>',quot:'"',apos:"'",nbsp:' '})[n]);}
function atributos(s){const a={};for(const m of s.matchAll(/([^\s=<>/]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g))a[m[1].toLowerCase()]=decodificar(m[2]??m[3]??m[4]??'');return a;}
function declara(s){const o={};for(const m of s.matchAll(/([\w-]+)\s*:\s*([^;]+)(?:;|$)/g))o[m[1].toLowerCase()]=m[2].replace(/\s*!important/g,'').trim();return o;}
function analisar(html,css='') {
 const raiz={tag:'document',attrs:{},children:[],parent:null,text:''},pilha=[raiz],nodes=[];
 const limpo=html.replace(/<!--[\s\S]*?-->/g,'').replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi,'');
 for(const m of limpo.matchAll(/<\/?[a-z][^>]*>|([^<]+)/gi)) {
  if(m[1]){pilha.at(-1).text+=decodificar(m[1]);continue;}
  const token=m[0];if(token.startsWith('</')){const t=token.match(/^<\/([^\s>]+)/)[1].toLowerCase();const i=pilha.findLastIndex(n=>n.tag===t);if(i>0)pilha.length=i;continue;}
  const [,tag,resto]=token.match(/^<([^\s/>]+)([\s\S]*)>$/),n={tag:tag.toLowerCase(),attrs:atributos(resto),children:[],parent:pilha.at(-1),text:''};n.parent.children.push(n);nodes.push(n);
  if(!/^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/.test(n.tag)&&!token.endsWith('/>'))pilha.push(n);
 }
 const regras=[];let completo=css+'\n'+[...html.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)].map(m=>m[1]).join('\n');
 completo=completo.replace(/\/\*[\s\S]*?\*\//g,'');
 for(const m of completo.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {if(m[1].trim().startsWith('@'))continue;for(const sel of m[1].split(','))regras.push({sel:sel.trim(),props:declara(m[2])});}
 for(const n of nodes)if(n.attrs.style)regras.push({sel:local(n),props:declara(n.attrs.style),node:n});
 const vars={};for(const r of regras)if(/^(?:body|html|:root)$/.test(r.sel))for(const [k,v] of Object.entries(r.props))if(k.startsWith('--'))vars[k]=v;
 const resolver=(v,depth=0)=>depth>10?'':(v||'').replace(/var\(\s*(--[\w-]+)\s*(?:,\s*([^()]+))?\)/g,(_,k,f)=>resolver(vars[k]??f??'',depth+1));
 return {html,nodes,regras,resolver,texto:nodes.filter(n=>!oculto(n)).map(n=>n.text).join(' ')};
}
function oculto(n){return n && (['head','script','style','template'].includes(n.tag)||'hidden' in n.attrs||/display\s*:\s*none|visibility\s*:\s*hidden/.test(n.attrs.style||'')||oculto(n.parent));}
function classes(n){return (n.attrs.class||'').split(/\s+/).filter(Boolean);}
function local(n){return n.tag+(n.attrs.id?'#'+n.attrs.id:classes(n).map(c=>'.'+c).join(''));}
function texto(n){return n.text+' '+n.children.map(texto).join(' ');}
function combina(n,s){if(!n)return false;const partes=s.trim().split(/\s+/);const ultimo=partes.pop();if(!/^[\w.#*-]+$/.test(ultimo))return false;const tag=ultimo.match(/^[\w*-]+/)?.[0];if(tag&&tag!=='*'&&tag!==n.tag)return false;for(const m of ultimo.matchAll(/([.#])([\w-]+)/g))if(m[1]==='.'?!classes(n).includes(m[2]):n.attrs.id!==m[2])return false;if(!partes.length)return true;for(let p=n.parent;p;p=p.parent)if(combina(p,partes.join(' ')))return true;return false;}
function estilo(doc,n){const out={};for(const r of doc.regras)if(r.node?r.node===n:combina(n,r.sel))Object.assign(out,r.props);return out;}
function localURL(s){const u=new URL(s);if(u.protocol!=='http:'||!['localhost','127.0.0.1'].includes(u.hostname)||u.username||u.password)throw Error('Use arquivo, pasta ou http://localhost:PORTA (também 127.0.0.1).');return u;}
async function baixar(u){localURL(u);const r=await fetch(u,{redirect:'manual',signal:AbortSignal.timeout(5000)});if(!r.ok)throw Error(`Não foi possível ler ${u}: HTTP ${r.status}.`);return r.text();}
async function carregar(entrada){let html,base,url=false;const avisos=[];if(/^\w+:\/\//.test(entrada)){base=localURL(entrada);html=await baixar(base);url=true;}else{base=path.resolve(entrada);if((await fs.stat(base)).isDirectory())base=path.join(base,'index.html');html=await fs.readFile(base,'utf8');}
 const css=[];for(const m of html.matchAll(/<link\b([^>]+)>/gi)){const a=atributos(m[1]);if(!(a.rel||'').split(/\s+/).includes('stylesheet')||!a.href)continue;
 if(url){const u=new URL(a.href,base);if(u.origin!==base.origin){avisos.push(`CSS externo ignorado: ${a.href}`);continue;}css.push(await baixar(u));}
 else if(/^(?:[a-z]+:|\/\/)/i.test(a.href))avisos.push(`CSS externo ignorado: ${a.href}`);
 else css.push(await fs.readFile(path.resolve(path.dirname(base),decodeURIComponent(a.href.split(/[?#]/)[0])),'utf8'));
 }return {...analisar(html,css.join('\n')),avisos};}
module.exports={analisar,carregar,classes,local,texto,estilo,oculto};
