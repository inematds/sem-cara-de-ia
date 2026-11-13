# Pesquisa conferida (12/11/2026) — fonte primária: API do GitHub (licença, estrelas, último push) + página oficial de instalação

Só isto pode entrar no `bibliotecas.md`. Nada além. Sem logos.

| Biblioteca | Repo | Licença (GitHub) | Site | Instalação (página oficial) | Liga no Claude Code |
|---|---|---|---|---|---|
| shadcn/ui | shadcn-ui/ui | MIT | https://ui.shadcn.com | `npx shadcn@latest init` · `npx shadcn@latest add [component]` | MCP oficial: `npx shadcn@latest mcp init --client claude` (docs/mcp) |
| Radix Primitives | radix-ui/primitives | MIT | https://radix-ui.com/primitives | `npm install radix-ui@latest` | — (base sem estilo, acessível) |
| Magic UI | magicuidesign/magicui | MIT | https://magicui.design | `npx shadcn@latest init` e `npx shadcn@latest add @magicui/globe` (registro do shadcn) | pelo MCP do shadcn |
| daisyUI | saadeghi/daisyui | MIT | https://daisyui.com | `npm i -D daisyui@latest` + no CSS `@plugin "daisyui";` (Tailwind) | — |
| Ark UI | chakra-ui/ark | MIT | https://ark-ui.com | `npm install @ark-ui/react` (também solid, vue, svelte) | README cita servidor MCP próprio (packages/mcp) |
| Headless UI | tailwindlabs/headlessui | MIT | https://headlessui.com | `npm install @headlessui/react@latest` (ou `@headlessui/vue@latest`) | — |
| HeroUI | heroui-inc/heroui | Apache-2.0 | https://heroui.com | `npm install @heroui/styles @heroui/react` | `claude mcp add heroui-react -- npx -y @heroui/react-mcp@latest`; skills: `npx skills add heroui-inc/heroui` |
| Mantine | mantinedev/mantine | MIT | https://mantine.dev | `npm install @mantine/core @mantine/hooks` | — |
| Flowbite | themesberg/flowbite | MIT | https://flowbite.com | `npm install flowbite` + no CSS `@plugin "flowbite/plugin";` | — |
| Motion Primitives | ibelick/motion-primitives | MIT | https://motion-primitives.com | `npm install motion` e `npx motion-primitives@latest add text-effect` | — |
| coss ui (antigo Origin UI) | cosscom/ui | MIT | https://coss.com | `npx shadcn@latest init @coss/style` · `npx shadcn@latest add @coss/ui` | skill: `npx skills add cosscom/ui` |
| React Bits | DavidHDev/react-bits | **MIT + Commons Clause** (pode usar dentro de site/app/produto; não pode revender os componentes) | https://reactbits.dev | `npx shadcn@latest add @react-bits/SplitText-TS-TW` | pelo MCP do shadcn |
| Animate UI | imskyleen/animate-ui | **MIT + Commons Clause** (mesma condição) | https://animate-ui.com | (registro shadcn; ver site) | — |
| Lucide (ícones de traço) | lucide-icons/lucide | ISC | https://lucide.dev | `npm install lucide-react` | — |
| Tabler Icons | tabler/tabler-icons | MIT | https://tabler.io/icons | `npm install @tabler/icons` | — |

Observações:
- Origin UI (origin-space/originui) hoje redireciona para cosscom/ui no GitHub.
- "Aberta" aqui = código no GitHub com licença declarada. Commons Clause não é licença aberta pela OSI: deixar o aviso.
- Estrelas (12/11/2026): shadcn/ui 128 mil · daisyUI 42,8 mil · React Bits 51,8 mil · Mantine 31,9 mil · HeroUI 31,2 mil · Headless UI 28,8 mil · Lucide 25,7 mil · Magic UI 23,2 mil · Tabler 22,6 mil · Radix 19,5 mil · coss ui 10,8 mil · Flowbite 9,4 mil · Motion Primitives 6,9 mil · Ark 5,5 mil · Animate UI 5 mil.
- Biblioteca NÃO tira a cara de IA sozinha: shadcn com o tema padrão é justamente uma das "caras de IA". O que tira é a direção visual (fonte com personalidade, cor própria, raios variados, layout que não é o hero centralizado).
