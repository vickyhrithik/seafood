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
import addnewpatientStyle from "./AddNewPatient.Style"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
export default class AddNewPatient extends React.Component {
    constructor(props) {
      super(props);
      this.state = {versionName : ""};
     // this.props.navigation.navigate("PatientIdentity");

    }
    _navigateToContinue = () => {
       // debugger
       this.props.navigation.navigate("NewPatientInfo");

      };
      _backBtnAction = () => {
        this.props.navigation.navigate("SelectPatient");
  
       }
      _navigateToHome = () => {
      }
    render() {
       //  debugger
        return (
         <View style={addnewpatientStyle.container}>
         <KeyboardAwareScrollView contentContainerStyle={addnewpatientStyle.scrollviewContainer}>
         <TouchableOpacity
              style={addnewpatientStyle.backButtonStyle}
              onPress={this._backBtnAction}
            >
              <Image
                style={addnewpatientStyle.backImg}
                source={require("../../assets/Images/icn_back.png")}
              />
              </TouchableOpacity>
        <Text style={addnewpatientStyle.addpatienttitle}>{Strings.TEXTTITLE.ADDNEWPATIENTTITLE}</Text>
        <Text style={addnewpatientStyle.addpatientcontent}>{Strings.TEXTTITLE.ADDNEWPATIENTCONTENT}</Text>
        <Image style={addnewpatientStyle.addpatientImg} source={require("../../assets/Images/img_intro1.png")}/>
        <Text style={addnewpatientStyle.why}>{Strings.TEXTTITLE.WHY}</Text>
        <Text style={addnewpatientStyle.whycontent}>{Strings.TEXTTITLE.WHYCONTENT}</Text>
        <Text style={addnewpatientStyle.isitsecure}>{Strings.TEXTTITLE.ISITSECURE}</Text>
        <Text style={addnewpatientStyle.isitsecurecontent}>{Strings.TEXTTITLE.ISITSECURECONTENT}</Text>
        <TouchableOpacity style={addnewpatientStyle.continueButton} onPress={this._navigateToContinue}>
        <Text style={addnewpatientStyle.continueText}>{Strings.TEXTTITLE.CONTINUEBUTTON}</Text>
        </TouchableOpacity>
              </ KeyboardAwareScrollView>
              </View>
        )
    }
}
