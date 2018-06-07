
var word = prompt('Digite sua palavra');
var cifra = word;
function cipher() {
  var result = ''
  var firstCharIdx = 'A'.charCodeAt(0);
  var offSet = ('z'.charCodeAt(0) - 'A'.charCodeAt(0))+1
    for (var i = 0; i < cifra.length; i ++) {
      var oldCharIdx = cifra[i].charCodeAt(0);
      var oldIdxInAlpha = oldCharIdx - firstCharIdx;
      var nwIdxInAlpha = (oldIdxInAlpha + 7) % offSet;
      var newChar = String.fromCharCode(firstCharIdx + nwIdxInAlpha);
      result += newChar;
    }
   return document.write('Palavra criptografa: ' + result);
}
 cipher();
