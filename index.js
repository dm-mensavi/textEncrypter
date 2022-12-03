var encrypted = false;
var decrypted = false;

function encrypt(){

    var key = Number(document.getElementById("keyId").value);
    var text = document.getElementById("script").value;
    
    if(!encrypted && key > 0 && key <= 10000){

        var newText = "";
    
        for (var i = 0; i < text.length; i++) {
            var initialCode = text.codePointAt(i);
            var index = initialCode + key;
            var newLetter = String.fromCodePoint(index);
                newText += newLetter;   
        }
    
        document.querySelector('p').innerHTML = "Text seccessfully Encrypted 🎆🎉"
        encrypted = true;
        return document.getElementById("script").value = newText;
    }

    var errorMessage = (!encrypted)?"⚠️Please Enter a valid key/text!":"⚠️Encrypt button has already been clicked⚠️<br> Click reset";
    return alert(errorMessage);
};

function decrypt(){
    var key = Number(document.getElementById("keyId").value);
    var text = document.getElementById("script").value;

    if(!decrypted && key > 0 && key < 10000){

        var newText = "";
    
        for (var i = 0; i < text.length; i++) {
            var initialCode = text.codePointAt(i);
            var index = initialCode - key;
            var newLetter = String.fromCodePoint(index);
                newText += newLetter;   
        }
    
        decrypted = true;
        document.querySelector('p').innerHTML = "Text seccessfully Decrypted 🎆🎉"
        return document.getElementById("script").value = newText;
    }

    var errorMessage = (!decrypted)?"⚠️Please Enter a valid key/text!":"⚠️Decrypt button has already been clicked⚠️<br> Click reset";
    return alert(errorMessage);

};

function restore(){

    encrypted = false;
    decrypted = false;
    return document.querySelector('p').innerHTML = "⬇️ Enter or paste the text in the field below ⬇️";
    
}