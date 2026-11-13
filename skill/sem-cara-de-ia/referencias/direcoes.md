# Cinco direções visuais

Escolha uma direção pelo negócio e pelo material que ele tem. Use a primeira fonte nos títulos e a segunda no corpo. Os cinco pares abaixo são do Google Fonts e têm licença aberta. A direção orienta a composição; trocar apenas a fonte não resolve uma página genérica.

Os contrastes abaixo foram calculados com `contraste()` de [cores.js](../scripts/lib/cores.js), com duas casas decimais. Todos os pares texto/fundo e destaque/fundo passam de 4.5:1. A cor de apoio serve para áreas decorativas; se receber texto, confira esse novo par. Em botões com fundo de destaque, use a cor do fundo principal como texto para manter a mesma razão calculada.

## 1. Artesanal editorial

- **Combina com:** marcenaria, cerâmica, ateliê, produtores locais e trabalhos que merecem ser vistos de perto.
- **Fontes:** Fraunces + Source Sans 3.
- **Paleta:** fundo `#faf6ed`; texto `#30251f`; destaque `#3f5438`; apoio `#d8c4a4`.
- **Contraste:** texto/fundo **13.81:1**; destaque/fundo **7.68:1**.
- **Raios:** 0px em divisórias e fotos; 2px em campos e botões; 10px em um bloco de informação complementar.
- **Topo:** título à esquerda, foto real do trabalho à direita, uma frase sobre material e serviço e um botão com o próximo passo. Identifique cidade e prazo somente quando forem dados confirmados.
- **Evite:** textura falsa por toda parte, letras decorativas no corpo e transformar cada serviço em um cartão igual.

## 2. Técnica e precisa

- **Combina com:** engenharia, manutenção especializada, ferramentas de trabalho e serviços que precisam explicar medidas ou etapas.
- **Fontes:** Space Grotesk + IBM Plex Sans.
- **Paleta:** fundo `#f5f7fa`; texto `#182330`; destaque `#1450a0`; apoio `#ccd7e4`.
- **Contraste:** texto/fundo **14.80:1**; destaque/fundo **7.29:1**.
- **Raios:** 0px em tabelas e diagramas; 4px em campos e botões; 8px em avisos.
- **Topo:** título alinhado à esquerda, descrição direta da tarefa e diagrama ou detalhe técnico ao lado. Um botão leva à etapa concreta seguinte; medidas e dados entram com unidades e contexto.
- **Evite:** números inventados, painéis decorativos que parecem funcionar e efeitos que atrapalham a leitura dos dados.

## 3. Clássica elegante

- **Combina com:** arquitetura, livrarias, hospedagens pequenas e serviços com portfólio que pede leitura calma.
- **Fontes:** Playfair Display + Lato.
- **Paleta:** fundo `#faf7f2`; texto `#28232b`; destaque `#78334b`; apoio `#d8cbd0`.
- **Contraste:** texto/fundo **14.39:1**; destaque/fundo **8.28:1**.
- **Raios:** 0px em fotos e seções; 2px em botões; 4px em campos.
- **Topo:** título com poucas palavras, texto curto e imagem ampla do trabalho, com espaço para respirar. Uma chamada principal clara e legenda útil para a imagem.
- **Evite:** dourado claro usado como texto, letras pequenas demais, excesso de itálico e adjetivos que substituem informações.

## 4. Acolhedora para serviço local

- **Combina com:** oficinas de bairro, cuidados com animais, aulas presenciais e pequenos serviços com atendimento próximo.
- **Fontes:** DM Serif Display + DM Sans.
- **Paleta:** fundo `#fff8ef`; texto `#342b24`; destaque `#95502c`; apoio `#ead7c2`.
- **Contraste:** texto/fundo **13.13:1**; destaque/fundo **5.76:1**.
- **Raios:** 4px em campos; 8px em botões; 12px em fotos e blocos de contato. Pílula apenas em etiqueta curta, se fizer sentido.
- **Topo:** diga o serviço e a região atendida, mostre uma foto real do local ou da equipe e ofereça uma ação de contato. Horários só entram quando confirmados.
- **Evite:** fotos que fingem ser da equipe, emojis em todos os títulos e botões concorrentes sem prioridade.

## 5. Ousada e tipográfica

- **Combina com:** estúdios criativos, eventos culturais, publicações e portfólios com títulos fortes e conteúdo visual próprio.
- **Fontes:** Archivo + Archivo Narrow.
- **Paleta:** fundo `#fff7e6`; texto `#171717`; destaque `#b72b19`; apoio `#eac85b`.
- **Contraste:** texto/fundo **16.82:1**; destaque/fundo **5.84:1**.
- **Raios:** 0px em imagens e blocos editoriais; 2px em botões; 4px em campos. Use cantos retos como escolha de composição, sem acrescentar arredondamentos só para mudar a nota.
- **Topo:** título grande alinhado à esquerda, com quebras intencionais; uma imagem ou palavra em destaque ocupa outro peso na composição. Use Archivo Narrow em textos curtos de apoio, com tamanho confortável.
- **Evite:** corpo todo condensado, caixa alta em parágrafos, títulos cortados no celular e animação constante.

## Reproduzir os cálculos

Na raiz do kit, rode:

```sh
node -e 'const {contraste}=require("./skill/sem-cara-de-ia/scripts/lib/cores"); const paletas=[["artesanal","#faf6ed","#30251f","#3f5438"],["tecnica","#f5f7fa","#182330","#1450a0"],["classica","#faf7f2","#28232b","#78334b"],["acolhedora","#fff8ef","#342b24","#95502c"],["ousada","#fff7e6","#171717","#b72b19"]]; for(const [nome,fundo,texto,destaque] of paletas) console.log(nome, "texto/fundo",contraste(texto,fundo).toFixed(2),"destaque/fundo",contraste(destaque,fundo).toFixed(2));'
```

Depois de aplicar a direção, rode o checador no HTML final e abra a página em celular e desktop. Os pares calculados aqui não cobrem fundos sobrepostos, fotos, transparências nem estados de interação. Se faltar informação do negócio, use `[PREENCHA: ...]`.
