import React from "react";
// import { Text, View } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
import { WebView } from "react-native-webview";

const DrugInfo = () => {
  return (
    <WebView
      source={{ uri: "https://nedrug.mfds.go.kr/index" }}
      style={{ width: "100%" }}
      scalesPageToFit={true}
    />
  );
};

export default DrugInfo;
