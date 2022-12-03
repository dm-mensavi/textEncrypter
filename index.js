

function encrypt(){

    var text = document.getElementById("script").value;
    var newText = "";

    for (var i = 0; i < text.length; i++) {
        var initialCode = text.codePointAt(i);
        var index = initialCode - 7;
        var newLetter = String.fromCodePoint(index);
            newText += newLetter;   
    }
    document.querySelector('p').innerHTML = "Text seccessfully Encrypted 🎆🎉"
    return document.getElementById("script").value = newText;
};

function decrypt(){
    var text = document.getElementById("script").value;
    var newText = "";

    for (var i = 0; i < text.length; i++) {
        var initialCode = text.codePointAt(i);
        var index = initialCode + 7;
        var newLetter = String.fromCodePoint(index);
            newText += newLetter;   
    }

    document.querySelector('p').innerHTML = "Text seccessfully Decrypted 🎆🎉"
    return document.getElementById("script").value = newText;

};

function restore(){

    return document.querySelector('p').innerHTML = "⬇️ Enter or paste the text in the field below ⬇️";
}