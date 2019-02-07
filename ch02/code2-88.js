// 코드 2-88

(function() {
  console.log(this, arguments);
  // {hi: 1} [1, 2, 3]
  (()=> {
    console.log(this, arguments);
    // {hi: 1} [1, 2, 3]
    (()=> {
      console.log(this, arguments);
      // {hi: 1} [1, 2, 3]
    }) ();
  }) ();
}).call({ hi: 1}, 1, 2, 3)
