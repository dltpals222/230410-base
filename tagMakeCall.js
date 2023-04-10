// //콜백함수 필수적
// function tagMakeCall(parentName, tagName, callback) {
//   let element = document.createElement(tagName);
//   parentName.appendChild(element);
//   callback(element);
//   return element;
// }

//콜백함수 선택적
function tagMakeCall(parentName, tagName, callback) {
  let element = document.createElement(tagName);
  parentName.appendChild(element);
  if (callback) {
    callback(element);
  }
  return element;
}

export default tagMakeCall;
