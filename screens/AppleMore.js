import React, { Component } from "react";
import {
  View,
  Text,
  WebView,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Container, Content } from "native-base";

export default class AppleMore extends Component {
  static navigationOptions = { title: "Full Article" };
  onLoading = () => (
    <ActivityIndicator
      style={styles.indicator}
      size="large"
      color="#404B56"
      hidesWhenStopped={true}
    />
  );
  onError = () => (
    <View style={styles.errorView}>
      <Text style={styles.errorMessage}>You're offline</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          this.refs.webview.reload();
        }}
      >
        <Text style={styles.buttonText}>Try again</Text>
      </TouchableOpacity>
    </View>
  );
  render() {
    const { params } = this.props.navigation.state;
    return (
      <WebView
        ref="webview"
        source={{ uri: params.url }}
        renderLoading={this.onLoading}
        renderError={this.onError}
        onError={this.onError}
        startInLoadingState={true}
      />
    );
  }
}

const styles = StyleSheet.create({
  indicator: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  errorView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  errorMessage: {
    textAlign: "center",
    color: "red",
    marginBottom: 30
  },
  button: {
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red"
  },
  buttonText: {
    color: "white"
  }
});
