// 코드 6-30 _.set

var user = {
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
};

_.set(user, 'posts -> (#4) -> comments -> (#4) ->body', '코멘트4를 수정');

console.log( user.posts[2].comments[0].body );
// 코멘트4를 수정
