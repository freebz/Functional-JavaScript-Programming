// 코드 1-32 predicate로 _.identity를 사용한 경우

console.log(_.filter([true, 0, 10, 'a', false, null], _.identity));
// [ true, 10, 'a' ]
