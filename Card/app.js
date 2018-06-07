
function isValidCard() {
var cardNumber = prompt('Favor preencher com o numero de seu cartão de crédito');
var arr = cardNumber.split('').reverse()


var sum = 0;
var evenIndex = [];
for (var i = 0; i < arr.length; i++){
  if(arr.length === 13 && i % 2 === 0){
  evenIndex.unshift(arr[i]);
  }else if(arr.length !== 13) {alert('Favor preencher o codigo corretamente.');
  }
var oddIndex = [];
  for (var j = 0; j < arr.length; j++){
    if(j % 2 !== 0){
      oddIndex.unshift(arr[j]);
    }
    var multiplyTwo = [];
     for (var k = 0; k < arr.length; k++){
      if(arr[k]+arr[k] >= 10){ (arr[k] + arr[k]) - 9;
     }else if(arr[j]+arr[j] <= 10){arr[j] + arr[j]
     }
     multiplyTwo.unshift(arr[k]);
     return sum+= evenIndex[i]+oddIndex[j]+multiplyTwo[k];
     if(sum % 10 === 0){var mensagem = document.write('cartão válido')
   }else{var mensagem = document.write('cartão inválido')}
   }
     }
   }return mensagem;
  }
  isValidCard();
