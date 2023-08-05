let alunos = [];

const MENSAGEM_PREENCHA_CAMPOS = "Por favor, preencha todos os campos.";
const MENSAGEM_NOTAS_INVALIDAS =
  "Por favor, insira notas válidas (entre 0 e 10).";

const validarNotas = (notas) => {
  const notasArray = notas.split(",").map(Number);

  for (const nota of notasArray) {
    if (isNaN(nota) || nota < 0 || nota > 10) {
      return false;
    }
  }

  return notasArray;
};

const obterAluno = () => {
  const { value: nome } = document.getElementById("nome");
  const { value: turma } = document.getElementById("turma");
  const { value: notas } = document.getElementById("nota");

  if (!nome || !turma || !notas) {
    alert(MENSAGEM_PREENCHA_CAMPOS);
    esconderImagemMole();
    return;
  }

  const notasValidas = validarNotas(notas);

  if (notasValidas) {
    const alunoInfo = {
      nome,
      turma,
      notas: notasValidas,
    };

    alunos.push(alunoInfo);
    mostrarImagemMole();
  } else {
    alert(MENSAGEM_NOTAS_INVALIDAS);
    esconderImagemMole();
    return;
  }

  limparCampos();
};

const mandarNotas = () => {
  if (alunos.length === 0) {
    console.table(alunos);
  }
};

const limparCampos = () => {
  document.getElementById("nome").value = "";
  document.getElementById("turma").value = "";
  document.getElementById("nota").value = "";
};

const adicionarAluno = () => {
  obterAluno();
  mandarNotas();
};

const mostrarImagemMole = () => {
  const imgMole = document.querySelector(".img-mole");
  imgMole.style.display = "block";
};

const esconderImagemMole = () => {
  const imgMole = document.querySelector(".img-mole");
  imgMole.style.display = "none";
};

console.log(alunos);