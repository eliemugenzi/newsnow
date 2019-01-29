import {
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator,
  DrawerItems
} from "react-navigation";
import Welcome from "./Welcome";
import Tech from "./Tech";
import Wsj from "./Wsj";
import Business from "./Business";
import Apple from "./Apple";
import BusinessDetails from "./Businessdetails";
import AppleDetails from "./AppleDetails";
import TechDetails from "./TechDetails";
import WsjDetails from "./WsjDetails";
import BusinessMore from "./BusinessMore";
import AppleMore from "./AppleMore";
import TechMore from "./TechMore";
import WsjMore from "./WsjMore";
import { View, StyleSheet } from "react-native";
import { Thumbnail } from "native-base";
import React, { Component } from "react";

const drawerComponent = props => {
  return (
    <View>
      <Thumbnail
        source={require("../assets/img/news-logo.jpg")}
        style={styles.image}
      />
      <DrawerItems {...props} />
    </View>
  );
};

const BusinessNews = createStackNavigator(
  {
    Business,
    BusinessDetails,
    BusinessMore
  },
  {
    navigationOptions: {
      drawerLabel: "Business News"
    }
  }
);
const AppleNews = createStackNavigator(
  {
    Apple,
    AppleDetails,
    AppleMore
  },
  {
    navigationOptions: {
      drawerLabel: "Apple News"
    }
  }
);
const TechNews = createStackNavigator(
  {
    Tech,
    TechDetails,
    TechMore
  },
  {
    navigationOptions: {
      drawerLabel: "Tech News"
    }
  }
);
const WsjNews = createStackNavigator(
  {
    Wsj,
    WsjDetails,
    WsjMore
  },
  {
    navigationOptions: {
      drawerLabel: "Wall Street Journal"
    }
  }
);

const Drawer = createDrawerNavigator(
  {
    BusinessStack: {
      screen: BusinessNews,
      navigationOptions: {
        drawerLabel: "Business News"
      }
    },
    TechStack: {
      screen: TechNews,
      navigationOptions: {
        drawerLabel: "Tech News"
      }
    },
    AppleStack: {
      screen: AppleNews,
      navigationOptions: {
        drawerLabel: "Apple News"
      }
    },
    WsjStack: {
      screen: WsjNews,
      navigationOptions: {
        drawerLabel: "Wall Street Journal"
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    contentComponent: drawerComponent
  }
);
const Stack = createSwitchNavigator({
  Welcome,
  Drawer
});

const styles = StyleSheet.create({
  image: {
    marginTop: 30,
    marginLeft: "10%",
    marginRight: "10%",
    marginBottom: 20
  }
});
export default Stack;
