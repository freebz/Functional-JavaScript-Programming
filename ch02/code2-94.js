// 코드 2-94

((a) => start(f => log(a) || --a && f(f)))(5);
// 5 4 3 2 1
