# Bibliotecas de UI

Biblioteca não tira a cara de IA sozinha. **shadcn com tema padrão é uma das caras de IA.** O que tira é a direção visual: fontes, cores, raios e composição escolhidos para o negócio. Rode o teste depois de instalar.

Esta lista usa somente os dados de [PESQUISA-BIBLIOTECAS.md](PESQUISA-BIBLIOTECAS.md). Os comandos são para o site que você está construindo; o checador deste kit não precisa instalar pacotes. “—” indica que a pesquisa não registrou uma integração.

## Abertas (MIT, Apache-2.0)

| Nome | Para que serve | Licença | Site oficial | Repo GitHub | Instalação | Como liga no Claude Code |
|---|---|---|---|---|---|---|
| shadcn/ui | Instala componentes de UI pelo CLI shadcn. | MIT | [Site](https://ui.shadcn.com) | [shadcn-ui/ui](https://github.com/shadcn-ui/ui) | `npx shadcn@latest init` · `npx shadcn@latest add [component]` | MCP oficial: `npx shadcn@latest mcp init --client claude` (docs/mcp) |
| Radix Primitives | Oferece uma base acessível de componentes sem estilo. | MIT | [Site](https://radix-ui.com/primitives) | [radix-ui/primitives](https://github.com/radix-ui/primitives) | `npm install radix-ui@latest` | — (base sem estilo, acessível) |
| Magic UI | Adiciona componentes, como globe, pelo registro do shadcn. | MIT | [Site](https://magicui.design) | [magicuidesign/magicui](https://github.com/magicuidesign/magicui) | `npx shadcn@latest init` e `npx shadcn@latest add @magicui/globe` (registro do shadcn) | pelo MCP do shadcn |
| daisyUI | Oferece UI com integração por plugin no CSS do Tailwind. | MIT | [Site](https://daisyui.com) | [saadeghi/daisyui](https://github.com/saadeghi/daisyui) | `npm i -D daisyui@latest` + no CSS `@plugin "daisyui";` (Tailwind) | — |
| Ark UI | Oferece componentes para React, Solid, Vue e Svelte. | MIT | [Site](https://ark-ui.com) | [chakra-ui/ark](https://github.com/chakra-ui/ark) | `npm install @ark-ui/react` (também solid, vue, svelte) | README cita servidor MCP próprio (packages/mcp) |
| Headless UI | Oferece componentes para React ou Vue. | MIT | [Site](https://headlessui.com) | [tailwindlabs/headlessui](https://github.com/tailwindlabs/headlessui) | `npm install @headlessui/react@latest` (ou `@headlessui/vue@latest`) | — |
| HeroUI | Oferece componentes React e um pacote de estilos. | Apache-2.0 | [Site](https://heroui.com) | [heroui-inc/heroui](https://github.com/heroui-inc/heroui) | `npm install @heroui/styles @heroui/react` | `claude mcp add heroui-react -- npx -y @heroui/react-mcp@latest`; skills: `npx skills add heroui-inc/heroui` |
| Mantine | Oferece componentes e hooks nos pacotes core e hooks. | MIT | [Site](https://mantine.dev) | [mantinedev/mantine](https://github.com/mantinedev/mantine) | `npm install @mantine/core @mantine/hooks` | — |
| Flowbite | Oferece UI com integração por plugin no CSS. | MIT | [Site](https://flowbite.com) | [themesberg/flowbite](https://github.com/themesberg/flowbite) | `npm install flowbite` + no CSS `@plugin "flowbite/plugin";` | — |
| Motion Primitives | Adiciona componentes como text-effect, com Motion. | MIT | [Site](https://motion-primitives.com) | [ibelick/motion-primitives](https://github.com/ibelick/motion-primitives) | `npm install motion` e `npx motion-primitives@latest add text-effect` | — |
| coss ui (antigo Origin UI) | Adiciona estilo e UI pelo registro do shadcn. | MIT | [Site](https://coss.com) | [cosscom/ui](https://github.com/cosscom/ui) | `npx shadcn@latest init @coss/style` · `npx shadcn@latest add @coss/ui` | skill: `npx skills add cosscom/ui` |

Origin UI (origin-space/originui) redireciona para cosscom/ui no GitHub. Para Ark UI, a pesquisa registra o MCP em packages/mcp, mas não traz comando de configuração.

## Código visível, mas NÃO aberta (Commons Clause)

React Bits usa **MIT + Commons Clause**. Pode usar dentro do seu site/app/produto; não pode revender os componentes. Commons Clause não é licença aberta pela OSI.

| Nome | Para que serve | Licença | Site oficial | Repo GitHub | Instalação | Como liga no Claude Code |
|---|---|---|---|---|---|---|
| React Bits | Adiciona componentes como SplitText pelo registro do shadcn. | **MIT + Commons Clause** (pode usar dentro de site/app/produto; não pode revender os componentes) | [Site](https://reactbits.dev) | [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) | `npx shadcn@latest add @react-bits/SplitText-TS-TW` | pelo MCP do shadcn |

## Ícones de traço

| Nome | Para que serve | Licença | Site oficial | Repo GitHub | Instalação | Como liga no Claude Code |
|---|---|---|---|---|---|---|
| Lucide (ícones de traço) | Oferece ícones de traço, com pacote para React. | ISC | [Site](https://lucide.dev) | [lucide-icons/lucide](https://github.com/lucide-icons/lucide) | `npm install lucide-react` | — |
| Tabler Icons | Oferece ícones de traço. | MIT | [Site](https://tabler.io/icons) | [tabler/tabler-icons](https://github.com/tabler/tabler-icons) | `npm install @tabler/icons` | — |

Conferido em 12/11/2026 no GitHub de cada projeto e na página oficial de instalação.
