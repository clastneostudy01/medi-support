import AsyncStorage from "@react-native-community/async-storage";

AsyncStorage.setItem("user_id", "hwije123", () => {
  //user_id변수로 hwije123 저장
  console.log("유저 id저장");
});

AsyncStorage.getItem("user_id", (err, result) => {
  //user_id에 담긴 아이디 불러오기
  console.log(result); // result에 담김 //불러온거 출력
});

AsyncStorage.setItem(
  "user_information",
  JSON.stringify({ user_id: "hwije123", user_nickname: "HJ" }),
  () => {
    console.log("저장"); //json형식을 stringify로 string화 해서 저장해줬다
  }
);

AsyncStorage.setItem(
  "week_data",
  JSON.stringify({
    id: "",
    date: "",
    drug_morning: "",
    drug_afternoon: "",
    drug_evening: "",
    condition_morning: "",
    condition_afternoon: "",
    condition_evening: "",
    exercise_morning: "",
    exercise_afternoon: "",
    exercise_evening: "",
  }),
  () => {
    console.log("저장완료");
  }
);

AsyncStorage.getItem("week_data", (err, result) => {
  try {
    const week = Json.parse(result);
    console.log(week);
  } catch (e) {
    console.error(e);
  }
});

AsyncStorage.getItem("user_information", (err, result) => {
  const user = Json.parse(result); //string화 된 result를 parsing
  console.log("아이디는" + user.user_id); // user에 담긴 id출력
  console.log("별명은: " + user.user_nickname); // user에 담긴 닉네임 출력
});
