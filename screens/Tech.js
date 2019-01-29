import React, { Component } from "react";
import { View, Text, FlatList, Image } from "react-native";
import { getTechNews } from "../redux/actions/NewsActions";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Body,
  Content,
  Left,
  Title,
  Right,
  Icon,
  List,
  ListItem
} from "native-base";
import { Card, Title as CardTitle, Paragraph } from "react-native-paper";

class Tech extends Component {
  static navigationOptions = {
    header: null
  };
  getNews = () => (
    <List>
      <FlatList
        data={this.props.news.tech}
        renderItem={({ item }) => (
          <ListItem
            key={item.title}
            onPress={() => {
              this.props.navigation.navigate("TechDetails", {
                article: item
              });
            }}
          >
            <Card
              style={{
                padding: 10
              }}
            >
              <Card.Content>
                <CardTitle>{item.title}</CardTitle>
              </Card.Content>
              {item.urlToImage === null ? (
                <Text>No Image</Text>
              ) : (
                <Card.Cover source={{ uri: item.urlToImage }} />
              )}
              <Paragraph>{item.description || "No Description"}</Paragraph>
            </Card>
          </ListItem>
        )}
      />
    </List>
  );
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "#404B56" }}>
          <Left>
            <Icon
              name="menu"
              style={{ color: "#FFFFFF" }}
              onPress={() => this.props.navigation.toggleDrawer()}
            />
          </Left>
          <Body>
            <Title>Tech News</Title>
          </Body>
        </Header>
        <Content>{this.getNews()}</Content>
      </Container>
    );
  }
}

const mapStateToTrops = state => ({
  news: state.news
});

export default connect(
  mapStateToTrops,
  { getTechNews }
)(Tech);
