// 코드 6-29 predicate 3

var users = [
  {
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
    post_count: 1
  }
];

console.log(
  _.sel(users, '($.post_count > 1) -> posts -> ($.comments.length > 1) -> body')
);
// 하이2
