
function makeAdding(firstNumber) {
    // "first" is scoped within the makeAdding function
    const first = firstNumber;
    // first = 5
    return function resulting(secondNumber) {
        // "second" is scoped within the resulting function
        const second = secondNumber;
        return first + second;
    }
}
// but we've not seen an example of a "function"
// being returned, thus far - how do we use it?

const add5 = makeAdding(5);
// add5 = 5 + second
console.log(add5(2))