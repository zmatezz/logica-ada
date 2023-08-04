const listaParceiros = [
  { parceirosId: "19660156627897", nome: "Fernanda Santos" },
  { parceirosId: "23998058019370", nome: "Rafael Souza" },
  { parceirosId: "92291338611", nome: "Maria Silva" },
  { parceirosId: "55443795656", nome: "Maria Souza" },
  { parceirosId: "77743761456", nome: "Ana Costa" },
  { parceirosId: "47202302326", nome: "Maria Ferreira" },
  { parceirosId: "58017232567", nome: "Sofia Costa" },
  { parceirosId: "16733009491247", nome: "Lucas Silva" },
  { parceirosId: "63351859919", nome: "Rafael Souza" },
  { parceirosId: "84297701780", nome: "Carlos Oliveira" },
];
/* objeto para armazenar os parceiros dividindo por pessoa fisica e pessoa juridica */
function agruparParceiros(lista) {
  const parceirosAgrupados = { pessoa_fisica: [], pessoa_juridica: [] };

  /* loop que olha cada parceirosId e ve se o parceiro tem 11 ou 14 caracteres, separando 11 pra pf e 14 pra pj */
  lista.forEach((parceiro) => {
    const parceiroId = parceiro.parceirosId;
    const nome = parceiro.nome;

    if (parceiroId.length === 11) {
      parceirosAgrupados.pessoa_fisica.push({
        parceirosId: parceiroId,
        nome: nome,
      });
    } else if (parceiroId.length === 14) {
      parceirosAgrupados.pessoa_juridica.push({
        parceirosId: parceiroId,
        nome: nome,
      });
    }
  });

  return parceirosAgrupados;
}

const parceirosAgrupados = agruparParceiros(listaParceiros);

console.log(parceirosAgrupados);
