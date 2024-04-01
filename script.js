/*
TYPESCRIPT

- Keszits alprogramot, ami...
    - Eldonti, hogy a parameterul kapott szam tombben van-e negativ szam
    - Egy parametrul kapott sugarbol megallapitja a kor keruletet es teruletet
        - Tuple-t alkalmazz
        - Kerulet: 2 * sugar * PI
        - Terulet: sugar * sugar * PI
    
- Keszits interface-t Auto neven
    - Gyarto (szoveg)
    - Tipus (szoveg)
    - Hengerurtartalom (szam)
    - BenzinesE (logikai)
*/
function NegativE(szamok) {
    var eredmeny = false;
    for (var i = 0; i < szamok.length; i++) {
        if (szamok[i] < 0) {
            eredmeny = true;
        }
    }
    return eredmeny;
}
console.log(NegativE([0, 1, 2, 3, 4, 5, 5, 6, 7, 8, -34]));
console.log(NegativE([0, 1, 2, 3, 4, 5, 5, 6, 7, 8, 34]));
function korKerTer(r) {
    var korKerulet = 2 * r * Math.PI;
    var korTerulet = r * r * Math.PI;
    return [korKerulet, korTerulet];
}
console.log(korKerTer(5));
console.log(korKerTer(9));
console.log(korKerTer(4.6));
/*
- Keszits publikus GitHub repositorit a sajat felhasznaloi fiokodban
- Indits Git BASH-t, es a jelenlegi TS projektedben inicializalj git-et
- A lokalis repo-t kosd ossze az online (github-os) repoddal
- Toltsd fel a jelenlegi allapotot a github-ra
*/
/*
TS!!
- Keszits alprogramot, ami kivalasztja egy auto tombbol a legkisebb hengerurtartalmu autot
- Keszits alprogramot, ami megadja a parameterul kapott auto tombbol a benzinesek darabszamat
- A valtoztatasokat toltsd fel a github repodba
*/
function minAuto(autok) {
    var minCCM = autok[0];
    for (var i = 0; i < autok.length; i++) {
        if (minCCM.ccm > autok[i].ccm) {
            minCCM = autok[i];
        }
    }
    return minCCM;
}
function BenzinesDb(autok) {
    var db = 0;
    for (var i = 0; i < autok.length; i++) {
        if (autok[i].benzinesE == true) {
            db++;
        }
    }
    return db;
}
var auto1 = { gyarto: "Opel", tipus: "Corsa", ccm: 1200, benzinesE: true };
var auto2 = { gyarto: "Ford", tipus: "Focus", ccm: 1600, benzinesE: false };
var auto3 = { gyarto: "Audi", tipus: "A6", ccm: 3000, benzinesE: false };
var auto4 = { gyarto: "Mercedes", tipus: "S500", ccm: 4200, benzinesE: true };
var auto5 = { gyarto: "Opel", tipus: "Astra", ccm: 1800, benzinesE: true };
var autokTeszt = [
    auto1 = { gyarto: "Opel", tipus: "Corsa", ccm: 1200, benzinesE: true },
    auto2 = { gyarto: "Ford", tipus: "Focus", ccm: 1600, benzinesE: false },
    auto3 = { gyarto: "Audi", tipus: "A6", ccm: 3000, benzinesE: false },
    auto4 = { gyarto: "Mercedes", tipus: "S500", ccm: 4200, benzinesE: true },
    auto5 = { gyarto: "Opel", tipus: "Astra", ccm: 1800, benzinesE: true }
];
console.log(minAuto(autokTeszt));
console.log(BenzinesDb(autokTeszt));
/*
- Keszits alprogramot, ami..
    - Egy auto tombbol megadja az atlag hengerurtartalmat
    - Eldonti, hogy van-e nem benzines auto az autok tombben
    - Szetvalogatja a benzines es nem benzines autokat

- A valtoztatasokat toltsd fel a github repodba

*/
function AtlagCCM(autok) {
    var atlag = 0;
    for (var i = 0; i < autok.length; i++) {
        if (atlag = +autok[i].ccm) {
            atlag / autok.length;
        }
    }
    return atlag;
}
console.log((AtlagCCM(autokTeszt)));
function vanEnemBenzines(autok) {
    var nemBenzines = false;
    for (var i = 0; i < autok.length; i++) {
        if (autok[i].benzinesE == false) {
            nemBenzines = true;
        }
    }
    return nemBenzines;
}
console.log(vanEnemBenzines(autokTeszt));
function BenzinesSzetValogat(autok) {
    var benzinesAutok = [];
    var nemBenzinesAutok = [];
    for (var i = 0; i < autok.length; i++) {
        if (autok[i].benzinesE == true) {
            benzinesAutok.push(autok[i]);
        }
        else {
            nemBenzinesAutok.push(autok[i]);
        }
    }
    return [benzinesAutok, nemBenzinesAutok];
}
console.log(BenzinesSzetValogat(autokTeszt));
