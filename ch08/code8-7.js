// 코드 8-7

<button type="button" class="clear_complete">Clear completed</button>
_.go({
  list: [],
  filter_name: "all", // 현재 보고 있는 필터 조건 - 모든 일(all), 할 일(active),
  		      // 한 일(completed)
}, function(app) {

  // 코드 생략
  $('body')
    .on('click', '.clear_completed', function() {
      app.list = _.reject(app.list, 'completed');
      // completed == true인 모든 목록을 제외한 후 app.list에 재할당
      if (filter_is_not('active')) $('.todo_item[completed="true"]').remove();
      // 현재 보고 있는 화면이 active가 아닐 때만(모두 보기 혹은 완료 보고 목록이라면)
      // 한 일 항목 찾아서 제거하기
    });

});
