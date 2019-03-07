// 코드 8-9

function enter_n_has_val(e) {
  return e.keyCode == 13 && e.target.value;
}

_.go({
  list: [],
  filter_name: "all",
}, function(app) {
  
  var add_todo = function(id) {
    return function(input) {
      return app.list[app.list.length] = {
	id: ++id, body: input.value, completed: false
      };
    }
  }(0);

  function todo_item_to_todo(todo_item) {
    return _.find_where(app.list, { id: todo_item.attr('todo_id') });
  }

  function filter_is_not(filter_name) {
    return app.filter_name != filter_name;
  }

  var reject_completed = _.reject('completed');

  var append_items = _.pipe(
    _.wrap_arr,
    _.sum(_.t('todo', '\
      li.todo_item[todo_id="{{todo.id}}" completed="{{todo.completed}}"]\
        input.toggle[type="checkbox" {{todo.completed ? "checked": ""}}]\
        .body {{todo.body}}\
        button[type="button"].remove remove')),
    $,
    _('appendTo', '#todos .list'));

  function e_to_todo_item(e) {
    return $(e.target).closest('.todo_item');
  }

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
	_.if(enter_n_has_val, _.pipe(
	  _.v('target'),
	  _.tap(add_todo, _.if(_(filter_is_not, 'completed'), append_items)),
	  _.set('value', ''),
	  draw_count)))

    .on('click', '.remove', _.pipe(
      e_to_todo_item,
      _('remove'),
      todo_tiem_to_todo,
      _(_.remove2, app, 'list'),
      draw_count))

    .on('change', '.toggle', _.pipe(
      function(e) { return e_to_todo_item(e).attr('completed', e.target.checked); },
      _.tap(_.if(_(filter_is_not, 'all'), _('remove'))),
      todo_item_to_todo,
      _.set('completed', _.not),
      draw_ount))

    .on('click', 'li.all', filter_changer('all', _.idtt))
    .on('click', 'li.active', filter_changer('active', reject_completed))
    .on('click', 'li.completed', filter_changer('completed', _.filter('completed')))

    .on('click', '.clear_completed', function() {
      app.list = reject_completed(app.list);
      if (filter_is_not('active')) $('.todo_item[completed="true"]').remove();
      draw_count();
    });

});
