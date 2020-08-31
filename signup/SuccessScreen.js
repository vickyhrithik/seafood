import React,{ Component } from 'react';
import { Text, View,Image,StyleSheet,TextInput,TouchableOpacity} 
from 'react-native';
import signupStyle from './Success.Style'
import { Strings } from "../../util/Strings";


export default class SuccessScreen extends Component{
  _backtologinbuttonAction= () => {
    // debugger
     this.props.navigation.navigate("Login");
   };
   _backBtnAction = () => {
    this.props.navigation.navigate("OTP");

  }
render(){
  return ( 
         <View style={signupStyle.mainView} >
         <TouchableOpacity
              style={signupStyle.backButtonStyle}
              onPress={this._backBtnAction}
            >
              <Image
                style={signupStyle.backImg}
                source={require("../../assets/Images/icn_back.png")}
              />
              </TouchableOpacity>
         <Text style= {signupStyle.welcome}>
          Welcome
         </Text>
         <Text style= {signupStyle.lifeline}>
          Lifeline
         </Text>

          <Text style={signupStyle.registeredaccount}>{Strings.TEXTTITLE.YOUALREADY}
               {"\n"}{Strings.TEXTTITLE.SUCCESSDESC}.
         </Text>
     <TouchableOpacity onPress={this._backtologinbuttonAction}> 
  <Text style={signupStyle.clickbelow}>{Strings.TEXTTITLE.RETURNLOGIN}</Text>
    </TouchableOpacity>
          <TouchableOpacity
        style={signupStyle.backtologinButton} onPress={this._backtologinbuttonAction}>
        <Text style={signupStyle.textStyle}>{Strings.TEXTTITLE.BACKTOLOGIN}</Text>
      </TouchableOpacity>
      <View style={signupStyle.termsView}>
  <Text style={signupStyle.agree}>{Strings.TEXTTITLE.BYLIFELINE}</Text>
<TouchableOpacity
onPress={this._navigateToSignUp}>
<Text style={signupStyle.termsText}>{Strings.TEXTTITLE.TERMS}</Text>
</TouchableOpacity>
</View> 
</View>
  )
}
}

