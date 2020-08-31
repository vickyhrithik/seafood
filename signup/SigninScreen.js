import React,{ Component } from 'react';
import { Text, View,Image,StyleSheet,TextInput,TouchableOpacity,Alert} 
from 'react-native';
import signinstyle from './Signin.Style'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {Indicator} from "../../util/Indicator"
import { Strings } from "../../util/Strings";
import {Colors} from "../../util/Color";
import LinearGradient from 'react-native-linear-gradient';

import * as Animatable from 'react-native-animatable';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import {connect} from 'react-redux';
import {auth_login} from '../../redux/actions/AuthAction';
import axios from 'axios';

 class SigninScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
          versionName : "",
          name: '',
      password: '',
      check_textInputChange: false,
      secureTextEntry: true,
      isValidUser: true,
      isValidPassword: true,
          
        };
        
      }

      textInputChange = name => {
        const emailCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const mobileNumberCheck = /^[0]?[6789]\d{9}$/;
        if (emailCheck.test(name) || mobileNumberCheck.test(name)) {
          this.setState({
            name: name,
            check_textInputChange: true,
            isValidUser: true,
          });
        } else {
          this.setState({
            name: name,
            check_textInputChange: false,
            isValidUser: false,
          });
        }
      };

      handlePasswordChange = password => {
        if (password.trim().length >= 6) {
          this.setState({
            password: password,
            isValidPassword: true,
          });
        } else {
          this.setState({
            password: password,
            isValidPassword: false,
          });
        }
      };

      updateSecureTextEntry = () => {
        this.setState({
          secureTextEntry: !this.state.secureTextEntry,
        });
      };
     
      loginHandle = (name,password) => {
        if (name.length == 0 ||
          password.length == 0 ) 
          {
          Alert.alert('Register Email/ Number cannot be empty!', 'error');
          return;
        }
    
        axios.post('http://ec2-13-229-120-202.ap-southeast-1.compute.amazonaws.com:5000/api/v1.0/users/login',{
          email:name,
          username:"vacij",
          password:password
       }).then(response =>{
         console.log(response.data);
         if(response.status == 200){
           this.props.navigation.navigate('Bottom Tabs')
         }else if(response.status == 400){
           Alert.alert('Email or otp not found')
         }else{
           Alert.alert('Something error')
         }
       }).catch(error =>{
         console.log(error);
       })
    
      //   fetch('http://ec2-13-229-120-202.ap-southeast-1.compute.amazonaws.com:5000/api/v1.0/users/login', {
      //     method: 'POST',
      //     headers: {
      //       Accept: 'application/json',
            
      //   },
      //   body:{
      //     email:name,
      //     username:"mani",
      //     password:password
      //   }
      //  })
      //  .then((response) => response.json())
      //  .then((responseJson) =>{
             
      //       if (responseJson.status == 200) {
      //         this.props.navigation.navigate('Bottom Tabs');
      //         Alert.alert('Verify your Email/Number!', 'success');
      //       } else if(responseJson.status == 401) {
      //         Alert.alert(responseJson.error, 'Password Mismatch');
      //       }else if(responseJson.status == 404) {
      //         Alert.alert(responseJson.error, 'User Not Found');
      //       }
      //     })
      //     .catch(error => {
      //       console.error('error', error);
      //     });
      };
      _navigateToSignin = () => {
        // debugger
         this.props.navigation.navigate("Bottom Tabs");
       };
       _navigateToLogin = () => {
        this.props.navigation.navigate("OTP");

      }
      _forgotpassword = () => {
        this.props.navigation.navigate("Forgotpassword");  
      }
      _facebookbuttonAction = () => {
        this.props.navigation.navigate("Bottom Tabs");

      }
      _googlebuttonAction = () => {
        this.props.navigation.navigate("Signup");

      }
      _backBtnAction = () => {
        this.props.navigation.navigate("Login");
  
       }

