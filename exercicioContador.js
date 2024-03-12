let a = 0;

let b = 15;

let começo;

let fim;

let par;

let soma = 0;


if (a < b) {
    começo = a;
    fim = b;
} else {
    começo = b;
    fim = a;
}

while (começo <= fim) {
    if (começo % 2 == 0) {
        console.log(começo)
        soma = começo + soma;
    }

    começo++

    //exibir soma

}

console.log(soma)


