import React, { Component } from "react";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import Dishdetail from "./DishdetailComponent";
import { View, Platform } from "react-native";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import { Icon } from "react-native-elements";

const MenuNavigator = createStackNavigator(
  {
    Menu: { screen: Menu },
    Dishdetail: { screen: Dishdetail },
  },
  {
    initialRouteName: "Menu",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#512DA8",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
    },
  }
);

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home },
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#512DA8",
      },
      headerTitleStyle: {
        color: "#fff",
      },
      headerTintColor: "#fff",
    }),
  }
);

const MainNavigator = createDrawerNavigator(
  {
    Menu: {
      screen: MenuNavigator,
      navigationOptions: {
        title: "Menu",
        drawerLabel: "Menu",
      },
    },
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        title: "Home",
        drawerLabel: "Home",
      },
    },
  },
  {
    drawerBackgroundColor: "#D1C4E9",
  }
);

class Main extends Component {
  render() {
    return (
      //paddingTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "ios" ? 0 : 1,
        }}
      >
        <MainNavigator />
      </View>
    );
  }
}

export default Main;
