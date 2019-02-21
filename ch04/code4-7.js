// 코드 4-7 애니메이션

var moveRight = method('animate', { left: '+=200' });
var moveDown = method('animate', { top: '+=200' });

moveDown(moveRight($box));
// 오른쪽으로 이동 후 아래로 이동
