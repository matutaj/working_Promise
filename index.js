/*
    0 obter um Usuario;
    1 Obter o numero de telefone de um usuario a partir de seu Id
    2 Obter o endereco do usuario pelo Id
*/

function obterUsuario() {
  // Quando algum problema acontecer -> reject
  // Quando tudo estiver certo -> resolve
  return new Promise(function resolverPromise(resolve, resject) {
    setTimeout(() => {
      return resolve({
        id: 1,
        nome: "Matuta Jorge Jr.",
        dataNascimente: new Date(),
      });
    }, 1000);
  });
}
function obterTelefone(idUsuario) {
  return new Promise(function resolverPromise(resolve, reject) {
    setTimeout(() => {
      return {
        numero: "89192983",
        ddd: 873,
      };
    }, 2000);
  });
}

function obterEnderco(idUsuario) {
  return new Promise(function resolverPromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        rua: " Estalagem",
        numero: 6,
      });
    }, 2000);
  });
}

const usuarioPromise = obterUsuario();
//Para Manipular o sucesso usamos a função .then
// Para Manipular Erros, usamos o .catch
usuarioPromise
  .then(function (usuario) {
    return obterTelefone(usuario.id).then(function resolverTelefone(result) {
      return {
        usuario: {
          nome: usuario.nome,
          id: usuario.id,
        },
        telefone: result,
      };
    });
  })
  .then(function (resultado) {
    console.log("resultado", resultado);
  })
  .catch(function (error) {
    console.error("Deu Ruim", error);
  });
