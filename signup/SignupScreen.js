import React,{ Component } from 'react';
import { Text, View,Image,StyleSheet,TextInput,TouchableOpacity, Alert} 
from 'react-native';
// import signupStyle from './Signup.Style'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {Indicator} from "../../util/Indicator"
import { Strings } from "../../util/Strings";
import {Colors} from "../../util/Color";
import SignupStyle from './Signup.Style';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import  {post} from 'axios';
import {connect} from 'react-redux';
import {
  userRegister,
  // userLogin,
  // accountOTPVerify,
  initialStage,
} from '../../redux/actions/AuthAction';
import { TouchableHighlight } from 'react-native-gesture-handler';
// import AsyncStorage from '@react-native-community/async-storage';

// import {connect} from 'react-redux';
// import {auth_login} from '../../redux/actions/AuthAction';

 class SignupScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
          versionName : "",
          email: '',
          password: '',
          username:'',
          roleId:"5",
          data:[],
          userDate:[
            
          ],
          check_textInputChange: false,
          secureTextEntry: true,
          confirm_secureTextEntry: true,
          
        };
        
      }

      componentDidMount = () => {};

      firstNameChange = username => {
        if (username.length < 30 || username.length > 3) {
          this.setState({
            username: username,
            check_usernameChange: true,
          });
        } else {
          this.setState({
            username: username,
            check_usernameChange: false,
          });
        }
      };
    

      emailChange = email => {
        const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (expression.test(email)) {
          this.setState({
            email: email,
            check_emailChange: true,
            isValidUser: true,
          });
        } else {
          this.setState({
            email: email,
            check_emailChange: false,
            isValidUser: false,
          });
        }
      };

      handlePasswordChange = password => {
        this.setState({
          password: password,
        });
      };

      updateSecureTextEntry = () => {
        this.setState({
          secureTextEntry: !this.state.secureTextEntry,
        });
      };
    
      updateConfirmSecureTextEntry = () => {
        this.setState({
          confirm_secureTextEntry: !this.state.confirm_secureTextEntry,
        });
      };

      


     signup = () => {
      const {username, email, password,} = this.state;
       if(username.length == 0 || 
        email.length == 0 ||
        password.length == 0
        ){
          Alert.alert('Mandatory Fields are missing')
          return;
        }

      let userData = JSON.stringify({
        fname: 'vicky',
        lname: 'B',
        username: username,
        email: email,
        mobile: '8270499582',
        countryCode: '+91',
        roleId: '5',
        gender: 'male',
        password: password,
        });
        const url =
        'http://ec2-13-229-120-202.ap-southeast-1.compute.amazonaws.com:5000/api/v1.0/users/signup';
        const formData = new FormData();
        formData.append('userData', userData);
        const config = {
        headers: {
        'content-type': 'multipart/form-data',
        },
        };
        return post(url, formData, config);

    
       
      }


      uploadfile=()=>{
        this.signup().then((response)=>{
          
          // userData = response.status;
          if(response.status == 200){
            // this._setLocalData(response);
            //  this.props.navigation.navigate('OTP',{OTP: this.state.email,});
            // this.props.navigation.navigate('OTP', {email: this.state.email})
            this.props.navigation.navigate("OTP", {
              JSON_ListView_Clicked_Item: this.state.email,
            });
          }else if(response.status == 208){
            
            Alert.alert('Email Or username already exist')

          }else if(response.status == 401){
            Alert.alert('Failed to server')

          }
          else{
            Alert.alert('Server Error')
          }
          console.log(response.data)
        })
      }

    


  


      _navigateToSignin = () => {
        // debugger
         this.props.navigation.navigate("Signin");
       };
      //  _navigateToLogin = () => {
      //   this.props.navigation.navigate("OTP");

      // }
     
      _backBtnAction = () => {
        this.props.navigation.navigate("Signin");
  
       }

