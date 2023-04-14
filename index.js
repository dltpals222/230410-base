import tagMakeCall from "./module/tagMakeCall.js";
import tagMakeFor from "./module/tagMakeFor.js";
import WHBB from "./module/WHBB.js";

const root = document.getElementById("root");
root.style.display = "flex";
root.style.justifyContent = "center";
root.style.alignItems = "center";
root.style.flexWrap = "wrap";

//부모태그 만들기
const calendarHead = tagMakeCall(root, "div", function (element) {
  element.setAttribute("id", "calendar-head");
  WHBB(element, "", "100px");
  element.style.display = "flex";
  // element.style.marginTop = "10px";
  // element.style.marginLeft = "10px";
});
const calendarDay = tagMakeCall(root, "div", function (element) {
  element.setAttribute("id", "calendar-day");
  WHBB(element, "", "100px");
  element.style.display = "flex";
  // element.style.marginTop = "10px";
  // element.style.marginLeft = "10px";
});
const calendarDate = tagMakeCall(root, "div", function (element) {
  element.setAttribute("id", "calendar-date");
  WHBB(element, "", "500px");
  element.style.display = "grid";
  element.style.gridTemplateRows = "repeat(5,1fr)";
  element.style.gridTemplateColumns = "repeat(7,1fr)";
  // element.style.flexWrap = "wrap";
  // element.style.marginLeft = "10px";
});

//달력 child구성
const calendarHeadDateFunc = [
  [calendarHead, "div", 3],
  [calendarDay, "div", 7],
  [calendarDate, "div", 35],
];
// 달력 위 3칸 스타일
const divHeadStyle = [
  ["300px", "100px", "1px solid black"],
  ["450px", "100px", "1px solid black"],
  ["300px", "100px", "1px solid black"],
];
//달력 아래 42칸 스타일
const divDateStyle = [
  "150px",
  "100px",
  "1px solid black",
  (parentStyle) => {
    parentStyle.padding = "5px";
  },
];

for (let i = 0; i < calendarHeadDateFunc.length; i++) {
  for (let j = 0; j < calendarHeadDateFunc[i][2]; j++) {
    tagMakeCall(
      calendarHeadDateFunc[i][0],
      calendarHeadDateFunc[i][1],
      function (element) {
        if (calendarHeadDateFunc[i][2] === calendarHeadDateFunc[0][2]) {
          WHBB(
            element,
            divHeadStyle[j][0],
            divHeadStyle[j][1],
            divHeadStyle[j][2]
          );
        } else {
          WHBB(
            element,
            divDateStyle[0],
            divDateStyle[1],
            divDateStyle[2],
            "",
            divDateStyle[3]
          );
        } //콜백 안 if 함수 끝
      } //콜백끝
    );
  }
}

// calendarHead.children[1].innerText = new Date().getMonth();

export default { root, calendarHead, calendarDay, calendarDate };
