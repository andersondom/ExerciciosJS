function EncontrarMaior(arr) {
    let maior = 0;
    if (arr == 0) {
        console.log("A lista de números está vazia!");
    }
    else {
        maior = arr[0];
        for(let v = 0; v < arr.length; v++) {
            if (maior < arr[v]) {
                maior = arr[v];
            }
        }
    }
    return maior;
}

let array = [10, 0, 5, 125, 3, 40, 80, 72, 24];
console.log("O maior valor encontrado foi: " + EncontrarMaior(array));