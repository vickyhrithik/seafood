import React,{ Component } from 'react';
import { Text, View,Image,StyleSheet,TextInput,TouchableOpacity, Alert} 
from 'react-native';
import signupStyle from './Password.Style'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {Indicator} from "../../util/Indicator"
import { Strings } from "../../util/Strings";
import {Colors} from "../../util/Color"
import axios from 'axios';

export default class ForgotPassword extends Component{
    constructor(props) {
        super(props);
        this.state = {
          versionName : "",
          email:""
        };
      }
      textInputChange = email => {
        const emailCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const mobileNumberCheck = /^[0]?[6789]\d{9}$/;
        if (emailCheck.test(email) || mobileNumberCheck.test(email)) {
          this.setState({
            email: email,
            check_textInputChange: true,
            isValidUser: true,
          });
        } else {
          this.setState({
            email: email,
            check_textInputChange: false,
            isValidUser: false,
          });
        }
      };
      loginHandle = (email) => {
        if (email.length == 0 
          ) 
          {
          Alert.alert('Register Email  cannot be empty!', 'error');
          return;
        }
    
        // if (name.length != 10) {
        //   notification('Invalid Register Mobile Number !', 'error');
        //   return;
        // }
    
        let headers = {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        };
        let url = 'forgetPassword';
        let data = JSON({
          email: email,
          // password: password,
        });
        const config = {
          method: 'POST',
          data: data,
          url,
          headers,
        };
        axios
          .create({
            baseURL: 'http://ec2-13-229-120-202.ap-southeast-1.compute.amazonaws.com:5000/api/v1.0/users/',
            timeout: 45000,
          })(config)
          .then(response => {
            let resData = response.data;
            if (resData.status === 200) {
              this.props.navigation.navigate('OTP');
              Alert.alert('Verify your Number!', 'success');
            } else {
              Alert.alert(resData.error, 'error');
            }
          })  
          .catch(error => {
            console.error('error', error);
          });
      };
      _navigateToReset = () => {
        this.props.navigation.navigate("OTP");

      }
      _facebookbuttonAction = () => {
        this.props.navigation.navigate("Bottom Tabs");

      }
      _googlebuttonAction = () => {
        this.props.navigation.navigate("Bottom Tabs");

      }
      _backBtnAction = () => {
        this.props.navigation.navigate("Login");
  
       }
render(){
  const {
   email,
  } = this.state;
  return ( 
         <KeyboardAwareScrollView contentContainerStyle={signupStyle.scrollviewContainer}>
         <View style={signupStyle.forgotPwdView}>
        <TouchableOpacity
              style={signupStyle.backButtonStyle}
              onPress={this._backBtnAction}
            >
              <Image
                style={signupStyle.backImg}
                source={require("../../assets/Images/icn_back.png")}
              />
              </TouchableOpacity>

        <Text style={signupStyle.welcome}>{Strings.TEXTTITLE.FORGOTPWDTITLE}</Text>
           <Text style={signupStyle.lifeline}>{Strings.TEXTTITLE.LIFELINE}</Text>
           <View style={signupStyle.descriptionView}>
        <Text style={signupStyle.uniquepassword}>{Strings.TEXTTITLE.PWDDESCRIPTION}</Text>
           
           </View>
          
           <View style={signupStyle.textbgView}>

           <TextInput
             style={signupStyle.textViewStyle}
             placeholder={Strings.PLACEHOLDER.EMAILID}
             placeholderTextColor={Colors.textWhite}
             returnKeyType="next"
             keyboardType="email-address"
            // onSubmitEditing={() => this.passwordInput.focus()}
             autoCapitalize="none"
             autoCorrect={false}
             onChangeText={email => this.textInputChange(email )}
             value={email }
            //  onChangeText={text =>
            //    this.setState({
            //      email: text
            //    })
            //  }
            //  value={this.state.email}
           />
                     </View>

            
                     <View style={signupStyle.textbgView}>

           <TouchableOpacity
             style={signupStyle.signinbutton}
             onPress={() => {
              this.loginHandle(email);
            }}
            //  onPress={this._navigateToReset}
           >
             <Text style={signupStyle.textStyle}>{Strings.TEXTTITLE.RESETPWD}</Text>
           </TouchableOpacity>
           </View>
           </View>

         
            
          

           <Text style={[signupStyle.countText]}>
             {/* { this.state.count !== 0 ? this.state.count: null} */}
           </Text>
           
           {this.state.loader ? (
             <View style={[signupStyle.activityIndicator]}>
               <Indicator />
             </View>
           ) : null}
         </KeyboardAwareScrollView>
  )
}
}

