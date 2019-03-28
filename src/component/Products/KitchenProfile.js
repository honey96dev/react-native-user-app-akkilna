import React, { Component } from "react";
import { Dimensions, FlatList, StyleSheet,Image } from "react-native";
import {
  Container,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Title,
  Text,
  Body,
  Left,
  Right,
  List,
  ListItem,
  Item,
  Label,
  Input,
  View,
  Form,
Accordion,
  Thumbnail,
  Header,
  CheckBox
} from "native-base";
import Spinner from 'react-native-number-spinner';
let { height } = Dimensions.get("window");

const dataArray = [
    { title: "Kitchen Profile", content: "Lorem ipsum dolor sit amet" },
    { title: "General Terms", content: "Lorem ipsum dolor sit amet" },
    { title: "Delivery Terms", content: "Lorem ipsum dolor sit amet" }
  ];

class KitchenProfile extends Component {
  static navigationOptions = {
    header: {
      visible: false
    }
  };
  render() {
    return (
      <Container style={{ backgroundColor: "#F8F8F8" }}>
        <Header style={{ backgroundColor: "white" }}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Kitchen")}
            >
              <Image source={require('../../../assets/Images/back.png')} style={{ height: 20, width: 20, resizeMode:'contain'}} />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "black" }}>Info</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <Container>
        <Content style={{marginTop:0, }}>
          <Accordion dataArray={dataArray} expanded={0}/>
        </Content>
      </Container>
      </Container>
    );
  }
}



export default KitchenProfile;