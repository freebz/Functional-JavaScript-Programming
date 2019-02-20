// 코드 3-55 _.toArray, _.rest, _.reverse

_.toArray = function(list) {
  return Array.isArray(list) ? list : _.values(list);
};
_.rest = function(list, num) {
  return _.toArray(list).slice(num || 1);
};

_.rest([1, 2, 3]);
// [ 2, 3 ]
_.rest({0: 1, 1: 10, 2: 100, 3: 1000, length: 4}, 2);
// [ 100, 1000 ]

/*
[참고]
_.toArray나 _.rest를 구현하는 가장 좋은 아이디어는 [코드 2-60]에서도 확인했었다.
위 코드는 이 장의 목적(함수적 아이디어 생각해보기)을 위해 위와 같이 만들었다.
*/

_.reverse = function(list) {
  return _.toArray(list).reverse();
};

_.reverse([1, 2, 3]);
// [ 3, 2, 1 ]
_.reverse({});
// []
_.reverse(null);
// []
_.rest(_.reverse({0: 1, 1: 10, 2: 100, 3: 1000, length: 4}));
// [ 100, 10, 1 ]
