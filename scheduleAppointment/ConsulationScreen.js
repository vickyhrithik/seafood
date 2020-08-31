import React,{Component} from 'react'
import{Text,
    TouchableOpacity,
    View,
    FlatList,
    Image,
    Dimensions,
    Modal,
    ListView
    } from 'react-native'
import  { Strings }  from '../../util/Strings'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import upcomingapptStyle from './Consulation.Style'
import {QuestionData}  from './ConsulationData'

 export default class ConsulationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
         variable:""  };
    }
  
      setSelected(selected) {
        this.setState({selected});
      }

    
      _backBtnAction = () => {
        this.props.navigation.navigate("PatientIdentity");
       } 
       _addnow = () => {
       // this.props.navigation.navigate("PatientIdentity");

        this.props.navigation.navigate("PaymentScreen");
       } 
       _consultBtnAction = () => {
        this.props.navigation.navigate("PaymentScreen");
       } 
     render(){
   

         return(
           // source={require("../../../assets/Images/icn_back.png")} />

            <View style={upcomingapptStyle.container}>
            <KeyboardAwareScrollView contentContainerStyle={upcomingapptStyle.scrollviewContainer}>
                <View style={upcomingapptStyle.titlealign}>
            <TouchableOpacity
                 style={upcomingapptStyle.backButtonStyle}
                 onPress={this._backBtnAction} >
                 <Image
                   style={upcomingapptStyle.backImg}
                   source={require("../../assets/Images/icn_back.png")} />
                  </TouchableOpacity> 
               <Text style={upcomingapptStyle.upcomingTitle}>{Strings.CONFIRMCONSULATTEXT.CONFIRMCONSULTATION}</Text>
               </View> 
            <View style={upcomingapptStyle.dctprofileView}>
                <Image style={upcomingapptStyle.imgStyle} source={require('../../assets/Images/img_doc.png')}/>
                <View style={upcomingapptStyle.dcttextView}>
                <Text style={upcomingapptStyle.dctname}>{Strings.UPCOMINGAPPTTEXT.DCTNAME}</Text>
                <Text style={upcomingapptStyle.gnlpractitioner}>{Strings.UPCOMINGAPPTTEXT.GENERALPRACTITIONER}</Text>
                </View>
                </View>

               

                <View style={upcomingapptStyle.ptdetailsmainView}>
                <Text style={upcomingapptStyle.ptiddetailstitleText}>{Strings.UPCOMINGAPPTTEXT.PATIENTDETAILS}</Text>
                </View>
                <View style={upcomingapptStyle.ptdetailsView}>
                <Text style={upcomingapptStyle.text}>{Strings.UPCOMINGAPPTTEXT.NAME}</Text>               
                <Text style={upcomingapptStyle.righttext}>Tah Ah Ma</Text>
                </View>
                <View style={upcomingapptStyle.ptdetailsView}>
                <Text style={upcomingapptStyle.text}>{Strings.UPCOMINGAPPTTEXT.DDOB}</Text>               
                <Text style={upcomingapptStyle.righttext}>09-Mar-1978</Text>
                </View>
                <View style={upcomingapptStyle.ptdetailsView}>
                <Text style={upcomingapptStyle.text}>{Strings.UPCOMINGAPPTTEXT.DNRIC}</Text>               
                <Text style={upcomingapptStyle.righttext}>s6******83A</Text>
                </View>
                <View style={upcomingapptStyle.ptdetailsView}>
                <Text style={upcomingapptStyle.text}>{Strings.UPCOMINGAPPTTEXT.RELATIONSHIP}</Text>               
                <Text style={upcomingapptStyle.righttext}>Grandmother</Text>
                </View>

                <View style={upcomingapptStyle.paymentView}>
                <Text style={upcomingapptStyle.ptiddetailstitleText}>{Strings.CONFIRMCONSULATTEXT.PAYMENTMETHOD}</Text>
                <TouchableOpacity style={upcomingapptStyle.patientBtntitle} onPress={this._addnow}>
                <Text style={upcomingapptStyle.patientaddNowrightText}>{Strings.CONFIRMCONSULATTEXT.ADDNOW}</Text>
                </TouchableOpacity>
                </View>
                <View style={upcomingapptStyle.ptdetailsView}>
                <Text style={upcomingapptStyle.text}>Not yet added</Text>               
                </View>
                <Text style={upcomingapptStyle.remtitle}>{Strings.UPCOMINGAPPTTEXT.REMAINDER}</Text>
                <Text style={upcomingapptStyle.remcontent}>{Strings.UPCOMINGAPPTTEXT.REMAINDERCONTENT}</Text>
                <View style={upcomingapptStyle.lineborder}/>
                <Text style={upcomingapptStyle.feesText}>$45/Consulation</Text>

                <TouchableOpacity style={upcomingapptStyle.consultbtnstyle} onPress={this._consultBtnAction}>
                <Text style={upcomingapptStyle.consultbtn}>{Strings.TEXTTITLE.CONSULT}</Text>
                </TouchableOpacity>
            
                <View style={upcomingapptStyle.flatlistview}>
        <FlatList showsVerticalScrollIndicator ={true}
        data={QuestionData}
        style={{ flex: 0 }}
        initialNumToRender={QuestionData.length}
        renderItem={({ item }) =>       
        <View style={upcomingapptStyle.item}>
         <Text style={upcomingapptStyle.patientname}>{item.question} </Text>
        
        <Text style={upcomingapptStyle.parent}>{item.answer}</Text>
        </View>
    
     }
        keyExtractor={item => item.question}
      />
      </View>
            </KeyboardAwareScrollView>  
      
            </View>
            )
            }
      }
    