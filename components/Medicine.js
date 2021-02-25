import React, { useCallback, useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ScrollView, State } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

import moment from "moment";
import "moment/locale/ko";

import { useDispatch, useSelector } from "react-redux";

import { setStatusBarBackgroundColor } from "expo-status-bar";
import { useLinkProps } from "@react-navigation/native";

export const weekDate = [];
for (let i = 6; i >= 0; i--) {
  weekDate.push({ date: moment().subtract(i, "days").format("MM/DD") });
}

const Icons = (props) => {
  const [color, setColor] = useState("black");

  const tasks = useSelector((state) => state.tasks);

  const colorSetting = useCallback(async () => {
    const tasksBox = {
      ...tasks.filter(
        (item) =>
          item.date == props.date &&
          item.time == props.time &&
          item.type == props.type
      )[0],
    };
    console.log("tasksBox");
    console.log(tasksBox);
    console.log(tasksBox.length);

    if (tasksBox.isTrue === undefined) {
      console.log("---Color data---");
      setColor("black");
    } else {
      console.log("---...tasks---");
      setColor(tasksBox.isTrue === 1 ? "green" : "red");
    }

    // console.log(...tasks.filter(()=>tasks.date == props.date));
    // console.log(tasks.date);
    // console.log(props.date)
    // console.log("--filtered tasks--");

    // console.log(tasks.filter(()=>tasks.date == props.date && tasks.iconName == props.iconName && tasks.time == props.time && tasks.type == props.type))
    // const medicine = JSON.parse(data);
    // console.log("---tasks.isTrue---");
    // console.log(tasks[0].isTrue);
    // setColor(tasks.isTrue ? "green" : "red");
  }, []);

  useEffect(() => {
    colorSetting();
  }, []);

  return (
    <MaterialCommunityIcons name={props.iconName} style={{ color }} size={50} />
  );
};

const OneWeekIconContents = (props) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      textAlign: "center",
      backgroundColor: "#537791",
    },
    text: {
      textAlign: "center",
    },
    dataWrapper: {
      marginTop: -1,
    },
    row: {
      height: 40,
      backgroundColor: "#E7E6E1",
    },
  });

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        {weekDate.map((week) => (
          <View style={{ flex: 1 }} key={week.date}>
            <Text style={{ fontSize: 17, textAlign: "center" }}>
              {week.date}
            </Text>
            <View>
              <Text style={{ textAlign: "center" }}>아침</Text>
              <Icons
                iconName={props.iconName}
                date={week.date}
                time={"Morning"}
                type={props.type}
              />
            </View>
            <View>
              <Text style={{ textAlign: "center" }}>점심</Text>
              <Icons
                iconName={props.iconName}
                date={week.date}
                time={"Afternoon"}
                type={props.type}
              />
            </View>
            <View>
              <Text style={{ textAlign: "center" }}>저녁</Text>
              <Icons
                iconName={props.iconName}
                date={week.date}
                time={"Evening"}
                type={props.type}
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const CardView = (props) => {
  return (
    <View>
      <Card>
        <Card.Title style={{ fontSize: 30 }}>{props.title}</Card.Title>
        <Card.Divider />
        <View
          style={{
            flexDirection: "row",
            position: "relative",
            alignItems: "center",
          }}
        >
          <OneWeekIconContents iconName={props.iconName} type={props.type} />
        </View>
      </Card>
    </View>
  );
};

const Medicine = () => {
  // Redux 사용 위한 부분

  // useCallback과 useEffect를 활용하여 최초 렌더링시에 데이터 수령하여 로딩
  // const returnTask = useCallback(async() => {
  //   const tasks = await useSelector(state => state.tasks);
  //   return tasks;
  // })

  // useEffect(()=>{
  //   returnTask();
  // }, [])

  // 현재 key라는 변수가 정의되지 않음.
  // const isExistTask = tasks.filter(item => item.key == key).length > 0 ? true : false;
  // console.log(isExistTask)

  return (
    <View>
      <ScrollView>
        <CardView title={"복약"} iconName={"pill"} type={"Drug"} />
        <CardView
          title={"컨디션"}
          iconName={"hospital-box-outline"}
          type={"Condition"}
        />
        <CardView title={"운동"} iconName={"run"} type={"Exercise"} />
      </ScrollView>
    </View>
  );
};

export default Medicine;
