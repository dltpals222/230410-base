import tagIds from "./index.js";
import WHBB from "./module/WHBB.js";
import dateModule from "./test/dateModule.js";

const { root, calendarHead, calendarDay, calendarDate } = tagIds;
const { nowDate, monthFirstDate, monthLastDate, today } = dateModule;

const headCenter = calendarHead.children[1];

headCenter.textContent = `${nowDate.month}월`;

for (let i = 0; i < calendarDate.children.length; i++) {
  calendarDate.children[i];
}

//월 위치(head의 두번째 자식) CSS
headCenter.style.fontSize = "4.3em";
headCenter.style.textAlign = "center";

//day 한글로 작성
const calDayHangle = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];

calDayHangle.forEach((element, i) => {
  calendarDay.children[i].innerText = element;
});
