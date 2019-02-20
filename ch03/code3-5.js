// 코드 3-5 _.values, _.keys, _.extend, _.pick, _.omit

_.values({ id: 1, name: "ID", age: 32 });
// [ 1, 'ID', 32 ]

_.keys({ id: 1, name: "ID", age: 32 });
// [ 'id', 'name', 'age' ]

_.extend({ id: 1, name: "ID", age: 32 }, { age: 36, job: "Developer" });
// { id: 1, name: 'ID', age: 36, job: 'Developer' }

_.pick({ id: 1, name: "ID", age: 32 }, 'name', 'age');
// { name: 'ID', age: 32 }

_.omit({ id: 1, name: "ID", age: 32 }, 'name', 'age');
// { id: 1 }
