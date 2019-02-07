// 코드 2-34 메모이제이션(memoization) 기법

// 원래의 L
function L(str) {
  var splitted = str.split('=>');
  return new Function(splitted[0], 'return (' + splitted[1] + ');');
}

// 메모이제이션 기법
function L2(str) {
  if (L2[str]) return L2[str]; // [1] 혹시 이미 같은 `str`로 만든 함수가 있다면 즉시 리턴
  var splitted = str.split('=>');
  return L2[str] = new Function(splitted[0], 'return (' + splitted[1] + ');');
  // 함수를 만든 후 L2[str]에 캐시하면서 리턴
}
