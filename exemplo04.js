function letraQueMaisRepete(nome) {
    nome = nome.toLowerCase();
    const contagemLetras = {};

    for (let i = 0; i < nome.length; i++) {
        const letra = nome[i];
        if (letra.match(/[a-z]/)) {
            if (contagemLetras[letra]) {
                contagemLetras[letra]++;
            } else {
                contagemLetras[letra] = 1;
            }
        }
    }

    let letraMaisRepetida = "";
    let maxRepeticoes = 0;

    for (const letra in contagemLetras) {
        if (contagemLetras[letra] > maxRepeticoes) {
            maxRepeticoes = contagemLetras[letra];
            letraMaisRepetida = letra;
        }
    }

    return letraMaisRepetida;
}

let nomeCompleto = "Anderson Domingos Souza Santos";
const letra = letraQueMaisRepete(nomeCompleto);
console.log(`A letra que mais se repete em "${nomeCompleto}" é: ${letra}`);