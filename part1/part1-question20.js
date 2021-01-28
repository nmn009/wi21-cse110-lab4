function myFunction() {
  var myVar = setInterval(timeFunc,1000);
}

function timeFunc() {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}

myFunction();
