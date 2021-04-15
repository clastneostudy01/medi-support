import React, { useState, useEffect, useRef } from "react";
import { WebView } from "react-native-webview";
import Geolocation from "@react-native-community/geolocation";

const MapByWebView = () => {
  const [position, setPosition] = useState({
    // 학원위치  
    latitude: 37.6013907,
    longitude: 127.0806112,
  });

  const locationLogged = useRef(false);
  
  useEffect(() => {
    Geolocation.getCurrentPosition((pos) => {
      const crd = pos.coords;
      setPosition({
        // 초기설정시 기기 정보상 구글 본사
        latitude: crd.latitude,
        longitude: crd.longitude,
      });
      locationLogged.current = !locationLogged.current;
      // console.log(locationLogged.current);
      // console.log(position.latitude);
      // console.log(position.longitude);
    }).catch((err) => {
      console.log(err);
      console.log(locationLogged.current);
    });
  }, []);

  // console.log("https://www.google.co.kr/maps/search/%EC%95%BD%EA%B5%AD/@"+position.latitude+position.longitude +",20z");
  // 구글지도 검색 약국
  return (
    <WebView
      source={{
        uri:
          "https://www.google.co.kr/maps/search/%EC%95%BD%EA%B5%AD/@"+position.latitude+position.longitude +",20z"
            // 구글지도 검색 약국
      }}
      style={{ width: "100%" }}
      scalesPageToFit={true}
    />
  );
};

export default MapByWebView;