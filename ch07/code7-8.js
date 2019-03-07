// 코드 7-8 sql.insert

var sql = {};
sql.insert = function(table, data) {
  data = _.wrap_arr(data);

  // 사용될 컬럼명들 뽑기
  var columns = _.go(data,  // data = [{x: 0}, {y: 1}, {desc: "설명1", x: 1}]라고 가정
    _.map(_.keys),          // [['x'], ['y'], ['desc', 'x']] data를 모두 돌며 keys를 뽑음
    _.flatten,              // ['x', 'y', 'desc', 'x'] Array 깊이 제거
    _.uniq);                // 'x', 'y', 'desc'] 중복 제거

  // 넘어오지 않은 값이 있을 경우 DEFAULT를 채우기 위해 defaults 만들기
  var defaults = _.go(columns, // columns는 ['x', 'y', 'desc'] 이 상태
    _.map(v=>[v, 'DEFAULT']),
    // [['x', 'DEFAULT'], ['y', 'DEFAULT'], ['desc', 'DEFAULT']]

    _.object);
    // { x: "DEFAULT", y: "DEFAULT", desc: "DEFAULT" }

  // data = [{x: 0}, {y: 1}, {desc: "설명1", x: 1}]라고 가정
  var sql_values = _.map(data, _.pipe(
    _.idtt, // (val, idx, list) 중 첫 번째 인자만 꺼냄

    // 아래 (1, DEFAULT, '설명1')까지의 코멘트들은 data[2]가 v일 때 기준
    _.map_object(v => _.is_string(v) ? "'" + v + "'" : v),
    // {desc: "'설명1'", x: 1}

    v => _.extend({}, defaults, v),
    // {x: 1, y: "DEFAULT", desc: "'설명1'"} 순서도 defaults 기준으로 맞추면서 채움

    _.values, // [1, "DEFAULT", "'설명1'"] 순서에 맞춰 values 뽐기

    v => '(' + v.join(", ") + ')') // (1, DEFAULT, '설명1')
  )
  // _.map 종료 [(0, DEFAULT, DEFAULT), (DEFAULT, 1, DEFAULT), (1, DEFAULT, '설명1')]
  .join(', ');
  // (0, DEFAULT, DEFAULT), (DEFAULT, 1, DEFAULT), (1, DEFAULT, '설명1')

  return 'insert into "'+table+'" ("'+columns.join('", "')+'") values '+sql_values;
};

console.log(
  sql.insert('files', {
    name: "image.png",
    type: "image/png"
  })
);
// insert into "files" ("name", "type") values ('image.png', 'image/png')

console.log(
  sql.insert('files', [
    { name: "image.png", type: "image/png" },
    { type: "image/jpeg", name: "image1.jpg" }, // type, name 순서가 다르게 들어감
    { type: "image/png" } // name 없음
  ])
);
// insert into "files" ("name", "type") values
//   ('image.png', 'image/png'), ('image1.jpg', 'image/jpeg'), (DEFAULT, 'image/png')
//                                순서 맞춰주고                   알아서 채워주도록

/* 위 코드에서 주석을 제거하고 간결하게 표현한 sql.insert 함수 */
sql.insert = function(table, data) {
  data = _.wrap_arr(data);
  var columns = _.go(data, _.map(_.keys), _.flatten, _.uniq);
  var defaults = _.object(_.map(columns, v=>[v, "DEFAULT"]));
  return 'insert into "'+table+'" ("' + columns.join('", "') + '") values ' +
    _.map(data, __(_.idtt,
      _.map_object(v => _.is_string(v) ? "'" + v + "'" : v),
      v => _.extend({}, defaults, v),
      _.values, v => '(' + v.join(', ') + ')'
    )).join(', ');
};
