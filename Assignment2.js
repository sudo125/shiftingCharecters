var myVar;

function LtR(){
  clearInterval(myVar);
myVar = setInterval(function () {
var t1l = document.getElementById('t1').value.length;
var t1 =document.getElementById('t1');
var t2 =document.getElementById('t2');

  t2.value += t1.value.charAt(0);
  t1.value = t1.value.substr(1, t1l-1);
}, 2000);


}

function RtL(){
  clearInterval(myVar);
  
myVar = setInterval(function () {
var t2l = document.getElementById('t2').value.length;
var t1 =document.getElementById('t1');
var t2 =document.getElementById('t2');

  t1.value = t2.value.charAt(t2l-1) +document.getElementById('t1').value;
  t2.value = t2.value.substr(0, t2l-1);
}, 2000);


}

function pause(){
  clearInterval(myVar);
}