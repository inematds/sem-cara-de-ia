# Limites do ambiente

Registro local: o hub `~/projetos/wifi/LIMITES.md` fica fora das pastas com escrita permitida nesta sessão.

| data | tentativa | barreira | contorno | proposta para destravar | status |
|---|---|---|---|---|---|
| 2026-11-12 | Capturar a CLI em testes com spawnSync e pipes | Sandbox retorna EPERM e saída vazia | Redirecionar stdout/stderr a arquivos temporários | Permitir pipes de subprocessos no ambiente de testes | aceito |
