import tagIds from "./index.js";
import dateModule from "./test/dateModule.js";

const { root, calendarHead, calendarDate } = tagIds;
const { nowDate, monthFirstDate, monthLastDate } = dateModule;

const headCenter = calendarHead.children[1];

headCenter.textContent = nowDate.month;

console.log(calendarDate.children.length);

for (let i = 0; i < calendarDate.children.length; i++) {}
