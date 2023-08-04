const avaliacoes = [
  { nota: 1, qtd_cliente: 2 },
  { nota: 2, qtd_cliente: 15 },
  { nota: 3, qtd_cliente: 18 },
  { nota: 4, qtd_cliente: 25 },
  { nota: 5, qtd_cliente: 40 }
];

let todos_clientes = 0;
let todas_avaliacoes = 0;

avaliacoes.forEach(avaliacao => {
  todos_clientes += avaliacao.qtd_cliente;
  todas_avaliacoes += avaliacao.nota * avaliacao.qtd_cliente;
});

const notaMedia = todas_avaliacoes / todos_clientes;

console.log(notaMedia);
