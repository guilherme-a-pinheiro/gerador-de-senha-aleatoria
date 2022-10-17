import geraSenha from './geradores'

const senhaGerada = document.querySelector('.resultado')
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkMaisculas = document.querySelector('.chk-maiusculas')
const chkMinusculas = document.querySelector('.chk-minusculos')
const chkNumeros = document.querySelector('.chk-numeros')
const chkSimbolos = document.querySelector('.chk-simbolos')
const btnGerarSenha = document.querySelector('.gerar-senha')

export default () => {
  btnGerarSenha.addEventListener('click', () => {
    senhaGerada.innerHTML = gera()
  })
}

function gera() {
  const senha = geraSenha(
    qtdCaracteres.value,
    chkMaisculas.checked,
    chkMinusculas.checked,
    chkNumeros.checked,
    chkSimbolos.checked,
  );
  return senha || 'Nada selecionado.'
}