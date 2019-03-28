import React from "react";
import * as firebase from "firebase";
import {ActivityIndicator, Dimensions, Image, StyleSheet} from "react-native";
import {Button, Card, CardItem, Container, Content, Form, Input, Item, Tab, Tabs, Text, View,} from "native-base";
import Spinner from "react-native-loading-spinner-overlay";
import {AccessToken, LoginManager} from "react-native-fbsdk";


var {width} = Dimensions.get('window');

firebase.initializeApp({
        apiKey: "AIzaSyAJyOgoLgITnSvw92NOaTjNjnwA8RtSD-Q",
        authDomain: "akkilna.firebaseapp.com",
        databaseURL: "akkilna.firebaseapp.com",
        projectId: "akkilna",
        storageBucket: "akkilna.appspot.com",
        messagingSenderId: "261711506078"
    }
);

export default class loginScreen extends React.Component {

    static navigationOptions = {header: null};

    constructor(props) {
        super(props);
        this.state = {
            currentUser: '',
            email: '',
            password: '',
            error: '',
            loading: false,
            UserInput: '',
            loggedIn: null,
            loggedOut: null
        };
    }

    componentDidMount = () => {
        this.setState({loading: true});
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                const {navigate} = this.props.navigation;
                navigate('Home')
                this.setState({loggedIn: true, loggedOut: false, loading: false});
            } else {
                this.setState({loggedIn: false, loggedOut: true, loading: false});
            }
        });
    }

    onLoginPress() {
        this.setState({error: '', loading: true})

        const {email, password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {

                this.props.navigation.navigate('Main');
            })
            .catch(() => {
                this.refs.modal.open();
                this.state({error: 'Authentication Error', loading: false});
            })
    }

    onSignUpPress() {
        this.setState({error: '', loading: true});
        const {email, password} = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                this.state({error: '', loading: false});
                this.props.navigation.navigate('Main');
            })
            .catch(() => {
                this.refs.modal.open();
                this.state({error: 'Authentication Error', loading: false});
            })
    }

    _fbAuth() {
        LoginManager.logInWithReadPermissions(['public_profile']).then(
            function (result) {
                if (result.isCancelled) {
                    alert('Login Cancelled');
                } else {

                    AccessToken.getCurrentAccessToken().then((accessTokenData) => {
                        const credential = firebase.auth.FacebookAuthProvider.credential(accessTokenData.accessToken)
                        firebase.auth().signInWithCredential(credential).then((reuslt) => {
                            //Promise was successful //
                        }, (error) => {
                            //Promise was rejected //
                            console.log(error)
                        })
                    }, (error) => {
                        console.log('An Error has Occoured: ' + error)
                    })


                    alert('Login Successful with Permissions: '
                        + result.grantedPermissions.toString())
                }
            },
            function (error) {
                alert('login failed with errors: ' + error);
            }
        );
    }


    renderButtonOrLoading() {
        if (this.state.loading) {
            return <Text>Loading</Text>
        }
        return <View style={{marginTop: 30,}}>

            <View>
                <Button
                    block
                    style={styles.primarybtn}
                    onPress={this.onLoginPress.bind(this)}><Text style={{textAlign: 'center'}}>Login</Text></Button>
            </View>
            <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                    <Button style={styles.fbbtn}
                            block
                            onPress={this._fbAuth}
                    >
                        <Text style={{fontFamily: 'Poppins_bold', fontSize: 12, fontWeight: "bold"}}>facebook Sign
                            In</Text>
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
                        <Text style={{fontFamily: 'Poppins_bold', fontSize: 12, fontWeight: "bold"}}>Google Sign
                            In</Text>
                    </Button>
                </View>
            </View>
        </View>
    }

    renderSignUpButtonOrLoading() {
        if (this.state.loading) {
            return <ActivityIndicator/>
        }
        return <View style={{marginTop: 30,}}>

            <View>
                <Button
                    block
                    style={styles.primarybtn}
                    onPress={this.onSignUpPress.bind(this)}><Text style={{textAlign: 'center',}}>Sign Up</Text></Button>
            </View>
            <View style={{flexDirection: 'row'}}>
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
                        <Text style={{fontFamily: 'Poppins_bold', fontSize: 12, fontWeight: "bold"}}>facebook Sign
                            Up</Text>
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
                        <Text style={{fontFamily: 'Poppins_bold', fontSize: 12, fontWeight: "bold"}}>Google Sign
                            Up</Text>
                    </Button>
                </View>
            </View>
        </View>
    }

    render() {
        return (
            <Container>
                <Spinner visible={this.props.loading}/>

                <Content>
                    <Card transparent>
                        <CardItem style={{borderColor: '#fff',}}>
                            <Content style={{marginTop: 30, marginBottom: 20}}>
                                <Image style={{width: 140, height: 76, alignSelf: 'center'}}
                                       source={require('../../../assets/Images/logo-text.png')}
                                />
                            </Content>
                        </CardItem>
                        <Tabs
                            style={{margin: 20, backgroundColor: '#fff'}}
                            tabBarUnderlineStyle={{backgroundColor: '#9025F2'}}>
                            <Tab
                                tabStyle={{backgroundColor: '#fff'}}
                                activeTabStyle={{backgroundColor: '#fff'}}
                                activeTextStyle={{color: '#9025F2'}}
                                heading="Sign In">
                                <CardItem>
                                    <Content style={{marginTop: 10}} scrollEnabled={false}>
                                        <Text style={{
                                            textAlign: 'center',
                                            fontSize: 30,
                                            fontFamily: 'Poppins_bold',
                                            color: '#000',
                                        }}>Sign In</Text>
                                    </Content>
                                </CardItem>
                                <CardItem>
                                    <Form style={{flex: 1}}>
                                        <Item>

                                            <Input
                                                placeholder={"email address"}
                                                autoCapitalize="none"
                                                onChangeText={email => this.setState({email})}></Input>
                                        </Item>
                                        <Item>

                                            <Input
                                                secureTextEntry
                                                placeholder={"password"}
                                                onChangeText={password => this.setState({password})}></Input>
                                        </Item>
                                        {this.renderButtonOrLoading()}
                                        <Text>{this.state.error}</Text>
                                    </Form>
                                </CardItem>
                            </Tab>
                            <Tab
                                tabStyle={{backgroundColor: '#fff'}}
                                activeTabStyle={{backgroundColor: '#fff'}}
                                activeTextStyle={{color: '#9025F2'}}
                                heading="Sign Up">
                                <CardItem>
                                    <Content style={{marginTop: 10}} scrollEnabled={false}>
                                        <Text style={{
                                            textAlign: 'center',
                                            fontSize: 30,
                                            fontFamily: 'Poppins_bold',
                                            color: '#000',
                                        }}>Sign Up</Text>
                                    </Content>
                                </CardItem>
                                <CardItem>
                                    <Form style={{flex: 1}}>
                                        <Item>
                                            <Input
                                                placeholder={"full name"}
                                                autoCapitalize="none"
                                                onChangeText={name => this.setState({name})}></Input>
                                        </Item>
                                        <Item>
                                            <Input
                                                placeholder={"email address"}
                                                autoCapitalize="none"
                                                onChangeText={email => this.setState({email})}></Input>
                                        </Item>
                                        <Item>
                                            <Input
                                                placeholder={"password"}
                                                autoCapitalize="none"
                                                onChangeText={password => this.setState({password})}></Input>
                                        </Item>

                                        {this.renderSignUpButtonOrLoading()}
                                        <Text>{this.state.error}</Text>
                                    </Form>
                                </CardItem>
                            </Tab>
                        </Tabs>

                    </Card>
                </Content>
            </Container>

        )
    }
}

const styles = StyleSheet.create({
    primarybtn: {
        backgroundColor: '#9025F2',
        shadowColor: "rgba(114, 19, 234, 0.29)",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 1,
        shadowRadius: 7,

    },
    fbbtn: {
        backgroundColor: '#6286D8',
        shadowColor: "rgba(28, 19, 234, 0.29)",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 1,
        shadowRadius: 7,
        marginTop: 20,
    },
    googlebtn: {
        backgroundColor: '#D94444',
        shadowColor: "rgba(131, 27, 27, 0.29)",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 1,
        shadowRadius: 7,
        marginTop: 20,
        marginLeft: 10,
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
        color: '#640AB6',
        paddingLeft: 5,
        textDecorationLine: "underline",
        fontSize: 14
    }
})
