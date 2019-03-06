// 코드 6-28 X-ray 4 하이4

var user = _.find(users, function(user) { return user.id == 1; });
var posts = user.posts;
var post = _.find(posts, function(post) { return post.id == 4; });
var body = post.body;
console.log(body);
// 하이4
