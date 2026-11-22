/* ============ CONFIGURAÇÃO ============ */
const CONFIG = {
  whatsapp: "5592999999999",   // número da lanchonete (DDI+DDD+número)
  fee: 6,                      // taxa de entrega
  freeFrom: 70,                // frete grátis a partir de
  pixKey: "SUA-CHAVE-PIX-AQUI",  // chave Pix cadastrada no PicPay (e-mail, +5592..., CPF ou aleatória)
  pixName: "FLASH LANCHES",      // nome do recebedor: MAIÚSCULAS, sem acento (máx. 25)
  pixCity: "MANAUS"             // cidade: MAIÚSCULAS, sem acento (máx. 15)
};

/* ============ CATÁLOGO ============ */
const CATS = [
  { id: "combos",  name: "Combos" },
  { id: "lanches", name: "Lanches" },
  { id: "pizzas",  name: "Pizzas" },
  { id: "acomp",   name: "Acompanhamentos" },
  { id: "bebidas", name: "Sucos e Bebidas" }
];
/* img = foto em /imagens (poster:true = cartaz exibido inteiro). Sem img, usa o emoji. */
const PRODUCTS = [
  { id:11, cat:"combos", poster:true, img:"imagens/combo-x-salada-4.jpg", name:"Super Combo X-Salada (4 Lanches + Refri 1,5L)", desc:"Ideal para dividir com a galera ou família. Acompanha 4 X-Saladas no pão macio com gergelim, hambúrguer suculento, queijo derretido, ovo na chapa, alface americana, tomate fresco e molho especial da casa, além de 1 refrigerante gelado de 1,5L.", price:20 },
  { id:12, cat:"combos", poster:true, img:"imagens/combo-x-salada-6.jpg", name:"Super Combo X-Salada (6 Lanches + Refri 1,5L)", desc:"Muito mais sabor para reunir todo mundo sem gastar muito. São 6 X-Saladas no pão com gergelim, carne suculenta, queijo derretido, ovo, alface fresquinha, tomate selecionado e molho especial cremoso, com 1 refrigerante de 1,5L bem gelado.", price:30 },
  { id:13, cat:"combos", poster:true, img:"imagens/combo-x-tudo-4.jpg", name:"Super Combo X-Tudo (4 Lanches + Refri 1,5L)", desc:"Para matar a fome de verdade! 4 X-Tudos completos com pão macio com gergelim, hambúrguer suculento, queijo derretido, ovo, bacon crocante, calabresa fatiada bem dourada, alface, tomate, mostarda e molho especial da casa, com 1 refrigerante de 1,5L.", price:40 },
  { id:14, cat:"combos", poster:true, img:"imagens/combo-x-tudo-6.jpg", name:"Super Combo X-Tudo (6 Lanches + Refri 1,5L)", desc:"O combo perfeito para a família toda ou para a resenha com os amigos. 6 X-Tudos super recheados com carne suculenta, queijo derretido, ovo, bacon crocante, calabresa dourada, alface, tomate, mostarda e molho especial cremoso, mais 1 refrigerante de 1,5L gelado.", price:60 },

  { id:21, cat:"lanches", emoji:"🍔", bg:"#FFD9A0", name:"X-Salada Especial", desc:"Pão macio com gergelim, hambúrguer suculento, queijo derretido, ovo, alface crocante, tomate fresco e molho especial da casa.", price:6 },
  { id:22, cat:"lanches", emoji:"🍔", bg:"#FFC9C4", name:"X-Tudo Completo", desc:"Pão macio com gergelim, hambúrguer suculento, queijo derretido, ovo, bacon crocante, calabresa dourada, alface, tomate, mostarda e molho especial da casa.", price:10 },

  { id:61, cat:"pizzas", img:"imagens/pizza-calabresa.jpg", name:"Pizza de Calabresa", desc:"Massa macia, muito queijo derretido, calabresa fatiada, cebola e azeitonas pretas.", price:30 },
  { id:62, cat:"pizzas", img:"imagens/pizza-catupiry.jpg", name:"Pizza de Catupiry", desc:"Mussarela derretida coberta com cremoso catupiry, azeitonas e orégano.", price:30 },
  { id:63, cat:"pizzas", img:"imagens/pizza-napolitana.jpg", name:"Pizza Napolitana", desc:"Mussarela, fatias de tomate fresco, parmesão ralado, azeitonas e orégano.", price:30 },
  { id:64, cat:"pizzas", img:"imagens/pizza-portuguesa.jpg", name:"Pizza Portuguesa", desc:"Presunto, ovos cozidos, cebola, ervilha, azeitonas e queijo derretido.", price:30 },
  { id:65, cat:"pizzas", img:"imagens/pizza-queijo.jpg", name:"Pizza de Queijo (Mussarela)", desc:"A clássica: mussarela generosa, fatias de tomate, azeitonas e orégano.", price:30 },

  { id:31, cat:"acomp", img:"imagens/batata-frita.jpg", name:"Batata Frita Tradicional (Palito)", desc:"Crocante por fora e macia por dentro, frita na hora e temperada no ponto certo. Porção.", price:7 },
  { id:32, cat:"acomp", img:"imagens/tiras-frango.jpg", name:"Tiras de Frango Empanadas", desc:"Filés de peito de frango suculentos com empanamento super crocante e dourado. Porção.", price:7 },
  { id:33, cat:"acomp", img:"imagens/dadinhos-tapioca.jpg", name:"Dadinhos de Tapioca com Queijo Coalho", desc:"Cubos crocantes por fora e cremosos por dentro, feitos com tapioca granulada e queijo coalho. Porção.", price:7 },

  { id:41, cat:"bebidas", img:"imagens/suco-cupuacu.jpg", name:"Suco de Cupuaçu", desc:"Cremoso e refrescante, com o sabor marcante e levemente ácido dessa fruta típica amazônica.", price:3 },
  { id:43, cat:"bebidas", img:"imagens/suco-acai.jpg", name:"Suco de Açaí", desc:"Encorpado e energético, preparado com a polpa pura do açaí para quem busca sabor intenso e autêntico.", price:3 },
  { id:44, cat:"bebidas", img:"imagens/suco-graviola.jpg", name:"Suco de Graviola", desc:"Suave, aveludado e muito refrescante, com o equilíbrio perfeito entre o doce e o cítrico.", price:3 },
  { id:45, cat:"bebidas", img:"imagens/suco-laranja.jpg", name:"Suco de Laranja", desc:"Clássico e natural, espremido para entregar frescor imediato e o sabor tradicional da fruta.", price:3 },
  { id:46, cat:"bebidas", img:"imagens/suco-maracuja.jpg", name:"Suco de Maracujá", desc:"Intenso, aromático e refrescante, ideal para equilibrar lanches mais suculentos.", price:3 },
  { id:47, cat:"bebidas", img:"imagens/suco-acerola.jpg", name:"Suco de Acerola", desc:"Leve, vibrante e rico em sabor cítrico, feito com frutas frescas para máxima refrescância.", price:3 },
  { id:51, cat:"bebidas", img:"imagens/coca-cola.jpg", name:"Coca-Cola Lata", desc:"O clássico refrigerante de cola, bem gelado para acompanhar o seu lanche. Lata 350 ml.", price:6 },
  { id:52, cat:"bebidas", img:"imagens/coca-zero.jpg", name:"Coca-Cola Zero Lata", desc:"Todo o sabor da Coca-Cola, sem açúcar. Gelada e refrescante. Lata 350 ml.", price:6 },
  { id:53, cat:"bebidas", img:"imagens/pepsi.jpg", name:"Pepsi Lata", desc:"Refrigerante de cola com sabor marcante e muito refrescante. Lata 350 ml.", price:6 },
  { id:54, cat:"bebidas", img:"imagens/fanta-laranja.jpg", name:"Fanta Laranja Lata", desc:"Refrigerante de laranja doce e borbulhante, gelado na hora. Lata 350 ml.", price:6 },
  { id:55, cat:"bebidas", img:"imagens/fanta-uva.jpg", name:"Fanta Uva Lata", desc:"Sabor intenso de uva, docinho e super gelado. Lata 350 ml.", price:6 },
  { id:56, cat:"bebidas", img:"imagens/guarana-antarctica.jpg", name:"Guaraná Antarctica Lata", desc:"O guaraná mais brasileiro, doce e borbulhante, bem gelado. Lata 350 ml.", price:6 }
];

