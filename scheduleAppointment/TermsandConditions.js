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
import termsStyle from './TermsandConditons.Style'
import {Colors} from "../../util/Color"

const numberOfRows = 3
export default class TermsandConditions extends React.Component {
    constructor(props) {
      super(props);
      this.state = {versionName : ""}
    }
    _navigateToAcceptandConform = () => {
      // debugger
       this.props.navigation.navigate("Consulation");

     };
     _backBtnAction = () => {
      this.props.navigation.navigate("PatientIdentity");

     }
     _closeAction = () => {
      this.props.navigation.navigate("Bottom Tabs");
     }
    render() {
       //  debugger
        return (
         <View style={termsStyle.container}>
          <KeyboardAwareScrollView contentContainerStyle={termsStyle.scrollviewContainer}>
            <View style={termsStyle.btnView}>
          <TouchableOpacity
                 style={termsStyle.backButtonStyle}
                 onPress={this._backBtnAction}>
                 <Image
                   style={termsStyle.backImg}
                   source={require("../../assets/Images/icn_back.png")} />               
                  </TouchableOpacity> 
                  <TouchableOpacity   onPress={this._closeAction} style={termsStyle.closeButtonStyle}>
                  <Text style={termsStyle.closeText}>x</Text>
                  </TouchableOpacity>
                  </View>
                  <View>
                  <Text style={termsStyle.title}>{Strings.TERMSANDCONDITIONS.TITLE}</Text>
                  <Text style={termsStyle.contents}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      {"\n"}{"\n"}
                       It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.</Text>
                  <Text style={termsStyle.termsText}>{Strings.TERMSANDCONDITIONS.TERMSANDCONDITION}</Text>
                  <Text style={termsStyle.contents}> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                   The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making
                    it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search 
                    for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes
                     on purpose (injected humour and the like).
                        {"\n"}{"\n"}
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                         making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
                         looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the 
                         cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 
                         "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, 
                         very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        {"\n"}{"\n"}
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, 
                        or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there 
                        isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, 
                        making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,
                         to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, 
                         or non-characteristic words etc.</Text>
                         <View style={termsStyle.acceptBtnView}>
                         <TouchableOpacity activeOpacity={1.0}  style={termsStyle.acceptButton} onPress={this._navigateToAcceptandConform}>
                 <Text style={termsStyle.acceptText}>{Strings.TERMSANDCONDITIONS.ACCEPTS}</Text>
                </TouchableOpacity>
                         </View>
                  </View>
                  
                  </KeyboardAwareScrollView>
                  </View>
        )
    }
}