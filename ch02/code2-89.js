// 코드 2-89

[1, 2, 3].map(function(v) {
  return v * 2;
});
// [ 2, 4, 6 ]
[1, 2, 3].map(v => v * 2);
// [ 2, 4, 6 ]

[1, 2, 3, 4, 5, 6].filter(function(v) {
  return v > 3;
});
// [ 4, 5, 6 ]
[1, 2, 3, 4, 5, 6].filter(v => v > 3);
// [ 4, 5, 6 ]

[1, 2, 3].reduce(function(a, b) {
  return a + b;
});
// 6
[1, 2, 3].reduce((a, b) => a + b);
// 6
