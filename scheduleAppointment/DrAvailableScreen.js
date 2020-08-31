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
import waitingStyle from "./FindDr.Style"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
export default class DrUnavailble extends React.Component {
    constructor(props) {
      super(props);
      this.state = {versionName : ""};
     // this.props.navigation.navigate("PatientIdentity");

    }
    _navigateToContinue = () => {
       // debugger
       this.props.navigation.navigate("Bottom Tabs");

      };
      _backBtnAction = () => {
        this.props.navigation.navigate("SelectPatient");
  
       }
      _navigateToHome = () => {
      }
    render() {
       //  debugger
        return (
         <View style={waitingStyle.container}>
         <KeyboardAwareScrollView contentContainerStyle={waitingStyle.scrollviewContainer}>
        
        <Text style={waitingStyle.addpatienttitle}>{Strings.TEXTTITLE.UNFINDINGDR}</Text>
        <Text style={waitingStyle.addpatientcontent}>{Strings.TEXTTITLE.UNFINDINGDRCONTENT} </Text>
        <Image style={waitingStyle.addpatientImg} source={require("../../assets/Images/img_intro1.png")}/>
       
        <Text style={waitingStyle.findcontent}>{Strings.TEXTTITLE.UNFINDINGDRCONTENT1}</Text>
       
        <TouchableOpacity style={waitingStyle.findButton} activeOpacity={1.0} onPress={this._navigateToContinue}>
        <Text style={waitingStyle.findtextStyle}>{Strings.TEXTTITLE.FINDDOCTOR}</Text>
        </TouchableOpacity>
              </ KeyboardAwareScrollView>
              </View>
        )
    }
}
