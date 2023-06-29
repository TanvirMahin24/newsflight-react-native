import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";

const Webview = ({ url }) => {
  return (
    <WebView
      source={{
        uri: url,
      }}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: 9,
        padding: 20,
      }}
    />
  );
};

export default Webview;
