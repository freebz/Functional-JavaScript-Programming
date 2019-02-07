// 코드 2-83 추가된 부분 자세히 보기

// 변경 전
func.apply(null, arguments);

// 변경 후
(function wait(args) {
  for (var i = 0; i < args.length; i++)
    if (args[i] && args[i].name == '_async_cb_receiver')
      return args[i](function(arg) { args[i] = arg; wait(args); }); // 재귀
  func.apply(null, args);
})(arguments);
