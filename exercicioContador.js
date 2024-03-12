let a = 0;

let b = 15;

let inicio;

let fim;

let par;

let adição = 0;


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
        adição = inicio + adição;
    }

    inicio++

    //exibir adição

}

console.log(adição)


