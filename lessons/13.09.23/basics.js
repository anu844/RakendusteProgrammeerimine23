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

const newArray = numberArray.map((element) => element + 5) 
// -map(()=> {})        (märk "=>" tähendab arrow-funktsiooni)
//console.log(newArray)
//--------------------------------------------
const newArray2 = numberArray.map((element, index, array) => {
    return element + 5
})
console.log(newArray2)
//--------------------------------------------
// {key:value}
// value => "value":value
// objekt koosneb alati key value paaridest
const newArray3 = numberArray.map((element, index, array) => {
    console.log({element, newElement: element +5, index, array})

    return element + 5
})
// ülaloleva lihtsustatud visuaal
const newArray4 = numberArray.map((element, index, array) => {
    console.log({
        element: element, 
        newElement: element +5, 
        "index": index, 
        array
    })

    return element + 5
})

//Filter
const filteredArray = numberArray.filter(element => element < 4)

console.log({numberArray, filteredArray}) //<- seal sulgudes loogelised sulud on sp, et terminalis väljastades eristada seda rida.

console.log(1<4) // näeme, et väljastab kas "true" või "false", ehk siis filteredArray reas pannakse arraysse numbrid, mis on "true"-d

const names = ['Juku', 'Mari', 'Jaan', 'Anni']
// const data = ...
//const data = names.map(name => ({name: ...}))
const data = names.map(name =>{
    return {
        name: name,
        age: name.length + 20, // 20 + nime pikkus
        email: name.toLowerCase() + '@company.com', // nimi väikesteks tähtedeks + emaili lõpp
        username: name.split("").reverse().join("") // name.split - tükeldab nime; reverse - keerab tähed vastastikku järjekorda; join - ühendab vastastikku tõstetud tähed omavahel
    }
})
console.log({data})

//{
//    name: 'Anni', 
//    age: 24,
//    email: 'anni@company.com',
//    aadress: 'Anni Street 55'
//    username: 'innA'
//}

// Tahan lisada Jukule pikkuse juurde
console.log(data[0]) // originaalsed andmed
const newJuku = {
    ...data[0], // need kolm punkti on spread syntax, mis jätab alles originaalsed andmed
    height: 175
}
console.log({newJuku})

// teine variant:
//oldJuku = data[0]
//const newJuku2 = {
//    ...oldJuku
//}

const evenNewerJuku= {
    ...data[0],
    age: 99
}
console.log({newJuku, evenNewerJuku})