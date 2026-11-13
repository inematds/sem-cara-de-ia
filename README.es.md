# sem-cara-de-ia

**🇧🇷 [Português](README.md) · 🇺🇸 [English](README.en.md) · 🇪🇸 [Español](README.es.md)**

[![sem-cara-de-ia](guia/assets/banner-es.jpg)](https://inematds.github.io/sem-cara-de-ia/guia/es/)

Tu sitio hecho con IA parece hecho con IA, y el cliente se da cuenta. La **prueba de la cara de IA** muestra qué corregir y cómo hacerlo.

## Qué es

Quienes hacen sitios con IA suelen recibir la misma página: fondo morado y azul, tres cajitas iguales, emojis en lugar de íconos y frases como «revoluciona tu negocio». El visitante ya vio eso mil veces y asocia tu negocio con una plantilla. La **prueba de la cara de IA** es un kit gratis que analiza tu página, busca esas señales, le da una nota de 0 a 10 y explica cómo corregir cada una. Se ejecuta en tu computadora, sin cuenta y sin enviar nada a ningún otro lugar. Incluye una skill para que Claude Code rehaga el diseño por ti y una lista verificada de bibliotecas abiertas.

La prueba mide señales de sitios genéricos; no descubre quién hizo el sitio, y una nota alta no garantiza que sea bueno. Funciona con Node.js 18 o posterior, sin dependencias ni API.

## 📖 Guía de uso

Guía completa (landing + paso a paso): **https://inematds.github.io/sem-cara-de-ia/guia/es/**

🎬 Video (en portugués): https://www.youtube.com/watch?v=lQ953BUQMjU · Short: https://youtube.com/shorts/Nwhl8Xt11us

## Úsalo en 2 minutos

Con Git y Node.js instalados, ejecuta:

```sh
git clone https://github.com/inematds/sem-cara-de-ia
cd sem-cara-de-ia
node checar.js exemplos/com-cara-de-ia --sem-cor
```

Salida real de ese comando:

*(La herramienta imprime el informe en portugués; esta es la salida real.)*

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

El código de salida es 0 para una nota >= 7, 1 para una nota por debajo de 7 y 2 para un error de uso o lectura. Por lo tanto, la salida 1 en este ejemplo es la esperada.

Cambia la ruta por la de tu archivo HTML o por una carpeta con index.html. También acepta `http://localhost:PORTA/` o `http://127.0.0.1:PORTA/`; se rechazan otras URL. Lee estilos inline, bloques style y archivos CSS locales. En una URL local, lee el CSS del mismo origen.

Para guardar una lista de correcciones u obtener datos en JSON:

```sh
node checar.js exemplos/com-cara-de-ia --md consertar.md --sem-cor
node checar.js exemplos/com-cara-de-ia --json
```

## Antes y después

Los ejemplos usan Marcenaria Veio Firme, un negocio ficticio. Los datos del servicio solo sirven para mostrar la revisión. Notas medidas al ejecutar los siguientes comandos:

| Ejemplo | Comando | Nota real |
|---|---|---|
| com-cara-de-ia | `node checar.js exemplos/com-cara-de-ia --sem-cor` | 0/10 |
| sem-cara | `node checar.js exemplos/sem-cara --sem-cor` | 10/10 |
| tailwind | `node checar.js exemplos/tailwind --sem-cor` | 0/10 |

El antes concentra las ocho señales. El después usa una dirección artesanal editorial, dos fuentes, colores propios, una invitación concreta y los servicios en una lista. El ejemplo Tailwind muestra que el script también reconoce clases utilitarias sin ejecutar el CDN.

<details>
<summary>Salida real del ejemplo sem-cara</summary>

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
<summary>Salida real del ejemplo tailwind</summary>

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

## Las 8 señales

La nota empieza en 10 y pierde el peso de cada señal activada una vez, sin importar la cantidad de ocurrencias. El resultado se redondea al múltiplo de 0,5 más cercano.

| Señal | Peso | Cuándo se activa, en resumen |
|---|---|---|
| Gradiente morado → azul | 1.5 | Gradiente CSS con tonos morados y azules, o paradas de Tailwind de esas familias. |
| Una sola fuente | 1.5 | Se declara una sola familia, perteneciente a la lista de fuentes neutras de la prueba. |
| Emoji como ícono | 1 | Dos o más emojis al inicio de elementos aptos para íconos o títulos. |
| Tres tarjetas iguales | 1.5 | Tres elementos hermanos con la misma etiqueta y clases, título, párrafo, sombra y radio aceptado. |
| Hero centrado con dos botones | 1.5 | Parte superior centrada con dos enlaces/botones genéricos en el mismo padre, sin una columna reconocida. |
| Frases cliché | 1 | Dos o más ocurrencias de la lista de expresiones vagas. |
| Contraste | 1 | Algún par de texto/fondo medido por debajo de 4.5:1. |
| El mismo radio en todo | 1 | Cinco o más reglas/clases de radio aceptadas, todas con un único valor normalizado. |

Consulta las [reglas exactas, los motivos y las correcciones](skill/sem-cara-de-ia/referencias/sinais.md). Las señales orientan una revisión; una elección visual puede tener una razón aunque active una regla.

## La skill para Claude Code

La skill incluye el verificador y guía a Claude Code para medir, elegir una dirección, revisar y volver a medir. Instálala desde una carpeta donde todavía no exista el clon:

```sh
mkdir -p ~/.claude/skills/
git clone https://github.com/inematds/sem-cara-de-ia && cp -r sem-cara-de-ia/skill/sem-cara-de-ia ~/.claude/skills/
```

Si ya clonaste el repositorio y estás en la raíz del kit, basta con copiarlo:

```sh
mkdir -p ~/.claude/skills/
cp -r skill/sem-cara-de-ia ~/.claude/skills/
```

En la sesión de Claude Code, pide: “Quita la cara de IA de mi sitio con la skill sem-cara-de-ia. El HTML está en [ruta].” La skill conserva el original en una copia o rama, mantiene las funciones y marca los datos faltantes con `[PREENCHA: ...]`.

Consulta las [instrucciones de la skill](skill/sem-cara-de-ia/SKILL.md) y las [cinco direcciones visuales](skill/sem-cara-de-ia/referencias/direcoes.md). La meta de la revisión es una nota >= 8 y ningún contraste medido por debajo de 4.5:1, con verificación en el navegador.

## Bibliotecas de UI

Consulta [bibliotecas.md](bibliotecas.md) para ver las instalaciones, licencias e integraciones registradas en la investigación. Una biblioteca no elige por ti la dirección del sitio. Después de instalar componentes y ajustar el diseño, vuelve a ejecutar la prueba.

## Lo que no detecta

- **Páginas montadas con JavaScript:** el script no ejecuta React, Vue ni otros códigos del navegador. Usa HTML estático o prerenderizado, por ejemplo `dist/index.html`. Un build con un div vacío sigue sin tener contenido que medir.
- **Imágenes:** no analiza píxeles, fotos, ilustraciones ni texto dentro de ellas.
- **CSS de CDN externa:** no descarga esos archivos. Lee los nombres declarados en enlaces de Google Fonts, pero no confirma que las fuentes se hayan cargado. Solo reconoce las clases de Tailwind previstas en el código.
- **El resultado completo en el navegador:** los selectores complejos, la cascada, los tamaños de pantalla y los estados de interacción requieren inspección visual. «No se pudo medir» el contraste no significa que esté aprobado.

Una nota alta no demuestra accesibilidad completa, calidad del contenido ni resultados para el negocio.

## El proceso, de principio a fin

1. **🧠 tú — indica el sitio y conserva el original.** Trabaja en una copia o, en un repositorio Git, usa `git switch -c revisao-visual`. Separa los datos confirmados, las fotos propias y el siguiente paso que debe dar la persona. Si el sitio depende de JavaScript, obtén HTML prerenderizado mediante el proceso del proyecto.
2. **⚙️ script — mide el antes.** Ejecuta `node checar.js caminho/do/site --md consertar.md --sem-cor`. Sustituye la ruta por la de tu HTML o carpeta. Guarda la nota y lee las mediciones; una nota baja produce la salida 1.
3. **🧠 tú · 🤖 Claude Code con la skill — elige una dirección.** En la sesión, pide: “Usa la skill sem-cara-de-ia en el sitio de [ruta], lee consertar.md y explica qué dirección visual combina con este negocio.” Elige una de las cinco direcciones; si no indicas ninguna, la skill elige y explica el motivo.
4. **🤖 Claude Code con la skill — revisa la copia.** Pide: “Aplica esa dirección al diseño y a los textos genéricos, conserva las funciones y marca los datos faltantes con [PREENCHA: ...].” El agente edita los archivos y usa `node ~/.claude/skills/sem-cara-de-ia/scripts/checar.js caminho/do/site --md consertar.md --sem-cor` para verificar la revisión.
5. **⚙️ script · 🤖 Claude Code con la skill — compara.** Repite el comando del paso anterior después de los ajustes, buscando una nota >= 8 y ningún contraste medido < 4.5:1. El agente muestra las notas antes/después y qué cambió. Si no hay HTML o no se puede medir el contraste, registra la limitación.
6. **🧠 tú — revisa la página real.** Abre el resultado en el navegador en un celular y una computadora; lee, navega y prueba los botones. Completa los datos pendientes. Ejecuta `node checar.js caminho/do/site --sem-cor` después de los últimos ajustes y considera la nota junto con esta revisión.

## Pruebas

En la raíz del kit:

```sh
node --test
```

La suite verifica las señales, los ejemplos, el cálculo de contraste y el comportamiento de la línea de comandos. No requiere instalar paquetes.

## Kits hermanos

- [site-inspirado](https://inematds.github.io/site-inspirado/guia/) — crea el sitio con estilo a partir de referencias.
- [site-que-vende](https://inematds.github.io/site-que-vende/guia/) — audita si el sitio atrae clientes.

## Licencia MIT

Código bajo la [licencia MIT](LICENSE). Las bibliotecas listadas tienen sus propias licencias.

INEMA.CLUB — https://inema.club
