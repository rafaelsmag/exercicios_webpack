const produto = {
  nome: 'Caneta',
  preco: 1.25,
  desconto: 0.25,
}

function clone(obj) {
  return { ...obj }
}

const novoProduto = clone(produto)
novoProduto.nome = 'Lapis'

console.log(novoProduto)
console.log(produto)
