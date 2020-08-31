import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  AsyncStorage,
  Platform
} from "react-native";
import {Colors} from "../../util/Color"
import {Indicator} from "../../util/Indicator"
import { Strings } from "../../util/Strings"
import profilestyle from "./Profile.Style"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableHighlight } from "react-native-gesture-handler";
export default class Profile extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
       
          data:["Logout"],
          show:false,
    checked:null
       };
    }
    _ShowHideComponent = ({index,item}) => {
      if (this.state.show == true) {
        this.setState({ show: false });
      } else {
        this.setState({ show: true });
      }
    };
    _NavigateToLogout = () => {
      this.props.navigation.navigate("Login");
     } 
     wallet = () =>{
      this.props.navigation.navigate("Wallet");
     }
     invite = () =>{
      this.props.navigation.navigate("Invitefriends");
     }
     address = () =>{
      this.props.navigation.navigate("Manageaddress");
     }
     payment = () =>{
      this.props.navigation.navigate("Payment");
     }
     order = () =>{
      this.props.navigation.navigate("OrderHistory");
     }
     _navigateToEdit = () =>{
      this.props.navigation.navigate("EditProfile");
     }
    render() {
      const { modalVisible,profiledata,data } = this.state;
       //  debugger
        return (
         <View style={profilestyle.container}>
      {/* <KeyboardAwareScrollView contentContainerStyle={profilestyle.scrollviewContainer}> */}
         
              <View style={profilestyle.FirstView}>
              <TouchableOpacity
                 style={profilestyle.backButtonStyle}
                 onPress={this._backBtnAction} >
                 <Image
                   style={profilestyle.backImg}
                   source={require("../../assets/Images/icn_back1.png")} />
                  </TouchableOpacity> 
              <Text style={profilestyle.profile}>Profile</Text>
              <TouchableOpacity
                 style={profilestyle.backButtonStyle}
                 onPress={this._backBtnAction} >
                 <Image
                   style={profilestyle.backImg}
                   source={require("../../assets/Images/Profile&settings/settings.png")} />
                  </TouchableOpacity> 
             
              </View>
              <View style={profilestyle.profileimgg}>
                <View>
              <TouchableOpacity
                 style={profilestyle.backButtonStyle}
                 onPress={this._backBtnAction} >
                 <Image
                   style={profilestyle.profileimg}
                   source={require("../../assets/Images/Profile&settings/profile_img.png")} />
                  </TouchableOpacity> 
                  </View>
                  <View style={profilestyle.column}>
                   <Text style={profilestyle.head}>
                     Ajay Kumar
                   </Text>
                   <Text>
                     ajaykumar@gmail.com
                   </Text>
                   <View style={profilestyle.heal}>
                     <Text style={profilestyle.emaill}>
                       Verify Email
                     </Text>
                     <Image
                   style={profilestyle.emaill1}
                   source={require("../../assets/Images/Profile&settings/Iconfeathermail.png")} />
                     {/* <Text style={profilestyle.emaill1}>
                       hdfgs
                     </Text> */}

                   </View>
                  </View>
              </View>
              <TouchableOpacity onPress={this.wallet}>
              <View style={profilestyle.header}>
                <Text style={profilestyle.text}>
                  Wallet
                </Text>
                <Image style={profilestyle.categariesImg} source={require('../../assets/Images/Profile&settings/Shape.png')}/>

              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.invite}>
              <View style={profilestyle.header}>
                <Text style={profilestyle.text}>
                  Invite Friends
                </Text>
                <Image style={profilestyle.categariesImg} source={require('../../assets/Images/Profile&settings/Shape.png')}/>

              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.address}>
              <View style={profilestyle.header}>
                <Text style={profilestyle.text}>
                  Manage Address
                </Text>
                <Image style={profilestyle.categariesImg} source={require('../../assets/Images/Profile&settings/Shape.png')}/>

              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.order}>
              <View style={profilestyle.header}>
                <Text style={profilestyle.text}>
                  Orders
                </Text>
                <Image style={profilestyle.categariesImg} source={require('../../assets/Images/Profile&settings/Shape.png')}/>

              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.payment}>
              <View style={profilestyle.header}>
                <Text style={profilestyle.text}>
                  Payment Methods
                </Text>
                <Image style={profilestyle.categariesImg} source={require('../../assets/Images/Profile&settings/Shape.png')}/>

              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={profilestyle.header}>
                <Text style={profilestyle.text}>
                  Logout
                </Text>
                <Image style={profilestyle.categariesImg} source={require('../../assets/Images/Profile&settings/Shape.png')}/>

              </View>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.8} 
             style={profilestyle.signinbuttonn}
             onPress={this._navigateToEdit}>
              <LinearGradient
                    colors={['#41B0DC','#2788DA']}
                    style={profilestyle.signinbutton}
                >
                  
                  
             
             <Text style={profilestyle.textStyle}>{Strings.TEXTTITLE.EDITPROFILE}</Text>
             
             
           </LinearGradient>
           </TouchableOpacity>
           

    

             
                    

              


 
            


      {/* </KeyboardAwareScrollView> */}
      </View>
        )
    }
}
