let total = 0, count = 1;
while(count <= 10) {
    total += count;
    count += 1;
}
console.log(total);

function factorial(n) {
    if (n == 0) {
        return 1;
    }
    else {
        return factorial(n - 1) * n;
    }
}
console.log(factorial(8));

function power(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}
console.log(power(4));
console.log(power(2, 6));
console.log("C", "0", 2);

function wrapValue(n) {
    let local = n;
    return() => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

function multiplier(factor) {
    return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));