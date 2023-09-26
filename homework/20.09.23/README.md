"semi": false, <--tähendab, et prettier ei lisa automaatselt semikooloneid (kui on false)

"tabWidth": 2, <-- määrab vahekauguse ühe sammu kohta (tühikute arv tab-i kohta). Nr 2 tähendab, et on määratud 2 tühikut.

"printWidth": 80, <-- rea maksimaalne pikkus

"singleQuote": false, <-- määrab, kas üksikud ('a') jutumärgid on lubatud

"jsxSingleQuote": false, <-- määrab, kas JSX (JavaScript eXtension) atribuutide väärtused peaksid kasutama üksikuid jutumärke (nt `prop1="value1"` vs `prop2='value2'`)

"bracketSpacing": true, <-- määrab, kas tühikud peavad olema suletavate sulgude ja nende sees olevate väärtuste vahel (nt `{ foo: 'bar' }` vs `{foo:'bar'}`)

"bracketSameLine": false, <-- määrab, kas avavad sulud peavad olema samal kaugusel tekstist (nt `{ foo: 'bar' }` vs `{ foo: 'bar'}`)

"trailingComma": "none", <-- määrab, kas lubatakse või keelatakse komasid objektide ja massiivide viimaste elementide järel. "none" tähendab, et ei tohi olla komasid (nt [1, 2, 3] vs [1, 2, 3,])

"arrowParens": "avoid", <-- määrab, kas noolefunktsiooni parameetrite ümber peavad olema sulud. "avoid" tähendab, et sulge ei lisata, kui funktsioonil on üks parameeter (nt `x => x` vs `(x) => x`)

"singleAttributePerLine": true <-- on mõeldud React JSX-le. Seade, mis määrab, kas JSX atribuudid peavad olema igaüks eraldi real või mitte.
