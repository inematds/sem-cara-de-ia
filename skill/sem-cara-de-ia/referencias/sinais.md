# Os 8 sinais

Esta referência acompanha [sinais.js](../scripts/lib/sinais.js). O teste mede sinais de site genérico; não determina autoria. A nota começa em 10, subtrai o peso de cada sinal disparado uma única vez e arredonda para o múltiplo de 0,5 mais próximo. Os pesos somam 10.

As regras usam o HTML/CSS lido pelo kit, sem renderizar a página. “Visível” segue o leitor: exclui head/script/style/template, atributo hidden e display:none ou visibility:hidden inline, inclusive nos ancestrais. Não reproduz toda a cascata do navegador.

## 1. Gradiente roxo → azul

**ID:** `gradiente-roxo-azul` · **Peso:** 1.5

Dispara se houver ao menos um destes casos:

- CSS: um valor de propriedade contém `linear-gradient(` ou `radial-gradient(`. Após resolver variáveis, o código procura hex, rgb()/rgba(), hsl()/hsla() e os nomes purple, violet, indigo, blue, cyan e fuchsia. Entre as cores interpretáveis, precisa haver um matiz de **255° a 320°** e outro de **190° a 250°**, inclusive. Não exige ordem nem direção do gradiente. O leitor de cores aceita hex de 3 ou 6 dígitos; transparência diferente de 1 não é medida.
- Tailwind: o mesmo elemento tem uma classe que começa com `bg-gradient`, `bg-linear` ou `bg-radial` e paradas `from-*`, `via-*` ou `to-*`. Uma parada contém purple/violet/fuchsia/indigo e outra contém blue/indigo/cyan, com hífen antes e depois do nome. As duas classes precisam ser diferentes; não há cálculo de matiz nessa verificação.

**Medição:** valores dos gradientes ou classes de parada e seus locais.

**Por quê:** É o fundo padrão de mil sites gerados; o olho reconhece antes de ler.

**Correção:** Use uma cor da marca do negócio, fundo liso ou foto real. Gradiente só se tiver motivo, como céu ou luz.

## 2. Uma fonte só

**ID:** `uma-fonte-so` · **Peso:** 1.5

Dispara somente quando encontra **uma única família**, após remover acentos e ignorar maiúsculas, e ela é Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, Helvetica ou sans-serif.

