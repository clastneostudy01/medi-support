import React, { useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ScrollView, State } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

import moment from "moment";
import "moment/locale/ko";

import { setStatusBarBackgroundColor } from "expo-status-bar";
import { useLinkProps } from "@react-navigation/native";

export const weekDate = [];
for (let i = 6; i >= 0; i--) {
  weekDate.push({ date: moment().subtract(i, "days").format("MM/DD") });
}
console.log(weekDate);

AsyncStorage.getItem("02/22EveningDrug", (err, result) => {
  try {
    const week = JSON.parse(result);
    console.log(week);
  } catch (e) {
    console.error(e);
  }
});

const Icons = (props) => {
  const [color, setColor] = useState("black");
  const counter = useRef(0);
  return (
    <MaterialCommunityIcons
      name={props.iconName}
      date={props.date}
      time={props.time}
      type={props.type}
      style={{ color }}
      size={50}
      onPress={() => {
        AsyncStorage.getItem(
          "{parse props.date + props.time + props.type}",
          (err, result) => {
            try {
              console.log(props.date)
              const week = JSON.parse(result);
              console.log(week);
            } catch (e) {
              console.error(e);
            }
          }
        );

        switch (counter.current) {
          case 0:
            setColor("red");
            break;
          // case 2:
          //   setColor("orange");
          //   break;
          case 1:
            setColor("green");
            break;
          default:
            setColor("black");
            break;
        }
        // console.log(counter.current);
      }}
    />
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

  // counter={AsyncStorage.getItem(
  //   `"${week.date+"Morning"+props.type}"`,
  //   (err, result) => {
  //     try {
  //       if(result===null){
  //         return 0;
  //       }
  //       const week = JSON.parse(result);
  //       console.log(week.isTrue);
  //       return week.isTrue;
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   }
  // )}

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
                date={props.date}
                time={props.time}
                type={props.type}
              />
            </View>
            <View>
              <Text style={{ textAlign: "center" }}>점심</Text>
              <Icons
                iconName={props.iconName}
                date={props.date}
                time={props.time}
                type={props.type}
              />
            </View>
            <View>
              <Text style={{ textAlign: "center" }}>저녁</Text>
              <Icons
                iconName={props.iconName}
                date={props.date}
                time={props.time}
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
          <OneWeekIconContents iconName={props.iconName} />
        </View>
      </Card>
    </View>
  );
};

const Medicine = () => {
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
