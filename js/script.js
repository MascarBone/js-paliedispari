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

let parola = prompt("Inserisci una parola");

let verifica = false;

verifica = palindroma(parola);

console.log(verifica);

if (verifica)
{
    // document.getElementById('show-palindroma').className = "";
    // document.getElementById('show-palindroma').innerHTML = "La parola inserita &egrave; palindroma";
    console.log("la parola inserita è palindroma");
}
else
{
    // document.getElementById('show-palindroma').className = "";
    // document.getElementById('show-palindroma').innerHTML = "La parola inserita non &egrave; palindroma";
    console.log("la parola inserita non è palindroma");
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
            risultato = true
        }
        else
        {
            console.log(i + " ciclo false ")
            return false
        }
    }

    return risultato;
}


