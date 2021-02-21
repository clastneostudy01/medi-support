import moment from "moment";
import "moment/locale/ko";

export const weekDate = [];
for (let i = 7; i > 0; i--) {
  weekDate.push(
    { id: i, date: moment().subtract(i, "days").format("MM/DD") }
  );
}
console.log(weekDate);




