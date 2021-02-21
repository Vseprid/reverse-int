module.exports = function reverse(n) {
    if (n < 0) n = -n;
    let str = n.toString(10);
    return +(str.split('').reverse().join(''));
}
