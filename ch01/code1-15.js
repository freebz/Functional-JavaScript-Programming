// 코드 1-15 화살표 함수와 함께

// ES6
console.log(log_length(
  map(filter(users, u => u.age < 30), u => u.age)));

console.log(log_length(
  map(filter(users, u => u.age >= 30), u => u.name)));

// 이것도 괜찮다.
var under_30 = u => u.age < 30;
var over_30 = u => u.age >= 30;

console.log(log_length(
  map(filter(users, under_30), u => u.age)));

console.log(log_length(
  map(filter(users, over_30), u => u.name)));

// 아니면 이것도 괜찮다
var ages = list => map(list, v => v.age);
var names = list => map(list, v => v.name);

console.log(log_length(ages(filter(users, under_30))));
console.log(log_length(names(filter(users, over_30))));

// 마지막으로 한 번만 고쳐보자
var bvalues = key => list => map(list, v => v[key]);
var ages = bvalues('age');
var names = bvalues('name');

// bvalues가 있으면 화살표 함수가 아니어도 충분히 간결해진다.
function bvalues(key) {
  return function(list) {
    return map(list, function(v) { return v[key]; });
  }
}
var ages = bvalues('age');
var names = bvalues('name');
var under_30 = function(u) { return u.age < 30; };
ver over_30 = function(u) { return u.age >= 30; };

console.log(log_length(ages(filter(users, under_30))));
console.log(log_length(names(filter(users, over_30))));

// bvalues는 이렇게도 할 수 있다. (진짜 마지막)
function bvalues(key) {
  var value = bvalue(key);
  return function(list) { return map(list, value); }
}
