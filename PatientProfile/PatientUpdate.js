import React, { Component } from "react"
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
  Platform,
  FlatList,
  Picker,
} from "react-native";
import {Indicator} from "../../util/Indicator"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Strings } from "../../util/Strings"
import newpatientinformationStyle from "./PatientUpdate.Style"
import {Colors} from "../../util/Color"

const numberOfRows = 3
export default class PatientUpdate extends React.Component {
    constructor(props) {
      super(props);
      this.state = {versionName : ""}
    }
    _navigateToContinue = () => {
      // debugger
      
      this.props.navigation.navigate("VerifyUpdate");

     };
     _backBtnAction = () => {
      this.props.navigation.navigate("AddNewPatient");

     }
    render() {
       //  debugger
        return (
         <View style={newpatientinformationStyle.container}>
          <KeyboardAwareScrollView contentContainerStyle={newpatientinformationStyle.scrollviewContainer}>
          <TouchableOpacity
                 style={newpatientinformationStyle.backButtonStyle}
                 onPress={this._backBtnAction}>
                 <Image
                   style={newpatientinformationStyle.backImg}
                   source={require("../../assets/Images/icn_back.png")} />
                  </TouchableOpacity> 
                  <View>
                  <Text style={newpatientinformationStyle.newpatienttitle}>{Strings.TEXTTITLE.NEWPATIENTITITLE}</Text>
                  <Text style={newpatientinformationStyle.newpatientcontent}>{Strings.TEXTTITLE.NEWPATIENTCONTENT}</Text>
                  </View>
                  <View style={newpatientinformationStyle.fullnameView}>
                    <Text style={newpatientinformationStyle.fullnameText}>{Strings.TEXTTITLE.FULLNAME} </Text>
                  <TextInput style={newpatientinformationStyle.fullnameTextinput}              placeholder={Strings.PLACEHOLDER.NAME}
             placeholderTextColor={Colors.textblack}></TextInput>
    
                 </View>
                 <View style={newpatientinformationStyle.nricView}>
                    <Text style={newpatientinformationStyle.nricText}>{Strings.TEXTTITLE.NRIC} </Text>
                  <TextInput style={newpatientinformationStyle.nricTextinput}  placeholder="Please Enter NRIC/Passport Number"
             placeholderTextColor={Colors.textblack}></TextInput>
                 </View>


                 <View style={newpatientinformationStyle.cocView}>
                    <Text style={newpatientinformationStyle.cocText}>{Strings.TEXTTITLE.COUNTRYOFCITIZENSHIP} </Text>
                  <Text style={newpatientinformationStyle.cocTextinput}>singapore</Text>
                  <TouchableOpacity>
                     <Image style={newpatientinformationStyle.btnStyle}source={require('../../assets/Images/icn_dwnarw.png')}/>
                 </TouchableOpacity>
                 </View>




                <View style={newpatientinformationStyle.mainrelgenView}>
                 <View style={newpatientinformationStyle.relView}>
                    <Text style={newpatientinformationStyle.relText}>{Strings.TEXTTITLE.RELATIVE} </Text>
                  <Text style={newpatientinformationStyle.relTextinput}>Me</Text>
                  <TouchableOpacity>
                     <Image style={newpatientinformationStyle.btnStyle} source={require('../../assets/Images/icn_dwnarw.png')}/>
                 </TouchableOpacity>
                 </View>
                 <View style={newpatientinformationStyle.genView}>
                 <Text style={newpatientinformationStyle.genText}>{Strings.TEXTTITLE.GENDER} </Text>
                  <Text style={newpatientinformationStyle.genTextinput}>Male</Text>
                  <TouchableOpacity>
                     <Image style={newpatientinformationStyle.btnStyle} source={require('../../assets/Images/icn_dwnarw.png')}/>
                 </TouchableOpacity>
                 </View>
                 </View>

                 <View style={newpatientinformationStyle.dobView}>
                    <Text style={newpatientinformationStyle.dobText}>{Strings.TEXTTITLE.DOB} </Text>
                   <Text style={newpatientinformationStyle.dobTextinput}>24-04-1999</Text>
                   <TouchableOpacity>
                     <Image style={newpatientinformationStyle.btnStyle} source={require('../../assets/Images/icn_calndr.png')}/>
                   </TouchableOpacity>
                   </View>


              
                 <View style={newpatientinformationStyle.resiposView}>
                    <Text style={newpatientinformationStyle.resiText}>{Strings.TEXTTITLE.RESIDENTALADDRESS} </Text>
                  <TextInput style={newpatientinformationStyle.resiTextinput}  placeholder="Please Enter Residental Address"
             placeholderTextColor={Colors.textblack}></TextInput>
                 <Text style={newpatientinformationStyle.posText}>{Strings.TEXTTITLE.POSTALCODE} </Text>
                  <TextInput style={newpatientinformationStyle.posTextinput} placeholder="Please Enter Postal Code"
             placeholderTextColor={Colors.textblack}></TextInput>
                 </View>

                 <View style={newpatientinformationStyle.couView}>
                    <Text style={newpatientinformationStyle.couText}>{Strings.TEXTTITLE.COUNTRY} </Text>
                  <Text style={newpatientinformationStyle.couTextinput}>Singapore</Text>
                       <TouchableOpacity>
                     <Image style={newpatientinformationStyle.btnStyle}source={require('../../assets/Images/icn_dwnarw.png')}/>
                 </TouchableOpacity>
                 </View>

                 <View style={newpatientinformationStyle.maincodenumView}>
                 <View style={newpatientinformationStyle.codeView}>
                  <Text style={newpatientinformationStyle.codeTextinput}>+65</Text>
                  <TouchableOpacity>
                     <Image style={newpatientinformationStyle.codebtnStyle} source={require('../../assets/Images/icn_dwnarw.png')}/>
                 </TouchableOpacity>
                 </View>
                 <View style={newpatientinformationStyle.mobnumView}>

<TextInput style={newpatientinformationStyle.mobnumTextinput} placeholder="Mobile No"
placeholderTextColor={Colors.textblack}></TextInput>
                 </View>
                 </View>

                 <View style={newpatientinformationStyle.newpatientverifyView}>
               <Text style={newpatientinformationStyle.newpatientverify}>{Strings.TEXTTITLE.NEWPATIENTVERIFY}</Text>
                     </View>
                     <TouchableOpacity style={newpatientinformationStyle.continueButton} onPress={this._navigateToContinue}>
                 <Text style={newpatientinformationStyle.continueText}>{Strings.TEXTTITLE.CONTINUEBUTTON}</Text>
                </TouchableOpacity>
      
               </KeyboardAwareScrollView>
          </View>
        )
    }
}