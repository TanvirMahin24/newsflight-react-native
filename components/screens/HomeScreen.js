import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import BlogItem from "../BlogItem";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { dateDiff } from "../../utils/dateDiff";
import StyledText from "../StyledText";
import NextBtn from "../NextBtn";
import { Text } from "react-native";
import { blogs } from "../../stub/blogData";

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getBlogs = async () => {
      try {
        const cachedData = await AsyncStorage.getItem("spaceflightBlogs");
        if (cachedData) {
          cachedData = JSON.parse(cachedData);
        }
        if (!cachedData || dateDiff(cachedData.timestamp, new Date()) > 12) {
          const res = await axios.get(
            "https://api.spaceflightnewsapi.net/v3/blogs?_limit:100"
          );
          setData(res.data);
          await AsyncStorage.setItem(
            "spaceflightBlogs",
            JSON.stringify({ data: res.data, timestamp: new Date() })
          );
        } else {
          setData(cachedData.data);
        }
      } catch (error) {
        if (error?.response?.status === 400) {
          setData(blogs);
        }
      }
    };

    getBlogs();
  }, []);

  const clearCache = async () => {
    try {
      await AsyncStorage.removeItem("spaceflightBlogs");
    } catch (e) {
      console.log(e);
    }
  };

  const refetch = async () => {
    const res = await axios.get(
      `https://api.spaceflightnewsapi.net/v3/blogs?_start=${data.length}&_limit=100`
    );
    setData([...data, res.data]);
    await AsyncStorage.setItem(
      "GalleryPhotos",
      JSON.stringify({ data: [...data, res.data], timestamp: new Date() })
    );
  };
  return (
    <SafeAreaView style={styles.home}>
      <StatusBar barStyle={"light-content"} />
      {data ? (
        <>
          <FlatList
            data={[...data, { id: -1 }]}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) =>
              item.id === -1 ? (
                <NextBtn refetch={refetch} />
              ) : (
                <BlogItem data={item} navigation={navigation} />
              )
            }
            style={styles.list}
          />
        </>
      ) : (
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

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
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  btn_wrapper: {
    paddingTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
