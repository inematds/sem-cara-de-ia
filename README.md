# sem-cara-de-ia

**🇧🇷 [Português](README.md) · 🇺🇸 [English](README.en.md) · 🇪🇸 [Español](README.es.md)**

[![sem-cara-de-ia](guia/assets/banner.jpg)](https://inematds.github.io/sem-cara-de-ia/guia/)

Seu site feito com IA tem cara de IA, e o cliente percebe. O **teste da cara de IA** mostra o quê e como corrigir.

## O que é

Quem faz site com IA costuma receber a mesma página: fundo roxo e azul, três caixinhas iguais, emoji no lugar de ícone e frases como "revolucione o seu negócio". O visitante já viu isso mil vezes e liga o seu negócio a um modelo pronto. O **teste da cara de IA** é um kit grátis que lê a sua página, procura esses sinais, dá uma nota de 0 a 10 e diz como corrigir cada um. Ele roda no seu computador, sem conta e sem enviar nada para fora. Vem com uma skill para o Claude Code refazer o visual por você e com uma lista de bibliotecas abertas conferidas.

O teste mede sinais de site genérico; não descobre quem fez o site e uma nota alta não garante um site bom. Funciona com Node.js 18 ou mais novo, sem dependências e sem API.

## 📖 Guia de uso

Guia completo (landing + passo a passo): **https://inematds.github.io/sem-cara-de-ia/guia/**

🎬 Vídeo: https://www.youtube.com/watch?v=lQ953BUQMjU · Short: https://youtube.com/shorts/Nwhl8Xt11us

## Usar em 2 minutos

Com Git e Node.js instalados, rode:

```sh
git clone https://github.com/inematds/sem-cara-de-ia
cd sem-cara-de-ia
node checar.js exemplos/com-cara-de-ia --sem-cor
```

Saída real desse comando:

```text
Teste da cara de IA — exemplos/com-cara-de-ia
Nota: 0 de 10   (10 = sem cara de IA · abaixo de 7 = o visitante percebe)

DISPAROU  1. Gradiente roxo → azul  (-1.5)
          medido: linear-gradient(135deg, #7c3aed, #2563eb) em .hero
          onde: .hero
          por quê: É o fundo padrão de mil sites gerados; o olho reconhece antes de ler.
          corrija: Use uma cor da marca do negócio, fundo liso ou foto real. Gradiente só se tiver motivo, como céu ou luz.
DISPAROU  2. Uma fonte só  (-1.5)
          medido: Inter
          onde: body
          por quê: A mesma fonte neutra em tudo apaga a hierarquia e a personalidade do negócio.
          corrija: Combine título com personalidade (serifada ou grotesca de display) e corpo legível. Use no máximo duas famílias.
DISPAROU  3. Emoji como ícone  (-1)
          medido: 3 ícones: 🚀 ✨ 💡
          onde: h3
          por quê: Emojis no lugar de ícones parecem um enfeite automático e mudam de aparência em cada aparelho.
          corrija: Use ícones de traço de um conjunto só, em SVG inline (Lucide ou Tabler), com a mesma espessura, ou nenhum ícone.
DISPAROU  4. Três cards iguais  (-1.5)
          medido: 3 irmãos em article.card
          onde: article.card
          por quê: A grade de cartões idênticos dá o mesmo peso a tudo e lembra um modelo pronto.
          corrija: Quebre a grade: um item maior em destaque, lista com número, foto real ou texto corrido. Nem tudo precisa ser card.
DISPAROU  5. Hero centralizado com dois botões  (-1.5)
          medido: Comece agora + Saiba mais
          onde: section.hero
          por quê: O bloco centralizado com dois convites vagos poderia pertencer a qualquer empresa.
          corrija: Diga para quem é e o que a pessoa ganha. Use UM botão com próximo passo concreto, como “Pedir orçamento pelo WhatsApp”, e texto à esquerda com foto do trabalho.
DISPAROU  6. Frases clichê  (-1)
          medido: 7 ocorrências: revolucione; potencialize; solucoes inovadoras; transforme sua; eleve; proximo nivel; solucao completa
          onde: texto visível
          por quê: Promessas vagas ocupam o lugar da informação que ajuda o cliente a decidir.
          corrija: Troque por fato concreto do negócio: prazo, preço, lugar e quem atende. Se faltar informação, marque [PREENCHA: ...].
DISPAROU  7. Contraste  (-1)
          medido: #9ca3af sobre #ffffff = 2.54:1 (3 pares medidos; meta: 4.5:1)
          onde: .claro
          por quê: Texto claro sobre fundo claro dificulta a leitura, principalmente em telas pequenas.
          corrija: Escureça o texto até atingir pelo menos 4.5:1 e confira de novo com o próprio checador.
DISPAROU  8. Mesmo raio em tudo  (-1)
          medido: 5 elementos/regras; valores: 16px (pílulas e círculos excluídos)
          onde: .hero; .botao; .secundario; .card; .faixa
          por quê: Arredondar tudo do mesmo jeito deixa campos, cartões e painéis sem função visual própria.
          corrija: Use escala com intenção: 2–4px em campos e tabelas, 8–12px em cartões, pílula só em etiqueta; ou cantos retos no estilo editorial.

O que ele não enxerga: página montada por JavaScript, imagens (pixels), CSS de CDN externa. React/Vue sem HTML pronto: use HTML estático/pré-renderizado do build, por exemplo dist/index.html; um build só com uma div vazia continua sem conteúdo para medir.
```

O código de saída é 0 para nota >= 7, 1 para nota abaixo de 7 e 2 para erro de uso ou leitura. Portanto, saída 1 nesse exemplo é esperada.

Troque o caminho pelo seu arquivo HTML ou por uma pasta com index.html. Também aceita `http://localhost:PORTA/` ou `http://127.0.0.1:PORTA/`; outras URLs são recusadas. Lê estilos inline, blocos style e arquivos CSS locais. Na URL local, lê CSS da mesma origem.

Para salvar uma lista de correções ou obter dados em JSON:

```sh
node checar.js exemplos/com-cara-de-ia --md consertar.md --sem-cor
node checar.js exemplos/com-cara-de-ia --json
```

## Antes e depois

Os exemplos usam a Marcenaria Veio Firme, um negócio fictício. Os dados de serviço servem apenas para demonstrar a revisão. Notas medidas executando os comandos abaixo:

| Exemplo | Comando | Nota real |
|---|---|---|
| com-cara-de-ia | `node checar.js exemplos/com-cara-de-ia --sem-cor` | 0/10 |
| sem-cara | `node checar.js exemplos/sem-cara --sem-cor` | 10/10 |
| tailwind | `node checar.js exemplos/tailwind --sem-cor` | 0/10 |

O antes concentra os oito sinais. O depois usa direção artesanal editorial, duas fontes, cores próprias, um convite concreto e serviços em lista. O exemplo Tailwind mostra que o script também reconhece classes utilitárias sem executar o CDN.

<details>
<summary>Saída real do exemplo sem-cara</summary>

```text
Teste da cara de IA — exemplos/sem-cara
Nota: 10 de 10   (10 = sem cara de IA · abaixo de 7 = o visitante percebe)

ok        1. Gradiente roxo → azul  (nenhum gradiente roxo → azul encontrado)
ok        2. Uma fonte só  (Source Sans 3, Fraunces)
ok        3. Emoji como ícone  (0 ícones: nenhum)
ok        4. Três cards iguais  (nenhum grupo de três cards com sombra e raio ≥ 8px)
ok        5. Hero centralizado com dois botões  (não encontrou dois botões genéricos lado a lado no topo centralizado)
ok        6. Frases clichê  (0 ocorrências: nenhuma)
ok        7. Contraste  (#ffffff sobre #354a35 = 9.62:1 (4 pares medidos; meta: 4.5:1))
ok        8. Mesmo raio em tudo  (3 elementos/regras; valores: 2px, 10px (pílulas e círculos excluídos))

CSS externo ignorado: https://fonts.googleapis.com/css2?family=Fraunces:wght@400;600&family=Source+Sans+3:wght@400;600&display=swap
O que ele não enxerga: página montada por JavaScript, imagens (pixels), CSS de CDN externa. React/Vue sem HTML pronto: use HTML estático/pré-renderizado do build, por exemplo dist/index.html; um build só com uma div vazia continua sem conteúdo para medir.
```

</details>

<details>
<summary>Saída real do exemplo tailwind</summary>

```text
Teste da cara de IA — exemplos/tailwind
Nota: 0 de 10   (10 = sem cara de IA · abaixo de 7 = o visitante percebe)

DISPAROU  1. Gradiente roxo → azul  (-1.5)
          medido: from-violet-600 to-blue-500 em section.text-center.bg-linear-to-r.bg-gradient-to-r.from-violet-600.to-blue-500.rounded-2xl.p-16
          onde: section.text-center.bg-linear-to-r.bg-gradient-to-r.from-violet-600.to-blue-500.rounded-2xl.p-16
          por quê: É o fundo padrão de mil sites gerados; o olho reconhece antes de ler.
          corrija: Use uma cor da marca do negócio, fundo liso ou foto real. Gradiente só se tiver motivo, como céu ou luz.
DISPAROU  2. Uma fonte só  (-1.5)
          medido: sans-serif
          onde: body.font-sans.bg-white.text-gray-800
          por quê: A mesma fonte neutra em tudo apaga a hierarquia e a personalidade do negócio.
          corrija: Combine título com personalidade (serifada ou grotesca de display) e corpo legível. Use no máximo duas famílias.
DISPAROU  3. Emoji como ícone  (-1)
          medido: 3 ícones: 🚀 ✨ 💡
          onde: h3
          por quê: Emojis no lugar de ícones parecem um enfeite automático e mudam de aparência em cada aparelho.
          corrija: Use ícones de traço de um conjunto só, em SVG inline (Lucide ou Tabler), com a mesma espessura, ou nenhum ícone.
DISPAROU  4. Três cards iguais  (-1.5)
          medido: 3 irmãos em article.rounded-2xl.shadow-lg.p-6
          onde: article.rounded-2xl.shadow-lg.p-6
          por quê: A grade de cartões idênticos dá o mesmo peso a tudo e lembra um modelo pronto.
          corrija: Quebre a grade: um item maior em destaque, lista com número, foto real ou texto corrido. Nem tudo precisa ser card.
DISPAROU  5. Hero centralizado com dois botões  (-1.5)
          medido: Comece agora + Saiba mais
          onde: section.text-center.bg-linear-to-r.bg-gradient-to-r.from-violet-600.to-blue-500.rounded-2xl.p-16
          por quê: O bloco centralizado com dois convites vagos poderia pertencer a qualquer empresa.
          corrija: Diga para quem é e o que a pessoa ganha. Use UM botão com próximo passo concreto, como “Pedir orçamento pelo WhatsApp”, e texto à esquerda com foto do trabalho.
DISPAROU  6. Frases clichê  (-1)
          medido: 6 ocorrências: revolucione; potencialize; solucoes inovadoras; transforme sua; eleve; solucao completa
          onde: texto visível
          por quê: Promessas vagas ocupam o lugar da informação que ajuda o cliente a decidir.
          corrija: Troque por fato concreto do negócio: prazo, preço, lugar e quem atende. Se faltar informação, marque [PREENCHA: ...].
DISPAROU  7. Contraste  (-1)
          medido: #9ca3af sobre #ffffff = 2.54:1 (2 pares medidos; meta: 4.5:1)
          onde: p.text-gray-400
          por quê: Texto claro sobre fundo claro dificulta a leitura, principalmente em telas pequenas.
          corrija: Escureça o texto até atingir pelo menos 4.5:1 e confira de novo com o próprio checador.
DISPAROU  8. Mesmo raio em tudo  (-1)
          medido: 6 elementos/regras; valores: 16px (pílulas e círculos excluídos)
          onde: section.text-center.bg-linear-to-r.bg-gradient-to-r.from-violet-600.to-blue-500.rounded-2xl.p-16; a.rounded-2xl.bg-white.p-4; a.rounded-2xl.bg-white.p-4; article.rounded-2xl.shadow-lg.p-6; article.rounded-2xl.shadow-lg.p-6; article.rounded-2xl.shadow-lg.p-6
          por quê: Arredondar tudo do mesmo jeito deixa campos, cartões e painéis sem função visual própria.
          corrija: Use escala com intenção: 2–4px em campos e tabelas, 8–12px em cartões, pílula só em etiqueta; ou cantos retos no estilo editorial.

O que ele não enxerga: página montada por JavaScript, imagens (pixels), CSS de CDN externa. React/Vue sem HTML pronto: use HTML estático/pré-renderizado do build, por exemplo dist/index.html; um build só com uma div vazia continua sem conteúdo para medir.
```

</details>

## Os 8 sinais

A nota começa em 10 e perde o peso de cada sinal disparado uma vez, independentemente da quantidade de ocorrências. O resultado é arredondado para o múltiplo de 0,5 mais próximo.

| Sinal | Peso | Quando dispara, em resumo |
|---|---|---|
| Gradiente roxo → azul | 1.5 | Gradiente CSS com matizes roxo e azul, ou paradas Tailwind dessas famílias. |
| Uma fonte só | 1.5 | Uma única família declarada, pertencente à lista de fontes neutras do teste. |
| Emoji como ícone | 1 | Dois ou mais emojis no início de elementos elegíveis como ícones ou títulos. |
| Três cards iguais | 1.5 | Três irmãos com mesma tag e classes, título, parágrafo, sombra e raio aceito. |
| Hero centralizado com dois botões | 1.5 | Topo centralizado com dois links/botões genéricos no mesmo pai, sem coluna reconhecida. |
| Frases clichê | 1 | Duas ou mais ocorrências da lista de expressões vagas. |
| Contraste | 1 | Algum par texto/fundo medido abaixo de 4.5:1. |
| Mesmo raio em tudo | 1 | Cinco ou mais regras/classes de raio aceitas, todas com um único valor normalizado. |

Consulte as [regras exatas, motivos e correções](skill/sem-cara-de-ia/referencias/sinais.md). Os sinais orientam uma revisão; uma escolha visual pode ter motivo mesmo quando dispara uma regra.

## A skill para o Claude Code

A skill leva o checador junto e orienta o Claude Code a medir, escolher uma direção, revisar e medir de novo. Instale a partir de uma pasta onde ainda não exista o clone:

```sh
mkdir -p ~/.claude/skills/
git clone https://github.com/inematds/sem-cara-de-ia && cp -r sem-cara-de-ia/skill/sem-cara-de-ia ~/.claude/skills/
```

Se já clonou e está na raiz do kit, basta copiar:

```sh
mkdir -p ~/.claude/skills/
cp -r skill/sem-cara-de-ia ~/.claude/skills/
```

Na sessão do Claude Code, peça: “Tira a cara de IA do meu site usando a skill sem-cara-de-ia. O HTML está em [caminho].” A skill preserva o original numa cópia ou branch, mantém as funções e marca fatos ausentes com `[PREENCHA: ...]`.

Veja as [instruções da skill](skill/sem-cara-de-ia/SKILL.md) e as [cinco direções visuais](skill/sem-cara-de-ia/referencias/direcoes.md). A meta da revisão é nota >= 8 e nenhum contraste medido abaixo de 4.5:1, com conferência no navegador.

## Bibliotecas de UI

Veja [bibliotecas.md](bibliotecas.md) para instalações, licenças e integrações registradas na pesquisa. Uma biblioteca não escolhe a direção do site por você. Depois de instalar componentes e ajustar o visual, rode o teste de novo.

## O que ele não enxerga

- **Página montada por JavaScript:** o script não executa React, Vue ou outros códigos do navegador. Use HTML estático ou pré-renderizado, por exemplo `dist/index.html`. Um build com uma div vazia continua sem conteúdo para medir.
- **Imagens:** não olha pixels, fotos, ilustrações nem texto dentro delas.
- **CSS de CDN externa:** não baixa esses arquivos. Lê nomes declarados em links do Google Fonts, mas não confirma que as fontes carregaram. Reconhece somente as classes Tailwind previstas no código.
- **O resultado completo no navegador:** seletores complexos, cascata, tamanhos de tela e estados de interação precisam de inspeção visual. “Não deu para medir” contraste não significa aprovação.

Uma nota alta não comprova acessibilidade completa, qualidade do conteúdo ou resultado para o negócio.

## O processo, do início ao fim

1. **🧠 você — indique o site e preserve o original.** Trabalhe numa cópia ou, em um repositório Git, use `git switch -c revisao-visual`. Separe fatos confirmados, fotos próprias e o próximo passo que a pessoa deve dar. Se o site depende de JavaScript, obtenha HTML pré-renderizado pelo processo do projeto.
2. **⚙️ script — meça o antes.** Rode `node checar.js caminho/do/site --md consertar.md --sem-cor`. Substitua o caminho pelo seu HTML ou pasta. Guarde a nota e leia as medições; nota baixa produz saída 1.
3. **🧠 você · 🤖 Claude Code com a skill — escolha uma direção.** Na sessão, peça: “Use a skill sem-cara-de-ia no site em [caminho], leia consertar.md e explique qual direção visual combina com este negócio.” Escolha uma das cinco direções; se não indicar, a skill escolhe e explica a razão.
4. **🤖 Claude Code com a skill — revise a cópia.** Peça: “Aplique essa direção no visual e nos textos genéricos, preserve as funções e marque dados ausentes com [PREENCHA: ...].” O agente edita os arquivos e usa `node ~/.claude/skills/sem-cara-de-ia/scripts/checar.js caminho/do/site --md consertar.md --sem-cor` para conferir a revisão.
5. **⚙️ script · 🤖 Claude Code com a skill — compare.** Repita o comando do passo anterior após os ajustes, buscando nota >= 8 e nenhum contraste medido < 4.5:1. O agente mostra as notas antes/depois e o que mudou. Se não houver HTML ou contraste mensurável, registre a lacuna.
6. **🧠 você — confira a página real.** Abra o resultado no navegador em celular e desktop; leia, navegue e teste os botões. Preencha os fatos pendentes. Rode `node checar.js caminho/do/site --sem-cor` após os últimos ajustes e considere a nota junto com essa conferência.

## Testes

Na raiz do kit:

```sh
node --test
```

A suíte verifica os sinais, os exemplos, o cálculo de contraste e o comportamento da linha de comando. Não exige instalação de pacotes.

## Kits irmãos

- [site-inspirado](https://inematds.github.io/site-inspirado/guia/) — cria o site com estilo a partir de referências.
- [site-que-vende](https://inematds.github.io/site-que-vende/guia/) — audita se o site traz cliente.

## Licença MIT

Código sob a [licença MIT](LICENSE). As bibliotecas listadas têm suas próprias licenças.

INEMA.CLUB — https://inema.club
