# CSC WhatsApp - Teste FRONTEND-ONLY (GitHub Pages)

Este pacote faz chamadas **diretas** à WhatsApp Business API a partir do navegador (expondo o token). Use **apenas** para testes.
Pode falhar por **CORS**, dependendo do navegador/região.

## Como publicar
1. Crie um repo público no GitHub e suba todos os arquivos na raiz.
2. Ative **Settings → Pages → Deploy from a branch (main / root)**.
3. Abra a URL do Pages, preencha o número do cliente e clique **Enviar pela API**.

Se CORS bloquear, use o pacote com **backend** (Vercel) para produção.
