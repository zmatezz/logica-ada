const reciboDeVenda = 'régua/valor3=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;estojo/valor8=cupom0;cola/valor4=cupom0;cola/valor4=cupom0;mochila/valor50=cupom10;lápis/valor0.5=cupom0;cola/valor4=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;tesoura/valor5=cupom0;caneta/valor1=cupom0;cola/valor4=cupom0;estojo/valor8=cupom0;borracha/valor2=cupom0;caderno/valor15=cupom5;lápis/valor0.5=cupom0;lápis/valor0.5=cupom0;tesoura/valor5=cupom0;';

// divide a string em cada venda individual e armazena elas em uma array
const vendasIndividuais = reciboDeVenda.split(';');

// cria um objeto Map e armazena na variavel "produtosMap"
const produtosMap = new Map();

// faz um loop que percorre o array vendasIndividuais para fazer as operaçes
vendasIndividuais.forEach((venda) => {
  const [produtoValor, cupom] = venda.split('=cupom');
  const [produto, valor] = produtoValor.split('/valor');
  const quantidade = 1;
  const valorTotal = parseFloat(valor) * quantidade;
  const valorTotalDesconto = cupom === '0' ? 0 : parseFloat(cupom);

  // percorre cada uma das vendas e injeta as informações no "produtosMap"
  if (!isNaN(valorTotalDesconto)) {
    if (produtosMap.has(produto)) {
      const produtoExistente = produtosMap.get(produto);
      produtoExistente.quantidade += quantidade;
      produtoExistente.valorTotal += valorTotal;
      produtoExistente.valorTotalDesconto += valorTotalDesconto;
    } else {
      produtosMap.set(produto, {
        produto,
        valor: parseFloat(valor),
        cupom: parseFloat(cupom),
        quantidade,
        valorTotal,
        valorTotalDesconto,
      });
    }
  }
});

// faz a lista de objetos com as informações formatadas
const listaDeObjetos = Array.from(produtosMap.values());

console.log(listaDeObjetos);
