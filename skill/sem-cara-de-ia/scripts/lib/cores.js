// Paleta neutra do Tailwind v3, tons 50 a 950. Sem consulta externa.
const tons = [50,100,200,300,400,500,600,700,800,900,950];
const paleta = {white:'#ffffff',black:'#000000'};
const neutras = {
 gray:'f9fafb f3f4f6 e5e7eb d1d5db 9ca3af 6b7280 4b5563 374151 1f2937 111827 030712',
 slate:'f8fafc f1f5f9 e2e8f0 cbd5e1 94a3b8 64748b 475569 334155 1e293b 0f172a 020617',
 zinc:'fafafa f4f4f5 e4e4e7 d4d4d8 a1a1aa 71717a 52525b 3f3f46 27272a 18181b 09090b',
 neutral:'fafafa f5f5f5 e5e5e5 d4d4d4 a3a3a3 737373 525252 404040 262626 171717 0a0a0a'
};
for (const [nome, valores] of Object.entries(neutras)) valores.split(' ').forEach((v,i)=>paleta[`${nome}-${tons[i]}`]='#'+v);
function cor(valor) {
 if (!valor) return null;
 let s=valor.trim().toLowerCase(); s=paleta[s]||s;
 const nomes={blue:'#0000ff',purple:'#800080',violet:'#ee82ee',indigo:'#4b0082',cyan:'#00ffff',fuchsia:'#ff00ff',red:'#ff0000',green:'#008000'}; s=nomes[s]||s;
 if (/^#[\da-f]{3}$/i.test(s)) return [...s.slice(1)].map(x=>parseInt(x+x,16));
 if (/^#[\da-f]{6}$/i.test(s)) return s.slice(1).match(/../g).map(x=>parseInt(x,16));
 let m=s.match(/^(rgba?|hsla?)\(([^)]+)\)$/); if (!m) return null;
 const p=m[2].split(/[,\s/]+/).filter(Boolean); if(p.length>3 && Number(p[3])!==1) return null;
 if(m[1].startsWith('rgb')) return p.slice(0,3).map(x=>x.endsWith('%')?parseFloat(x)*2.55:Number(x));
 const h=((parseFloat(p[0])%360)+360)%360/60, sat=parseFloat(p[1])/100,l=parseFloat(p[2])/100;
 const c=(1-Math.abs(2*l-1))*sat,x=c*(1-Math.abs(h%2-1)),a=l-c/2;
 return [[c,x,0],[x,c,0],[0,c,x],[0,x,c],[x,0,c],[c,0,x]][Math.floor(h)].map(v=>(v+a)*255);
}
function matiz(rgb) {const [r,g,b]=rgb.map(v=>v/255),max=Math.max(r,g,b),min=Math.min(r,g,b),d=max-min;if(!d)return -1;return ((max===r?(g-b)/d:max===g?(b-r)/d+2:(r-g)/d+4)*60+360)%360;}
function contraste(a,b) {const lum=c=>c.map(v=>v/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4).reduce((s,v,i)=>s+v*[.2126,.7152,.0722][i],0);const x=lum(typeof a==='string'?cor(a):a),y=lum(typeof b==='string'?cor(b):b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05);}
const hex=c=>'#'+c.map(v=>Math.round(v).toString(16).padStart(2,'0')).join('');
module.exports={paleta,cor,matiz,contraste,hex};
