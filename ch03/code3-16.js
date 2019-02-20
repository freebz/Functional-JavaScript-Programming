// 코드 3-16

// Underscore.js
var temp1 = [];
for(var i = 0; i < list.length; i++) {
  temp1.push(mul10(list[i]));
}

var temp2 = [];
for(i = 0; i < temp1.length; i++) {
  temp2.push(sub10(temp1[i]));
}

var temp3 = [];
for(i = 0; i < temp2.length; i++) {
  temp3.push(square(temp2[i]));
}

// Lodash
var temp = [];
for(var i = 0; i < list.length; i++) {
  temp.push(square(sub10(mul10(list[i]))));
}
