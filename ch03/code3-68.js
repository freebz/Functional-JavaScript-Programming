// 코드 3-68 _.findIndex, _.findKey

_.find = bloop(_.noop, _.rester(_.idtt, 2), _.idtt);
_.findIndex = bloop(_.constant(-1), _.rester(_.idtt, 3), _.idtt); // [1]
_.findKey = bloop(_.noop, _.rester(_.idtt, 3), _.idtt); // [2]

_.findIndex([1, 10, 100, 1000], function(v) { return v > 50; });
// 2
_.findIndex([1, 10, 100, 1000], function(v) { return v > 1000; });
// -1

_.findKey({ id: 4, name: "PJ", age: 28 }, function(val) { return typeof val == "string"; });
// name
_.findKey({ id: 4, name: "PJ", age: 28}, Array.isArray);
// undefined
