
var promptWord = prompt('Digite sua palavra');
var newStrings = promptWord.split('');
console.log(newStrings)
//console.log(promptWord)
function cipher(newStrings) {
  var newArray = '';
  for (i= 0; i < newStrings.length; i++ );
  {var res = newStrings.chacodeAt(i);
    if (res >= 65 && res <=  90) {return newArray += String.fromCharCode((res - 65 + 7) % 26 + 65);  // Uppercase
    }else if (res >= 97 && res <= 122) {return newArray += String.fromCharCode((res - 97 + 7) % 26 + 97);// Lowercase
    }
  }
return newArray;
}
console.log(cipher(newStrings))
