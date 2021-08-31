let bottonePalindroma = document.getElementById('btn-palindroma');
let bottonePalindromaSimple = document.getElementById('btn-palindroma-simple');

let testo = "anna";

testo.split("").reverse().join();
bottonePalindroma.addEventListener('click',controllo);

bottonePalindromaSimple.addEventListener('click',controlloSimple);

// Le seguenti 2 funzioni servono per controllare se la parola inserita nel tag input
// sia palindroma oppure no
// Queste a seguire sono la prima versione

function controllo()
{
    let inputPalindroma = document.getElementById('text-palindroma');
    console.log (inputPalindroma);

    let verifica = palindroma (inputPalindroma.value);

    scriviPalindroma (verifica,'');
}

function palindroma (str)
{
    let risultato = false;

    let iterazioni = Math.floor(str.length/2);
    console.log (iterazioni);

    for (let i = 0; i < iterazioni; i++)
    {
        if (str[i] == str[str.length-(i+1)])
        {
            console.log(i + " ciclo true ")
            risultato = true;
        }
        else
        {
            console.log(i + " ciclo false ")
            risultato = false;
            break;
        }
    }
    
    return risultato;
}

////////////////////////////////////////////////////////////

// Le seguenti 2 funzioni sono un'altra versione di quelle proposte sopra
// Creando una stringa uguale ma ribaltata e controllata con se stessa


function controlloSimple()
{
    let inputPalindroma = document.getElementById('text-palindroma-simple');
    console.log (inputPalindroma);

    let verifica = palindromaSimple (inputPalindroma.value);

    scriviPalindroma (verifica, '-simple');
}

function palindromaSimple (str)
{
    let risultato = false;
    let temp = str.split('').reverse().join('');

    console.log("temp " + temp + typeof(temp));
    console.log("str " + str + typeof(str));

    if (str == temp );
    {
        risultato = true;
    }
    console.log (risultato);
    return risultato;
}

function scriviPalindroma (bool, str)
{
    if(bool)
    {
        document.getElementById('show-palindroma' + str).className = "";
        document.getElementById('show-palindroma' + str).innerHTML = "La parola inserita &egrave; palindroma";
    }
    else
    {
        document.getElementById('show-palindroma' + str).className = "";
        document.getElementById('show-palindroma' + str).innerHTML = "La parola inserita non &egrave; palindroma";
    }
}









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
// }
