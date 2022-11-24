function encrypt() {
    //ENCRYPTION

    //generate key
    let key = MDE.Keygen.random(8);
    let dom_keyOutput = document.querySelector('.key');
    dom_keyOutput.textContent = key;

    //encrypt data
    let dom_text = document.querySelector('.input');
    let enc = MDE.Encrypt(dom_text.textContent, key);

    //output encrypted data
    let dom_output = document.querySelector('.output');
    let dataToChar = [];
    for (let i = 0; i < enc.data.length; i++) {
        dataToChar.push(String.fromCharCode(enc.data[i] % 127));
    }
    dom_output.textContent = dataToChar.join('');


    //DECRYPTION

    /**
     * function decrypt(){
     * 
     * }
     */
}