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
import waitingStyle from "./Waiting.Style"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
export default class WaitingScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {versionName : ""};
     // this.props.navigation.navigate("PatientIdentity");

    }
    _navigateToContinue = () => {
       // debugger
       this.props.navigation.navigate("FindingDr");

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
        
        <Text style={waitingStyle.addpatienttitle}>{Strings.TEXTTITLE.WAITINGYOURTURN}</Text>
        <Text style={waitingStyle.addpatientcontent}>{Strings.TEXTTITLE.WAITINGCONTENT1} {"\n"} {Strings.TEXTTITLE.WAITINGCONTENT2} {"\n"} {Strings.TEXTTITLE.WAITINGCONTENT3} {"\n"} {Strings.TEXTTITLE.WAITINGCONTENT4}</Text>
        <Image style={waitingStyle.addpatientImg} source={require("../../assets/Images/img_intro1.png")}/>
        <View style={waitingStyle.queueView}>
        <Text style={waitingStyle.queuecontent}>{Strings.CONFIRMCONSULATTEXT.CURRENTNO}</Text>
        <Text style={waitingStyle.queueValue}>#6</Text>


        </View>
        <Text style={waitingStyle.why}>{Strings.TEXTTITLE.HOWLONGQUE}</Text>
        <Text style={waitingStyle.whycontent}>{Strings.TEXTTITLE.HOWLONGANS}</Text>
       
        <TouchableOpacity style={waitingStyle.continueButton} onPress={this._navigateToContinue}>
        <Text style={waitingStyle.continueText}>{Strings.TEXTTITLE.EXITQUEUE}</Text>
        </TouchableOpacity>
              </ KeyboardAwareScrollView>
              </View>
        )
    }
}
