import React,{ Component } from 'react';
import { Text, View,Image,StyleSheet,TextInput,TouchableOpacity} 
from 'react-native';
import signupStyle from './Reset.Style'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {Indicator} from "../../util/Indicator"
import { Strings } from "../../util/Strings";
import {Colors} from "../../util/Color"

export default class ResetPassword extends Component{
    constructor(props) {
        super(props);
        this.state = {versionName : ""};
      }
      _navigateToResetpwd = () => {
        this.props.navigation.navigate("Login");

      }
      _facebookbuttonAction = () => {
        this.props.navigation.navigate("Bottom Tabs");

      }
      _googlebuttonAction = () => {
        this.props.navigation.navigate("Bottom Tabs");

      }
      _backBtnAction = () => {
        this.props.navigation.navigate("Forgotpassword");
  
       }
render(){
  return ( 
    <View style = {signupStyle.container}>
         <KeyboardAwareScrollView contentContainerStyle={signupStyle.scrollviewContainer}>
         <View style={signupStyle.signinView}>

         <TouchableOpacity
              style={signupStyle.backButtonStyle}
              onPress={this._backBtnAction}
            >
              <Image
                style={signupStyle.backImg}
                source={require("../../assets/Images/icn_back.png")}
              />
              </TouchableOpacity>

        <Text style={signupStyle.welcome}>{Strings.TEXTTITLE.RESETPWD}</Text>
           <Text style={signupStyle.lifeline}>{Strings.TEXTTITLE.LIFELINE}</Text>
           <View style={signupStyle.signupView}>
        <Text style={signupStyle.uniquepassword}>{Strings.TEXTTITLE.UNIQUEPWD}</Text>
           
           </View>
         

           <TextInput
             style={signupStyle.textViewStyle}
             placeholder={Strings.PLACEHOLDER.NEWPASSWORD}
             placeholderTextColor={Colors.textWhite}
             returnKeyType="next"
             secureTextEntry={true}
             autoCorrect={false}
             onChangeText={text =>
               this.setState({
                 password: text
               })
             }
             value={this.state.password}
             ref={input => (this.passwordInput = input)}
           />
           <TextInput
             style={signupStyle.textViewStyle}
             placeholder={Strings.PLACEHOLDER.CONFIRMPWD}
             placeholderTextColor={Colors.textWhite}
             returnKeyType="next"
             secureTextEntry={true}
             autoCorrect={false}
             onChangeText={text =>
               this.setState({
                 confirmpassword: text
               })
             }
             value={this.state.confirmpassword}
             ref={input => (this.confirmpwdInput = input)}
           />
            
         
           <TouchableOpacity
             style={signupStyle.signinbutton}
             onPress={this._navigateToResetpwd}
           >
             <Text style={signupStyle.textStyle}>{Strings.TEXTTITLE.RESETPWD}</Text>
           </TouchableOpacity>
           </View>

         
            <View style={signupStyle.resetsocialMedia}>
            <Text style={signupStyle.or}>{Strings.TEXTTITLE.OR}</Text>
            <TouchableOpacity
              style={signupStyle.facebookbutton}
              onPress={this._facebookbuttonAction}
            >
              <Image
                style={signupStyle.facebookImg}
                source={require("../../assets/Images/fbicon.png")}
              />
           <Text style={signupStyle.fbtextStyle}>Continue with Facebook</Text>

              </TouchableOpacity>
           <TouchableOpacity
              style={signupStyle.googlebutton}
              onPress={this._googlebuttonAction}
            >
              <Image
                style={signupStyle.googleImg}
                source={require("../../assets/Images/googleicon.png")}
              />
           <Text style={signupStyle.googletextStyle}>Continue with Google</Text>

              </TouchableOpacity>
              <View style={signupStyle.termsView}>
            <Text style={signupStyle.agree}>{Strings.TEXTTITLE.BYLIFELINE}</Text>
             <TouchableOpacity
               style={signupStyle.termsbutton}
               onPress={this._navigateToterms}
             >
               <Text style={signupStyle.termsText}>{Strings.TEXTTITLE.TERMS}</Text>
               
             </TouchableOpacity>
           </View>
            
           </View>

           <Text style={[signupStyle.countText]}>
             {/* { this.state.count !== 0 ? this.state.count: null} */}
           </Text>
           
          
         </KeyboardAwareScrollView>
         </View> 
  )
}
}

