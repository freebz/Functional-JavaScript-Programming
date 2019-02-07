// 코드 2-29 간단 버전 문자열 화살표 함수

function L(str) {
  var splitted = str.split('=>');
  return new Function(splitted[0], 'return (' + splitted[1] + ');');
}

L('n => n * 10')(10);
// 100
L('n => n * 10')(20);
// 200
L('n => n * 10')(30);
// 300

L('a, b => a + b')(10, 20);
// 30
L('a, b => a + b')(10, 5);
// 15