render(){
  const {
    name,
    password,
    check_textInputChange,
    secureTextEntry,
    isValidUser,
    isValidPassword,
  } = this.state;
  return ( 
    <View style = {signinstyle.container}>
      <View style={signinstyle.header}>
      <TouchableOpacity
                 style={signinstyle.backButtonStyle}
                 onPress={this._backBtnAction} >
                 <Image
                   style={signinstyle.backImg}
                   source={require("../../assets/Images/Login&signup/back_arrow.png")} />
                  </TouchableOpacity>     
          <Text style={signinstyle.title}>{Strings.TEXTTITLE.LOGIN1}</Text>
          <Text style={signinstyle.title}></Text>

      </View>
      {/* <ScrollView> */}
         {/* <KeyboardAwareScrollView contentContainerStyle={signinstyle.scrollviewContainer}> */}
         <View style={signinstyle.signinView}>

        
            <Image
                style={signinstyle.backImg1}
                source={require("../../assets/Images/Login&signup/Marketpro_Logo.png")}
              />
           

          
           <Text style={signinstyle.User1}>
           {Strings.PLACEHOLDER.USERNAME}  
           </Text>
           <View style={signinstyle.action}>
           <Image
                style={signinstyle.key}
                source={require("../../assets/Images/Iconfeathermail.png")}
              />
           <TextInput 
                    placeholder="Your Username"
                    placeholderTextColor="#666666"
                    style={[signinstyle.textInput, {
                        color: Colors.textblack
                    }]}
                    autoCapitalize="none"
                    onChangeText={name => this.textInputChange(name)}
                    value={name}
                   
                />
                 
           </View>
           <Text style={signinstyle.User1}>
           {Strings.PLACEHOLDER.PASSWORD}  
           </Text>

           <View style={signinstyle.action1}>
           <Image
                style={signinstyle.key}
                source={require("../../assets/Images/Iconopen-key.png")}
              />
           <TextInput 
                    placeholder="Password"
                    placeholderTextColor="#666666"
                    style={[signinstyle.textInput, {
                        color: Colors.textblack
                    }]}
                    autoCapitalize="none"
                    onChangeText={password => this.handlePasswordChange(password)}
                     value={password}
                    
                />
                 {/* {data.check_textInputChange ?  */}
                 <Animatable.View
                 animation="bounceIn"
             >
                 <Image
                style={signinstyle.backImg2}
                source={require("../../assets/Images/Iconfeathereye.png")}
              />
             </Animatable.View>
             {/* : null} */}
           </View>
           

          
           <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center',marginTop:20}}>
             <Text onPress={this._forgotpassword}>
               Forget Password
             </Text>
             <View style={{borderWidth:0.5,height:1,width:120,marginBottom:10}}>

             </View>
            

           </View>

      
         
          
           <LinearGradient
                    colors={['#008DD2','#008DD2']}
                    style={signinstyle.signinbutton}
                    
                >
            <TouchableOpacity activeOpacity={0.8} 
             style={signinstyle.signinbuttonn}
             onPress={() => {
              this.loginHandle(name,password);
            }}>
            {/* //  onPress={this._navigateToSignin}          > */}
             
             <Text style={signinstyle.textStyle}>{Strings.TEXTTITLE.SIGNIN}</Text>
             
           </TouchableOpacity>
           </LinearGradient>
           <TouchableOpacity activeOpacity={0.8} 
             style={signinstyle.signinbutton1}
             
              onPress={this. _googlebuttonAction}
           >
             
             <Text style={signinstyle.textStyle1}>{Strings.TEXTTITLE.SIGNIN1}</Text>
             
           </TouchableOpacity>
           <Text style={{marginTop:10,marginBottom:10}}>
             or Signup with
           </Text>
           <View style={{flexDirection:'row'}}>
           <Image
                style={signinstyle.facebookImg}
                source={require("../../assets/Images/fbicon.png")}
              />
           <Image
                style={signinstyle.googleImg}
                source={require("../../assets/Images/googleicon.png")}
              />

           </View>
           

         
           </View>

         

           <Text style={[signinstyle.countText]}>
             
           </Text>
           
           {this.state.loader ? (
             <View style={[signinstyle.activityIndicator]}>
               <Indicator />
             </View>
           ) : null}
         
         </View> 
  )
}
}

const mapsStateToProps = state => {
  return {
    loading: state.authUserData.loading,
    name: state.authUserData.loading,
    password: state.authUserData.loading,
  };
};

const mapsDispatchToProps = {
  auth_login,
};

export default connect(
  mapsStateToProps,
  mapsDispatchToProps,
)(SigninScreen);

