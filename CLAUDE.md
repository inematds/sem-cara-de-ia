# sem-cara-de-ia

Kit gratuito do INEMA (o **teste da cara de IA**) que mede oito sinais de site genérico em HTML/CSS local, dá nota de 0 a 10 e mostra como corrigir. Não determina autoria. O script independente fica em `skill/sem-cara-de-ia/scripts/checar.js`; a raiz só encaminha a execução.

- Teste: `node --test`. Node.js >= 18, zero dependência, sem instalação de pacotes, sem API e sem acesso externo. Só URLs HTTP de localhost/127.0.0.1 são aceitas.
- Guia (GitHub Pages por Actions): `guia/index.html` (PT, fonte) + `guia/en/` + `guia/es/`; README em PT/EN/ES. Mudou o PT, traduza o MESMO trecho à mão nos dois (Edit); não rode o traduz-pagina-codex.py de novo: ele regrava EN/ES e desfaz banner por idioma, prompt traduzido e o nome "prueba de la cara de IA".
- Autor dos commits: `inematds <inematds@gmail.com>`.
- Preserve `PESQUISA-BIBLIOTECAS.md`: é a fonte conferida do `bibliotecas.md`.

## Self-learning

Quando corrigido, gravar a lição em uma linha no topo de `LESSONS.md`.

## Lessons

Leia [LESSONS.md](LESSONS.md) antes de alterar regras já corrigidas.
