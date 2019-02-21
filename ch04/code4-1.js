// 코드 4-1 _.once

var hi = _.once(function() {
  console.log('hi');
});

hi();
// hi
hi();
// 아무 일도 일어나지 않음
