// 코드 3-25

var list1 = {};
list1[0] = 1, list1[1] = 2, list1[2] = 3, list1.length = 3;
list1.pop = function() {
  delete this[this.length];
};
