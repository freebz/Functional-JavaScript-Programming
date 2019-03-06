// 코드 6-27 predicate 2

console.log(
  _.sel(users, '(#1) -> name'),			// BJ
  _.sel(users, '(#1) -> posts -> (#4) -> body') // 하이4
);
