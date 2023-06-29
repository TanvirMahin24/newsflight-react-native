import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { blogs } from "../../stub/blogData";
import BlogItem from "../BlogItem";
import StyledText from "../StyledText";

const ArticlesScreen = () => {
  return (
    <SafeAreaView style={styles.home}>
      <StatusBar barStyle={"light-content"} />

      <FlatList
        data={blogs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <BlogItem data={item} />}
        style={styles.list}
      />
    </SafeAreaView>
  );
};

export default ArticlesScreen;

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
});
