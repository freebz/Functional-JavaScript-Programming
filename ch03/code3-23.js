// 코드 3-23

console.log(list1[0] == 1 && list1[1] == 2 && list1[2] == 3);
// true
console.log(list1.length == 3);
// true
list1.pop();
console.log(list1.length);
// 2
for (var i = 0; i < list1.length; i++) {
  console.log(list1[i]);
}
// 1
// 2
