const inputText = document.querySelector('.input-section__input');
const encodeButton = document.querySelector('.input-section__encode-button');
const decodeButton = document.querySelector('.input-section__decode-button');
const resultText = document.querySelector('.output-section__result-text');
const noContentImage = document.querySelector('.output-section__no-content-image');
const noContentText = document.querySelector('.output-section__no-content-text');
const infoText = document.querySelector('.output-section__info-text');
const copyButton = document.querySelector('.output-section__copy-button');
// const divResult = document.querySelector('.output-section__result-div');

function encode () {
    const validText = validateText(inputText.value);

    if (!validText) return;

    const encodedText = 
        validText
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');

    showOnScreen(encodedText);
}

function decode () {
    const validText = validateText(inputText.value);

    if (!validText) return;

    const decodedText = 
        validText
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');

    showOnScreen(decodedText);
}

function showOnScreen (text) {
    infoText.setAttribute('hidden', true);
    noContentText.setAttribute('hidden', true);
    noContentImage.setAttribute('hidden', true);

    resultText.removeAttribute('hidden');
    copyButton.removeAttribute('hidden');
    // divResult.style.display = 'flex';

    resultText.innerHTML = text;
}

function validateText (text) {
    if (/^[a-z]+$/.test(text)) {
        return text;
    } else {
        alert('O texto precisa conter apenas letras minúsculas e sem acentos ou caracteres especiais.')
        inputText.value = '';
    }
}

async function copy () {
    let textoSelecionado = resultText.innerHTML;

    try {
        await navigator.clipboard.writeText(textoSelecionado);
    } catch (error) {
        console.error('Falha ao copiar o texto para área de transferência: ', error.message);
    }
}

encodeButton.addEventListener('click', encode);
decodeButton.addEventListener('click', decode);
copyButton.addEventListener('click', copy);
