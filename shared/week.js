import moment from "moment";
import "moment/locale/ko";

const sixDaysAgo = moment().subtract(6, "days").format("MM/DD");
const fiveDaysAgo = moment().subtract(5, "days").format("MM/DD");
const fourDaysAgo = moment().subtract(4, "days").format("MM/DD");
const threeDaysAgo = moment().subtract(3, "days").format("MM/DD");
const twoDaysAgo = moment().subtract(2, "days").format("MM/DD");
const yesterday = moment().subtract(1, "days").format("MM/DD");
const today = moment().subtract(0, "days").format("MM/DD");

export const ONEWEEK = [
  { id: 1, date: sixDaysAgo },
  { id: 2, date: fiveDaysAgo },
  { id: 3, date: fourDaysAgo },
  { id: 4, date: threeDaysAgo },
  { id: 5, date: twoDaysAgo },
  { id: 6, date: yesterday },
  { id: 7, date: today },
];

// export const ONEWEEK = [
//   {id : 1, date : moment().format("MM/DD").subtract(0,'days'), },
//   {id : 2, date : moment().format("MM/DD").subtract(1,'days'), },
//   {id : 3, date : moment().format("MM/DD").subtract(2,'days'), },
//   {id : 4, date : moment().format("MM/DD").subtract(3,'days'), },
//   {id : 5, date : moment().format("MM/DD").subtract(4,'days'), },
//   {id : 6, date : moment().format("MM/DD").subtract(5,'days'), },
//   {id : 7, date : moment().format("MM/DD").subtract(6,'days'), },
// ]