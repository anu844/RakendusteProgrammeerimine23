// const a = 1
// const b = 2
// console.log(a+b) <- selle rea lõppu tuleb vastus, tänu quokkale, et ei pea terminali panema
//--------------------
// (() => {
//     console.log('hi')
// })() <- siin lõpus sulud kutsuvad funktsiooni välja

// const a = 1,
//   b = 2,
//   c = 3,
//   d = 4

// ;async () => {
//   const myPromise = () =>
//     new Promise(resolve =>
//       setTimeout(() => resolve("myPromise() resolved in 100ms"), 100)
//     )
//   const myPromise2 = new Promise(resolve =>
//     setTimeout(() => resolve("mPromise2 resolved in 200ms"), 200)
//   )

//   const asyncAwait = async () => {
//     const myPromiseResponse = await myPromise()
//     const myPromiseResponse2 = await myPromise2

//     return { myPromiseResponse, myPromiseResponse2 }
//   }

//   console.log(await asyncAwait())
// }

// Trading places
;(() => {
  let a = 99,
    b = 1

  console.log({ a, b })
  ;[a, b] = [b, a]

  console.log({ a, b })
})()

// let array [1, 2, 3, 4, 47]
// let b = array [a]
// console.log(b)

// Array deconstruct
;(() => {
  const array = () => [1, 2, 3, 4, 47]

  const decontruct = () => {
    const [b, , d, , a] = array()
    return { a, b, d }
  }
  console.log(decontruct())
})()

// Object deconstruction

const raimo = {
  name: "Raimo",
  school: "TLU",
  "dreams and etc": ":)"
}
console.log(raimo.name + " " + raimo.school)
//console.log(raimo.dreams and etc) <- see rida ei toimi, kuna dreams and etc on vahel tühikud. Alumine variant on sellisel puhul õige
console.log(raimo["dreams and etc"])
console.log(raimo["name"] + " " + raimo["school"])

// const myObject:{
// time: 1,
// place: 2,
// city: 3,
// something: 4
// }

// const deconstruct = () => {
//     const {city: myObjectsCity, place} = myObject
//     return {myObjectsCity, }
// }
