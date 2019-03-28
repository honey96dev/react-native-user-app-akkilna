import React, { Component } from "react";
import { Headers, Footers } from "../common";
import { CardDeck } from "./common";
import {
  Container,
  Content,
  Icon,
  Input,
  Item,
  Header,
  Button,
  Text,
  Form,
  Picker,
  CheckBox,
  ListItem,
  List, 
  Body,
  Left,
  Right
} from "native-base";
import Color from '../AsosColors';
import { View, Image, StyleSheet, ScrollView, Modal, Alert,  TouchableHighlight, screenWidth, Dimensions} from "react-native";
import CalendarStrip from "react-native-calendar-strip";
import { TagSelect } from 'react-native-tag-select';
import StarRating from 'react-native-star-rating';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import Category from '../../component/Category';
const {width, height} = Dimensions.get('window');
export default class HomeScreen extends Component {
  static navigationOptions = {
    header: {
      visible: false
    }
  };

  constructor(props) {
    super(props);
    this.props.fetchCurrentUser();
    this.state = {
      selectedIndex: 0,
    };
  }
  
  handleIndexChange = (index) => {
    this.setState({
      ...this.state,
      selectedIndex: index,
    });
  }

  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible });
  }

  render() {

    const data = [
      { id: 1, label: '1 Star' },
      { id: 2, label: '2 Stars' },
      { id: 3, label: '3 Stars' },
      { id: 4, label: '4 Stars' },
      { id: 5, label: '5 Stars' },
    ];

    const data2 = [
      { id: 1, label: '$' },
      { id: 2, label: '$$' },
      { id: 3, label: '$$$' },
    ];

    return (
      <Container style={{ backgroundColor: "white" }}>
        <Headers routes={this.props.navigation} />
        <View style={{marginTop: 15}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <ScrollView>
          <View style={{marginTop: 22}}>
            <View>
            <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={{textAlign:"right", fontFamily:'Poppins_bold', marginRight:20, marginTop:10}}>Close</Text>
              </TouchableHighlight>
            <Form style={{marginLeft:20, marginRight:20, marginBottom: 10}}>
            <CalendarStrip
                    calendarAnimation={{type: 'sequence', duration: 30}}
                    daySelectionAnimation={{type: 'background', duration: 300, highlightColor: 'white'}}
                    style={{height:100, paddingTop: 20, paddingBottom: 10}}
                    calendarHeaderStyle={{color: '#7743CE'}}
                    calendarColor={'white'}
                    dateNumberStyle={{color: '#7743CE'}}
                    dateNameStyle={{color: '#7743CE'}}
                    iconLeft={require('../../../assets/Images/left-arrow.png')}
                    iconRight={require('../../../assets/Images/right-arrow.png')}
                    iconContainer={{flex: 0.1}}
                />

        <Item style={{marginTop:20,}} >
        <Picker
                mode="dropdown"
                style={{ width: undefined }}
                iosIcon={<Image source={require('../../../assets/Images/down.png')} style={{ height: 20, width: 20, resizeMode:'contain', marginRight: 15, }} />}
                placeholder="Select Timings                              "
                placeholderStyle={{ color: "#000", fontFamily: 'Poppins' }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
              
                <Picker.Item label="Any Time" value="key0" />
                <Picker.Item label="Breakfast (7am to 10am)" value="key1" />
                <Picker.Item label="Brunch (10am to 1pm)" value="key2" />
                <Picker.Item label="Lunch (1pm to 3pm)" value="key4" />
                <Picker.Item label="Supper (3pm to 6pm)" value="key3" />
                <Picker.Item label="Dinner (6pm to 10pm)" value="key3" />
              </Picker></Item>
        <Item style={{marginTop:20,}} >
        <Picker
                mode="dropdown"
                style={{ width: undefined }}
                iosIcon={<Image source={require('../../../assets/Images/down.png')} style={{ height: 20, width: 20, resizeMode:'contain', marginRight: 15, }} />}
                placeholder="Select a Cuisine                               "
                placeholderStyle={{ color: "#000", fontFamily: 'Poppins' }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
              
                <Picker.Item label="All Cuisines" value="key0" />
                <Picker.Item label="American" value="key1" />
                <Picker.Item label="Breakfast" value="key2" />
                <Picker.Item label="Beverages" value="key4" />
                <Picker.Item label="Burgers" value="key3" />
                <Picker.Item label="Chocolates" value="key4" />
                <Picker.Item label="Cakes" value="key5" />
                <Picker.Item label="Chinese" value="key6" />
                <Picker.Item label="Desserts" value="key7" />
                <Picker.Item label="Frozen" value="key8" />
                <Picker.Item label="Healthy" value="key9" />
                <Picker.Item label="Indian" value="key10" />
                <Picker.Item label="Iranian" value="key11" />
                <Picker.Item label="Italian" value="key12" />
                <Picker.Item label="Japanese" value="key13" />
                <Picker.Item label="Lebanese" value="key14" />
                <Picker.Item label="Mexican" value="key15" />
                <Picker.Item label="Pizzas" value="key16" />
                <Picker.Item label="Sandwiches" value="key17" />
                <Picker.Item label="Seafood" value="key18" />
                <Picker.Item label="Thai" value="key19" />
                <Picker.Item label="Turkish" value="key20" />
                <Picker.Item label="Pakistani" value="key21" />
                <Picker.Item label="Pastries" value="key22" />
                <Picker.Item label="Egyptian" value="key23" />
                <Picker.Item label="Vegetian" value="key24" />
                <Picker.Item label="Vegan" value="key25" />
                <Picker.Item label="Mandi" value="key26" />
                <Picker.Item label="Indonesian" value="key27" />
                <Picker.Item label="Emirati" value="key28" />
                <Picker.Item label="International" value="key29" />
                <Picker.Item label="Arabic" value="key30" />
                <Picker.Item label="Asian" value="key31" />
                <Picker.Item label="Meats" value="key32" />
              </Picker></Item>
       
        <Item style={{ justifyContent:'center' ,marginTop:10,marginBottom:10, borderBottomColor:'#fff'}} >
        <SegmentedControlTab tabsContainerStyle={styles.tabsContainerStyle}
                            tabStyle={styles.tabStyle}
                            tabTextStyle={styles.tabTextStyle}
                            activeTabStyle={styles.activeTabStyle}
                            activeTabTextStyle={styles.activeTabTextStyle}
                            allowFontScaling={false}
                            values={['Individual', 'Group']}
                            selectedIndex={this.state.selectedIndex}
                            onTabPress={this.handleIndexChange}
                    />
        </Item>

        <Item style={{ flexDirection:'column', alignItems:'left', marginTop:5,}}>
        <Text style={styles.labelText}>Rating:</Text>
        <TagSelect
          data={data}
          max={3}
          theme= {'success'}
          ref={(tag) => {
            this.tag = tag;
          }}
          onMaxError={() => {
            Alert.alert('Ops', 'Max reached');
          }}
        />
        </Item>

        <Item style={{ flexDirection:'column', alignItems:'left', marginTop:5,}}>
        <Text style={styles.labelText}>Costs:</Text>
        <TagSelect
          data={data2}
          max={3}
          theme= {'warning'}
          ref={(tag) => {
            this.tag = tag;
          }}
          onMaxError={() => {
            Alert.alert('Ops', 'Max reached');
          }}
        />
        </Item>

          <Item style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
        <Button style={styles.secondarybtn}
                      block
                      onPress={() => {
                        this.props.navigation.navigate("Result");
                      }}
                    >
                      <Text style={{ color:'#707070' ,fontFamily: 'Poppins_bold' ,fontSize: 16, fontWeight: "bold" }}>Reset</Text>
                    </Button>
                    <Button style={styles.primarybtn}
                      block
                      onPress={() => {
                        this.props.navigation.navigate("Result");
                      }}
                    >
                      <Text style={{ fontFamily: 'Poppins_bold' ,fontSize: 16, fontWeight: "bold" }}>Filter</Text>
                    </Button>
                    </Item>
        
            </Form>
            </View>
          </View>
          </ScrollView>
        </Modal>

        <View style={{backgroundColor:'#BD7FEB'}}>

        <Item style={{marginTop:20, marginRight:20, marginLeft:20, backgroundColor:'#fff'}} >
          <Input placeholder="Search by keyword or cuisine" />
          <Button
            transparent
            onPress={() => {
              this.props.navigation.navigate('Result');
            }}
          >
            <Image source={require('../../../assets/Images/search-gray.png')} style={{ height: 24, width: 24, resizeMode:'contain', marginRight: 15, }} />
          </Button>
        </Item >
        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <View style={{ borderRadius:10, backgroundColor:'#BD7FEB', marginRight:100, marginLeft:100, marginTop:10, marginBottom:10}}>
          <Text style={{ textAlign: 'center',fontFamily: 'Poppins', color:'#fff', marginTop:5, marginBottom:5 }}>Filter</Text>
          </View>
        </TouchableHighlight>

      </View>
        </View>
          <View style={{ marginLeft:20}}>
            <Text style={{fontFamily:'Poppins_bold', mariginLeft: 10, marginTop:10, fontSize: 24 }}> Featured Kitchens</Text>
            </View>
                <ScrollView >
                  <View style={{  margin: 15}}>
                {products.map((item) => this.createGridItem(item))}
                </View>
                </ScrollView>
      </Container>
    );
  }

  createGridItem(item){
    return(
        <TouchableHighlight style={{
            backgroundColor:'white',
            borderWidth: 0.5, 
            borderColor: 'rgba(0,0,0,0.1)',
            shadowColor:'black',
            shadowOffset:{ width: 0, height: 3 },
            shadowRadius:4,
            shadowOpacity:0.1,
            elevation: 3,
            marginVertical:10,
            }}
            activeOpacity={0.8} 
            underlayColor={Color.extraLightBackground}
            onPress={() => this.props.navigation.navigate('Kitchen')}>
            
            <View style={[styles.gridItem]}>
                <Image style={[{ height:180, resizeMode:'cover', alignSelf:'center',}]} source={item.image}/>
                <View style={{flex:1,flexDirection:'column', marginLeft:5, marginTop:5, marginBottom:5, }}>
                    <View style={{justifyContent:'space-between', flexDirection:'row', marginTop:5,marginRight:10, marginLeft:10, marginBottom:0 }}>
                        <Text style={styles.price}>{item.title}</Text>
                        <Text style={styles.status}>{item.status}</Text>
                    </View>
                    <View style={{justifyContent:'space-between', flexDirection:'row',  marginTop:5,marginRight:10, marginLeft:10}}>
                        <Text style={styles.subTitlePrice}>{item.subtitle}</Text>
                        <StarRating style={styles.star} disabled={false} maxStars={5} rating={this.state.starCount} fullStarColor={'yellow'} starSize={10} selectedStar={(rating) => this.onStarRatingPress(rating)}/>
                    </View>
                </View>
            </View>
               
        </TouchableHighlight>
        
        
    )
  }

}


const products = [
  {id:0, price:'', title:'Zenas Bakary', subtitle:'Indian', status:'Open', image:require('../../../assets/Images/food1.png',)},
  {id:1, price:'', title:'Daves Pizza', subtitle:'Arabic', status:'Closed', image:require('../../../assets/Images/food2.png', )},
  {id:2, price:'', title:'Tikka House', subtitle:'Desserts', status:'Open', image:require('../../../assets/Images/food3.png', )},
  {id:3, price:'', title:'Mr Greedy Sweets', subtitle:'Sweets',  status:'Open',image:require('../../../assets/Images/food4.png',)},
  {id:4, price:'', title:'Sweet Shop', subtitle:'Beverages', status:'Open',image:require('../../../assets/Images/food2.png', )},
  {id:2, price:'', title:'Cake Box', subtitle:'Indian', status:'Closed', image:require('../../../assets/Images/food1.png',)},
];
/*
 <Header searchBar rounded style={{ backgroundColor: "#460583" }}>
          <Item style={{ backgroundColor: "white" }}>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-laptop" />
          </Item>
          <Button transparent>
            <Text style={{ color: "white" }}>Search</Text>
          </Button>
        </Header>
*/
const styles = StyleSheet.create({
  tabsContainerStyle: {
    borderColor: '#640AB6',
  },
  tabStyle: {
    borderColor: '#640AB6',
    },
  tabTextStyle: {
    fontFamily: 'Poppins',
    color: '#640AB6',
  },
  activeTabStyle: {
    backgroundColor: '#640AB6',
    },
  activeTabTextStyle: {
    //custom styles
  },
  tabBadgeContainerStyle: {
    //custom styles
  },
  activeTabBadgeContainerStyle: {
    //custom styles
  },
  tabBadgeStyle: {
    //custom styles
  },
  activeTabBadgeStyle: {
    //custom styles
  },
  primarybtn: {
      backgroundColor: '#9025F2',
      shadowColor: "rgba(114, 19, 234, 0.29)",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 1,
      shadowRadius: 7,
      marginTop: 30,
      marginLeft: 5,
    },
    secondarybtn: {
      backgroundColor: '#fff',
      borderColor: '#707070',
      borderWidth: 1,
      shadowColor: "rgba(112, 112, 112, 0.29)",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 1,
      shadowRadius: 7,
      marginTop: 30,
      marginRight: 5,
    },
    welcome: {
      flex: 1,
      margin: 20,
      backgroundColor: 'orange',
      margin: 10,
      textAlign: 'center',
      fontSize: 20,
      paddingTop: 70,
    },
    buttonContainer: {
      padding: 15,
    },
    buttonInner: {
      marginBottom: 15,
    },
    labelText: {
      color: '#000',
      fontFamily: 'Poppins',
      marginBottom: 15,
      textAlign:'left',

    },
    item: {
      borderWidth: 1,
      borderColor: '#640AB6',    
      backgroundColor: '#FFF',
    },
    label: {
      color: '#640AB6'
    },
    itemSelected: {
      backgroundColor: '#640AB6',
    },
    labelSelected: {
      color: '#FFF',
    },

    container: {
      flex: 1,
      backgroundColor: Color.lightBackground,
      paddingTop: 20,
      justifyContent: 'center',
      alignItems: 'center'
  },
  gridView:{
      flexDirection:'row', 
      flexWrap:'wrap',
      alignItems: 'flex-start',
      justifyContent:'space-around',
  },
  resultsCount: {
      fontFamily: 'Poppins',
      fontSize: 14,
      fontWeight: "100",
      textAlign: 'center',
      color: Color.lightText,
      paddingVertical:10,
      width:width,
  },
  gridItem: {
      overflow:'hidden',
      backgroundColor: 'white',
      height:250,
  },
  subTitlePrice:{
      fontFamily:'Poppins',
      fontSize:11,
      color:Color.lightText,
  },
  price:{
      fontFamily:'Poppins',
      fontSize:14,
      fontWeight:"600",
      textAlign: 'left',
      color:Color.darkText,
  },
  star:{
    textAlign: 'left',
    marginBottom: 5
},
status:{
  color: '#22C674',
  fontFamily:'Poppins_bold',
  fontSize:12,
}

})
