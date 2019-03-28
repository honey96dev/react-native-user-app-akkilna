import React, { Component } from "react";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Icon,
  View,
  Card,
  CardItem,
  Body
} from "native-base";
import { cancelRequest } from "src/apis";
import { TouchableWithoutFeedback, StyleSheet } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

export default class Registers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      mobile: "",
      password: ""
    };
  }
  componentWillReceiveProps(newProps) {
    if (newProps.loading) {
      if (newProps.message) {
        alert("Register Error");
      } else {
        this.props.navigation.navigate("Login");
      }
    }
  }

  componentWillUnmount() {
    cancelRequest();
  }

  render() {
    return (
      <Container style={{ marginTop: 70 }}>
        <Spinner visible={false}  /> {/*this.props.loading*/}
        <Content>
          <Content padder>
            <Card transparent>
              <CardItem >
                <Content contentContainerStyle={{ }}>
                  <CardItem header>
                    <Text style={{ fontSize: 40 ,fontFamily: 'Poppins_bold', color: '#000',}}>Register</Text>
                  </CardItem>
                </Content>
              </CardItem>
              <Form>
                <CardItem>
                  <Body>
                    <Item floatingLabel>
                      <Label>Name</Label>
                      <Input
                        text={this.state.name}
                        onChangeText={text => {
                          this.setState({
                            name: text
                          });
                        }}
                      />
                    </Item>
                  </Body>
                </CardItem>
                <CardItem>
                  <Body>
                    <Item floatingLabel>
                      <Label>Email Id</Label>
                      <Input
                        text={this.state.email}
                        onChangeText={text => {
                          this.setState({
                            email: text
                          });
                        }}
                      />
                    </Item>
                  </Body>
                </CardItem>
                <CardItem>
                  <Body>
                    <Item floatingLabel>
                      <Label>Mobile Number</Label>
                      <Input
                        text={this.state.mobile}
                        onChangeText={text => {
                          this.setState({
                            mobile: text
                          });
                        }}
                      />
                    </Item>
                  </Body>
                </CardItem>
                <CardItem>
                  <Body>
                    <Item floatingLabel>
                      <Label>Password</Label>
                      <Input
                        secureTextEntry={true}
                        text={this.state.password}
                        onChangeText={text => {
                          this.setState({
                            password: text
                          });
                        }}
                      />
                    </Item>
                  </Body>
                </CardItem>
                <CardItem>
                  <Content>
                    <Button style={styles.primarybtn}
                      block
                      onPress={() => {
                        this.props.registerUser({
                          name: this.state.name,
                          email: this.state.email,
                          mobile: this.state.mobile,
                          password: this.state.password
                        });
                      }}
                    >
                      <Text style={{ fontFamily: 'Poppins_bold' ,fontSize: 20, fontWeight: "bold" }}>Sign Up</Text>
                    </Button>
                    <View style={{flexDirection:'row'}}>
              <View style={{flex: 1}}>
              <Button style={styles.fbbtn}
                      block
                      onPress={() => {
                        this.props.navigation.navigate("Home");
                        this.props.loginUser({
                          email: this.state.email,
                          password: this.state.password
                        });
                      }}
                    >
                      <Text style={{ fontFamily: 'Poppins_bold' ,fontSize: 12, fontWeight: "bold" }}>facebook Sign In</Text>
                    </Button>
                    </View>
                    <View style={{flex: 1}}>
                    <Button style={styles.googlebtn}
                      block
                      onPress={() => {
                        this.props.navigation.navigate("Home");
                        this.props.loginUser({
                          email: this.state.email,
                          password: this.state.password
                        });
                      }}
                    >
                      <Text style={{ fontFamily: 'Poppins_bold' ,fontSize: 12, fontWeight: "bold" }}>Google Sign In</Text>
                    </Button>
                    </View>
              </View>
                  </Content>
                </CardItem>
              </Form>
              <CardItem footer>
                <Text style={{fontFamily: 'Poppins' ,fontSize: 14,}}>Already have an account? </Text>
                <TouchableWithoutFeedback
                  onPress={() => this.props.navigation.navigate("Login")}
                >
                  <Text
                    numberOfLines={1}
                    style={[styles.poppins ,  styles.underline]}
                  >
                    Sign in
                  </Text>
                </TouchableWithoutFeedback>
              </CardItem>
            </Card>
          </Content>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  primarybtn: {
    backgroundColor: '#9025F2',
    shadowColor: "rgba(114, 19, 234, 0.29)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 7
  },
  poppins: {
    fontFamily: 'Poppins'
  },
  poppins_medium: {
    fontFamily: 'Poppins_medium'
  },
  poppins_bold: {
    fontFamily: 'Poppins_bold'
  },
  underline: {
    color:'#640AB6', 
    paddingLeft: 5, 
    textDecorationLine: "underline",
    fontSize: 14
  },
  fbbtn: {
    backgroundColor: '#6286D8',
    shadowColor: "rgba(28, 19, 234, 0.29)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 7,
    marginTop: 20,
  },
  googlebtn: {
    backgroundColor: '#D94444',
    shadowColor: "rgba(131, 27, 27, 0.29)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 7,
    marginTop: 20,
    marginLeft: 10,
  },
})