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
import drfoundStyle from "./DrFound.Style"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
export default class DrFoundScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {versionName : ""};
     // this.props.navigation.navigate("PatientIdentity");

    }
    _navigateToContinue = () => {
       // debugger
       this.props.navigation.navigate("DrUnavailble");

      };
      _backBtnAction = () => {
        this.props.navigation.navigate("SelectPatient");
  
       }
      _navigateToHome = () => {
      }
    render() {
       //  debugger
        return (
         <View style={drfoundStyle.container}>
      <KeyboardAwareScrollView contentContainerStyle={drfoundStyle.scrollviewContainer}>
        
        <Text style={drfoundStyle.addpatienttitle}>{Strings.TEXTTITLE.DOCTORFOUND}</Text>
        <Text style={drfoundStyle.addpatientcontent}>{Strings.TEXTTITLE.DOCTORFOUNDCONTENT1} {"\n"} {Strings.TEXTTITLE.DOCTORFOUNDCONTENT2} {"\n"} {Strings.TEXTTITLE.DOCTORFOUNDCONTENT3} </Text>
        <View style={drfoundStyle.videoCallitem}>
        <View style={drfoundStyle.dctImgView2}>
      <Image style={drfoundStyle.doctorimage} source={require("../../assets/Images/img_doc.png")}/>
      </View>
         <View style={drfoundStyle.textitem}>
         <Text style={drfoundStyle.name}>Dr.Dimitri Petrenko</Text>
        <Text style={drfoundStyle.profession}>General Practioner</Text>
        </View>
        </View>
        <Text style={drfoundStyle.question1}>{Strings.DRFOUNDTEXT.QUESTION1}</Text>
        <Text style={drfoundStyle.answer}>{Strings.DRFOUNDTEXT.ANSWER1}</Text>
        <Text style={drfoundStyle.question2}>{Strings.DRFOUNDTEXT.QUESTION2}</Text>
        <Text style={drfoundStyle.answer}>{Strings.DRFOUNDTEXT.ANSWER2}</Text>
        <Text style={drfoundStyle.question2}>{Strings.DRFOUNDTEXT.QUESTION3}</Text>
        <Text style={drfoundStyle.answer}>{Strings.DRFOUNDTEXT.ANSWER3}</Text>
        <TouchableOpacity style={drfoundStyle.continueButton} activeOpacity={1.0} onPress={this._navigateToContinue}>
        <Text style={drfoundStyle.continueText}>{Strings.TEXTTITLE.EXIT}</Text>
        </TouchableOpacity>
              </ KeyboardAwareScrollView>
              </View>
        )
    }
}
