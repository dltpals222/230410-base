// import divIds from "./index.js";
// const { root, calendarHead, calendarDate } = divIds;

const nowDate = {
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
  date: new Date().getDate(),
  day: new Date().getDay(),
};

console.log(nowDate);
const today = new Date(nowDate.year, nowDate.month, nowDate.date);

const firstDate = new Date(today.setDate(1)).getDate();
const lastDate = new Date(today.setDate(0)).getDate();
const setDategetDay = new Date(today.setDate(1)).getDay();
console.log(setDategetDay);
export default { nowDate, firstDate, lastDate, today };
