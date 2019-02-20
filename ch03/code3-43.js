// 코드 3-43 Underscore.js의 _.keys

_.isFunction = function (obj) {
  return toString.call(obj) === '[object Function]';
};

// Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
// IE 11 (#1621), and in Safari 8 (#1929).
if (typeof /./ != 'function' && typeof Int8Array != 'object') {
  _.isFunction = function (obj) {
    return typeof obj == 'function' || false;
  };
}

_.isObject = function(obj) {
  var type = typeof obj;
  return type === 'function' || type === 'object' && !!obj;
};

_.has = function(obj, key) {
  return obj != null && Object.prototype.hasOwnProperty.call(obj, key);
};

// Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
			  'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

function collectNonEnumProps(obj, keys) {
  var nonEnumIdx = nonEnumerableProps.length;
  var constructor = obj.constructor;
  var proto = (_.isFunction(constructor) && constructor.prototype) || Object.prototype;

  // Constructor is a special case
  var prop = 'constructor';
  if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

  while (nonEnumIdx--) {
    prop = nonEnumerableProps[nonEnumIdx];
    if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
      keys.push(prop);
    }
  }
}

_.keys = function(obj) {
  if (!_.isObject(obj)) return []; // [1]
  if (Object.keys) return Object.keys(obj); // [2]
  var keys = [];
  for (var key in obj) if (_.has(obj, key)) keys.push(key); // [3]
  // Ahem, IE < 9.
  if (hasEnumBug) collectNonEnumProps(obj, keys); // [4]
  return keys;
};
