// 코드 6-22 key로만 찾기

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

// key로만 찾기
console.log(
  _.sel(users, '0->name'),	       // BJ
  _.sel(users, '1 -> name'),	       // PJ
  _.sel(users, '0-> post_count'),      // 3
  _.sel(users, '1 ->post_count'),      // 1
  _.sel(users, '0-> posts-> 1-> body') // 하이2
);
