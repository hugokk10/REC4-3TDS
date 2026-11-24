const produto = "Tênis";
const preco = 199.90;
const quantidade = 2;
const compraConfirmada = true;

console.log(`Produto: ${produto} | Preço: R$ ${preco} | Quantidade: ${quantidade} | Compra confirmada: ${compraConfirmada}`);

if (compraConfirmada) {
    console.log("Sua compra foi confirmada!");
} else {
    console.log("Sua compra ainda não foi confirmada.");
}

const compra = [produto, preco, quantidade, compraConfirmada];

console.log(compra);
