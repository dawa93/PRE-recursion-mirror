/**
 * 1. Broswer에 존재하는 document.getElementsByClassName 함수를
 * 직접 구현해봅니다.
 *
 * getElementsByClassName 함수는 현재 documnet에서 주어진
 * className을 가지고 있는 모든 html element를 찾는 함수입니다.
 *
 * - 결과는 항상 배열의 형태로 리턴해줍니다.
 * - document.body, element.childNodes, element.classList를 사용해보세요
 *
 * 2. 그냥 테스트 통과를 하고 싶으시다면, 다음과 같이 구현하면 될거예요.
 *  function getElementsByClassName (className) {
 *    return document.getElementsByClassName(className);
 *  };
 *
 * 하지만 이 과제의 목적은 재귀를 공부하는 것이니, 처음부터 구현해봐야겠지요?
 */

function getElementsByClassName(className) {
  // your code here

  let body = document.body;
  let everyClass = [];

  function findClassName(element) {
    let children = element.children;

    if (element.classList.contains(className)) {
      everyClass.push(element);
    }

    if (element.children.length !== 0) {
      for (let i = 0; i < element.children.length; i++) {
        findClassName(children[i]);
      }
    }
  }

  findClassName(body);
  return everyClass;
}
// function getElementsByClassName(className) {
//   // your code here

//   let body = document.body;
//   let everyClass = [];

//   function findClassName(el) {
//     if (el.classList.contains(className)) {
//       everyClass.push(el);
//     }

//     if (el.children.length !== 0) {
//       for (let i = 0; i < el.children.length; i++) {
//         findClassName(el.children[i]);
//       }
//     }
//   }

//   findClassName(body);
//   return everyClass;
// }

// var body = document.body;
// var bin = [];
// var check = function(body) {
//   if (body.classList && body.classList.contains(className)) {
//     bin.push(body);
//   }
//   if (body.hasChildNodes()) {
//     for (var i = 0; i < body.childNodes.length; i++) {
//       check(body.childNodes[i]);
//     }
//   }
// };

// check(body);
// return bin;