Lê `font-family` e a família ao fim de `font:` quando o tamanho usa px/rem/em/pt/% (com altura de linha opcional). Conta só a primeira família de cada pilha separada por vírgula; fallbacks não viram outra fonte. Resolve variáveis e ignora valores que começam com inherit, initial, unset ou var(. Lê também `font-sans` como sans-serif, `font-serif` como serif e `font-mono` como monospace. Nos links de fonts.googleapis.com, lê os parâmetros `family=`, separa famílias por `|` e remove o trecho após `:`.

**Medição:** famílias declaradas e seus locais. Não verifica download, aplicação em títulos nem a fonte renderizada. Nenhuma família explícita ou duas famílias distintas não disparam o sinal.

**Por quê:** A mesma fonte neutra em tudo apaga a hierarquia e a personalidade do negócio.

**Correção:** Combine título com personalidade (serifada ou grotesca de display) e corpo legível. Use no máximo duas famílias.

## 3. Emoji como ícone

**ID:** `emoji-icone` · **Peso:** 1

Dispara com **dois ou mais** elementos elegíveis cujo texto, sem espaços nas pontas, começa com um caractere Unicode `\p{Extended_Pictographic}`.

São elegíveis h2, h3, h4, button e li; qualquer elemento cuja classe contenha icon, icone ou emoji; ou span/div/i cujo texto inteiro seja um pictograma seguido apenas de seletores de apresentação U+FE0F, junções U+200D ou espaços. Desconsidera elementos ocultos reconhecidos pelo leitor. Se candidatos estiverem aninhados, mantém o descendente para não contar o mesmo ícone duas vezes.

**Medição:** quantidade, primeiro pictograma de cada candidato e locais. Não conta todo emoji do texto como ícone.

**Por quê:** Emojis no lugar de ícones parecem um enfeite automático e mudam de aparência em cada aparelho.

**Correção:** Use ícones de traço de um conjunto só, em SVG inline (Lucide ou Tabler), com a mesma espessura, ou nenhum ícone.

## 4. Três cards iguais

**ID:** `tres-cards-iguais` · **Peso:** 1.5

Dispara com **três ou mais irmãos no mesmo pai**, agrupados pela mesma tag e pela mesma lista de classes ordenada. A ordem das classes não importa. Cada irmão precisa ter descendentes com um título h1–h6 e um parágrafo p, além destas duas condições:

- Sombra: `box-shadow` com valor presente e diferente de none, ou classe `shadow`/`shadow-*`, exceto shadow-none.
- Raio: `border-radius` aceito pelo normalizador com `parseFloat(valor) >= 8`, ou rounded-lg/xl/2xl/3xl. O normalizador converte rem em px usando 16px, mas não converte outras unidades; descarta valores contendo 50%, 9999, calc ou var(.

**Medição:** quantidade de irmãos e local do primeiro. Não compara a árvore completa dos cards: exige a tag, as classes e os descendentes descritos acima.

**Por quê:** A grade de cartões idênticos dá o mesmo peso a tudo e lembra um modelo pronto.

**Correção:** Quebre a grade: um item maior em destaque, lista com número, foto real ou texto corrido. Nem tudo precisa ser card.

## 5. Hero centralizado com dois botões

**ID:** `hero-centralizado-2-botoes` · **Peso:** 1.5

Parte do primeiro h1 e sobe até header, section, main ou um elemento com a classe exata hero. Se chegar ao documento, usa o pai do h1. Sem esse caminho, tenta o primeiro header/section.

Dispara quando o h1 ou esse bloco está centralizado e há um par de descendentes a/button com **o mesmo pai** e textos exatamente iguais a dois itens da lista abaixo (podem repetir o mesmo item). Normaliza espaços, acentos e maiúsculas:

Comece agora; Começar; Saiba mais; Get started; Learn more; Começar grátis; Experimente grátis; Ver demonstração; Fale conosco; Sign up; Try for free; Explore; Descubra mais.

Procura centralização no elemento e nos ancestrais: text-align explícito decide primeiro; depois text-center, enquanto text-left/right/start/end interrompem como não centralizado. Descarta o par se o pai tiver flex-direction: column ou flex-col; também descarta se o pai tiver display: block e algum dos dois tiver display: block. Fora disso, considera o par lado a lado, sem medir posição no navegador. Links não precisam ter aparência de botão.

**Medição:** textos dos botões/links e local do bloco.

**Por quê:** O bloco centralizado com dois convites vagos poderia pertencer a qualquer empresa.

**Correção:** Diga para quem é e o que a pessoa ganha. Use UM botão com próximo passo concreto, como “Pedir orçamento pelo WhatsApp”, e texto à esquerda com foto do trabalho.

## 6. Frases clichê

**ID:** `frases-cliche` · **Peso:** 1

Dispara com **duas ou mais ocorrências**, mesmo repetidas, no texto que o leitor considera visível. Remove acentos, ignora maiúsculas e usa limites de palavra. Lista exata:

unlock; elevate; seamlessly; seamless; empower; supercharge; revolutionize; cutting-edge; next-level; game-changer; revolucione; potencialize; eleve; transforme seu; transforme sua; desbloqueie; sem esforço; de forma simples e rápida; solução completa; soluções inovadoras; inovador; inovadora; próximo nível; alavanque; impulsione.

Também aceita `take your … to the next level`, com 1 a 80 caracteres entre os trechos, sem ponto, exclamação, interrogação ou quebra de linha. A expressão não amplia automaticamente singular para plural nem outras flexões.

**Medição:** total e ocorrências normalizadas, no local “texto visível”.

**Por quê:** Promessas vagas ocupam o lugar da informação que ajuda o cliente a decidir.

**Correção:** Troque por fato concreto do negócio: prazo, preço, lugar e quem atende. Se faltar informação, marque [PREENCHA: ...].

## 7. Contraste

**ID:** `contraste-baixo` · **Peso:** 1

Dispara se o **menor contraste medido for estritamente inferior a 4.5:1**. Usa luminância relativa WCAG: canal sRGB dividido por 255; se <= 0.04045, divide por 12.92; senão, aplica ((canal + 0.055) / 1.055)^2.4. A luminância soma os canais com pesos 0.2126, 0.7152 e 0.0722. A razão é (luminância maior + 0.05) / (luminância menor + 0.05).

O fundo padrão começa branco. Regras cujo seletor é exatamente body, html ou :root podem substituí-lo, na ordem de leitura, com uma cor interpretável de background-color ou background. Para cada regra CSS com color, tenta o fundo da própria regra e, se não conseguir, usa o padrão. Ignora essa regra quando background contém gradient ou url(. Resolve variáveis globais definidas em body/html/:root (ou seu fallback).

No Tailwind, usa a primeira classe text-* reconhecida na paleta local: white, black e gray/slate/zinc/neutral nos tons 50–950. Procura fundo no próprio elemento e sobe pelos ancestrais; em cada nível tenta primeiro bg-* dessa paleta e depois um fundo CSS interpretável. Sem encontrar, usa o padrão.

**Medição:** pior par, razão com duas casas decimais, quantidade de pares e local. A decisão usa o valor sem arredondar. Sem nenhum par interpretável, não dispara e informa “não deu para medir”; isso não comprova contraste adequado.

**Por quê:** Texto claro sobre fundo claro dificulta a leitura, principalmente em telas pequenas.

**Correção:** Escureça o texto até atingir pelo menos 4.5:1 e confira de novo com o próprio checador.

## 8. Mesmo raio em tudo

**ID:** `mesmo-raio` · **Peso:** 1

Dispara quando há **pelo menos cinco ocorrências e um único valor normalizado**. Conta cada regra CSS com border-radius (inclusive estilos inline), após resolver variáveis, e cada classe Tailwind reconhecida por elemento. Uma regra que atinge vários elementos conta uma vez; CSS e classe podem contar separadamente.

No CSS, descarta qualquer valor contendo 50%, 9999, calc ou var(. Converte rem em px usando 16px e normaliza espaços; os demais valores são comparados como texto, sem converter unidades ou expandir abreviações. Assim, 8px e 8px 8px não são o mesmo valor para essa regra.

| Classe | Valor contado |
|---|---|
| rounded | 4px |
| rounded-sm | 2px |
| rounded-md | 6px |
| rounded-lg | 8px |
| rounded-xl | 12px |
| rounded-2xl | 16px |
| rounded-3xl | 24px |
| rounded-none | 0px |

rounded-full e outras classes fora dessa tabela não entram.

**Medição:** total de elementos/regras, valores e locais.

**Por quê:** Arredondar tudo do mesmo jeito deixa campos, cartões e painéis sem função visual própria.

**Correção:** Use escala com intenção: 2–4px em campos e tabelas, 8–12px em cartões, pílula só em etiqueta; ou cantos retos no estilo editorial.
