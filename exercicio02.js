function fibonacci(number) {
    let atual = 0;
    let prox = 1;
    while (atual <= number) {
        if (atual === number) {
            return true;
        }
        let temp = prox;
        prox = atual + prox;
        atual = temp;
    }
    return false;
}

const numero = 8;/*Digite aqui o número que deseja verificar na sequência*/

if (fibonacci(numero)) {
    console.log(`O número ${numero} está na sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} não está na sequência de Fibonacci.`);
}
