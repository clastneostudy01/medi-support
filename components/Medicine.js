import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ScrollView, State } from "react-native-gesture-handler";

import moment from "moment";
import "moment/locale/ko";

import { ONEWEEK } from "../shared/week";
import { setStatusBarBackgroundColor } from "expo-status-bar";

import Pill from "./Pill";
// import DrugInfo from "./DrugInfo";

const currentDate = moment().format("MM/DD");

// https://yuddomack.tistory.com/entry/5React-Native-%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83-%EB%94%94%EC%9E%90%EC%9D%B8-1%EB%B6%80-flex%EC%99%80-width-height

const 테이블 = () => {
  const week = ONEWEEK;

  const weekData = week.map((item) => [item.date]);
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
          {weekData.map((date) => (
            <View style={{ flex: 1 }} key={date}>
              <Text style={{ fontSize: 16, textAlign: "center" }}>{date}</Text>
              <View>
                <Text style={{ textAlign: "center" }}>아침</Text>
                <Pill></Pill>
              </View>
              <View>
                <Text style={{ textAlign: "center" }}>점심</Text>
                <Pill></Pill>
              </View>
              <View>
                <Text style={{ textAlign: "center" }}>저녁</Text>
                <Pill></Pill>
              </View>
            </View>
          ))}
        </View>
    </View>
  );
};

const 일주일통계 = () => {
  return (
    <View>
      <Card>
        <Card.Title style={{ fontSize: 30 }}>지난 일주일 기록</Card.Title>
        <Card.Divider />
        <View
          style={{
            flexDirection: "row",
            position: "relative",
            alignItems: "center",
          }}
        >
          <테이블 />
        </View>
      </Card>
    </View>
  );
};

const Medicine = () => {
  return (
    <View>
      <ScrollView>
        <일주일통계 />
      </ScrollView>
    </View>
  );
};

export default Medicine;