// 코드 4-15 m과 _.partial 다시 사용해 보기

var add_all = _.partial(m, ___, add)

add_all(1, 2, 3, 4);
// 10
add_all(1, 2, 3, 4, 5);
// 15

var sub10 = _.partial(m, ___, 10, sub);

sub10(50);
// 40
sub10(50, 20);
// 20
sub10(50, 20, 10);
// 10
