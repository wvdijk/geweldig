var x = ["Yippie-Ki-Yay Motherfucker! ", "Qapla'! ", "Cthulhu fhtagn! ", "GE-WEL-DIG!!1!11!! ", "Verhip! ", "Jofel! ", "Vet! ", "Drommels! ", "l33t! ", "Ajeto! "];
var y = document.getElementsByClassName("paywall-popup__header")[0].textContent;
var z = x[Math.floor(Math.random() * x.length)];
var res = y.replace("Geweldig.", z);
document.getElementsByClassName("paywall-popup__header")[0].textContent = res;