/* ============ ESTADO E UTILITÁRIOS ============ */
const $ = s => document.querySelector(s);
const brl = n => n.toLocaleString("pt-BR", { style:"currency", currency:"BRL" });
let cart = {};
try { cart = JSON.parse(localStorage.getItem("flash-cart")) || {}; } catch (e) { cart = {}; }
const save = () => { try { localStorage.setItem("flash-cart", JSON.stringify(cart)); } catch (e) {} };
const lines = () => Object.keys(cart).map(id => ({ p: PRODUCTS.find(x => x.id == id), q: cart[id] })).filter(l => l.p);
function totals() {
  const sub = lines().reduce((s, l) => s + l.p.price * l.q, 0);
  const fee = sub === 0 || sub >= CONFIG.freeFrom ? 0 : CONFIG.fee;
  return { sub, fee, total: sub + fee, qty: lines().reduce((s, l) => s + l.q, 0) };
}
function toast(msg) { const t = $("#toast"); t.textContent = msg; t.classList.add("show"); setTimeout(() => t.classList.remove("show"), 1600); }

/* ============ RENDER: CATÁLOGO ============ */
function renderMenu() {
  $("#chips").innerHTML = CATS.map((c, i) => `<button class="chip ${i ? "" : "on"}" data-cat="${c.id}">${c.name}</button>`).join("");
  $("#menu").innerHTML = CATS.map(c => `
    <section id="sec-${c.id}"><h2>${c.name}</h2><div class="grid">
    ${PRODUCTS.filter(p => p.cat === c.id).map(p => `
      <article class="card${p.poster ? " combo" : ""}">
        <div class="art${p.poster ? " poster" : ""}" style="background:${p.bg || "#111"}">${p.img ? `<img src="${p.img}" alt="${p.name}" loading="lazy">` : `<span aria-hidden="true">${p.emoji}</span>`}</div>
        <div class="card-b"><h3>${p.name}</h3><p>${p.desc}</p>
          <div class="row"><span class="price">${brl(p.price)}</span>
          <button class="add" data-add="${p.id}">Adicionar ao carrinho</button></div></div>
      </article>`).join("")}
    </div></section>`).join("");
}

