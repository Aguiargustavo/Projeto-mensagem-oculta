// variáveis //

let entradaMensagem = document.getElementById('escrvMensage');
let opçoes = document.querySelector('#opcoesCod');
let incremento = document.getElementById('incremento');
let btncodificar = document.getElementById('codificar');
let btndecodificar = document.getElementById('decodificar');
let alfabeto = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
let submit = document.querySelector('#submit');
let saidaMensagem = document.querySelector('.mensage_cod')
let radioCodificar = document.querySelector('#rdCodificar');
let radioDecodificar = document.getElementById('rdDecodificar')
let radio = document.querySelector('.radio');

opçoes.addEventListener('change', function () {

    if(opçoes.value == 'cifraDeCesar'){
        incremento.style.display = 'block';

    }else if (opçoes.value == 'base64'){
        incremento.style.display = 'none';

    }else {
        alert('Cifra de Cesar ou Base64?')
    }
})
   


btncodificar.addEventListener("click" , function() {
    submit.style.display = 'block';
    submit.value = 'Codifica!'
})

btndecodificar.addEventListener("click" , function() {
    submit.style.display = 'block';
    submit.value = 'Decodifica!'
})



//    Cifra de Cesar    //

function codCesar() {
    let elementoDaMensagem = entradaMensagem.value;
    let mensagemMinuscula = elementoDaMensagem.toLowerCase();
    let transformarNumero = (Number(incremento.value) % 26);
    let mensagemCodificada = '';

    for(let i = 0; i < mensagemMinuscula.length; i++){
        for(let j =0; j < alfabeto.length; j++){
            if(mensagemMinuscula[i] == alfabeto[j]){
                mensagemCodificada += alfabeto [j + transformarNumero]
                break;
            } else if (mensagemMinuscula[i] == ' ') {
                mensagemCodificada += ' ';
                break;
            }
        }


    }
    return mensagemCodificada
}


function decCesar() {
    let elementoDaMensagem = entradaMensagem.value;
    let mensagemMinuscula = elementoDaMensagem.toLowerCase()
    let transformarNumero = (Number(incremento.value) % 26)
    let mensagemCodificada = '';

    for(let i = 0; i < mensagemMinuscula.length; i++) {
        for(let j = alfabeto.length - 1; j >= 0; j--){
            if(mensagemMinuscula[i] == alfabeto[j]){
                mensagemCodificada += alfabeto [j - transformarNumero]
                break;
            } else if (mensagemMinuscula[i] == ' ') {
                mensagemCodificada += ' ';
                break;
            }
        }
    }
    return mensagemCodificada
}


//    Base64    //

function codBase(){
    let mensagem = document.querySelector('#escrvMensage').value
    let codificado = btoa(mensagem)
    return codificado
}

function decBase(){
    let mensagem = document.querySelector('#escrvMensage').value
    let decodificado = atob(mensagem)
    return decodificado
}


submit.addEventListener('click', function(e){
    e.preventDefault();
    if(btncodificar.checked && opçoes.value === "base64"){

        saidaMensagem.innerText = codBase();
    } else if(btndecodificar.checked && opçoes.value === "base64"){

        saidaMensagem.innerText = decBase();
    } else if(btncodificar.checked && opçoes.value === "cifraDeCesar"){

        saidaMensagem.innerText = codCesar()
    } else if(btndecodificar.checked && opçoes.value === "cifraDeCesar"){

        saidaMensagem.innerText = decCesar()
    } else{
        saidaMensagem.innerText = "ERROR ... Digite Novamente"
    }
})
