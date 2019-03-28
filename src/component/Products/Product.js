import React, {Component} from 'react';
import {Dimensions, FlatList, ScrollView, StyleSheet, View,} from 'react-native';
import ProductViewParallax from 'react-native-parallax-scrollview';
import Card from '../Card';
import Orderblock from '../Orderblock';
import {Body, CheckBox, Container, Content, Footer, ListItem, Text} from 'native-base';

const {width} = Dimensions.get('window')

const addonsList = [
    {id: 0, title: 'Spicy', price: 'AED 10',},
    {id: 2, title: 'Extra Sauce', price: 'AED 5',},
    {id: 3, title: 'Extra Meat', price: 'AED 7',},
    {id: 4, title: 'Salad Plate', price: 'AED 15',}
];


const kHorizontalMargin = 20

class Product extends Component {
    static navigationOptions = {
        header: {
            visible: false
        }
    };

    render() {
        return (
            <Container>
                <ProductViewParallax
                    windowHeight={450 * 0.4}
                    backgroundSource={require('../../../assets/Images/food2.png')}
                    navBarTitle='Chicken Platter'
                    userName='Chicken Platter'
                    leftIcon={{name: 'angle-left', color: '#fff', size: 30, type: 'font-awesome'}}
                    leftIconOnPress={() => this.props.navigation.navigate('Kitchen')}
                >
                    <ScrollView style={{flex: 1, backgroundColor: '#F8F8F8'}}>
                        <View style={{
                            backgroundColor: '#fff',
                            justifyContent: 'left',
                            alignItems: 'left',
                            paddingTop: 10,
                            paddingLeft: 10,
                            paddingBottom: 10,
                        }}>
                            <Text style={{fontFamily: 'Poppins', fontSize: 14, color: '#000'}}>Golden fried chicken
                                popcorn, american cheddar cheese, beef bacon, with buffalo sauce & ranch sauce.</Text>
                            <Text style={{fontFamily: 'Poppins_bold', fontSize: 20, color: '#000'}}>AED 90 per
                                plate</Text>
                        </View>
                        <FlatList
                            data={addonsList}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item}) => (
                                <Content>
                                    <Content>
                                        <ListItem>
                                            <CheckBox checked={false}/>
                                            <Body style={{flexDirection: 'row'}}>
                                            <Text>{item.title}</Text>
                                            <Text style={{alignContent: 'flex-end'}}>{item.price}</Text>
                                            </Body>
                                        </ListItem>
                                    </Content>
                                </Content>
                            )}
                            keyExtractor={item => item.item}
                        />
                    </ScrollView>
                </ProductViewParallax>
                <Footer style={{backgroundColor: '#71C75C'}}>
                    <Button onPress={() => this.props.navigation.navigate("Kitchen")}
                            style={{backgroundColor: 'none', justifyContent: 'flex-start'}}>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <Text style={{fontFamily: 'Poppins_bold', fontSize: 20, color: '#fff'}}>ADD TO CART</Text>
                            <Text style={{fontFamily: 'Poppins', fontSize: 20, color: '#fff', marginLeft: 10}}> AED
                                90</Text>
                        </View>
                    </Button>
                </Footer>
            </Container>
        );
    }

    presentSales() {

    }

    createAddonsList(item) {
        <Content>
            <ListItem>
                <CheckBox checked={true}/>
                <Body>
                <Text>{item.title}</Text>
                </Body>
            </ListItem>
        </Content>
    }

    createRecommendedStyles(item) {
        return (
            <View style={{marginVertical: 10}}>
                <Card
                    key={item.id}
                    type='grid-item'
                    title={item.title}
                    status={item.status}
                    subtitle={item.subtitle}
                    imageName={item.image}
                    onCardPress={() => {
                        this.props.navigation.navigate('ProductListPage', {
                            title: 'Recommended',
                        })
                    }}/>
            </View>);
    }

    createGridItem(item) {
        return (
            <View style={{marginHorizontal: 10}}>
                <Card
                    key={item.id}
                    type='grid-item'
                    price={item.price}
                    status={item.status}
                    subtitle={item.subtitle}
                    imageName={item.image}
                    onCardPress={() => {
                        this.props.navigation.navigate('ProductListPage', {
                            title: 'Recently Viewed',
                        })
                    }}/>
            </View>
        );
    }

    createOrderItem(item) {
        return (
            <View style={{marginHorizontal: 10}}>
                <Orderblock
                    key={item.id}
                    type='grid-item'
                    price={item.price}
                    subtitle={item.subtitle}
                    status={item.status}
                    imageName={item.image}
                    onCardPress={() => {
                        this.props.navigation.navigate('ProductListPage', {
                            title: 'Recently Viewed',
                        })
                    }}/>
            </View>
        );

    }

}


const recentlyViewed = [
    {
        id: 0,
        price: 'Arabic',
        subtitle: 'Zena Kitchen',
        status: 'Open',
        image: require('../../../assets/Images/food1.png')
    },
    {
        id: 1,
        price: 'Grills',
        subtitle: 'Mr Greedy',
        status: 'Closed',
        image: require('../../../assets/Images/food2.png')
    },
    {
        id: 2,
        price: 'Italian',
        subtitle: 'Pizza Home',
        status: 'Open',
        image: require('../../../assets/Images/food3.png')
    },
    {
        id: 3,
        price: 'Indian',
        subtitle: 'Home Tikka',
        status: 'Open',
        image: require('../../../assets/Images/food4.png')
    },
    {
        id: 4,
        price: 'Bakery',
        subtitle: 'Bennys bakehouse',
        status: 'Open',
        image: require('../../../assets/Images/food1.png')
    }
];


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
    },
    gridView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginHorizontal: kHorizontalMargin,
    },
    recentView: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginBottom: 20,

    }
});

export default Product;

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
