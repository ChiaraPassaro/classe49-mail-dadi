// Mail
// Chiedi all’utente la sua email,
//   controlla che sia nella lista di chi può accedere,
//     stampa un messaggio appropriato sull’esito del controllo.

//lista di email
const emails = [
  "chiara@gmail.com",
  "michele@gmail.it",
  "alfredo@email.com",
  "luana@tiscali.it"
];

//input mail utente
// const emailUser = "alfredo@email.com";
// const emailUser = "pippo@email.com";
// let find = false;
// let message = 'La tua mail non e stata trovata';

// for (let i = 0; i < emails.length; i++) {
//   // console.log(i);
//   //controllo se l'elemento su cui sono e uguale a quello che ha scritto l'utente
//   if (emailUser == emails[i]) {
//     // console.log('mail trovata');
//     find = true;
//     message = 'la mail e stata trovata'
//   }
//   // questo non possiamo farlo
//   // else {
//   //   console.log('mail non trovata');
//   // }
// }

// // console.log(find);
// // console.log(message);

// if (find == true) {
//   console.log('la mail e stata trovata');
// } else {
//   console.log('la mail non e stata trovata');
// }

const button = document.getElementById('button');
const buttonCheck = document.getElementById('buttonCheck');
const input = document.getElementById('email');

button.addEventListener('click',
  function () {
    const email = input.value;
    emails.push(email);
    console.log(emails);
  }
);

buttonCheck.addEventListener('click',
  function () {
    let find = false;

    for (let i = 0; i < emails.length; i++) {
      console.log(input.value);
      if (input.value == emails[i]) {
        find = true;
        message = 'la mail e stata trovata'
      }
    }

    if (find == true) {
      console.log('la mail e stata trovata, puoi giocare');
      //stampa il dado
      const dado = document.querySelector('.dado');
      dado.innerHTML = '';

      // Gioco dei dadi
      // Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
      // Stabilire il vincitore, in base a chi fa il punteggio più alto.

      const numberUser = Math.floor(Math.random() * (7 - 1)) + 1;
      const numberPc = Math.floor(Math.random() * (7 - 1)) + 1;
      console.log(numberUser, numberPc);

      if (numberUser > numberPc) {
        console.log('hai vinto');
      } else if (numberPc > numberUser) {
        console.log('hai perso');
      } else {
        console.log('Pareggio');
      }




      const img = `
    <img src="img/${numberUser}.png" alt="">
  `;
      const img2 = `
    <img src="img/${numberPc}.png" alt="">
  `;

      dado.innerHTML += img + img2;

    } else {
      console.log('la mail non e stata trovata');
    }

  }
);






//voglio generare dei dadi a seconda del numero ricevuto
// const number = 2;
// const dado = document.querySelector('.dado');

// for (let i = 1; i <= number; i++) {
//   let classPallino = '';
//   //condizione per capire quale classe inserire
//   switch (i) {
//     case 1:
//       classPallino = 'cc';
//       break;
//     case 2:
//       classPallino = 'rb';
//       break;
//     default:
//       break;
//   }

//   const pallino = `
//     <div class="pallino ${classPallino}"></div>
//   `;

//   dado.innerHTML += pallino;
// }


// const number = 6;
// const dado = document.querySelector('.dado');

// const img = `
//     <img src="img/${number}.png" alt="">
//   `;

// dado.innerHTML += img;


//voglio generare dei dadi a seconda del numero ricevuto
const number = 2;
const dado = document.querySelector('.dado');

let dadoHtml = '';
//condizione per capire quale classe inserire
switch (i) {
  case 6:
    dadoHtml = `<div class="pallino lt"></div>
    <div class="pallino ct"></div>
    <div class="pallino rt"></div>
    <div class="pallino lb"></div>
    <div class="pallino rb"></div>
    <div class="pallino cb"></div>`;
    break;
  case 5:
    dadoHtml = `<div class="pallino lt"></div>
    <div class="pallino rt"></div>
    <div class="pallino cc"></div>
    <div class="pallino lb"></div>
    <div class="pallino rb"></div>`;
    break;
  case 4:
    dadoHtml = `<div class="pallino lt"></div>
    <div class="pallino rt"></div>
    <div class="pallino cc"></div>
    <div class="pallino lb"></div>
    <div class="pallino rb"></div>`;
    break;

};

dado.innerHTML += dadoHtml;