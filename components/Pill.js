import React, { useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ScrollView, State } from "react-native-gesture-handler";


import moment from "moment";
import "moment/locale/ko";

import { LISTDATA } from "../shared/list";
import { ONEWEEK } from "../shared/week";
import { setStatusBarBackgroundColor } from "expo-status-bar";

const week = ONEWEEK;
const weekData = week.map((item) => [item.date]);
const currentDate = moment().format("MM/DD");
const weekDataTest = [...weekData];

const Pill = () => {
  const [color, setColor] = useState("black");
  const counter = useRef(0);

  return (

      <MaterialCommunityIcons
        name={"pill"}
        style={{ color }}
        size={50}
        onPress={() => {
          counter.current = counter.current + 1;
          if (counter.current === 3 ) {
            counter.current = 0;
          }
          switch (counter.current) {
            case 1:
              setColor("red");
              break;
            case 2:
              setColor("green");
              break;
            default: setColor("black");
          }
          // console.log(counter.current);
        }}
      />
  );
};

export default Pill;