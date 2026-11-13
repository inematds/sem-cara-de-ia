---
name: sem-cara-de-ia
description: 'Mede sinais de site genérico e orienta uma revisão visual. Use para “tira a cara de IA do meu site”, “teste da cara de IA”, “meu site parece feito por IA” e “redesenha sem cara de IA”.'
---

# Teste da cara de IA

Conteúdo aberto e gratuito do INEMA.CLUB. O teste mede sinais de site genérico; não determina quem criou a página. Requer apenas Node.js >= 18. Esta pasta leva todo o código necessário.

## Instalar

```sh
git clone https://github.com/inematds/sem-cara-de-ia && cp -r sem-cara-de-ia/skill/sem-cara-de-ia ~/.claude/skills/
```

Se `~/.claude/skills/` não existir, crie com `mkdir -p ~/.claude/skills/` antes de copiar.

## Passos

1. Preserve o original: trabalhe numa cópia ou num branch. Rode no HTML estático ou pré-renderizado do build:
   ```sh
   node <pasta-da-skill>/scripts/checar.js <site> --md consertar.md
   ```
   Substitua os termos entre `< >` por caminhos reais. Pode usar pasta (lê `index.html`), arquivo ou `http://localhost:PORTA/`. Saída 1 significa nota baixa, não falha de execução; saída 2 é erro de entrada/leitura. O checador não instala nada e não busca CSS externo.
2. Mostre à pessoa a nota, as medições e os sinais que dispararam. Consulte [as regras](referencias/sinais.md) se precisar explicar. Uma nota alta não garante um projeto bom nem comprova autoria humana.
3. Escolha UMA direção de [direcoes.md](referencias/direcoes.md). A pessoa pode escolher; se não disser, escolha pela natureza do negócio e explique por quê. Não misture as cinco direções.
4. Reescreva só o visual e os textos genéricos, preservando funções, conteúdo útil e fatos. Não invente preço, prazo, cidade, clientes ou depoimentos: onde faltar, deixe `[PREENCHA: ...]`. Bibliotecas não substituem direção visual. Não instale nem publique nada como efeito colateral desta revisão.
5. Rode de novo até nota >= 8 e nenhum contraste medido < 4.5:1. Confira também a página no navegador em celular e desktop. Se a página não contém HTML pronto, o teste não mede o resultado do JavaScript: obtenha HTML pré-renderizado antes de afirmar sucesso. Se contraste não pôde ser medido, declare a lacuna e confira os pares reais; não trate ausência de medida como aprovação. Se houver bloqueio real, explique o que falta em vez de fabricar uma nota.
6. Mostre antes/depois: notas, sinais resolvidos, o que mudou, fatos a preencher e qualquer limitação que permaneceu.

O script não lê pixels de imagens, não executa JavaScript e não carrega CSS de CDN. Seletores complexos, cascata, fontes realmente renderizadas e estados responsivos exigem conferência no navegador. CSS local é lido; links Google Fonts são lidos como nomes declarados, sem baixar fontes.