/* ============ RENDER: CARRINHO ============ */
function summaryHTML(t) {
  return `<div><span>Subtotal</span><span>${brl(t.sub)}</span></div>
    <div><span>Taxa de entrega</span>${t.fee ? `<span>${brl(t.fee)}</span>` : `<span class="free">Grátis</span>`}</div>
    <div class="tot"><span>Total</span><span>${brl(t.total)}</span></div>`;
}
function renderCart() {
  const t = totals(), ls = lines();
  $("#count").textContent = t.qty;
  $("#bar").classList.toggle("show", t.qty > 0);
  $("#barQty").textContent = t.qty + (t.qty === 1 ? " item" : " itens");
  $("#barTotal").textContent = brl(t.total);
  $("#items").innerHTML = ls.length ? ls.map(({ p, q }) => `
    <div class="item">
      <div class="em" style="background:${p.bg || "#111"}">${p.img ? `<img src="${p.img}" alt="">` : p.emoji}</div>
      <div class="nm">${p.name}<small>${brl(p.price)}</small><button class="rm" data-rm="${p.id}">Remover</button></div>
      <div class="qty"><button data-dec="${p.id}" aria-label="Diminuir">−</button><b>${q}</b><button data-inc="${p.id}" aria-label="Aumentar">+</button></div>
    </div>`).join("") : `<div class="empty">🍔<br>Seu carrinho está vazio.<br>Escolha um lanche no cardápio.</div>`;
  $("#sum").innerHTML = ls.length ? summaryHTML(t) : "";
  $("#goCheckout").disabled = !ls.length;
  save();
}
const setQty = (id, d) => { cart[id] = (cart[id] || 0) + d; if (cart[id] <= 0) delete cart[id]; renderCart(); };

