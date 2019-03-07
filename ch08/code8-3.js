// 코드 8-3 _.if 로 엔터 키만 허용

function enter_n_has_val(e) {
  return e.keyCode == 13 && e.target.value;
}

$('body')			// 이 부분을 통과해야 _.pipe가 리턴한 한수 실행
  .on('keyup', '.create', _.if(enter_n_has_val, _.pipe(
    _.v('target'),
    _.tap(
      function(input) {
	return { body: input.value };
      },
      _.t('todo', '\
        li.todo_item\
          .body {{todo.body}}'),
      $,
      _('appendTo', '#todos .list')),
    _.set('value', '')
  )));
