var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + (katzDeliLine.indexOf(name) + 1) + " in line."
}

function nowServing (array) {
  if (array.length === 0) {
    return "There is nobody waiting to be served!"
    }
  else {
    var first = array.shift();
    return "Currently serving " + first + ".";
  }
}

function currentLine(array) {
  if ( array.length === 0 ) {
    return "The line is currently empty."
  }
  else {
    var i = 1;
    var j = 0;
    var s = "The line is currently: "
    while (i < array.length) {
      array.push(i + array[j])
      i++;
      
    }
  }
}
