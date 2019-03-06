// 코드 6-17 Backbone.Model

var model1 = new Backbone.Model({ a: 1, b: 2, c: 3 });
var model2 = model1.set('b', 50);
console.log(model1.get('b'));  // 50
console.log(model2.get('b'));  // 50
console.log(model1 == model2); // true
