// 코드 6-9 차이는 3명입니다. 과한 파이프라인 버전

var len = _.val('length');
var diff3 = __(
  _.all(len, __(_.reject, len)), sub, _.s$('차이는 {{$}}명입니다.'), console.log);

/*
 * X-ray
 *
 * __ == _.pipe
 *
 * function len(val) { return val.length; }
 *
 * var diff3 = _.pipe(
 *   function(users, predi) {
 *     return _.mr(len(users, predi), len(_.reject(users, predi)));
 *   },
 *   sub,
 *   _.s$('차이는 {{$}}명입니다.'),
 *   console.log);
 * */

diff3(users2, function(user) { return user.age < 30; });
// 차이는 3명입니다.
