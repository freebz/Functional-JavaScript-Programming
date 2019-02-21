// 코드 4-24 파이프라인에서 this 사용

// 정의 후 call을 통한 실행
_.pipe(
  function() {
    return this.a;
  },
  console.log,    // 1;
  function() {
    this.b = 2;
    return this;
  },
  console.log     // { a: 1, b: 2 };
).call({ a: 1 }); // { a: 1 } 이 파이프라인 내부의 this가 된다.

// .으로 접근하여 메서드 실행
var obj = {
  a: 10,
  method1: _.pipe(
    function() {
      return this.a;
    },
    console.log,    // 10;
    function() {
      this.b = 2;
      return this;
    },
    console.log     // { a: 10, b: 2, method1: function };
  )
};
obj.method1();
