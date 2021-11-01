n = "10.5";

function multiply(x, y) {
    return x *= y;
}

function divide(a, b) {
    return a /= b;
}

function add(a, b) {
    return a += b;
}

function subtract(a, b) {
    return a -= b;
}

function increment(n) {
    n++;
    return n;
}

function decrement(n) {
    n--;
    return n;
}

function makeInt(n) {
    return parseInt(n, 10);
}

function preserveDecimal(n) {
    return parseFloat(n);
}

console.log(makeInt(n));