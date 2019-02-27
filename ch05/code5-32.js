// 코드 5-32 _go.call

var user = { name: "Cojamm" };

_.go.call(user, 32,
  function(age) {
    this.age = age;
  },
  function() {
    console.log(this.name);
    // Cojamm
  },
  function() {
    this.job = "Rapper";
  });

console.log(user);
// { name: 'Cojamm', age: 32, job: 'Rapper' }
