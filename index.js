import tagMakeCall from "./tagMakeCall.js";
import tagMakeFor from "./tagMakeFor.js";

const root = document.getElementById("root");

const calendarHead = tagMakeCall(root, "div", function (element) {
  element.setAttribute("id", "calendar-head");
  element.style.width = "1050px";
  element.style.height = "100px";
  element.style.border = "1px solid black";
});
const calendarDate = tagMakeCall(root, "div", function (element) {
  element.setAttribute("id", "calendar-date");
  element.style.display = "flex";
  element.style.border = "1px solid black";
  element.style.width = "1050px";
  element.style.height = "600px";
});

tagMakeFor(calendarHead, "div", 3);
tagMakeFor(calendarDate, "div", 42);
