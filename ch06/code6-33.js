// 코드 6-33

var users = [
  {
    id: 1,
    name: 'BJ',
    post_count: 3,
    posts: [
      { id: 1, body: '하이', comments: [{ id: 3, body: '코멘트3' }] },
      { id: 2, body: '하이2', comments: [{ id: 1, body: '코멘트1' },
					 { id: 2, body: '코멘트2' }] },
      { id: 4, body: '하이4', comments: [{ id: 4, body: '코멘트4' },
					 { id: 5, body: '코멘트5' }] }
    ]
  },
  {
    id: 2,
    name: 'PJ',
    post_count: 1,
    posts: [
      { id: 3, body: '하이3', comments: [] }
    ]
  }
];

_.unset(users, '(#2)->name');
console.log(users[1]); // {id: 2, post_count:1, posts: array[1]}

_.remove2(users, '(#1)->posts->(#2)');
console.log(_.pluck(users[0].posts, 'body'));  // ["하이", "하이4"]

_.go(_.im.remove2(users, '(#2)->posts->(#3)'), // immutable
  function(users2) {
    console.log(users2[1].posts[0]); // []
    console.log(users[1].posts);     // [{ id: 3, body: '하이3', comments: [] }]
  });

_.extend2(users, '(#2)->posts->(#3)', { body: "하이3 수정함", updated_at: new Date() });
console.log(users[1].posts[0]);
// {id: 3, body: "하이3 수정함", comments: Array[0], updated_at: Sun Mar 05 ... }

_.push(users, '(#2)->posts->(#3)->comments', { id: 6, body: '코멘트6' });
console.log(users[1].posts[0].comments[0].body); // 코멘트6
