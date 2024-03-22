//questão 1

/*let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(SOMA);
//r = 91

//questao 2
function verificaFibonacci(numero) {
    let a = 0;
    let b = 1;
    let soma;

    // Casos base
    if (numero === a || numero === b) {
        return true;
    }

    // Calcula a sequência de Fibonacci até ultrapassar o número informado
    while (b <= numero) {
        soma = a + b;
        a = b;
        b = soma;

        // Se encontrar o número na sequência, retorna verdadeiro
        if (b === numero) {
            return true;
        }
    }

    // Se o número não foi encontrado na sequência
    return false;
}

// Teste do programa
const numeroTeste = 40; // Número a ser verificado
if (verificaFibonacci(numeroTeste)) {
    console.log(`${numeroTeste} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numeroTeste} não pertence à sequência de Fibonacci.`);
}



//questao 5
function reverseString(str) {
  // Passo 1. Crie uma string vazia que vai receber a nova string criada
  var newString = "";

 
  for (var i = str.length - 1; i >= 0; i--) { 
      newString += str[i]; // ou newString = newString + str[i];
  }
  
  return newString; // "olleh"
}

reverseString('hello');
console.log(reverseString('carol'));
*/