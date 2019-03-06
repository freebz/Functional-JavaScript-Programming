// 코드 6-34

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

// [1]
_.set(users, '(#1)->name', function(name) {
  return name.toLowerCase();
});
console.log(_.sel(users, '(#1)->name')); // bj

// [2]
_.set(users, '(#1)->posts', function(posts) {
  return _.reject(posts, function(post) {
    return post.comments.length < 2;
  });
});
console.log(_.sel(users, '(#1)->posts').length); // 2


// [3] immutable
_.go(
  _.im.set(users, '(#1)->posts', function(posts) {
    return _.pluck(posts, 'body');
  }),
  function(users2) {
    console.log(users == users2);	 // false
    console.log(users2[0].posts);        // ["하이2", "하이4"]
    console.log(users[0].posts[0].body); // "하이2"
  });
