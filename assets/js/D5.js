/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log("Esercizio 1");
const pets = ['dog', 'cat', 'hamster', 'redfish'];
  for(let i = 0; i < pets.length; i++)
    console.log(pets[i]);




/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("Esercizio 2");
const petsAlfa = pets.sort();
console.log(petsAlfa);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("Esercizio 3");
petsReverse = pets.reverse();
console.log(petsReverse);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("Esercizio 4");
console.log(pets); //ARRAY PRIMA 
const petsMoved = pets.shift();
pets.push(petsMoved);
console.log(pets); // ARRAY DOPO

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
];
console.log("Esercizio 5");
let proprietà = "AB000CD";
for(let i = 0;i < cars.length;i++){
  cars[i].licensePlate = proprietà;
}

console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log("Esercizio 6");

function addObject(marchio,modello,colore,finiture,targa) {
  cars.push({brand: marchio , model: modello ,color: colore, trims: finiture, licensePlate: targa});
  return cars
}
console.log(addObject("Fiat","Punto","yellow",["city","st"],proprietà));


for(let i = 0;i < cars.length;i++){
 cars[i].trims.pop();
}
console.log(cars)

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log("Esercizio 7");
const justTrims = [];
const wichElement = 0;   //Per Scegliere l'indice di trims da prelevare. 

function saveTrims(){
  for(let i = 0; i< cars.length; i++){
    justTrims.push(cars[i].trims[wichElement]);
  }
  return justTrims;
}
console.log(saveTrims());

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log("Esercizio 8");
console.log(cars);


function fizzBuzz(){
  for(let i = 0; i< cars.length; i++){
    if(cars[i].color.charAt(0).toLowerCase() === "b" ){
      console.log("Fizz");
    }else{
      console.log("Buzz");
    }
  }
  return;
}
fizzBuzz();



/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105, 
];
console.log("Esercizio 9");
const endWhileCicle = 32;           //il numero inserito deve essere presente nell'array sopra, altrimenti si crea un loop
                                    //la Funzione commentata sotto esegue un verifica di blocco.
stampValori();

/*checkNumber();
function checkNumber(){
  if(numericArray.includes(endWhileCicle)){
    stampValori();
  }else{
    console.log("Il numero di blocco non è presente, rischi di creare un Loop");
  }
} */
function stampValori(){
let i = 0;
while (numericArray[i] !== endWhileCicle){
  console.log(numericArray[i]);
    i++;
  }
  console.log(numericArray[i]);   //quanto esce dal ciclo While ha trovato sicuramente trovato il numero 32 o numero dato in input
  return;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", 'n', 'u', 'z', 'd'];

console.log("Esercizio 10");
const alfabeto = ["a","b","c","d","e","f","g","h","i","l","m","n","o","p","q","r","s","t","u","v","z"];

console.log(search());

function search(){
  newArray=[];

   for(let i = 0; i< charactersArray.length;i++){
    let verifica = charactersArray[i].slice();
    switch(alfabeto.includes(verifica)) {
          case true:
            newArray.push(alfabeto.indexOf(verifica)+ 1);
            break;
          case false:
            break;
      }
    }
    return newArray;
}

  
    





