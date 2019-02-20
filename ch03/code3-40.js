// 코드 3-40

bloop(
  function(v) { return v; },
  function() {}
)(
  [5, 6, 8],
  function(v) { console.log(v) }
);
// 5
// 6
// 7
