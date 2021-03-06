/**
 * 1. Broswer에 존재하는 JSON.stringfy 함수를 직접구현해봅니다.
 * JSON.stringfy 함수는 input 값을 JSON 형식으로 변환합니다.
 * 단, undefind와 function은 JSON으로 생략되거나 null 로 변환됩니다.
 *
 * 2. stringfyJSON은 아래와 같이 작동합니다.
 * - Bolean이 input으로 주어졌을 경우
 * stringifyJSON(true);                // 'true'
 *
 * - String이 input으로 주어졌을 경우
 * stringifyJSON('foo');               // '"foo"'
 *
 * - Array가 input으로 주어졌을 경우
 * stringifyJSON([1, 'false', false]); // '[1,"false",false]'
 *
 * - Object가 input으로 주어졌을 경우
 * stringifyJSON({ x: 5 });            // '{"x":5}'
 *
 * - undefind, function이 주어졌을 경우
 * stringifyJSON(undefined)            // undefined
 * stringifyJSON(function(){})         // undefined
 * stringifyJSON({ x: undefined, y: function(){} })   // '{}'
 *
 * 3. spec/fixtures.js를 참고해서 테스트에서 어떤 input 값들이
 * 주어지고, 어떻게 stringify해 주어야할지 생각해 보세요.
 *
 * 4. 그냥 테스트 통과를 하고 싶으시다면, 다음과 같이 구현하면 될거예요.
 *  const stringifyJSON = JSON.stringify;
 *
 * 하지만 이 과제의 목적은 재귀를 공부하는 것이니, 처음부터 구현해봐야겠지요?:
 */
function stringifyJSON(obj) {
  // your code goes here

  if (typeof obj === "number" || obj === null || obj === Boolean(obj)) {
    return `${obj}`;
  }

  if (typeof obj === "string") {
    return `"${obj}"`;
  }

  let arr = [];
  // obj[1,2,3]
  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      arr.push(stringifyJSON(obj[i]));
    }
    return `[${arr}]`;
  } else {
    for (let key in obj) {
      if (obj[key] !== undefined && typeof obj[key] !== "function") {
        arr.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
      }
    }
    return `{${arr}}`;
  }

  // if (obj === "undefined" || obj === "function") {
  //   return undefined;
  // }
  // if (typeof obj === "string") {
  //   return `"${obj}"`;
  // }
  // if (typeof obj === "boolean" || obj === null || typeof obj === "number") {
  //   return `${obj}`;
  // }
  // let arr = [];
  // if (Array.isArray(obj)) {
  //   for (let i = 0; i < obj.length; i++) {
  //     arr.push(stringifyJSON(obj[i]));
  //   }
  //   return `[${arr}]`;
  // } else {
  //   for (let key in obj) {
  //     if (obj[key] !== undefined && typeof obj[key] !== "function") {
  //       arr.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
  //     }
  //   }
  //   return `{${arr}}`;
  // }
}
// 여러분이 구현한 stringifyJSON을 테스트 하는데 사용됩니다.
// var stringifiableObjects = [
//
//   [],
//   [8],
//   ["hi"],
//   [8, "hi"],
//   [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
//   [8, [[],3,4]],
//   [[[["foo"]]]],

//   {},
//   {"a": "apple"},
//   {"foo": true, "bar": false, "baz": null},
//   {"boolean, true": true, "boolean, false": false, "null": null },
//   // basic nesting
//   {"a":{"b":"c"}},
//   {"a":["b", "c"]},
//   [{"a":"b"}, {"c":"d"}],
//   {"a":[],"c": {}, "b": true}
// ];
