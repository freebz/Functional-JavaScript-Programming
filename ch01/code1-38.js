// 코드 1-38 _.compose로 함수 합성하기

/* 원래 코드
_.some = function(list) {
  return not(not(positive(list)));
};
_.every = function(list) {
  return beq(-1)(negativeIndex(list));
}; */


_.some = _.compose(not, not, positive);
_.every = _.compose(beq(1), negativeIndex);
