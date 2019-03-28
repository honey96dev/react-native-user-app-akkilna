import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Text,
  Body,
  Button,
  Content,
} from "native-base";
import LottieView from 'lottie-react-native';
import StepIndicator from 'react-native-step-indicator';


export default class OrderPlaced extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            currentPosition: 0
        }
    }


    render() {
      return (
        <Container style={{mariginTop: 40}}>
            <Body>
                <LottieView
                    style={{width:190}}
                    source={require('../../../assets/Animation/success_animation.json')}
                    autoPlay = {true}
                    loop = {false}
                    />
                    <Text style={{fontSize: 20, textAlign:'center', fontFamily: 'Poppins_bold', color: 'indigo'}}>Your Order has been Successfully Placed!</Text>
                    <Text style={{fontSize: 14, textAlign:'center', fontFamily: 'Poppins', color: '#000'}}>Thank you for your Order, the Kitchen has recieved your order and will shortly share an update on the status, you will be notified once order has been accepted.</Text>
            </Body>
            <Container style={{marginTop:50}}>
            <StepIndicator
         customStyles={customStyles}
         currentPosition={this.state.currentPosition}
         labels={labels}/>
         <Content style={{ marginLeft:10, marginRight:10}}>
         <Button onPress={() => this.props.navigation.navigate("Home")} style={{width:'100%', marginLeft:10, marginRight:10, marginTop:20, marginBottom: 90}} bordered success><Text style={{marginLeft:120}}>Go back Home</Text></Button>
         </Content>
         </Container>
        </Container>
      )
    }

    onPageChange(position){
        this.setState({currentPosition: position});
    }
  }

 

const labels = ["Order Placed","Order Accepted","Cooking Order","On Route","Delivered"];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013'
}