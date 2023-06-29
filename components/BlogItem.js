import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import StyledText from "./StyledText";

const BlogItem = ({ data, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() => navigation.navigate("BlogDetails", { data })}
    >
      <Image source={{ uri: data.imageUrl }} style={styles.img} />
      <View style={styles.info}>
        <Image source={{ uri: data.imageUrl }} style={styles.img_sm} />
        <View style={styles.header}>
          <StyledText weight={"bold"} medium>
            {data.title}
          </StyledText>
          <StyledText small color="#1a1b4b">
            {data.newsSite}
          </StyledText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BlogItem;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginBottom: 32,
  },

  img: {
    width: "100%",
    height: 300,
  },

  info: {
    backgroundColor: "#3a9efd",

    marginTop: -50,
    marginRight: 16,
    marginBottom: 0,
    marginLeft: 16,
    padding: 16,
    borderRadius: 12,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
  },

  img_sm: {
    width: 50,
    height: 40,
    borderRadius: 8,
  },

  header: {
    marginTop: 0,
    marginBottom: 0,
    marginRight: 24,
    marginLeft: 24,
    overflow: "hidden",
  },
});
