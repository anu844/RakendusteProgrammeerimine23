// == - kontrollib väärtust
// === - kontrollib samas andmetüübis väärtust, kui andmetüüp erinev, kohe false
//console.log(1 == '1') true
//console.log (1==='1') false

//String to number
// let actuallyANumber = '1'
// console.log(parseInt(actuallyANumber)) // <-- kõige lollikindlam viis teha string numbriks
// console.log(+actuallyANumber) // <-- + märk muutuja ees muudab stringi numbriks

// == <- EQUALITY
// == on true kui mõlema poole objektid on samad
// string - true kui mõlemal poolel on samad trükimärgid samas järjekorras
// number - true kui mõlema poole väärtused on samad
// boolean - true kui mõlemad pooled on "true" või "false"

// console.log(1==1);
// console.log('hello' == 'hello');
// console.log('1' == 1);
// console.log(0 == false);
// console.log(1.05==1.05);
// console.log(null == undefined);

// const object1 = {
//     key: "value",
// };
// const object2 = {
//     key: "value",
// };
// console.log("------------------------------")
// console.log(object1 == object2);
// console.log(object1 == object1);
// console.log(object1 === object2);
// console.log(object1 === object1);

//=== <- STRICT EQUALITY
// true, kui pooled on täpselt samad
// false, kui pooled on erinevat tüüpi
// number - true - molemad pooled peavad olema samad
// string - true - molemal pool peavad olema samad trükimärgid ja samas järjekorras
// boolean - true - mõlemad pooled kad "true" või " false"
// console.log(1 === 1);
// console.log('hello' === 'hello');
// console.log('1' === 1);
// console.log(0 === false);
// console.log(null === undefined);
// console.log("------------------------------")

// ASYNC ja AWAIT

// function resolveAfter2Seconds(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(1+1);
//         }, 2000);
//     })
// }

// async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);

// }

// asyncCall();

// Async - kasutatakse sündmustepõhiste operatsioonide või aeganõudvate ülesannete juhtimiseks veebirakendustes.
// Kasutatakse olukordades, kus tegevused võivad võtta aega ja ei soovi, et need tegevused blokeeriksid veebilehe kasutajaliidest.
// syncronys - Ootab senikaua kuni funktsioon on lõpule viidud

// Callbacks - vanim viis asünkroonseid ülesandeid käsitada.
// Funktsioonid edastatakse teisele funktsioonile ja kutsutakse hiljem tagasi, kui esimene ülesanne on lõpetatud.

function tegevusAsünkroonne1(callback) {
    setTimeout(function() {
      console.log("Asünkroonse tegevuse lõpp1");
      callback();
    }, 10000);
  }
  
  function pärastTegevust() {
    console.log("Tegevus lõppes1!");
  }
  
  tegevusAsünkroonne1(pärastTegevust);
  
// Promise - objekt, mis esindab tulevast väärtust või veateadet. 
// Pakub selget viisi asünkroonse tegevuse tulemuste haldamiseks.

// Promise - pmst lubab midagi, 3 state-i
// Kasutada siis, kui 

// Promise All - ootab kõik enne edasiminemist ära

  function tegevusAsünkroonne2() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        console.log("Asünkroonse tegevuse lõpp2");
        resolve();
      }, 3000);
    });
  }
  
  tegevusAsünkroonne2().then(function() {
    console.log("Tegevus lõppes2!");
  });

  // Async/Await - kaasaegsem viis asünkroonsete ülesannete haldamiseks JavaScriptis.
  // Saab määrata funktsiooni märksõnaga 'async' ja kasutada 'await' märksõna, et oodata asünkroonse tegevuse lõppemist.

  async function tegevusAsünkroonne3() {
    await new Promise(function(resolve) {
      setTimeout(function() {
        console.log("Asünkroonse tegevuse lõpp3");
        resolve();
      }, 11000);
    });
    console.log("Tegevus lõppes3!");
  }
  
  tegevusAsünkroonne3();
  