
var mioNumero = Math.floor(Math.random() * 6) + 1;
var numeroPc = Math.floor(Math.random() * 6) + 1;

if(mioNumero<numeroPc){
  document.getElementById('result').innerHTML = "tuo lancio:" + mioNumero + "<br>lancio del pc :" + numeroPc + "<br>e vince lui!!"
}else if(mioNumero>numeroPc){
  document.getElementById('result').innerHTML = "tuo lancio:" + mioNumero + "<br>lancio del pc :" + numeroPc + "<br>e vinci tu!!"
}else{
  document.getElementById('result').innerHTML = "tuo lancio:" + mioNumero + "<br>lancio del pc :" + numeroPc + "<br>pareggio, ritenta"
}