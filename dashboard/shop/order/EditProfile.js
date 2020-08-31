import React,{ Component } from 'react';
import { Text, View,Image,StyleSheet,TextInput,TouchableOpacity,} 
from 'react-native';
import Editstyle from './Edit.Style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {Indicator} from "../../../../util/Indicator"
import { Strings } from "../../../../util/Strings";
import {Colors} from "../../../../util/Color";
import LinearGradient from 'react-native-linear-gradient';

import * as Animatable from 'react-native-animatable';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
// import AsyncStorage from '@react-native-community/async-storage';

// import {connect} from 'react-redux';
// import {auth_login} from '../../redux/actions/AuthAction';

export default class EditProfile extends Component{
    constructor(props) {
        super(props);
        this.state = {
          versionName : "",
          
        };
        
      }
     
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
        this.props.navigation.navigate("Bottom Tabs");

      }
      _backBtnAction = () => {
        this.props.navigation.navigate("Login");
  
       }

render(){
  return ( 
    <View style = {Editstyle.container}>
         <View style={Editstyle.header}>
         <TouchableOpacity
                 style={Editstyle.backButtonStyle}
                 onPress={this._backBtnAction} >
                 <Image
                   style={Editstyle.backImg}
                   source={require("../../../../assets/Images/icn_back1.png")} />
                  </TouchableOpacity>     
          <Text style={Editstyle.title}>{Strings.CATEGORIES.EDITPROFILE1}</Text>
          <Text style={Editstyle.title}></Text>

       </View>
     
         {/* <KeyboardAwareScrollView contentContainerStyle={signinstyle.scrollviewContainer}> */}
         <View style={Editstyle.signinView}>

        
            <Image
                style={Editstyle.backImg2}
                source={require("../../../../assets/Images/Profile&settings/profile_img.png")} />
          

          
           <Text style={Editstyle.User1}>
           {Strings.PLACEHOLDER.USERNAME1}  
           </Text>
           <View style={Editstyle.action}>
           <Image
                style={Editstyle.key}
                source={require("../../../../assets/Images/Iconfeathermail.png")}
              />
           <TextInput 
                    placeholder="Your Username"
                    placeholderTextColor="#666666"
                    style={[Editstyle.textInput, {
                        color: Colors.textblack
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                    onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                />
                 {/* {data.check_textInputChange ?  */}
                 
             {/* : null} */}
           </View>
           <Text style={Editstyle.User1}>
           {Strings.PLACEHOLDER.USERNAME}  
           </Text>

           <View style={Editstyle.action1}>
           <Image
                style={Editstyle.key}
                source={require("../../../../assets/Images/Iconopen-key.png")}
              />
           <TextInput 
                    placeholder="Email"
                    placeholderTextColor="#666666"
                    style={[Editstyle.textInput, {
                        color: Colors.textblack
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                    onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                />
                
           </View>
          

           <TextInput
             style={Editstyle.textViewStyle}
             placeholder={Strings.PLACEHOLDER.PASSWORD}
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
           

      
           
            
         
          
           <LinearGradient
                    colors={['#41B0DC','#2788DA']}
                    style={Editstyle.signinbutton}
                    
                >
            <TouchableHighlight activeOpacity={0.8} 
             style={Editstyle.signinbuttonn}
             onPress={this._navigateToSignin}          >
             
             <Text style={Editstyle.textStyle}>{Strings.TEXTTITLE.UPDATE}</Text>
             
           </TouchableHighlight>
           </LinearGradient>

          
           </View>

         

           <Text style={[Editstyle.countText]}>
             
           </Text>
           
           {this.state.loader ? (
             <View style={[Editstyle.activityIndicator]}>
               <Indicator />
             </View>
           ) : null}
         {/* </KeyboardAwareScrollView> */}
         
         </View> 
  )
}
}

