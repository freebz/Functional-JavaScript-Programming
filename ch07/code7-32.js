// 코드 7-32 _.map

var update = function(id) {
  return delay({ id: id, updated_at: new Date() });
};

var ids = [5, 10, 20];
_.go(ids,
  _.map(function(id) { return update(id); }),
  JSON.stringify,
  console.log);

// [{"id":5,"updated_at":"2017-04-07T16:25:53.626Z"},
//  {"id":10,"updated_at":"2017-04-07T16:25:54.627Z"}
//  {"id":20,"updated_at":"20917-04-07T16:25:55.629Z"}]
// 1초씩 증가
