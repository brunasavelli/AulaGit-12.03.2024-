let a = 0;

let b = 15;

let inicio;

let final;

let par;

let adição = 0;


if (a < b) {
    inicio = a;
    final = b;
} else {
    inicio = b;
    final = a;
}

while (inicio <= final) {
    if (inicio % 2 == 0) {
        console.log(inicio)
        adição = inicio + adição;
    }

    inicio++

    //exibir adição

}

console.log(adição)


