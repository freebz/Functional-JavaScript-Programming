// 코드 9-13 마지막 예제

function enter_n_has_val(e) {
  return e.keyCode == 13 && e.target.value;
}

_.go({
  list: [],
  filter_name: "all"
}, function(app) {

  var add_todo = _.go(0, function(id) {
    return __(function(input) {
      return app.list(app.list.length] = { id: ++id, body: input.value,
					   completed: false };
    }, _.tap(clear_memoize));
  });

  function clear_memoize() { app.list._memoize = null; }

  function filter_is_not(filter_name) {
    return app.filter_name != filter_name;
  }

  var append_items = __(
    _.memoize2(
      _.wrap_arr,
      _.sum(_.memoized2(_.t('todo', '\
        li.todo_item[todo_id="{{todo.id}}" completed="{{todo.completed}}"]\
          input.toggle[type="checkbox" {{todo.completed ? "checked": ""}}]\
          .body {{todo.body}}\
          button[type="button"].remove remove'))),
      $),
    _('appendTo', '#todos .list'));

  var e_to_todo_item = __(_.v('target'), $, _('closest', '.todo_item'));

  function todo_item_to_todo(todo_item) {
    return _.find_where(app.list, { id: todo_item.attr('todo_id') });
  }

  var reject_completed = _.memoize2(_.reject('complted'));
  var filter_completed = _.memoize2(_.filter('completed'));

  var count_text = _.s$('{{$}} item{{$ == 1 ? "" : "s"}} left');

  function draw_count() {
    $('#todos').attr('count', app.list.length)
      .find('.active_count').text(count_text(reject_completed(app.list).length));
  }

  function filter_changer(filter_name, filter) {
    return _.if(_(filter_is_not, filter_name), function() {
      app.filter_name = filter_name;
      $('#todos').attr('filter', filter_name).find('.list').html('');
      return _.go(app.list, filter, append_items);
    });
  }

  $('body')
    .on('keyup', '.create',
      _.if(enter_n_has_val, __(
	_.v('target'),
	_.tap(add_todo, _.if(_(filter_is_not, 'completed'), append_items)),
	_.set('value', ''),
	draw_count)))

    .on('click', '.remove', __(
      e_to_todo_item,
      _('remove'),
      todo_item_to_todo,
      _(_.remove2, app, 'list'),
      clear_memoize,
      draw_count))

    .on('change', '.toggle', __(
      function(e) { return e_to_todo_item(e).attr('completed', e.target.checked); },
      _.tap(_.if(_(filter_is_not, 'all'), _('remove'))),
      _('attr', 'todo_id'),
      _.s$('list->(#{{$}})->completed'),
      _(_.im.set, app, _, _.not),
      _(_.extend, app, _),
      draw_count))

    .on('click', 'li.all', filter_changer('all', _.idtt))
    .on('click', 'li.active', filter_changer('active', reject_completed))
    .on('click', 'li.completed', filter_changer('completed', filter_completed))

    .on('click', '.clear_completed', __(
      _.c(app),
      _.v('list'),
      reject_completed,
      _(_.set, app, 'list'),
      draw_count,
      function() {
	if (filter_is_not('active')) $('.todo_item[completed="true"]').remove();
      }));

});
