function encrypt() {
    //ENCRYPTION

    //generate key
    const key = MDE.Keygen.random(8);

    const dom_keyOutput = document.querySelector('.key');
    dom_keyOutput.value = key;

    //encrypt data
    const dom_text = document.querySelector('.input');
    const enc = MDE.Encrypt(dom_text.value, key);

    //output encrypted data
    const dom_output = document.querySelector('.output');
    dom_output.value = enc.data;
}

function decrypt() {
    //DECRYPTION
    const dom_keyInput = document.querySelector('.keyDecrypt');
    const dom_textToDecrypt = document.querySelector('.dataDecrypt');
    const dom_decryptedText = document.querySelector('.decryptedmsg');
    const enc_data = dom_textToDecrypt.value.split(',');

    const dec = MDE.Decrypt(
        enc_data,
        dom_keyInput.value
    );

    dom_decryptedText.textContent = dec.data;
}