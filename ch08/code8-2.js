// 코드 8-2 할 일 생성 및 닫기

$('body')
  .on('keyup', '.create', _.pipe(
    _.v('target'),		// 첫 번째 인자로 e가 들어오고 e.target이 됨
    _.tap(			// _.tap으로 감싸면 내부 실행 후 위에서 받은 input을
                                // 아래 _.set('value'..에게 전달
      function(input) {
	return { body: input.value }; // todo key/value
      },
      _.t('todo', '\
        li.todo_item\
          .body {{todo.body}}'), // <li class="todo_item">
      				 // <div class="body">내용</div></li>
      $,			 // 위에서 생성된 문자열을
      				 // $("<li class="to"..</li>")
      _('appendTo', '#todos', list)), // function(li) { li.appendTo('#todos .list');
    _.set('value', '')		      // 위에서 내려온 input을 받아 input.value = '';
  ));