/* Abre/fecha gaveta */
function cartOpen(open) {
  $("#drawer").classList.toggle("open", open);
  $("#overlay").classList.toggle("open", open);
  $("#drawer").setAttribute("aria-hidden", !open);
}

/* ============ EVENTOS GERAIS ============ */
document.addEventListener("click", e => {
  const d = e.target.closest("[data-add],[data-inc],[data-dec],[data-rm],[data-cat]");
  if (!d) return;
  if (d.dataset.add) { setQty(+d.dataset.add, 1); toast("Adicionado ao carrinho"); }
  else if (d.dataset.inc) setQty(+d.dataset.inc, 1);
  else if (d.dataset.dec) setQty(+d.dataset.dec, -1);
  else if (d.dataset.rm) { delete cart[d.dataset.rm]; renderCart(); }
  else if (d.dataset.cat) {
    document.querySelectorAll(".chip").forEach(c => c.classList.toggle("on", c === d));
    $("#sec-" + d.dataset.cat).scrollIntoView({ behavior: "smooth" });
  }
});
["#openCart", "#barBtn"].forEach(s => $(s).addEventListener("click", () => cartOpen(true)));
["#closeCart", "#overlay"].forEach(s => $(s).addEventListener("click", () => cartOpen(false)));
document.addEventListener("keydown", e => { if (e.key === "Escape") { cartOpen(false); closeModal(); } });

/* ============ CHECKOUT ============ */
function openCheckout() {
  if (!lines().length) return;
  cartOpen(false);
  $("#sum2").innerHTML = summaryHTML(totals());
  $("#stepForm").style.display = ""; $("#stepOk").style.display = "none";
  $("#modal").classList.add("open"); $("#modal").scrollTop = 0;
  updatePay(); showPix();
}
function closeModal() { $("#modal").classList.remove("open"); }
$("#goCheckout").addEventListener("click", openCheckout);
$("#closeModal").addEventListener("click", closeModal);

/* ===== PIX com valor e QR Code reais (padrão BR Code do Banco Central) ===== */
function crc16(s) {
  let c = 0xFFFF;
  for (let i = 0; i < s.length; i++) { c ^= s.charCodeAt(i) << 8; for (let k = 0; k < 8; k++) c = c & 0x8000 ? ((c << 1) ^ 0x1021) & 0xFFFF : (c << 1) & 0xFFFF; }
  return c.toString(16).toUpperCase().padStart(4, "0");
}
const tlv = (id, v) => id + String(v.length).padStart(2, "0") + v;
const ascii = s => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
function pixPayload(amount) {
  const acc = tlv("00", "BR.GOV.BCB.PIX") + tlv("01", CONFIG.pixKey);
  const p = tlv("00", "01") + tlv("26", acc) + tlv("52", "0000") + tlv("53", "986") + tlv("54", amount.toFixed(2)) +
    tlv("58", "BR") + tlv("59", ascii(CONFIG.pixName).slice(0, 25)) + tlv("60", ascii(CONFIG.pixCity).slice(0, 15)) + tlv("62", tlv("05", "***")) + "6304";
  return p + crc16(p);
}
let pixCode = "";
function showPix() {
  pixCode = pixPayload(totals().total);
  $("#pixCode").textContent = pixCode;
  const box = $("#qr"); box.innerHTML = "";
  if (typeof QRCode !== "undefined") new QRCode(box, { text: pixCode, width: 174, height: 174, correctLevel: QRCode.CorrectLevel.M });
}
$("#copyPix").addEventListener("click", async () => {
  try { await navigator.clipboard.writeText(pixCode); toast("Código PIX copiado!"); }
  catch (e) { const r = document.createRange(); r.selectNodeContents($("#pixCode")); getSelection().removeAllRanges(); getSelection().addRange(r); toast("Selecione e copie o código"); }
});

/* Alternância de método de pagamento */
const method = () => "pix"; // pagamento somente via PIX
function updatePay() {
  $("#payBtn").textContent = "Já paguei o PIX – enviar pedido";
  $("#err").textContent = "";
}

