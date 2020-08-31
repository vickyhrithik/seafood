import React,{ Component } from 'react';
import { Text, View,Image,StyleSheet,TextInput,TouchableOpacity,Alert} 
from 'react-native';
import identityStyle from './PatientIdentity.Style'
import { Strings } from "../../util/Strings";
import ImagePicker from 'react-native-image-picker';
// import {PERMISSIONS} from 'react-native-permissions';


export default class PatientIdentity extends Component{
    _navigateToconfirm = () => {
        this.props.navigation.navigate("TermsandCondition");
       // debugger
       };
       _backBtnAction = () => {
        this.props.navigation.navigate("NewPatientInfo");

       }

      //  pickFromGallery = async() =>{
      //    const {granted} = await PERMISSIONS.askAsync(PERMISSIONS.CAMERA_ROLL)
      //    if(granted){
      //       let data = await ImagePicker.launchImageLibraryAsync({
      //          mediaTypes:ImagePicker.MediaTypeOptions.Images,
      //          allowsEditing:true,
      //          aspect:[1,1],
      //          quality:0.5,

      //        })
      //        console.log(data)
      //    }else{
      //        Alert.alert("You need to give up permissions")
      //    }


      //  }

      //  pickFromCamera = async() =>{
      //   const {granted} = await PERMISSIONS.askAsync(PERMISSIONS.CAMERA)
      //   if(granted){
      //      let data = await ImagePicker.launchCameraAsync({
      //         mediaTypes:ImagePicker.MediaTypeOptions.Images,
      //         allowsEditing:true,
      //         aspect:[1,1],
      //         quality:0.5,

      //       })
      //       console.log(data)
      //   }else{
      //       Alert.alert("You need to give up permissions")
      //   }


      // }


render(){
  return ( 
         <View style={identityStyle.mainView} >
         <TouchableOpacity
              style={identityStyle.backButtonStyle}
              onPress={this._backBtnAction}
            >
              <Image
                style={identityStyle.backImg}
                source={require("../../assets/Images/icn_back.png")}
              />
              </TouchableOpacity>
         <Text style= {identityStyle.patienttitle}>
         {Strings.TEXTTITLE.NEWPATIENTID}
         </Text>
         <Text style={identityStyle.registeredaccount}>{Strings.TEXTTITLE.NEWDESCID}
               {"\n"}{Strings.TEXTTITLE.NEWPASSPORT}.
         </Text>
         <TouchableOpacity
              style={identityStyle.uploadButton}
              onPress={this._uploadbuttonAction}
              // onPress = {() => this.pickFromCamera()} 
            >
              <Image
                style={identityStyle.uploadImg}
                source={require("../../assets/Images/btn_up_photo.png")}
              />
              </TouchableOpacity>
              <TouchableOpacity
              style={identityStyle.uploadButton}
              onPress={this._takepicbuttonAction}
            >
              <Image
                style={identityStyle.uploadImg}
                source={require("../../assets/Images/btn_pic.png")}
              />
              </TouchableOpacity>
              <View style={identityStyle.tickView}>
             <Image
                style={identityStyle.tickImg}
                source={require("../../assets/Images/icn_chk.png")}
              />
           <Text style={identityStyle.tickText}>{Strings.TEXTTITLE.IMPORTPICTURE}</Text>
            </View>
            <Text style={identityStyle.completeText}>{Strings.TEXTTITLE.COMPLETEPATIENT}</Text>
          <TouchableOpacity
        style={identityStyle.confirmButton} onPress={this._navigateToconfirm}>
        <Text style={identityStyle.confirmtextStyle}>{Strings.TEXTTITLE.CONFIRMDES}</Text>
      </TouchableOpacity>
{/* <Text style={identityStyle.termsText}>{Strings.TEXTTITLE.TERMS}</Text> */}
</View>
  )
}
}

