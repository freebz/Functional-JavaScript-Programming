// 코드 8-4

function enter_n_has_val(e) {
  return e.keyCode == 13 && e.target.value;
}

$('body')
  .on('keyup', '.create', _.if(enter_n_has_val, _.pipe(
    _.v('target'),
    _.tap(
      function(input) {
	return { body: input.value };
      },
      _.t('todo', '\
        li.todo_item\
          input.toggle[type="checkbox"]\
          .body {{todo.body}}\
          button[type="button"].remove remove'); // 체크 박스와 remove 버튼 추가
      $,
      _('appendTo', '#todos .list')),
    _.set('value', '')
  )))

  .on('click', '.remove', function(e) {
    $(e.target).closest('.todo_item').remove(); // 삭제
  });
