import React from "react";
import { Text, View } from "react-native";
import { ListItem, Avatar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';


import { LISTDATA } from '../shared/list';

const Home = ({navigation}) => {

  const list = LISTDATA;
  // console.log(list);

  return (
    <View 
      style={{ 
        flex: 1, 
        justifyContent: "center", 
        // alignItems: "center" 
        }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {list.map((item, i) => (
          <ListItem
            containerStyle={{ width: "80%" }}
            key={i}
            onPress={() => {
              navigation.navigate("Details", { id: item.id });
            }}
          >
            <Avatar source={{ uri: item.image }} />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
              <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;