
//// *****************************************
//
//  Calculates the range using ultrasonic range finder
//

var usonic = require('r-pi-usonic');

var sensor = usonic.sensor(24, 23, 450);

console.log('welcome')
var distance = sensor();
console.log(distance)


/*
setInterval(function(){
  console.log(sensor())
}, 1000)
*/
