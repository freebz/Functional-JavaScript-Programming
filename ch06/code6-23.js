// 코드 6-23 predicate 1

console.log(
  _.sel(users, '(u=>u.id==1) -> name'),				// BJ
  _.sel(users, '(u=>u.id==1) -> posts -> (p=>p.id==4) -> body') // 하이4
);
