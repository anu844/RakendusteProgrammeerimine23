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
const arrowFunction2 = (n1, n2) => n1 + n2 // pärast => järel on "nähtamatu" return
console.log(arrowFunction2(1, 1))
//--------------------------------------------
// Nested (console.log(addNumbers2(3)(4)))

//function addNumbers2(num1, num2){
//    return function addNumbersHelper(num2){
//        return num1+num2
//    }
//}
//          Looge samast funktsioonist arrow-funktsioon
//console.log(addNumbers2(3)(1))

const arrowFunction3 = (num1, num2) => num1 + num2
console.log(arrowFunction3(5, 5))
//--------------------------------------------
const arrowFunction4 = (num1) => (num2) => num1 + num2
console.log(arrowFunction4(10)(16))
//--------------------------------------------
// Arrow Function printida "Hello (nimi)" ja kasutada string literals
const nameAnu = "Anu"
const name = `Name is ${nameAnu}`
// ${variableName}
const arrowFunction5 = (name) => `Hello, ` + `${name}` + `!`;
console.log(arrowFunction5("Anu"))
//--------------------------------------------
// map/filter/reduce?

const numberArray = [1,2,3,4,5]
//const newArray = [6, 7, 8, 0, 10]
console.log(numberArray)

const newArray = numberArray.map((n) => n + 5)
// -map(()=> {})        (märk "=>" tähendab arrow-funktsiooni)
console.log(newArray)