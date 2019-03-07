// 코드 7-10

sql.insert = function(table, data) {
  data = _.wrap_arr(data);
  var columns = _.go(data, _.map(_.keys), _.flatten, _.uniq); // columns 뽑아내고
  var defaults = _.object(_.map(columns, v=>[v, "DEFAULT"])); // 그 순서대로
    							      // defaults를 만들고

  return 'insert into "'+table+'" ("' + columns.join('", "') + '") values '+
    _.map(data, __(_.idtt,
      _.map_object(v => _.is_string(v) ? "'" + v + "'" : v),
      _.values, v => '(' + v.join(', ') + ')'
    )).join(', ');
};
