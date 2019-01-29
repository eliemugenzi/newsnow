import React, { Component } from "react";
import { View, Text, Linking, StyleSheet } from "react-native";
import { Container, Content, Button, Icon } from "native-base";
import { Card, Title as CardTitle, Paragraph } from "react-native-paper";

export default class TechDetails extends Component {
  static navigationOptions = {
    title: "Tech News Details"
  };
  render() {
    const { article } = this.props.navigation.state.params;
    return (
      <Container>
        <Content
          style={{
            marginLeft: "5%",
            marginRight: "5%",
            padding: 10
          }}
        >
          <Card>
            <Card.Content>
              <CardTitle style={{ marginLeft: 0 }}>{article.title}</CardTitle>
            </Card.Content>
            {article.urlToImage === null ? (
              <Text>No Image</Text>
            ) : (
              <Card.Cover source={{ uri: article.urlToImage }} />
            )}
            <Text style={styles.title}>Description</Text>
            <Paragraph>
              {article.description || (
                <Text style={styles.errorText}>No Description</Text>
              )}
            </Paragraph>
            <Text style={styles.title}>Content</Text>
            <Paragraph>
              {article.content || (
                <Text style={styles.errorText}>No Content</Text>
              )}
            </Paragraph>

            <Button
              iconLeft
              success
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate("TechMore", {
                  url: article.url
                });
              }}
            >
              <Icon name="link" />
              <Text style={{ marginLeft: 10, color: "white" }}>
                Read Full Article
              </Text>
            </Button>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 10
  },
  errorText: {
    color: "red"
  },
  button: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 20
  }
});
