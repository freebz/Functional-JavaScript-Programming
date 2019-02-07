// 코드 2-36 Partial.js의 문자열 화살표 함수

try { var has_lambda = true; eval('a=>a'); } catch (err) { var has_lambda = false; }
_.l = _.lambda = function f(str) {
  if (typeof str !== 'string') return str;
  if (f[str]) return f[str]; // [1]
  if (!str.match(/=>/)) return f[str] = new Function('$', 'return (' + str + ')'); // [2]
  if (has_lambda) return f[str] = eval(str); // [3] ES6
  var ex_par = str.split(/\s*=>\s*/);
  return f[str] = new Function( // [4]
    ex_par[0].replace(/(?:\b[A-Z]|\.[a-zA-Z$\d]*|[a-zA-Z_$][a-zA-Z_$\d]*\s*:|this|arguments|'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"/g, '').match(/([a-z_$][a-z_$\d]*)/gi) || [],
    'return (' + ex_par[1] + ')');
};

console.log( _.l('(a, b) => a + b')(10, 10) );
// 20
console.log( _.l('a => a * 5')(10) );
// 50
console.log( _.l('$ => $ * 10')(10) );
// 100

// 사용하는 인자가 하나일 때 인자 선언부를 생략한 문자열 화살표 함수
console.log( _.l('$ * 10')(10) );
// 100
console.log( _.l('++$')(1) );
// 2
