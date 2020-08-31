import React,{ Component } from 'react';
import { Text, View,Image,StyleSheet,TextInput,TouchableOpacity, Alert} 
from 'react-native';
import signupStyle from './Login.Style'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {Indicator} from "../../util/Indicator"
import { Strings } from "../../util/Strings";
import {Colors} from "../../util/Color"
import axios from 'axios';
import InputCode from 'react-native-input-code';

export default class LoginScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
          versionName : "",
        //   email:"",
          otp:"",

        };
      }

      handlePasswordChange = otp => {
        this.setState({
          otp: otp,
        });
      };
   
      onFullFill = otp => {
        setTimeout(() => {
          this.otp.reset();
          this.otp.focus();
        }, 100);
      };
      
      loginHandle = (otp) => {
        if (otp.length != 6 
          ) 
          {
          Alert.alert('Otp cannot be empty!', 'error');
          return;
        }
    
    
        let headers = {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        };
        let url = 'checkOtp';
        let data = JSON.stringify({
          email: 'vigneshpandian.b@greatinnovus.com',
          otp:otp,
          type:"verifyUser"
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
   otp,
  } = this.state;
  return ( 
         <View contentContainerStyle={signupStyle.scrollviewContainer}>
           <View style={signupStyle.header}>
      <TouchableOpacity
                 style={signupStyle.backButtonStyle1}
                 onPress={this._backBtnAction} >
                 <Image
                   style={signupStyle.backImg}
                   source={require("../../assets/Images/Login&signup/back_arrow.png")} />
                  </TouchableOpacity>     
          <Text style={signupStyle.title}>{Strings.TEXTTITLE.FORGOTPWDTITLE}</Text>
          <Text style={signupStyle.title}></Text>

      </View>
         <View style={signupStyle.forgotPwdView}>
         
        
           <Text style={signupStyle.lifeline}>{Strings.TEXTTITLE.LIFELINE}</Text>
           <View style={signupStyle.descriptionView}>
        <Text style={signupStyle.uniquepassword}>{Strings.TEXTTITLE.OTPDESCRIPTION}</Text>
        
           
           </View>
           <Text style={signupStyle.uniquepassword1}>{Strings.TEXTTITLE.OTPDESCRIPTION1}</Text>
          
           <View style={signupStyle.textbgView}>

           <InputCode
          ref={ref => (this.inputCode = ref)}
          length={6}
          onChangeText={val => this.handlePasswordChange(val)}
          onFullFill={this.onFullFill}
          passcode
          passcodeChar="*"
          codeContainerStyle={{
            // borderWidth: 1,
            // borderBottomWidth: 2,
          }}
          codeContainerCaretStyle={{
            borderWidth: 0.5,
            borderBottomWidth: 2,
            borderBottomColor: '#DADBE5',
            borderColor:'#DADBE5',
            padding:5
          }}
         
        />
                     </View>

            
                     <View style={signupStyle.textbgView}>

           <TouchableOpacity
             style={signupStyle.signinbutton}
             onPress={() => {
              this.loginHandle(otp);
            }}
            //  onPress={this._navigateToReset}
           >
             <Text style={signupStyle.textStyle}>{Strings.TEXTTITLE.NEXT}</Text>
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
         </View>
  )
}
}

   

