import React,{Component} from 'react';
import{Text,View,Image,TouchableOpacity,FlatList} from 'react-native';
import { Strings } from '../../util/Strings';
import selectPatientStyle from "./PatientProfile.Style";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {PatientProfileData } from './PatientProfileData';

export default class SelectPatient extends Component
{
    constructor(){
        super()
        this.state={}
    }
    _navigateToNewPatient = () => {
       // debugger
        this.props.navigation.navigate("AddNewPatient");
      };
       _backBtnAction = () => {
        this.props.navigation.navigate("Bottom Tabs");
  
       }
 
    render()
    {
        return(
            <View style={selectPatientStyle.container}>
                <KeyboardAwareScrollView contentContainerStyle={selectPatientStyle.scrollviewContainer}>
          
                  <View>
        <Text style={selectPatientStyle.selectpatienttitle}>{Strings.TEXTTITLE.PATIENTPROFILETITLE}</Text>
    </View>
    </KeyboardAwareScrollView>
             </View>
        )
    }
}