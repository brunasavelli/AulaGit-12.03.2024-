let a = 0;

let b = 15;

let começo;

let final;

let par;

let soma = 0;


if (a < b) {
    começo = a;
    final = b;
} else {
    começo = b;
    final = a;
}

while (começo <= final) {
    if (começo % 2 == 0) {
        console.log(começo)
        soma = começo + soma;
    }

    começo++

    //exibir soma

}

console.log(soma)


