import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Card, Button, Icon, Overlay } from "react-native-elements";

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
              >
                <Text style={{ width:100, fontSize:30, textAlign:"center"}}>YES</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ backgroundColor: "green" }}
              >
                <Text style={{ width:100, fontSize:30, textAlign:"center"}}>NO</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Overlay>
      </Card>
    </View>
  );
};

export default Details;
