# Flash Lanches – Delivery

Site de delivery para lanchonete, feito com HTML5, CSS3 e JavaScript puro (sem dependências).

## Funcionalidades
- Catálogo por categorias (Combos, Lanches, Pizzas, Acompanhamentos, Sucos e Bebidas)
- Carrinho lateral com subtotal, taxa de entrega e total em tempo real
- Pagamento adiantado obrigatório (somente PIX). Não há pagamento na entrega
- Dados de entrega, número do pedido, previsão e resumo via WhatsApp
- Layout responsivo, focado em celular, com modo escuro automático

## Como rodar
Abra o `index.html` no navegador. Não precisa de build nem de servidor.

## Configuração
No início do `script.js`, edite o objeto `CONFIG`:
- `whatsapp`: número da lanchonete (DDI + DDD + número, só dígitos)
- `pixKey`, `pixName`, `pixCity`: chave Pix do PicPay e dados do recebedor (o código e o QR Code são gerados com o valor do pedido)
- `fee` e `freeFrom`: taxa de entrega e valor para frete grátis

## Como o pagamento funciona (sem CNPJ)
- **PIX:** o cliente paga o código com o valor exato direto na sua conta PicPay e envia o comprovante no WhatsApp.
- O preparo só começa depois que você confirmar o pagamento no app do PicPay. A confirmação é manual.
- Com CNPJ/MEI, dá para integrar a API do PicPay Empresas e ter confirmação automática e cartão.

## Imagens
As fotos dos produtos ficam na pasta `imagens/` e são referenciadas no `script.js` (campo `img`).

## Publicar no GitHub Pages
1. Suba o projeto para um repositório no GitHub.
2. Em **Settings → Pages**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`.
3. O site fica disponível em `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

## Painel da loja (mensagens para o cliente)
- Ao enviar o pedido no WhatsApp, a mensagem leva um link **"Painel da loja"**.
- Ao tocar nele (no celular da lanchonete), o pedido abre em `painel.html` e fica salvo naquele aparelho.
- Os botões (Pagamento confirmado, Em preparo, Saiu para entrega, Entregue) abrem o WhatsApp com a mensagem pronta para o cliente. É só tocar em enviar.
- Use sempre o mesmo celular/navegador para ver o histórico: os pedidos ficam guardados no próprio aparelho.
