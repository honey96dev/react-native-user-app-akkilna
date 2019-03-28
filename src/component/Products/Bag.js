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
  View,
  Thumbnail,
  Header
} from "native-base";
import Spinner from 'react-native-number-spinner';
let { height } = Dimensions.get("window");
const cards = [
  {
    kitchen: "Zena Kitchen",
    total: "AED 900",
    items: "6",
    logo: require("../../../assets/Images/food1.png")
  },
  {
    kitchen: "Dave Pizza",
    total: "AED 450",
    items: "4",
    logo: require("../../../assets/Images/food2.png")
  }
];
class Bag extends Component {
  static navigationOptions = {
    header: {
      visible: false
    }
  };
  render() {
    return (
      <Container style={{ backgroundColor: "white" }}>
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
            <Title style={{ color: "black" }}>Cart</Title>
          </Body>
          <Right />
        </Header>
        <View
          style={{
            height: height - 60,
            marginBottom: 5,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 5
          }}
        >
          <Content>
            <FlatList
              data={cards}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <Card
                  style={{
                    elevation: 3,
                    marginBottom: 15,
                    marginTop: 10
                  }}
                >
                  <CardItem header bordered>
                    <Left>
                      <Thumbnail circular large source={item.logo} />
                    </Left>
                    <Body style={{ alignItems: "flex-start", paddingTop: 10, marginRight:-50, }}>
                      <Text style={styles.listtext}>Kitchen :</Text>
                      <Text style={styles.listtext}>Items :</Text>
                      <Text style={styles.listtext}>Total :</Text>
                    </Body>
                    <Right>
                      <Body
                        style={{ alignItems: "flex-start", paddingTop: 10 }}
                      >
                        <Text style={styles.listprice}>{item.kitchen}</Text>
                        <Text style={styles.listprice}>{item.items}</Text>
                        <Text style={styles.listprice}>{item.total}</Text>
                      </Body>
                    </Right>
                  </CardItem>
                  <CardItem bordered>
                    <Left />
                    <Text style={{ fontFamily: 'Poppins_bold' }}>
                      Items
                    </Text>

                    <Right />
                  </CardItem>
                  <CardItem style={{ height: height - 450 }}>
                    <Content>
                    <List>
                    {cartitems.map((item) => this.createListable(item))} 
                    </List>
                    </Content>
                  </CardItem>

                  <CardItem footer bordered>
                    <Left>
                      <Button iconLeft transparent danger>
                        <Icon type='FontAwesome' name='trash' />
                        <Text>Remove</Text>
                      </Button>
                    </Left>
                    <Right>
                      <Button onPress={() => this.props.navigation.navigate("Checkout")} iconLeft transparent success>
                      <Icon type='FontAwesome' name='shopping-cart' />
                        <Text style={styles.listtext}>Checkout</Text>
                      </Button>
                    </Right>
                  </CardItem>
                </Card>
              )}
              keyExtractor={item => item.item}
            />
          </Content>
        </View>
      </Container>
    );
  }


  createListable(item){
    return(
      <ListItem style={{ marginTop:10}}>
                      <View style={{flexDirection: 'row'}}>
                        <Left>
                          <Text style={styles.listtext}>{item.title}</Text>
                          <Text style={styles.listprice}>{item.price}</Text>
                        </Left>
                        <Right>
                           <Spinner 
                           max={100} 
                           min={2} 
                           default={5} 
                           color='#821CDD' 
                           numColor='#821CDD'
                           onNumChange={(num)=>{console.log(num)}} />
                        </Right>
                        </View>
                        </ListItem>
    );
  }
}

const cartitems = [
  {id:0, price:'AED 40', title:'Chicken Platter', subtitle:'Indian', status:'Open', image:require('../../../assets/Images/food1.png',)},
  {id:1, price:'AED 30', title:'Kebab Grills', subtitle:'Arabic', status:'Closed', image:require('../../../assets/Images/food2.png', )},
  {id:2, price:'AED 20', title:'Chicken Tikka', subtitle:'Desserts', status:'Open', image:require('../../../assets/Images/food3.png', )},
  {id:3, price:'AED 10', title:'Lamb Chops', subtitle:'Sweets',  status:'Open',image:require('../../../assets/Images/food4.png',)},
  {id:4, price:'AED 50', title:'Baby Back Ribs', subtitle:'Beverages', status:'Open',image:require('../../../assets/Images/food2.png', )},
  {id:2, price:'AED 60', title:'Spicy Chicken', subtitle:'Indian', status:'Closed', image:require('../../../assets/Images/food1.png',)},
  {id:0, price:'AED 40', title:'Chicken Platter', subtitle:'Indian', status:'Open', image:require('../../../assets/Images/food1.png',)},
  {id:1, price:'AED 30', title:'Kebab Grills', subtitle:'Arabic', status:'Closed', image:require('../../../assets/Images/food2.png', )},
  {id:2, price:'AED 20', title:'Chicken Tikka', subtitle:'Desserts', status:'Open', image:require('../../../assets/Images/food3.png', )},
  {id:3, price:'AED 10', title:'Lamb Chops', subtitle:'Sweets',  status:'Open',image:require('../../../assets/Images/food4.png',)},
  {id:4, price:'AED 50', title:'Baby Back Ribs', subtitle:'Beverages', status:'Open',image:require('../../../assets/Images/food2.png', )},
  {id:2, price:'AED 60', title:'Spicy Chicken', subtitle:'Indian', status:'Closed', image:require('../../../assets/Images/food1.png',)},
];

const styles = StyleSheet.create({
  listtext: {
      fontFamily: 'Poppins',
      fontSize: 14,
  },
  listprice: {
    fontFamily: 'Poppins_bold',
    fontSize: 14,
},
});
/* 
import data from "./temp.json";
let dataObj = data[0];
let dataArray = Object.keys(dataObj).map(key => {
  let obj = dataObj[key];
  obj.keyName = key;
  return obj;
});
<List
dataArray={dataArray[0]}
renderRow={item => (
  <ListItem>
    <Text>{item}</Text>
  </ListItem>
)}
/>
*/
export default Bag;