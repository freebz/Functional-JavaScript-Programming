// 코드 9-12 _.memoize2 적용하기

function enter_n_has_val(e) {
  return e.keyCode == 13 && e.target.value;
}

_.go({
  list: [],
  filter_name: "all",
}, function(app) {

  var add_todo = function(id) {
    return function(input) {
      app.list._memoize = null; // [1] app.list의 _memoize 갱신으로 app.list가 변경되었음을 기록
      return app.list[app.list.length] = { id: ++id, body: input.value, completed: false };
    }
  }(0);

  function filter_is_not(filter_name) {
    return app.filter_name != filter_name;
  }

  var reject_completed = _.memoize2(_.reject('completed'));
  // [2] 곳곳에 사용되고 있는 reject_completed 함수에 _.memoize2 적용

  var append_items = _.pipe(
    // [3] 템플릿으로 HTML을 만들어 jQuery 객체를 만드는 부분까지 _.memoize2 적용
    _.memoize2(
      _.wrap_arr,
      // [4] 부모가 변경되어도 안쪽의 값이 동일한 경우 만들었던 HTML을 리턴하도록
      _.sum(_.memoize2(_.t('todo', '\
        li.todo_item[todo_id="{{todo.id}}" completed="{{todo.completed}}"]\
          input.toggle[type="checkbox" {{todo.completed ? "checked": ""}}]\
          .body {{todo.body}}\
          button[type="button"].remove remove'))),
      $),
    _('appendTo', '#todos .list')); // [5] 여기는 _.memoize2 적용을 하지 않음

  function e_to_todo_item(e) {
    return $(e.target).closest('.todo_item');
  }

  var count_text = _.s$('{{$}} item{{$ == 1 ? "" : "s"}} left');

  function draw_count() {
    $('#todos').attr('count', app.list.length)
      .find('.active_count').text(count_text(reject_completed(app.list).length));
                                  // [6] _.memoize2 적용된 reject_completed 함수 사용
  }

  function filter_changer(filter_name, filter) {
    return _.if(_(filter_is_not, filter_name), function() {
      app.filter_name = filter_name;
      $('#todos').attr('filter', filter_name).find('.list').html('');
      return _.go(app.list, filter, append_items);
                                  // [7] _.memoize2 적용된 filter, append_itmes 함수 사용
    });
  }

  $('body')
    .on('keyup', '.create',
      _.if(enter_n_has_val, _.pipe(
	_.v('target'),
	_.tap(add_todo, _.if(_(filter_is_not, 'completed'), append_itmes)),
	_.set('value', ''),
	draw_count)))

    .on('click', '.remove', _.pipe(
      e_to_todo_item,
      _('remove'),
      _('attr', 'todo_id'),
      function(todo_id) {
	app.list = _.reject(app.list, function(todo) { return todo.id == todo_id; });
	// [8] 불변적(immutable)으로 변경, app.list를 새로 생성,
      }, draw_count))

    .on('change', '.toggle', _.pipe(
      function(e) {
	return e_to_todo_item(e).attr('completed', e.target.checked);
      },
      _.tap(_.if(_(filter_is_not, 'all'), _('remove'))),
      _('attr', 'todo_id'),
      function(todo_id) {
	app = _.im.set(app, 'list->(#'+todo_id+')->completed', _.not)[0];
	// [9] 불변적(immutable)으로 변경, app이 새로 생성됨
      },
      draw_count))

    .on('click', 'li.all', filter_changer('all', _.idtt))
    .on('click', 'li.active', filter_changer('active', reject_completed))
                                             // [10] _.memoize2 적용된 reject_completed
    .on('click', 'li.completed', filter_changer('completed',
						_.memoize2(_.filter('completed'))))
                                             // [11] _.filter에 _.memoize2 적용

    .on('click', '.clear_completed', function() {
      app.list = reject_completed(app.list);
      // [12] _.memoize2 적용된 reject_completed, app.list 새로 생성(불변적)되어 캐시 비워짐
      if (filter_is_not('active')) $('.todo_item[completed="true"]').remove();
      draw_count();
    });

});
