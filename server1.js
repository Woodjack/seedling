//// *****************************************
//
//  connects to seseme monument,
//    reacts to nearby interaction and sends messages on unique events
//
// check distance via sensor ->    var distance = sensor();

var clientio = require('socket.io-client');
//var client = clientio.connect('http://10.0.1.240:7000');

var gpio = require("pi-gpio");
var usonic = require('r-pi-usonic');
var sensor = usonic.sensor(24, 23, 450);

gpio.open(15, "output", function(err) {
  console.log('pin 16 ready')});

//client.emit('checkIn', 'seedling #1');

// read the sensor every 5 ms and if it's less than 20cm, pull trigger
setInterval(function(){
  if(sensor() < 20){
    console.log('TRIGGER!')
    gpio.write(15, 1, function() {          // Set pin 16 high (1)
      //gpio.close(16);                     // Close pin 16
    });
  }
  else{
    gpio.write(15, 0, function() {          // Set pin 16 high (1)
      // Close pin 16
    });
  }
}, 5)
