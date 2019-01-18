// 코드 1-25 bmatch1로 predicate 만들기

function bmatch1(key, val) {
  return function(obj) {
    return obj[key] === val;
  }
}

console.log( find(users, bmatch1('id', 1)) );
// { id: 1, name: 'ID', age: 32 }
console.log( find(users, bmatch1('name', 'HI')) );
// { id: 7, name: 'HI', age: 24 }
console.log( find(users, bmatch1('age', 27)) );
// { id: 5, name: 'JE', age: 27 }
