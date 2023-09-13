// luua array numbritega ja leida spetsiifilise numbri index


const array = [1, 2, 3, 4, 5, 6, "hi"]

function findMyIndex(array, element) {
    return array.indexOf(element)
}

console.log(findMyIndex(array, 4))

// Arrow functions
// Funktsioon, mis liidab 2 numbrit kokku ja tagastab summa

first = 1
second = 2
console.log(first + second)
//--------------------------------------------
function addition(nr1, nr2){
    return nr1 + nr2;
}
console.log(addition(4,3))
//--------------------------------------------
function addNumbers(number1, number2){
    return number1 + number2
}
console.log(addNumbers(3, 5))
//--------------------------------------------
const arrowFunction = (n1, n2) => {
    return n1 + n2
}

console.log(arrowFunction(3, 5))
//--------------------------------------------
const arrowFunction2 = (n1, n2) => n1 + n2
console.log(arrowFunction2(1, 1))