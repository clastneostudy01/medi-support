import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Card, Button, Icon, Overlay } from "react-native-elements";

import moment from "moment";
import "moment/locale/ko";

import AsyncStorage from "@react-native-async-storage/async-storage";

// import { useDispatch, useSelector } from 'react-redux'
// import { addTask, removeTask } from '../redux/actions/tasks'

import { LISTDATA } from "../shared/list";

const Details = ({ route, navigation }) => {
  const { id } = route.params;
  const item = LISTDATA.filter((item) => item.id == id)[0];

  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  AsyncStorage.setItem(
    "week_data",
    JSON.stringify({
      id: "",
      date: moment().format("MM/DD"),
      type: "",
      time: "",
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

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card>
        <Card.Title>{item.title}</Card.Title>
        <Card.Divider />
        <Card.Image source={{ uri: item.image }}></Card.Image>
        <Card.Divider />
        <Text style={{ marginBottom: 10 }}>{item.description}</Text>
        <Button
          onPress={toggleOverlay}
          icon={<Icon name="checkmark" type="ionicon" color="#ffffff" />}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            backgroundColor: "tomato",
          }}
          title="OverLay"
        />

        <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>{item.title}</Text>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{ backgroundColor: "red" }}
                onPress={() =>
                  AsyncStorage.setItem(
                    "week_data",
                    JSON.stringify({
                      date: moment().format("MM/DD"),
                      type: item.type,
                    }),
                    () => {
                      console.log("저장완료");
                    }
                  )
                }
              >
                <Text style={{ width: 100, fontSize: 30, textAlign: "center" }}>
                  YES
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ backgroundColor: "green" }}
                onPress={() =>
                  AsyncStorage.setItem(
                    "week_data",
                    JSON.stringify({
                      date: moment().format("MM/DD"),
                      type: item.type,
                    }),
                    () => {
                      console.log(
                      AsyncStorage.getItem("week_data", (err, result) => {
                        try {
                          const week = Json.parse(result);
                          console.log(week);
                        } catch (e) {
                          console.error(e);
                        }
                      }));
                    }
                  )
                }
              >
                <Text style={{ width: 100, fontSize: 30, textAlign: "center" }}>
                  NO
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Overlay>
      </Card>
    </View>
  );
};

export default Details;
