// 코드 6-35

var users = [
  {
    id: 1,
    name: 'BJ',
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
    posts: [
      { id: 3, body: '하이3', comments: [{ id: 6, body: '코멘트6' }] }
    ]
  }
];
console.log(
  _.deep_pluck(users, 'posts.comments')
);
// [ { id: 3, body: '코멘트3' }, { id: 1, body: '코멘트1' }, { id: 2, body: '코멘트2' },
//   { id: 4, body: '코멘트4' }, { id: 5, body: '코멘트5' }, { id: 6, body: '코멘트6' } ]

console.log(
  _.deep_pluck(users, 'posts.comments.body')
);
// [ '코멘트3', '코멘트1', '코멘트2', '코멘트4', '코멘트5', '코멘트6' ]

console.log(
  _.deep_pluck(users, 'posts.comments.id')
);
// [ 3, 1, 2, 4, 5, 6 ]
