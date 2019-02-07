// 코드 2-43 즉시 실행 + 유명 함수 기법이 아닌 경우

function flatten2(arr, new_arr) {
  arr.forEach(function(v) {
    Array.isArray(v) ? flatten2(v, new_arr) : new_arr.push(v); // [3]
  });
  return new_arr;
}
flatten2([1, [2], [3, 4]], []); // 항상 빈 Array를 추가로 넘겨야 하는 복잡도 증가

function flatten3(arr, new_arr) {
  if (!new_arr) return flatten3(arr, []); // if문이 생김
  arr.forEach(function(v) {
    Array.isArray(v) ? flatten3(v, new_arr) : new_arr.push(v); // [3]
  });
  return new_arr;
}
flatten3([1, [2], [3, 4]]); // 사용 부분은 [코드 2-42]과 동일해짐
