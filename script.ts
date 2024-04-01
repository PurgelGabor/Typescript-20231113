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


function NegativE(szamok:number[]):boolean{

    var eredmeny:boolean = false;

    for(var i:number = 0; i < szamok.length; i++){
        if(szamok[i] < 0){
            eredmeny = true;
        }
    }
    return eredmeny;
}

console.log(NegativE([0,1,2,3,4,5,5,6,7,8,-34]));
console.log(NegativE([0,1,2,3,4,5,5,6,7,8,34]));

function korKerTer(r:number):[number, number]{

    var korKerulet:number = 2 * r * Math.PI;
    var korTerulet:number = r * r * Math.PI;

    return [korKerulet, korTerulet];
}

console.log(korKerTer(5));
console.log(korKerTer(9));
console.log(korKerTer(4.6));


interface Auto {
    gyarto:string,
    tipus:string,
    ccm:number,
    benzinesE:boolean
}

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

function minAuto(autok:Auto[]):Auto{
    var minCCM:Auto = autok[0];
    for(var i:number = 0; i < autok.length; i++){
        if(minCCM.ccm > autok[i].ccm){
            minCCM = autok[i];
        }
    }
    return minCCM;
}

function BenzinesDb(autok:Auto[]):number{
    var db:number = 0;
    for(var i:number = 0; i < autok.length; i++){
        if(autok[i].benzinesE == true){
            db++;
        }   
     }
     return db;
}

var auto1:Auto = {gyarto: "Opel", tipus: "Corsa", ccm: 1200, benzinesE: true};
var auto2:Auto = {gyarto: "Ford", tipus: "Focus", ccm: 1600, benzinesE: false};
var auto3:Auto = {gyarto: "Audi", tipus: "A6", ccm: 3000, benzinesE: false};
var auto4:Auto = {gyarto: "Mercedes", tipus: "S500", ccm: 4200, benzinesE: true};
var auto5:Auto = {gyarto: "Opel", tipus: "Astra", ccm: 1800, benzinesE: true};

var autokTeszt:Auto[] = [
auto1 = {gyarto: "Opel", tipus: "Corsa", ccm: 1200, benzinesE: true},
auto2 = {gyarto: "Ford", tipus: "Focus", ccm: 1600, benzinesE: false},
auto3 = {gyarto: "Audi", tipus: "A6", ccm: 3000, benzinesE: false},
auto4 = {gyarto: "Mercedes", tipus: "S500", ccm: 4200, benzinesE: true},
auto5 = {gyarto: "Opel", tipus: "Astra", ccm: 1800, benzinesE: true}
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

function AtlagCCM (autok:Auto[]):number{
    var atlag:number = 0; 
    for(var i:number = 0; i < autok.length; i++){
     if(atlag += autok[i].ccm){
            atlag / autok.length;
       }
    } 
    return atlag;
}


console.log((AtlagCCM(autokTeszt)));


function vanEnemBenzines(autok:Auto[]):boolean{
    var nemBenzines:boolean = false;
    for(var i:number = 0; i < autok.length; i++){
        if(autok[i].benzinesE == false){
            nemBenzines = true;
        }
    }
    return nemBenzines;
}

console.log(vanEnemBenzines(autokTeszt));

function BenzinesSzetValogat(autok:Auto[]):[Auto[], Auto[]]{

    var benzinesAutok:Auto[] = [];
    var nemBenzinesAutok:Auto[] = [];

    for(var i:number = 0; i < autok.length; i++){
        if(autok[i].benzinesE == true){
            benzinesAutok.push(autok[i]);
        }
        else{
            nemBenzinesAutok.push(autok[i]);
        }
            
        
    }
    return [benzinesAutok, nemBenzinesAutok];
}

console.log(BenzinesSzetValogat(autokTeszt));