render(){
  const {
    username,
    
    email,
    
    password,
   
    
    check_username,
   
    check_emailChange,
    
    secureTextEntry,
    confirm_secureTextEntry,
  } = this.state;
  return ( 
    <View style = {SignupStyle.container}>
      <View style={SignupStyle.header}>
      <TouchableOpacity
                 style={SignupStyle.backButtonStyle}
                 onPress={this._backBtnAction} >
                 <Image
                   style={SignupStyle.backImg11}
                   source={require("../../assets/Images/Login&signup/back_arrow.png")} />
                  </TouchableOpacity>     
          <Text style={SignupStyle.title}>{Strings.TEXTTITLE.SIGNIN1}</Text>
          <Text style={SignupStyle.title}></Text>

      </View>
         
         <View style={SignupStyle.signinView}>
         <Image
                style={SignupStyle.backImg13}
                source={require("../../assets/Images/Login&signup/Marketpro_Logo.png")}
              />

         <Text style={SignupStyle.User1}>
           {Strings.PLACEHOLDER.USERNAME1}  
           </Text>
           <View style={SignupStyle.action}>
           <Image
                style={SignupStyle.key}
                source={require("../../assets/Images/Login&signup/User.png")}
              />
           <TextInput 
                    placeholder="Your Username"
                    placeholderTextColor="#666666"
                    style={[SignupStyle.textInput, {
                        color: Colors.textblack
                    }]}
                    autoCapitalize="none"
                    onChangeText={username => this.firstNameChange(username)}
                    
                />
                 
           </View>
           <Text style={SignupStyle.User1}>
           {Strings.PLACEHOLDER.USERNAME}  
           </Text>
           <View style={SignupStyle.action}>
           <Image
                style={SignupStyle.key}
                source={require("../../assets/Images/Iconfeathermail.png")}
              />
           <TextInput 
                    placeholder="Your Username"
                    placeholderTextColor="#666666"
                    style={[SignupStyle.textInput, {
                        color: Colors.textblack
                    }]}
                    autoCapitalize="none"
                    onChangeText={email => this.emailChange(email)}
                    
                />
                 
           </View>
           <Text style={SignupStyle.User1}>
           {Strings.PLACEHOLDER.PASSWORD}  
           </Text>

           <View style={SignupStyle.action1}>
           <Image
                style={SignupStyle.key}
                source={require("../../assets/Images/Iconopen-key.png")}
              />
           <TextInput 
                    placeholder="Password"
                    placeholderTextColor="#666666"
                    style={[SignupStyle.textInput, {
                        color: Colors.textblack
                    }]}
                    autoCapitalize="none"
                    onChangeText={val => this.handlePasswordChange(val)}
                    
                />
                 
                
                 <Image
                style={SignupStyle.backImg1}
                source={require("../../assets/Images/Iconfeathereye.png")}
              />
             
            
           </View>
           
            <LinearGradient
                    colors={['#008DD2','#008DD2']}
                    style={SignupStyle.signinbutton}
                    
                >
            <TouchableHighlight activeOpacity={0.8} 
             style={SignupStyle.signinbuttonn}
             onPress={() => { 
              //  this._navigateToLogin()
              //  this.uploadFiles
              this.uploadfile(
               username,
                email,
                password,
                

              );
            }}>
           
             
             
             <Text style={SignupStyle.textStyle}>{Strings.TEXTTITLE.SIGNIN}</Text>
             
           </TouchableHighlight>
           </LinearGradient>

           

           <View style={SignupStyle.signupView}>
        <Text style={SignupStyle.account}>{Strings.TEXTTITLE.ALREADYACCOUNT}</Text>
             <TouchableOpacity
               style={SignupStyle.signupbutton}
               onPress={this._navigateToSignin}
             >
               <Text style={SignupStyle.signuptextStyle}>{Strings.TEXTTITLE.LOGIN1}</Text>
             </TouchableOpacity>
           </View>
           </View>

         

           <Text style={[SignupStyle.countText]}>
             
           </Text>
           
           {this.state.loader ? (
             <View style={[SignupStyle.activityIndicator]}>
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
    username: state.authUserData.loading,
    email: state.authUserData.loading,
    password: state.authUserData.loading,
  };
};

const mapsDispatchToProps = {
  userRegister,
  // userLogin,
  
  // accountOTPVerify,
  initialStage,
};
export default connect(
  mapsStateToProps,
  mapsDispatchToProps,
)(SignupScreen);