// 코드 6-31 _.im.set

_.go(
  _.im.set(user, 'posts -> (#4) -> comments -> (#4) -> body', '코멘트4를 새롭게 수정'),
  function(user2) {
    console.log(
      user == user2,		       // false
      user.posts[2].comments[0].body,  // 코멘트4를 수정
      user2.posts[2].comments[0].body, // 코멘트4를 새롭게 수정

      user.posts == user2.posts,       // false
      user.posts[0] == user2.posts[0], // true 기존 값 공유
      user.posts[1] == user2.posts[1], // true 기존 값 공유
      user.posts[2] == user2.posts[2], // false 부모 라인이므로 새로운 값
      user.posts[2].comments[0] == user2.posts[2].comments[0], // false 새로운 값
      user.posts[2].comments[1] == user2.posts[2].comments[1]  // true 기존 값 공유
    )
  });
