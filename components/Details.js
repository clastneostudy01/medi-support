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
  const [time, setTime] = useState("");

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  const timeSetting = (data) => {
    setTime(data);
  };

  // const statistics = {
  //   "date": moment().format("MM/DD"),
  //   "time": time,
  //   "type": item.type,
  //   "isTrue": true,
  // };

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
                style={{ backgroundColor: "red" }}
                onPress={() => {
                  AsyncStorage.setItem(
                    moment().format("MM/DD") + time + item.type,
                    JSON.stringify({
                      date: moment().format("MM/DD"),
                      time: time,
                      type: item.type,
                      isTrue: 1,
                      id: moment().format("MM/DD") + time + item.type,
                    }),
                    () => {
                      console.log(
                        AsyncStorage.getItem(moment().format("MM/DD") + time + item.type, (err, result) => {
                          try {
                            const week = JSON.parse(result);
                            console.log(week);
                          } catch (e) {
                            console.error(e);
                          }
                        })
                      );
                    }
                  );
                  toggleOverlay();
                }}
              >
                <Text style={{ width: 100, fontSize: 30, textAlign: "center" }}>
                  YES
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ backgroundColor: "green" }}
                onPress={() => {
                  AsyncStorage.setItem(
                    moment().format("MM/DD") + time + item.type,
                    JSON.stringify({
                      date: moment().format("MM/DD"),
                      time: time,
                      type: item.type,
                      isTrue: 0,
                      id: moment().format("MM/DD") + time + item.type,
                    }),
                    () => {
                      console.log(
                        AsyncStorage.getItem(moment().format("MM/DD") + time + item.type, (err, result) => {
                          try {
                            const week = JSON.parse(result);
                            console.log(week);
                          } catch (e) {
                            console.error(e);
                          }
                        })
                      );
                    }
                  );
                  toggleOverlay();
                }}
              >
                <Text style={{ width: 100, fontSize: 30, textAlign: "center" }}>
                  NO
                </Text>
              </TouchableOpacity>
            </View>
            {/* <TouchableOpacity
            onPress={() => AsyncStorage.clear()}
              >
              <Text>초기화</Text>
            </TouchableOpacity> */}
          </View>
        </Overlay>
      </Card>
    </View>
  );
};

export default Details;
