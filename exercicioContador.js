let a = 0;

let b = 20;

let inicio;

let fim;

let par;

let soma = 0;


if (a < b) {
    inicio = a;
    fim = b;
} else {
    inicio = b;
    fim = a;
}

while (inicio <= fim) {
    if (inicio % 2 == 0) {
        console.log(inicio)
        soma = inicio + soma;
    }

    inicio++

    //exibir soma

}

console.log(soma);
console.log("Nova mensagem");


