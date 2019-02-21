// 코드 4-28 메서드를 부분 적용한 새로운 함수 만들기

var background = _.partial('css', 'background');
background($('body'), 'green'); // $('body').css('background', 'green')와
				// 동일하게 동작. 배경색이 녹색으로 변함

var concat = _.partial('concat');
concat([1, 2], 3); // --> [1, 2].concat(3)과 동일하게 동작
// [1, 2, 3]
