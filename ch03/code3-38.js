// 코드 3-38

_.each([1, 2, 3], console.log);
// 1 0 [1, 2, 3]
// 2 1 [1, 2, 3]
// 3 2 [1, 2, 3]

_.each({id: 5, name: "JE", age: 27}, console.log);
// 5 'id' { id: 5, name: 'JE', age: 27 }
// JE name { id: 5, name: 'JE', age: 27 }
// 27 'age' { id: 5, name: 'JE', age: 27 }
