import React,{Component} from 'react';
import{Text,View,Image,TouchableOpacity,FlatList} from 'react-native';
import { Strings } from '../../util/Strings';
import selectPatientStyle from "./SelectPatient.Style";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SelectPatientData } from './SelectPatientData';

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
            <TouchableOpacity
                 style={selectPatientStyle.backButtonStyle}
                 onPress={this._backBtnAction}>
                 <Image
                   style={selectPatientStyle.backImg}
                   source={require("../../assets/Images/icn_back.png")} />
                  </TouchableOpacity> 
                  <View>
        <Text style={selectPatientStyle.selectpatienttitle}>{Strings.TEXTTITLE.SELECTPATIENTTITLE}</Text>
        <Text style={selectPatientStyle.selectpatientcontent}>{Strings.TEXTTITLE.SELECTPATIENTCONTENT}</Text>
    </View>
    <View style={selectPatientStyle.flatlistview}>
        <FlatList
       showsVerticalScrollIndicator ={true} data={SelectPatientData}
        style={{ flex: 0 }}
        initialNumToRender={SelectPatientData.length}
        renderItem={({ item }) =>       
        <TouchableOpacity >
        <View style={selectPatientStyle.item}>
         <View style={selectPatientStyle.textitem}>
             <View style={selectPatientStyle.iconView}>
         <Text style={selectPatientStyle.patientname}>{item.patientname} </Text>
         <TouchableOpacity>
         <Image source={require('../../assets/Images/img_more.png')}/>
         </TouchableOpacity>
         </View>
        <Text style={selectPatientStyle.dob}>{item.dob}</Text>
        <View style={selectPatientStyle.bottomText}>
        <Text style={selectPatientStyle.parent}>{item.parent}</Text>
        <Text style={selectPatientStyle.selectpatient}>{item.selectpatient}</Text>
        </View>
        </View>
    
       </View>
     </TouchableOpacity>}
        keyExtractor={item => item.id}
      />
      </View>
         <View>
         <TouchableOpacity onPress={this._navigateToNewPatient}>
             <Text style={selectPatientStyle.addnewpatientText} >+ Add a new patient</Text>
             </TouchableOpacity>
             </View>
             </KeyboardAwareScrollView>
             </View>
        )
    }
}
  