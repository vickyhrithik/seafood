import React,{ Component } from 'react';
import { Text, View,Image,StyleSheet,TextInput,TouchableOpacity, Alert} 
from 'react-native';
import signupStyle from './Password.Style'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {Indicator} from "../../util/Indicator"
import { Strings } from "../../util/Strings";
import {Colors} from "../../util/Color"
import axios from 'axios';
import CodeInput from 'react-native-confirmation-code-input';
// import InputCode from 'react-native-input-code';

export default class OTP extends Component{
    constructor(props) {
        super(props);
        // const { navigation, route } = props;
        // const email = route.email;
        
        
      this.state = {
          versionName : "",
          otp:"",
          type:"",
          // email:""
          email: props.route.params.JSON_ListView_Clicked_Item,
          
         
        };
        //  console.log("email", this.props.navigation.state.params.email);
        
      }

      handlePasswordChange = otp => {
        this.setState({
          otp: otp,
        });
      };
      loginHandle = () => {
        const {otp} = this.state;
        if (otp.length == 0 
          ) 
          {
          Alert.alert('Please enter your OTP');
          return;
        }
      
      
      
      axios.post('http://ec2-13-229-120-202.ap-southeast-1.compute.amazonaws.com:5000/api/v1.0/users/checkOtp',{
         email: this.state.email,
         otp:otp,
         type:'verifyUser'
      }).then(response =>{
        console.log(response.data);
        if(response.status == 200){
          this.props.navigation.navigate('Signin')
          Alert.alert('Otp Verified Successfully')
        }else if(response.status == 400){
          Alert.alert('Email or otp not found')
        }else{
          this.props.navigation.navigate('Signin')
          // Alert.alert('Something error')
        }
      }).catch(error =>{
        console.log(error);
      })
      
     
        
        
      };
      
     
      _backBtnAction = () => {
        this.props.navigation.navigate('Signup');
  
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
          
           {/* <Text style={signupStyle.uniquepassword1}>{Strings.TEXTTITLE.PWDDESCRIPTION1}</Text> */}
           <View style={signupStyle.textbgView}>
          
                    <CodeInput
                ref={ref => (this.inputCode)}
                secureTextEntry
                activeColor='grey'
                inactiveColor='grey'
                // autoFocus={false}
                ignoreCase={true}
                inputPosition='center'
                size={40}
                codeLength={6}
                onFulfill={val => this.handlePasswordChange(val)}
                containerStyle={{ marginTop: 30 }}
                codeInputStyle={{ borderWidth: 1.5 }}
              />
               </View>
                    <View style={signupStyle.textbgView}>

           <TouchableOpacity
             style={signupStyle.signinbutton}
             onPress={() => {
              this.loginHandle(otp);
            }}
           >
             <Text style={signupStyle.textStyle}>{Strings.TEXTTITLE.NEXT}</Text>
           </TouchableOpacity>
           </View>
           </View>

         
            
          

           <Text style={[signupStyle.countText]}>
             
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

