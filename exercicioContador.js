let a = 0;

let b = 15;

let começo;

let final;

let par;

let adição = 0;


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
        adição = começo + adição;
    }

    começo++

    //exibir adição

}

console.log(adição)


