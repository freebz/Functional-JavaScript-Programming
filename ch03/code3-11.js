// 코드 3-11

// Lodash의 체인 객체
({
  __actions__: [],
  __chain__: true,
  __index__: 0,
  __values__: undefined,
  __rapped__: {
    __actions__: [
      { args: [/*func*/],
	func: function thru(value, interceptor) {},
	thisArg: undefined },
      { args: [/*func*/],
	func: function thru(value, interceptor) {},
	thisArg: undefined },
    ],
    __dir__: 1,
    __filtered__: true,
    __iteratees__: [
      { iteratee: function (num) {}, type: 1 },
    ],
    __takeCount__: 5,
    __views__: [],
    __wrapped__: {
      __actions__: [],
      __chain__: true,
      __index__: 0,
      __values__: undefined,
      __wrapped__: Array(200)
    }
  }
});

// Underscore.js의 체인 객체
({ _wrapped: Array(5), _chain: true });