/* Máscaras */
const digits = v => v.replace(/\D/g, "");
$("#tel").addEventListener("input", e => { const v = digits(e.target.value).slice(0, 11);
  e.target.value = v.length > 6 ? `(${v.slice(0,2)}) ${v.slice(2, v.length - 4)}-${v.slice(-4)}` : v.length > 2 ? `(${v.slice(0,2)}) ${v.slice(2)}` : v; });

/* Envio: registra o pedido como "aguardando pagamento". O preparo só começa depois de
   conferir o PIX no app do PicPay . */
let lastOrder = null;
$("#form").addEventListener("submit", e => {
  e.preventDefault();
  const f = e.target; $("#err").textContent = "";
  if (!f.checkValidity()) { f.reportValidity(); return; }
  if (digits(f.tel.value).length < 10) { $("#err").textContent = "Informe um telefone com DDD."; return; }
  finalizeOrder(f);
});

function finalizeOrder(f) {
  const t = totals(), m = method();
  lastOrder = {
    num: "FL-" + Math.floor(1000 + Math.random() * 9000),
    items: lines().map(l => ({ name: l.p.name, q: l.q, sub: l.p.price * l.q })), t,
    pay: "PIX",
    nome: f.nome.value, tel: f.tel.value,
    end: `${f.rua.value}, ${f.num.value} – ${f.bairro.value}` + (f.ref.value ? ` (${f.ref.value})` : "")
  };
  const eta = new Date(Date.now() + 45 * 60000);
  $("#ordNum").textContent = "Pedido " + lastOrder.num;
  $("#okMsg").textContent = "Último passo: envie o pedido no WhatsApp junto com o comprovante do PIX.";
  $("#eta").textContent = `35 a 45 min (até ${eta.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })})`;
  $("#recap").innerHTML = lastOrder.items.map(i => `<div><span>${i.q}× ${i.name}</span><span>${brl(i.sub)}</span></div>`).join("") +
    `<div><span>Entrega</span><span>${t.fee ? brl(t.fee) : "Grátis"}</span></div>
     <div><b>Total (${lastOrder.pay})</b><b>${brl(t.total)}</b></div>
     <div style="margin-top:.6rem;color:var(--muted)"><span>${lastOrder.end}</span></div>`;
  cart = {}; renderCart();
  $("#stepForm").style.display = "none"; $("#stepOk").style.display = ""; $("#modal").scrollTop = 0;
}

/* Link que abre o pedido no painel da loja (painel.html). Os dados vão no # do link: não passam por servidor. */
const b64url = o => btoa(unescape(encodeURIComponent(JSON.stringify(o)))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
function panelLink(o) {
  const data = { n:o.num, c:o.nome, t:o.tel, e:o.end, i:o.items.map(i => [i.q, i.name, i.sub]), s:o.t.sub, f:o.t.fee, v:o.t.total, d:Date.now() };
  return new URL("painel.html", location.href).href + "#p=" + b64url(data);
}

/* Resumo para o WhatsApp da lanchonete */
$("#waBtn").addEventListener("click", () => {
  const o = lastOrder; if (!o) return;
  const txt = [`*Pedido ${o.num} – Flash Lanches*`, "",
    ...o.items.map(i => `${i.q}x ${i.name} – ${brl(i.sub)}`), "",
    `Subtotal: ${brl(o.t.sub)}`, `Entrega: ${o.t.fee ? brl(o.t.fee) : "Grátis"}`, `*Total: ${brl(o.t.total)}*`,
    `Pagamento: PIX – comprovante em anexo`, "",
    `Cliente: ${o.nome} – ${o.tel}`, `Endereço: ${o.end}`, "",
    `Painel da loja: ${panelLink(o)}`].join("\n");
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(txt)}`, "_blank", "noopener");
});
$("#newOrder").addEventListener("click", () => { $("#form").reset(); closeModal(); window.scrollTo({ top: 0, behavior: "smooth" }); });

/* Início */
renderMenu(); renderCart();
