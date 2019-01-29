import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator
} from "react-native";
import PropTypes from "prop-types";
import {
  getAppleNews,
  getBusinessNews,
  getTechNews,
  getWsjNews
} from "../redux/actions/NewsActions";
import { connect } from "react-redux";
import { Snackbar, Surface } from "react-native-paper";

class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false
    };
  }
  componentDidMount = () => {
    this.props.getAppleNews();
    this.props.getWsjNews();
    this.props.getBusinessNews();
    this.props.getTechNews();
    this.setState({ loaded: true, snackVisible: false });
  };
  static navigationOptions = {
    header: null
  };

  handleLoading = () => {
    const { news } = this.props;
    if (
      news.appleLoaded &&
      news.techLoaded &&
      news.businessLoaded &&
      news.wsjLoaded
    ) {
      return (
        <Surface style={styles.surface}>
          <Text style={{ marginBottom: 10, color: "white" }}>
            Hey,News Loaded!
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate("Drawer");
            }}
          >
            <Text style={styles.buttonText}>Read Now</Text>
          </TouchableOpacity>
        </Surface>
      );
    } else if (news.loadingFailed) {
      return (
        <Text style={{ color: "#b71c1c", marginTop: 20, fontSize: 19 }}>
          It seems you don't have Internet Access!!
        </Text>
      );
    } else {
      return (
        <View>
          <ActivityIndicator
            animating={true}
            size={25}
            style={{
              marginTop: 10
            }}
          />
          <Text
            style={{
              marginTop: 5,
              color: "#FFFFFF"
            }}
          >
            Loading news,please wait...
          </Text>
        </View>
      );
    }
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#404B56"
        }}
      >
        <Image
          source={require("../assets/img/news-logo.jpg")}
          style={styles.image}
        />
        <Text style={{ fontFamily: "Josefin Sans", color: "#FFFFFF" }}>
          Welcome to News App
        </Text>
        {this.handleLoading()}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginTop: 20
  },
  buttonText: {
    color: "#404B56"
  },
  image: {
    width: "80%",
    height: "40%",
    borderRadius: 8,
    marginBottom: 20
  },
  surface: {
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    marginTop: 10,
    backgroundColor: "transparent"
  }
});

Welcome.propTypes = {
  getTechNews: PropTypes.func.isRequired,
  getWsjNews: PropTypes.func.isRequired,
  getBusinessNews: PropTypes.func.isRequired,
  getAppleNews: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  news: state.news
});

export default connect(
  mapStateToProps,
  { getAppleNews, getTechNews, getWsjNews, getBusinessNews }
)(Welcome);
