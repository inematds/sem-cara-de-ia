# sem-cara-de-ia

**🇧🇷 [Português](README.md) · 🇺🇸 [English](README.en.md) · 🇪🇸 [Español](README.es.md)**

[![sem-cara-de-ia](guia/assets/banner-en.jpg)](https://inematds.github.io/sem-cara-de-ia/guia/en/)

Your AI-built website looks AI-generated, and customers notice. The **AI look test** shows what to fix and how.

## What it is

People who build websites with AI often get the same page: a purple and blue background, three identical little boxes, emoji instead of icons, and phrases like “revolutionize your business.” Visitors have seen this a thousand times and associate your business with a ready-made template. The **AI look test** is a free kit that reads your page, looks for these signs, gives it a score from 0 to 10, and tells you how to fix each one. It runs on your computer, with no account and nothing sent outside. It comes with a skill for Claude Code to redo the visuals for you and a list of vetted open libraries.

The test measures signs of a generic website; it does not identify who made the site, and a high score does not guarantee a good website. It works with Node.js 18 or later, with no dependencies or API.

## 📖 User guide

Complete guide (landing page + walkthrough): **https://inematds.github.io/sem-cara-de-ia/guia/en/**

## Use it in 2 minutes

With Git and Node.js installed, run:

```sh
git clone https://github.com/inematds/sem-cara-de-ia
cd sem-cara-de-ia
node checar.js exemplos/com-cara-de-ia --sem-cor
```

Actual output from this command:

*(The tool prints its report in Portuguese; this is the real output.)*

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

The exit code is 0 for a score >= 7, 1 for a score below 7, and 2 for a usage or read error. So exit code 1 in this example is expected.

Replace the path with your HTML file or a folder containing index.html. It also accepts `http://localhost:PORT/` or `http://127.0.0.1:PORT/`; other URLs are rejected. It reads inline styles, style blocks, and local CSS files. For a local URL, it reads CSS from the same origin.

To save a list of fixes or get data in JSON:

```sh
node checar.js exemplos/com-cara-de-ia --md consertar.md --sem-cor
node checar.js exemplos/com-cara-de-ia --json
```

## Before and after

The examples use Marcenaria Veio Firme, a fictional business. The service details are for demonstration purposes only. Scores measured by running the commands below:

| Example | Command | Actual score |
|---|---|---|
| com-cara-de-ia | `node checar.js exemplos/com-cara-de-ia --sem-cor` | 0/10 |
| sem-cara | `node checar.js exemplos/sem-cara --sem-cor` | 10/10 |
| tailwind | `node checar.js exemplos/tailwind --sem-cor` | 0/10 |

The before version has all eight signs. The after version uses an editorial, handcrafted direction, two fonts, its own colors, a concrete call to action, and services in a list. The Tailwind example shows that the script also recognizes utility classes without running the CDN.

<details>
<summary>Actual output from the sem-cara example</summary>

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
<summary>Actual output from the tailwind example</summary>

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

## The 8 signs

The score starts at 10 and loses the weight of each triggered sign once, regardless of the number of occurrences. The result is rounded to the nearest 0.5.

| Sign | Weight | When it triggers, in brief |
|---|---|---|
| Purple → blue gradient | 1.5 | CSS gradient with purple and blue hues, or Tailwind stops from these families. |
| Only one font | 1.5 | A single declared family that belongs to the test's list of neutral fonts. |
| Emoji as icon | 1 | Two or more emojis at the start of eligible elements, such as icons or headings. |
| Three identical cards | 1.5 | Three siblings with the same tag and classes, a heading, paragraph, shadow, and accepted radius. |
| Centered hero with two buttons | 1.5 | Centered top section with two generic links/buttons under the same parent, without a recognized column. |
| Cliché phrases | 1 | Two or more occurrences from the list of vague expressions. |
| Contrast | 1 | Any measured text/background pair below 4.5:1. |
| Same radius everywhere | 1 | Five or more accepted radius rules/classes, all with one normalized value. |

See the [exact rules, reasons, and fixes](skill/sem-cara-de-ia/referencias/sinais.md). The signs guide a review; a visual choice may have a reason even when it triggers a rule.

## The Claude Code skill

The skill includes the checker and guides Claude Code to measure, choose a direction, review, and measure again. Install it from a folder where the clone does not already exist:

```sh
mkdir -p ~/.claude/skills/
git clone https://github.com/inematds/sem-cara-de-ia && cp -r sem-cara-de-ia/skill/sem-cara-de-ia ~/.claude/skills/
```

If you have already cloned the kit and are in its root directory, just copy it:

```sh
mkdir -p ~/.claude/skills/
cp -r skill/sem-cara-de-ia ~/.claude/skills/
```

In the Claude Code session, ask: “Remove the AI look from my website using the sem-cara-de-ia skill. The HTML is at [path].” The skill preserves the original in a copy or branch, keeps the functionality, and marks missing facts with `[PREENCHA: ...]`.

See the [skill instructions](skill/sem-cara-de-ia/SKILL.md) and the [five visual directions](skill/sem-cara-de-ia/referencias/direcoes.md). The review target is a score >= 8 and no measured contrast below 4.5:1, with a browser check.

## UI libraries

See [bibliotecas.md](bibliotecas.md) for installations, licenses, and integrations recorded in the research. A library does not choose the site's direction for you. After installing components and adjusting the visuals, run the test again.

## What it can't see

- **Pages assembled by JavaScript:** the script does not run React, Vue, or other browser code. Use static or pre-rendered HTML, for example `dist/index.html`. A build with an empty div still has no content to measure.
- **Images:** it does not inspect pixels, photos, illustrations, or text inside them.
- **External CDN CSS:** it does not download these files. It reads names declared in Google Fonts links, but does not confirm that the fonts loaded. It recognizes only the Tailwind classes anticipated by the code.
- **The complete result in a browser:** complex selectors, cascading, screen sizes, and interaction states need visual inspection. “Could not measure” contrast does not mean it passed.

A high score does not prove full accessibility, content quality, or business results.

## The process, from start to finish

1. **🧠 you — identify the site and preserve the original.** Work on a copy or, in a Git repository, use `git switch -c revisao-visual`. Separate confirmed facts, your own photos, and the next step the visitor should take. If the site depends on JavaScript, obtain pre-rendered HTML through the project's process.
2. **⚙️ script — measure the before.** Run `node checar.js caminho/do/site --md consertar.md --sem-cor`. Replace the path with your HTML file or folder. Save the score and read the measurements; a low score returns exit code 1.
3. **🧠 you · 🤖 Claude Code with the skill — choose a direction.** In the session, ask: “Use the sem-cara-de-ia skill on the website at [path], read consertar.md, and explain which visual direction suits this business.” Choose one of the five directions; if you don't specify one, the skill chooses and explains why.
4. **🤖 Claude Code with the skill — review the copy.** Ask: “Apply this direction to the visuals and generic text, preserve the functionality, and mark missing data with [PREENCHA: ...].” The agent edits the files and uses `node ~/.claude/skills/sem-cara-de-ia/scripts/checar.js caminho/do/site --md consertar.md --sem-cor` to check the revision.
5. **⚙️ script · 🤖 Claude Code with the skill — compare.** Repeat the command from the previous step after the changes, aiming for a score >= 8 and no measured contrast < 4.5:1. The agent shows the before and after scores and what changed. If there is no HTML or measurable contrast, record the gap.
6. **🧠 you — check the real page.** Open the result in a browser on mobile and desktop; read it, navigate, and test the buttons. Fill in any missing facts. Run `node checar.js caminho/do/site --sem-cor` after the final changes and consider the score alongside this check.

## Tests

From the kit's root directory:

```sh
node --test
```

The suite checks the signs, examples, contrast calculation, and command-line behavior. It does not require package installation.

## Sibling kits

- [site-inspirado](https://inematds.github.io/site-inspirado/guia/) — creates a website with a style based on references.
- [site-que-vende](https://inematds.github.io/site-que-vende/guia/) — audits whether a website brings in customers.

## MIT License

Code under the [MIT license](LICENSE). The listed libraries have their own licenses.

INEMA.CLUB — https://inema.club
