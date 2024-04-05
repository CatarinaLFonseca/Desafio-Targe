/*5) Escreva um programa que inverta os caracteres de um string.


IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse; */

const string = 'Catarina Lopes da Fonseca'

function reverseString(string) {
    let resultado = ''
    const tamanho = string.length - 1
    for(let i = tamanho; i >= 0; i--) {
        resultado += string[i]
    }
    return resultado
}

console.log(reverseString(string))