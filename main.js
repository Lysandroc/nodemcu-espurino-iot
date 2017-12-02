let isOnVermelho = false;
let isOnVerde = false;
let isOnAmarelo = false;
const interval = 3000;

pinMode(D13, 'output');
pinMode(D2, 'output');
pinMode(D5, 'output');

console.log(getPinMode(D13));
console.log(getPinMode(D2));
console.log(getPinMode(D5));


setInterval(() => {

//        isOnVermelho = false;
//        isOnAmarelo = false;
//        isOnVermelho = true;

//        digitalWrite(D13, isOnVermelho);
//        digitalWrite(D2, isOnVerde);
//        digitalWrite(D5, isOnAmarelo);



setTimeout(() => {
  digitalWrite(D13, true);  
  digitalWrite(D2, false);
  digitalWrite(D5, false);
},0);

setTimeout(() => {
  digitalWrite(D13, false);  
  digitalWrite(D2, true);
  digitalWrite(D5, false);
},2000);

setTimeout(() => {
  digitalWrite(D13, false);  
  digitalWrite(D2, false);
  digitalWrite(D5, true);
},6000);
}, 9000);





let pino = D12; 


var isLedOn = false;
var lightThreshold = 0.7;

pinMode(pino, 'output');

digitalWrite(pino, false);

setInterval(function() {
    console.log("Light Level: " + analogRead());

    // Read Photo Cell from A0
    var lightLevel = analogRead();

    if (lightLevel < lightThreshold && !isLedOn) {
        console.log("It's Dark. Turning light on");
        digitalWrite(pino, true);
        isLedOn = true;
    }
    if (lightLevel > lightThreshold && isLedOn) {
        console.log("It's Light. Turning light off");
        digitalWrite(pino, false);
        isLedOn = false;
    }
    isLedOn = !isLedOn;
    digitalWrite(pino, isLedOn);

}, 10000);

