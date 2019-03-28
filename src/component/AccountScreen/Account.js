import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text,} from 'react-native';
import ProfileViewParallax from 'react-native-parallax-scrollview';
import {Button, Container, Content, Left, List, ListItem, Right,} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as firebase from "firebase";

const kHorizontalMargin = 20

class Account extends Component {
    static navigationOptions = {
        header: {
            visible: false
        }
    };

    constructor(props) {
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

    signOutUser = async () => {
        try {
            await firebase.auth().signOut();
            navigate('Auth');
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <Container>
                <ProfileViewParallax
                    windowHeight={650 * 0.4}
                    backgroundSource={require('../../../assets/Images/profile.png')}
                    navBarTitle='Khalid Hashim'
                    userName='Khalid Hashim'
                    userTitle='khalid@akkilna.com'
                    userMobile='+97152383893'
                    userImage='https://randomuser.me/api/portraits/men/46.jpg'
                    leftIcon={{name: 'angle-left', color: '#fff', size: 30, type: 'font-awesome'}}
                    leftIconOnPress={() => this.navigation.navigate('Home')}

                >
                    <ScrollView style={{flex: 1,}}>
                        <Content>
                            <List>
                                <ListItem onPress={() => this.props.navigation.navigate("EditProfile")}>
                                    <Left>
                                        <Text style={styles.listtext}>Edit Account</Text>
                                    </Left>
                                    <Right>
                                        <Icon name="chevon-right"/>
                                    </Right>
                                </ListItem>
                                <ListItem onPress={() => this.props.navigation.navigate("ManageAddress")}>
                                    <Left>
                                        <Text style={styles.listtext}>Saved Addresses</Text>
                                    </Left>
                                    <Right>
                                        <Icon name="chevon-right"/>
                                    </Right>
                                </ListItem>
                                <ListItem onPress={() => this.props.navigation.navigate("SavedCards")}>
                                    <Left>
                                        <Text style={styles.listtext}>Saved Cards</Text>
                                    </Left>
                                    <Right>
                                        <Icon name="chevon-right"/>
                                    </Right>
                                </ListItem>
                                <ListItem onPress={() => this.props.navigation.navigate("ChangePassword")}>
                                    <Left>
                                        <Text style={styles.listtext}>Change Password</Text>
                                    </Left>
                                    <Right>
                                        <Icon name="chevon-right"/>
                                    </Right>
                                </ListItem>
                            </List>
                        </Content>
                        <Content style={{marginBottom: 40, marginLeft: 20, marginRight: 20}}>
                            <Button onPress={() => this.signOutUser()}
                                    style={{marginTop: 20, width: '100%', justifyContent: 'center'}} danger><Text
                                style={styles.buttontext}>SignOut</Text></Button>
                        </Content>
                    </ScrollView>
                </ProfileViewParallax>
            </Container>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
    },
    listtext: {
        fontFamily: 'Poppins',
        fontSize: 16,
    },
    listprice: {
        fontFamily: 'Poppins_bold',
        fontSize: 16,
    },
    buttontext: {
        fontFamily: 'Poppins_bold',
        fontSize: 16,
        color: '#fff',
        textAlign: 'center'
    },
});

export default Account;
