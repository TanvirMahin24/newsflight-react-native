import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import {
  BackHandler,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import StyledText from "../StyledText";
import Webview from "../Webview";

const BlogDetailsScreen = ({ route, navigation }) => {
  const { data } = route.params;
  const [open, setOpen] = useState(false);

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        setOpen(false);
      };

      const subscription = BackHandler.addEventListener(
        "hardwareBackPress",
        onBackPress
      );

      return () => subscription.remove();
    }, [])
  );
  return (
    <>
      {open ? (
        <>
          <Webview url={data.url} />
          <TouchableOpacity
            style={styles.btn_close_webview}
            onPress={() => setOpen(false)}
          >
            <Ionicons name="ios-close" size={50} color="#ffffff" />
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles.container}>
          <StatusBar barStyle={"light-content"} />
          <View style={styles.wrapper}>
            <Image source={{ uri: data.imageUrl }} style={styles.img} />
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="ios-close" size={40} color="#ffffff" />
            </TouchableOpacity>
          </View>

          <View style={styles.info_container}>
            <View style={styles.thumb_container}>
              <Image source={{ uri: data.imageUrl }} style={styles.img_sm} />
            </View>
            <View style={styles.info}>
              <StyledText large weight={800}>
                {data.title}
              </StyledText>
              <StyledText color="#9a9a9a">Source: {data.newsSite}</StyledText>
            </View>
          </View>

          <View style={styles.info_container}>
            <StyledText>{data.summary}</StyledText>
          </View>

          <View style={styles.btn_wrapper}>
            <TouchableOpacity style={styles.read} onPress={() => setOpen(true)}>
              <Text style={styles.btn_text}>Read full Blog</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default BlogDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#343434",
  },

  img: {
    width: "100%",
    height: 350,
    borderBottomRightRadius: 32,
    borderBottomLeftRadius: 32,
  },

  wrapper: {
    position: "relative",
  },

  btn: {
    position: "absolute",
    left: 16,
    top: 30,
  },
  btn_close_webview: {
    position: "absolute",
    left: 16,
    top: 30,
    backgroundColor: "#3a9efd",
    borderRadius: 20,
  },

  info_container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginHorizontal: 8,
    marginVertical: 16,
  },

  img_sm: {
    width: 80,
    height: 80,
    borderRadius: 16,
  },

  thumb_container: {
    shadowColor: "#000000",
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },

  info: {
    width: 0,
    flexGrow: 1,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 16,
  },

  read: {
    backgroundColor: "#3a9efd",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
  btn_text: {
    color: "#fff",
    fontWeight: "600",
  },
  btn_wrapper: {
    paddingTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
