import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BlogDetailsScreen from "./components/screens/BlogDetailsScreen";
import HomeScreen from "./components/screens/HomeScreen";

const AppStack = createStackNavigator();
const TabNav = createBottomTabNavigator();

const TabNavScreen = () => {
  return (
    <TabNav.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: "#343434",
        tabBarInactiveBackgroundColor: "#343434",
      }}
      sceneContainerStyle={{
        backgroundColor: "#343434",
        borderTopColor: "#343434",
      }}
      tabBar={() => {
        return <></>;
      }}
    >
      <TabNav.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      {/* <TabNav.Screen
        name="Articles"
        component={ArticlesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="newspaper" color={color} size={size} />
          ),
        }}
      /> */}
    </TabNav.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen
          name="App"
          component={TabNavScreen}
          options={{ headerShown: false }}
        />
        <AppStack.Screen
          name="BlogDetails"
          component={BlogDetailsScreen}
          options={{ headerShown: false }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
