import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Card, Button, Icon, Overlay } from "react-native-elements";

import moment from "moment";
import "moment/locale/ko";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { useDispatch, useSelector } from "react-redux";
import { addTask, unDoneTask } from "../redux/actions/tasks";

import { LISTDATA } from "../shared/list";

const Details = ({ route, navigation }) => {
  const { id } = route.params;
  const item = LISTDATA.filter((item) => item.id == id)[0];

  const [visible, setVisible] = useState(false);
  const [time, setTime] = useState("");

  const today = moment().format("MM/DD");

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  const timeSetting = (data) => {
    setTime(data);
  };

  // ====================Redux 환경 구축=========================== //
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  // const isUpdatedTask = tasks.filter(item => item.key).length > 0 ? true : false;
  // console.log(isUpdatedTask);

  // {
  //   date: moment().format("MM/DD"),
  //   time: time,
  //   type: item.type,
  //   isTrue: 1,
  // }

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
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            // alignItems: "center"
          }}
        >
          <Button
            onPress={() => {
              toggleOverlay();
              timeSetting("Morning");
            }}
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              backgroundColor: "tomato",
            }}
            title="Morning"
          />
          <Card.Divider />
          <Button
            onPress={() => {
              toggleOverlay();
              timeSetting("Afternoon");
            }}
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              backgroundColor: "tomato",
            }}
            title="Afternoon"
          />
          <Card.Divider />
          <Button
            onPress={() => {
              toggleOverlay();
              timeSetting("Evening");
            }}
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              backgroundColor: "tomato",
            }}
            title="Evening"
          />
        </View>

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
                style={{ backgroundColor: "green" }}
                onPress={() => {
                  dispatch(addTask([{date: today, time: time, type: item.type, isTrue: 1}]));
                  toggleOverlay();
                }}
              >
                <Text style={{ width: 100, fontSize: 30, textAlign: "center" }}>
                  YES
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ backgroundColor: "red" }}
                onPress={() => {
                  dispatch(unDoneTask({date: today, time: time, type: item.type}));
                  toggleOverlay();
                }}
              >
                <Text style={{ width: 100, fontSize: 30, textAlign: "center" }}>
                  NO
                </Text>
              </TouchableOpacity>
            </View>

            {/* <TouchableOpacity
              onPress={() => {
                AsyncStorage.getAllKeys((error, keys) => {
                  if (!error) {
                    AsyncStorage.multiGet(keys, (error, stores) => {
                      if (!error) {
                        stores.map((result, i, store) => {
                          let key = store[i][0];
                          let value = store[i][1];

                          console.log("key: " + key);
                          console.log("value: " + value);
                        });
                      } else {
                        console.log(error);
                      }
                    });
                  } else {
                    console.log(error);
                  }
                });
              }}
            >
              <Text>전체 조회</Text>
            </TouchableOpacity> */}

            {/* <TouchableOpacity
              onPress={() => {
                AsyncStorage.clear();
                console.log("cleared");
              }}
            >
              <Text>초기화</Text>
S            </TouchableOpacity> */}
          </View>
        </Overlay>
      </Card>
    </View>
  );
};

export default Details;
