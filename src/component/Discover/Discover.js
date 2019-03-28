import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Dimensions,
    Image,
    Text,
    TouchableOpacity,
    ImageBackground
} from 'react-native';

const { width } = Dimensions.get('window')

import {lightBackground, extraLightBackground} from '../AsosColors';
import { Headers, Footers } from "../common";
import Card from '../Card';
import Orderblock from '../Orderblock';
import Header from '../RecentHeader';
import { Container } from 'native-base';
const kHorizontalMargin = 20

class Discover extends Component {
    static navigationOptions = {
        header: {
          visible: false
        }
      };
      
    constructor(props){
        super(props)
        this.state = {
            starCount: 3.5
          };
        }
       
        onStarRatingPress(rating) {
          this.setState({
            starCount: rating
          });
        }

    render() {
        return (
            <Container>
            <Headers routes={this.props.navigation} />
            <ScrollView 
            showsVerticalScrollIndicator={false} 
            contentContainerStyle={{ width:width}}>
                {/** |Premier Delivery| Outlet| Party like an animal */}

                {/* <Card type='wide' source={freeDelivery}/>
                <Card type='standard' source={salesBanner2}/>
                <Card type='standard-short' source={recommendationBanner}/> */}

                {/** YOUR EDIT */}
                <View style={{flex:1,  paddingVertical:20,  backgroundColor: 'rgb(46,46,46)'}}>
                    <View style={{margin: 20}}>
                        <Text style={{fontFamily:'Poppins_bold', fontSize:16, color:'white'}}>Your Orders</Text>
                        <Text style={{fontFamily:'Poppins', fontSize:12, color:'white'}}>View your previous orders</Text>
                    </View>
                    <ScrollView horizontal={true} contentContainerStyle={styles.recentView}> 
                        {recentlyViewed.map((item) => this.createOrderItem(item))}
                    </ScrollView> 
                </View>

                {/** RECENTLY VIEWED */}
                <View style={{flex:1,  paddingVertical:20,  backgroundColor: 'rgb(250,248,250)'}}>
                    <View style={{margin: 20}}>
                        <Header title={'Recently Viewed'}/>
                    </View>
                    <ScrollView horizontal={true} contentContainerStyle={styles.recentView}> 
                        {recentlyViewed.map((item) => this.createGridItem(item))}
                    </ScrollView> 
                </View>

            </ScrollView>
            </Container>
        );
    }
    
    presentSales(){

    }

    createRecommendedStyles(item){
        return (
        <View style={{marginVertical: 10}}>
             <Card 
             key={item.id} 
             type='grid-item' 
             title={item.title} 
             status={item.status}
             subtitle={item.subtitle} 
             imageName={item.image}
             onCardPress={ () => {
                this.props.navigation.navigate('Kitchen', {
                    title:'Recommended',
                }) 
            }} />
        </View>);
    }
    createGridItem(item){
        return (
            <View style={{marginHorizontal:10}}>
                <Card
                key={item.id} 
                type='grid-item' 
                price={item.price} 
                status={item.status}
                subtitle={item.subtitle} 
                imageName={item.image}
                onCardPress={ () => {
                    this.props.navigation.navigate('Kitchen', {
                        title:'Recently Viewed',
                    }) 
                }} />
                </View>
        );
     }
     createOrderItem(item){
        return (
            <View style={{marginHorizontal:10}}>
                <Orderblock
                key={item.id} 
                type='grid-item' 
                price={item.price} 
                subtitle={item.subtitle} 
                status={item.status}
                imageName={item.image}
                onCardPress={ () => {
                    this.props.navigation.navigate('Kitchen', {
                        title:'Recently Viewed',
                    }) 
                }} />
                </View>
        );
        
     }
     
}

const recommendedStyles = [
    {id:0, title:'Zena Kitchen', subtitle:'Fresh as the morning frost', image:require('../../../assets/Images/newness_moment.jpg')},
    {id:2, title:'BACK IN BLACK', subtitle:'Retro-futuristic cyber-niceness', image:require('../../../assets/Images/model_1.jpeg')},
    {id:3, title:'THE GIFT GUIDE', subtitle:'All present and correct', image:require('../../../assets/Images/newSeason.jpg')},
    {id:4, title:'CHRISTMAS KIT', subtitle:'Ding dong merrily on point', image:require('../../../assets/Images/UNISEX_CHRISTMASPRODUCT.jpg')}
]


const recentlyViewed = [
    {id:0, price:'Arabic', subtitle:'Zena Kitchen', status:'Open', image:require('../../../assets/Images/food1.png')},
    {id:1, price:'Grills', subtitle:'Mr Greedy', status:'Closed', image:require('../../../assets/Images/food2.png')},
    {id:2, price:'Italian', subtitle:'Pizza Home', status:'Open', image:require('../../../assets/Images/food3.png')},
    {id:3, price:'Indian', subtitle:'Home Tikka', status:'Open', image:require('../../../assets/Images/food4.png')},
    {id:4, price:'Bakery', subtitle:'Bennys bakehouse', status:'Open', image:require('../../../assets/Images/food1.png')}
];


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
    },
    gridView:{
        flexDirection:'row', 
        flexWrap:'wrap',
        alignItems: 'flex-start',
        justifyContent:'space-between',
        marginHorizontal: kHorizontalMargin,
    },
    recentView:{
        flexDirection:'row', 
        flexWrap:'nowrap',
        alignItems: 'flex-start',
        justifyContent:'space-between',
        marginLeft:10,
        marginBottom:20,

    }
});

export default Discover;

const premiumDeliveryBanner = require('../../../assets/Images/premium-delivery-banner.png')
const salesBanner = require('../../../assets/Images/newSeason.jpg')
const product = require('../../../assets/Images/product_1.jpeg')
const model1 = require('../../../assets/Images/model_1.jpeg')
const model2 = require('../../../assets/Images/model_2.jpeg')
const model3 = require('../../../assets/Images/model_3.jpeg')

const newSeason = 'http://content.asos-media.com/~/media/300317024542en-GB/mw-homepage/2017/April/0' +
        '3/jeans_hero_moment_mw_app.jpg'

const newTrend = 'http://content.asos-media.com/~/media/060417052531en-GB/mw-homepage/2017/April/11/1146x1496-newness-(2).jpg';
const holiday = 'http://content.asos-media.com/~/media/210317114653en-GB/mw-homepage/2017/April/03/springbreak-app-02.jpg';
const activeWear = 'http://content.asos-media.com/~/media/210317114821en-GB/mw-homepage/2017/April/03/mw-activewear-app-01.jpg';
const suitGuide = 'http://content.asos-media.com/~/media/210317114935en-GB/mw-homepage/2017/April/03/mw-occasionwear-app-01.jpg';
const freeDelivery = 'http://content.asos-media.com/~/media/191216102247en-GB/unisex/Free-worldwide-delivery-service-messages/App/iphone/freedelivery-service-message-iphone-1024x138_UK.png'
const salesBanner2 = 'http://content.asos-media.com/~/media/040417100631en-GB/mw-homepage/2017/April/1' +
        '1/App/mw-INT-mss-iphone-1024x672-week2.jpg'
const recommendationBanner = 'http://content.asos-media.com/~/media/100217042313en-GB/asosapp/homepage/SERVICE_MESSAGES_FEB17/v2-unisex-rec-iphone-1024x380-v1.png';
