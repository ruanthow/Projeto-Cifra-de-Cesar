var checkBoxBase64 = document.getElementById("base64");
var checkBoxCifraDeCesar = document.getElementById("cfc");
var changeColorButtonCesar = document.getElementById("pillRed");
var changeColorButtonBase64 = document.getElementById("pillBlue");
var incrementar = document.getElementById('incrementar');
var labelIncrementar = document.getElementById("labelIncremntar")

const alphabet = ['.','é','ú','ó','á','í','ã','ç','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var textNoCrypto = document.getElementById("textNoCrypto");
var textCrypto = document.getElementById("textCrypto");   

incrementar.value = 1;
changeColorButtonBase64.style.color = "#20ff42"
labelIncrementar.style.display = "none";

function mostraIncremento() { 
    incrementar.style.display = "block";
    labelIncrementar.style.display = "block" 
    changeColorButtonCesar.style.color = "#20ff42"
    changeColorButtonBase64.style.color = "#fff"
  }
  
function escondeIncremento() {
    incrementar.style.display = "none";
    labelIncrementar.style.display = "none";
    changeColorButtonCesar.style.color = "#fff"
    changeColorButtonBase64.style.color = "#20ff42"
  }

checkBoxCifraDeCesar.addEventListener('change', mostraIncremento);
checkBoxBase64.addEventListener('change', escondeIncremento);
incrementar.addEventListener('change', ()=>{
})

function Codificar() {
    
    if(checkBoxCifraDeCesar.checked){
      

      var arryText = textNoCrypto.value.toLowerCase().split('') 
      const getLetter = arryText.map((letter)=>{
      const indexLetter = alphabet.indexOf(letter)
      const restartIndex = alphabet.indexOf('.');
      if(indexLetter != -1){
       var cryptoLetter = indexLetter + parseInt(incrementar.value)
        if(cryptoLetter >= alphabet.length){
            cryptoLetter = parseInt(restartIndex) + parseInt(incrementar.value)
            console.log(cryptoLetter);
        }  
      }
      return alphabet[cryptoLetter]
      })
     
      textCrypto.value = getLetter.join('')
    }
    else{
      
      cryptoBase64 = btoa(textNoCrypto.value)
      textCrypto.value = cryptoBase64
    }
   
}

function Decodificar(){
    
    if(checkBoxCifraDeCesar.checked){
      var arryText = textNoCrypto.value.toLowerCase().split('') 
    const getLetter = arryText.map((letter)=>{
    const indexLetter = alphabet.indexOf(letter)
    const restartIndex = alphabet.indexOf('.');
    if(indexLetter != -1){
     var cryptoLetter = indexLetter - parseInt(incrementar.value)
      if(cryptoLetter >= alphabet.length){
          cryptoLetter = parseInt(restartIndex) - parseInt(incrementar.value)
          console.log(cryptoLetter);
      }  
    }
    return alphabet[cryptoLetter]
    })
   
    textCrypto.value = getLetter.join('')
    }
    else{
      cryptoBase64 = atob(textNoCrypto.value)
      textCrypto.value = cryptoBase64
    }
}