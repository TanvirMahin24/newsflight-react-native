import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import StyledText from "./StyledText";
import { Ionicons } from "@expo/vector-icons";

const NextBtn = ({ refetch }) => {
  return (
    <View style={styles.btn_wrapper}>
      <TouchableOpacity style={styles.read} onPress={() => refetch()}>
        <Ionicons name="refresh" size={24} color="#ffffff" />
        <StyledText large>Next</StyledText>
      </TouchableOpacity>
    </View>
  );
};

export default NextBtn;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#343434",
  },

  header: {
    marginTop: 16,
    marginRight: 32,
    marginBottom: 0,
    marginLeft: 32,
  },

  list: {
    flex: 1,
  },
  read: {
    backgroundColor: "#3a9efd",
    paddingHorizontal: 30,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  btn_wrapper: {
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
