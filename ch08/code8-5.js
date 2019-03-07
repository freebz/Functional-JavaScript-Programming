// 코드 8-5

/* 범용적 코드 */
function enter_n_has_val(e) {
  return e.keyCode == 13 && e.target.value;
}

/* 앱 코드 */
_.go({
  list: [],	   // 할 일 목록을 담을 배열
}, function(app) { // 익명 함수를 _.go로 즉시 실행하여 지역화

  $('body')
    .on('keyup', '.create', _.if(enter_n_has_val, _.pipe(
      _.v('target'),
      _.tap(
	function(id) {	           // 클로저를 이용해 고유 아이디 생성 ++id
	  return function(input) { // 리턴되어 파이프라인에서 사용될 함수
	    return app.list[app.list.length] = { // 배열에 추가하면서 동시에
	      					 // todo key/value 아래로 리턴
	      id: ++id, body: input.value, completed: false // id, completed 추가
	    };
	  }
	}(0), // 즉시 실행 함수
	_.t('todo', '\
        li.todo_item[todo_id="{{todo.id}}" completed="{{todo.completed}}"\
          input.toggle[type="checkbox" {{todo.completed ? "checked": ""}}]\
          .body {{todo.body}}\
          button[type="button"].remove remove'),
	// li의 attribute로 todo_id와 completed 추가
	// .todo_item[completed="true"] .body { text-decoration: line-through; }
	// completed에 따라 체크 박스의 checked 여부 결정하도록 추가
	$,
	_('appendTo', '#todos .list')),
      _.set('value', ''),
      function() {
	console.log(app.list); // 할 일을 생성할 때마다 데이터에 쌓이는지 확인해보기
	// [{id: 1 ...}]
	// [{id: 1 ...}, {id: 2 ...}]
	// [{id: 1 ...}, {id: 2 ...}, {id: 3 ...}]
      }
    )));

  function e_to_todo_item(e) {
    return $(e.target).closest('.todo_item');
  }

  function todo_item_to_todo(todo_item) {
    return _.find_where(app.list, { id: todo_item.attr('todo_id') });
  }

  $('body')
    .on('click', '.remove', _.pipe(
      e_to_todo_item,    // 아래 [1]에도 동일 코드가 필요해 함수로 만들고 중복 제거
      _('remove'),	 // _.partial로 위해서 내려올 element의 메서드 remove를
      			 // 실행하는 ㅎ마수 생성,
      todo_item_to_todo, // 아래 [2]에도 동일 코드가 필요해 함수로 만들고 중복 제거
      _(_.remove2, app, 'list'), // app.list에서 위에서 내려온 todo를 제거
      function() {
	console.log(app.list);	 // 잘 지워졌는지 확인해보기
      }
    ))

    .on('change', '.toggle', _.pipe(
      function(e) {
	return e_to_todo_item(e).attr('completed', e.target.checked); // [1] 재사용
      },
      todo_item_to_todo,	 // [2] 재사용
      _.set('completed', _.not), // 위에서 내려오는 todo에
      				 // todo.completed = !todo.completed 실행,
      function() {
	console.log(app.list);	 // 상태가 잘 변경되었는지 확인해보기
      }
    ));

});
