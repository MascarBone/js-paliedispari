// let bottonePalindroma = document.getElementById('btn-palindroma');
// // let inputPalindroma = document.getElementById('text-palindroma');

// // console.log(inputPalindroma);

// bottonePalindroma.addEventListener('click',palindroma(document.getElementById('text-palindroma').value));

// // let output = palindroma("annnnnnnnna");

// // console.log(output);


// function palindroma (str)
// {
//     let risultato = false;

//     let iterazioni = Math.floor(str.length/2);
//     console.log (iterazioni);

//     for (let i = 0; i < iterazioni; i++)
//     {
//         if (str[i] == str[str.length-(i+1)])
//         {
//             console.log(i + " ciclo true ")
//             risultato = true
//         }
//         else
//         {
//             console.log(i + " ciclo false ")
//             risultato = false;
//             break;
//         }
//     }

//     if(risultato)
//     {
//         document.getElementById('show-palindroma').className = "";
//         document.getElementById('show-palindroma').innerHTML = "La parola inserita &egrave; palindroma";
//     }
//     else
//     {
//         document.getElementById('show-palindroma').className = "";
//         document.getElementById('show-palindroma').innerHTML = "La parola inserita non &egrave; palindroma";
//     }
// }

// #######################################################

// let parola = prompt("Inserisci una parola");

// let verifica = false;

// verifica = palindroma(parola);

// console.log(verifica);

// if (verifica)
// {
//     // document.getElementById('show-palindroma').className = "";
//     // document.getElementById('show-palindroma').innerHTML = "La parola inserita &egrave; palindroma";
//     console.log("la parola inserita è palindroma");
// }
// else
// {
//     // document.getElementById('show-palindroma').className = "";
//     // document.getElementById('show-palindroma').innerHTML = "La parola inserita non &egrave; palindroma";
//     console.log("la parola inserita non è palindroma");
// }

// function palindroma (str)
// {
//     let risultato = false;

//     let iterazioni = Math.floor(str.length/2);
//     console.log (iterazioni);

//     for (let i = 0; i < iterazioni; i++)
//     {
//         if (str[i] == str[str.length-(i+1)])
//         {
//             console.log(i + " ciclo true ")
//             risultato = true
//         }
//         else
//         {
//             console.log(i + " ciclo false ")
//             return false
//         }
//     }

//     return risultato;
// }









// #################################################

// let odd = prompt ("Scegli 'pari' o 'dispari'");
// let input = parseInt(prompt ("Inserisci un numero"));

// let somma = input + genRandom5();

// console.log(somma);

// let vittoria = confronta(somma);

// console.log (vittoria);

// if (vittoria == odd)
// {
//     console.log("Hai vinto");
// }
// else
// {
//     console.log("Hai perso");
// }


// function genRandom5 ()
// {
//     return Math.floor(Math.random() * 5) + 1;
// }

// function confronta (num)
// {
//     if (num % 2 == 0)
//     {
//         return 'pari';
//     }else
//     {
//         return 'dispari';
//     }
}
