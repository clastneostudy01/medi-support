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

const Icons = ({ stateBox, iconName }) => {
  const color =
    stateBox.length == 0 ? "black" : stateBox[0].isTrue ? "green" : "red";

  return (
    <MaterialCommunityIcons
      name={iconName}
      style={{ color }}
      size={50}
      onPress={() => console.log(stateBox)}
    />
  );
};

const OneWeekIconContents = ({ iconName, type }) => {
  // stateBox에 데이터가 입력되고, 이것 자체가 state로 동작함.
  // stateBox에 변화가 생기면 전역적으로 상태가 공유.
  const stateBox = useSelector((state) =>
    state.tasks.filter((item) => item.type == type)
  );
  console.log("--stateBox--");
  console.log(stateBox);

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
                iconName={iconName}
                date={week.date}
                time={"Morning"}
                type={type}
                stateBox={stateBox.filter(
                  (item) => item.date == week.date && item.time == "Morning"
                )}
              />
            </View>
            <View>
              <Text style={{ textAlign: "center" }}>점심</Text>
              <Icons
                iconName={iconName}
                date={week.date}
                time={"Afternoon"}
                type={type}
                stateBox={stateBox.filter(
                  (item) => item.date == week.date && item.time == "Afternoon"
                )}
              />
            </View>
            <View>
              <Text style={{ textAlign: "center" }}>저녁</Text>
              <Icons
                iconName={iconName}
                date={week.date}
                time={"Evening"}
                type={type}
                stateBox={stateBox.filter(
                  (item) => item.date == week.date && item.time == "Evening"
                )}
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const CardView = ({ title, type, iconName }) => {
  return (
    <View>
      <Card>
        <Card.Title style={{ fontSize: 30 }}>{title}</Card.Title>
        <Card.Divider />
        <View
          style={{
            flexDirection: "row",
            position: "relative",
            alignItems: "center",
          }}
        >
          <OneWeekIconContents iconName={iconName} type={type} />
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
