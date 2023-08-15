class Turma {
  constructor(codigo, maxAlunos) {
      this.codigo = codigo;
      this.maxAlunos = maxAlunos;
      this.alunos = [];
  }
}

class Aluno {
  constructor(nome, sobrenome, email, turma, nascimento, notas, classificacao, ativo = true) {
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.email = email;
      this.turma = turma;
      this.nascimento = nascimento;
      this.notas = notas;
      this.ativo = ativo;
      this.classificacao = classificacao;
      this.media = this.calcularMedia();
  }

  calcularMedia() {
      if (this.notas.length === 0) return 0;
      const sum = this.notas.reduce((total, nota) => total + nota, 0);
      return sum / this.notas.length;
  }
}

const escola = {
  turmas: [],
  alunos: [],
 adicionarTurma: function(codigo, maxAlunos) {
  if (this.turmas.length >= 10) {
      console.log("Limite máximo de turmas cadastradas atingido.");
      return;
  }

  if (codigo > 10) {
      console.log("O código da turma não pode ser maior que 10.");
      return;
  }

  if (this.turmas.some(turma => turma.codigo === codigo)) {
      console.log("Turma já existe.");
      return;
  }

  const novaTurma = new Turma(codigo, maxAlunos);
  this.turmas.push(novaTurma);
},
  adicionarAluno: function(nome, sobrenome, email, turma, nascimento, notas, classificacao, ativo = true) {
      if (this.alunos.some(aluno => aluno.email === email)) {
          console.log("Aluno já cadastrado.");
          return;
      }

      if (this.alunos.some(aluno => aluno.classificacao === classificacao)) {
          console.log(`Já existe um aluno com classificação ${classificacao}.`);
          return;
      }
  
      if (notas.length > 5) {
          console.log("Número máximo de notas excedido.");
          return;
      }

      const turmaEncontrada = this.turmas.find(turmaObj => turmaObj.codigo === turma);
  if (!turmaEncontrada) {
      console.log("Turma não encontrada.");
      return;
  }

  

  const alunosTurma = turmaEncontrada.alunos.map(email => this.alunos.find(aluno => aluno.email === email));
  if (alunosTurma.some(aluno => (aluno.classificacao === 'A' || aluno.classificacao === 'D') && (classificacao === 'B' || classificacao === 'C')) ||
      alunosTurma.some(aluno => (aluno.classificacao === 'B' || aluno.classificacao === 'C') && (classificacao === 'A' || classificacao === 'D'))) {
      console.log(`Não é permitido adicionar um aluno com classificação ${classificacao} na mesma turma com alunos de classificação A, B, C ou D.`);
      return;
  }
  
      const dataNascimento = new Date(nascimento);
      const hoje = new Date();
      const idade = hoje.getFullYear() - dataNascimento.getFullYear();
  
      if (idade < 16) {
          console.log("Aluno menor de 16 anos. Não é permitido cadastrar.");
          return;
      }

      nome = nome.trim();

      nome = nome.charAt(0).toUpperCase() + nome.slice(1);
  
  },
  
  

  atualizarAluno: function(email, novoNome, novoSobrenome, novaTurma, novoNascimento, novasNotas, novoStatus) {
      const aluno = this.alunos.find(aluno => aluno.email === email);
      if (aluno) {
          if (novaTurma) {
              const novaDataNascimento = new Date(novoNascimento);
              const hoje = new Date();
              const idade = hoje.getFullYear() - novaDataNascimento.getFullYear();
  
              if (idade < 16) {
                  console.log("Aluno menor de 16 anos. Não é permitido atualizar para essa turma.");
                  return;
              }
          }

          novoNome = novoNome.trim();

          novoNome = novoNome.charAt(0).toUpperCase() + novoNome.slice(1);
  
      } else {
          console.log("Aluno não encontrado.");
      }
  },
  
  
  removerAluno: function(email) {
      const alunoIndex = this.alunos.findIndex(aluno => aluno.email === email);
      if (alunoIndex !== -1) {
          const alunoRemovido = this.alunos.splice(alunoIndex, 1)[0];
          const turmaDoAluno = this.turmas.find(turma => turma.codigo === alunoRemovido.turma);
          if (turmaDoAluno) {
              turmaDoAluno.alunos = turmaDoAluno.alunos.filter(alunoEmail => alunoEmail !== email);
          }
          console.log(`Aluno ${alunoRemovido.nome} foi de base.`);
      } else {
          console.log("Aluno não encontrado.");
      }
  },

  atualizarAluno: function(email, novoNome, novoSobrenome, novaTurma, novoNascimento, novasNotas, novoStatus) {
      const aluno = this.alunos.find(aluno => aluno.email === email);
      if (aluno) {
          if (novoNome) aluno.nome = novoNome;
          if (novoSobrenome) aluno.sobrenome = novoSobrenome;
          if (novaTurma) {
              const turmaAtual = this.turmas.find(turma => turma.codigo === aluno.turma);
              const novaTurmaEncontrada = this.turmas.find(turma => turma.codigo === novaTurma);
              if (turmaAtual && novaTurmaEncontrada) {
                  turmaAtual.alunos = turmaAtual.alunos.filter(alunoEmail => alunoEmail !== email);
                  novaTurmaEncontrada.alunos.push(email);
                  aluno.turma = novaTurma;
              }
          }
          if (novoNascimento) aluno.nascimento = novoNascimento;
          if (novasNotas) aluno.notas = novasNotas;
          if (novoStatus !== undefined) aluno.ativo = novoStatus;
          aluno.media = aluno.calcularMedia();
          console.log(`Informações do aluno ${aluno.nome} atualizadas.`);
      } else {
          console.log("Aluno não encontrado.");
      }
  },

  buscarAluno: function(email) {
      const alunoEncontrado = this.alunos.find(aluno => aluno.email === email);
      if (alunoEncontrado) {
          console.log("Informações do aluno:");
          console.log(`Nome: ${alunoEncontrado.nome} ${alunoEncontrado.sobrenome}`);
          console.log(`Email: ${alunoEncontrado.email}`);
          console.log(`Turma: ${alunoEncontrado.turma}`);
          console.log(`Nascimento: ${alunoEncontrado.nascimento}`);
          console.log(`Notas: ${alunoEncontrado.notas}`);
          console.log(`Ativo: ${alunoEncontrado.ativo}`);
          console.log(`Média: ${alunoEncontrado.media}`);
      } else {
          console.log("Aluno não encontrado.");
      }
  },

  retornarListaAlunos: function() {
      if (this.alunos.length > 0) {
          console.log("Lista de alunos:");
          this.alunos.forEach(aluno => {
              console.log(`Nome: ${aluno.nome} ${aluno.sobrenome}`);
              console.log(`Email: ${aluno.email}`);
              console.log(`Turma: ${aluno.turma}`);
              console.log(`Nascimento: ${aluno.nascimento}`);
              console.log(`Notas: ${aluno.notas}`);
              console.log(`Ativo: ${aluno.ativo}`);
              console.log(`Média: ${aluno.media}`);
              console.log("--------------------");
          });
      } else {
          console.log("Nenhum aluno cadastrado.");
      }
  },

  retornarQuantidadeTurmas: function() {
      console.log(`Quantidade de turmas na escola: ${this.turmas.length}`);
  },

  retornarListaAlunosAtivos: function() {
      const alunosAtivos = this.alunos.filter(aluno => aluno.ativo);
      if (alunosAtivos.length > 0) {
          console.log("Lista de alunos ativos:");
          alunosAtivos.forEach(aluno => {
              console.log(`Nome: ${aluno.nome} ${aluno.sobrenome}`);
              console.log(`Email: ${aluno.email}`);
              console.log(`Turma: ${aluno.turma}`);
              console.log(`Nascimento: ${aluno.nascimento}`);
              console.log(`Notas: ${aluno.notas}`);
              console.log(`Ativo: ${aluno.ativo}`);
              console.log(`Média: ${aluno.media}`);
              console.log("--------------------");
          });
      } else {
          console.log("Nenhum aluno ativo cadastrado.");
      }
  },

  retornarListaAlunosInativos: function() {
      const alunosInativos = this.alunos.filter(aluno => !aluno.ativo);
      if (alunosInativos.length > 0) {
          console.log("Lista de alunos inativos:");
          alunosInativos.forEach(aluno => {
              console.log(`Nome: ${aluno.nome} ${aluno.sobrenome}`);
              console.log(`Email: ${aluno.email}`);
              console.log(`Turma: ${aluno.turma}`);
              console.log(`Nascimento: ${aluno.nascimento}`);
              console.log(`Notas: ${aluno.notas}`);
              console.log(`Ativo: ${aluno.ativo}`);
              console.log(`Média: ${aluno.media}`);
              console.log("--------------------");
          });
      } else {
          console.log("Nenhum aluno inativo cadastrado.");
      }
  },

  retornarAlunosComMediaEsperada: function() {
      const alunosComMediaEsperada = this.alunos.filter(aluno => aluno.media >= 6);
      if (alunosComMediaEsperada.length > 0) {
          console.log("Lista de alunos com média esperada:");
          alunosComMediaEsperada.forEach(aluno => {
              console.log(`Nome: ${aluno.nome} ${aluno.sobrenome}`);
              console.log(`Email: ${aluno.email}`);
              console.log(`Turma: ${aluno.turma}`);
              console.log(`Nascimento: ${aluno.nascimento}`);
              console.log(`Notas: ${aluno.notas}`);
              console.log(`Ativo: ${aluno.ativo}`);
              console.log(`Média: ${aluno.media}`);
              console.log("--------------------");
          });
      } else {
          console.log("Nenhum aluno com média esperada cadastrado.");
      }
  },

  gerarRelatorioCompleto: function() {
      const totalAlunos = this.alunos.length;
      const totalTurmas = this.turmas.length;

      const alunosComMediaEsperada = this.alunos.filter(aluno => aluno.media >= 6);
      const alunosAbaixoMedia = this.alunos.filter(aluno => aluno.media < 6);

      console.log("Relatório completo:");
      console.log(`Quantidade de alunos: ${totalAlunos}`);
      console.log(`Quantidade de turmas: ${totalTurmas}`);

      console.log("Alunos com média esperada:");
      alunosComMediaEsperada.forEach(aluno => {
          console.log(`Nome: ${aluno.nome} ${aluno.sobrenome}`);
          console.log(`Email: ${aluno.email}`);
          console.log(`Média: ${aluno.media}`);
          console.log("--------------------");
      });

      console.log("Alunos abaixo da média esperada:");
      alunosAbaixoMedia.forEach(aluno => {
          console.log(`Nome: ${aluno.nome} ${aluno.sobrenome}`);
          console.log(`Email: ${aluno.email}`);
          console.log(`Média: ${aluno.media}`);
          console.log("--------------------");
      });
  },



};