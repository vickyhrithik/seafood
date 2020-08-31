import React,{Component} from 'react'
import{Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    FlatList,
    Image,
    Dimensions,
    TextInput,
    ListView
    } from 'react-native'
import  { Strings }  from '../../../../util/Strings'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import historyStyle from './History.Style'
export default class HistorySecondScreen extends Component {
  constructor(props){
    super(props)
    this.state={ patientDetails:[{
      ptname:"Tan Ah Kok ",
      ptdob:"Male, 09-mar-1978",
      ptimage:require("../../../../assets/Images/img_user.png")
    }
    ],
    medicinesdata:[{
    date:"11 march 2020",
    time:"08.15 AM",
    na:"N/A",
  }]
    }
  }
      _backBtnAction = () => {
        this.props.navigation.navigate("HistoryScreen");
       } 
       _historyThirdBtnAction = () => {
        // debugger
         this.props.navigation.navigate("HistoryThirdScreen");
       };

     render() {
       const{patientDetails,medicinesdata }=this.state
   return(
    <View style={historyStyle.container}>
    <KeyboardAwareScrollView contentContainerStyle={historyStyle.scrollviewContainer}>
        <View style={historyStyle.titlealign}>
    <TouchableOpacity
         style={historyStyle.backButtonStyle}
         onPress={this._backBtnAction} >
         <Image
           style={historyStyle.backImg}
           source={require("../../../../assets/Images/icn_back.png")} />
          </TouchableOpacity> 
       <Text style={historyStyle.historyTitle}>{Strings.HISTORYTEXT.HISTORY}</Text>
     </View>
             <View style={historyStyle.dctprofileView}>
                <Image style={historyStyle.imgStyle} source={require('../../../../assets/Images/img_doc.png')}/>
                <View style={historyStyle.dcttextView}>
                <Text style={historyStyle.dctname}>{Strings.HISTORYTEXT.DCTNAME}</Text>
                <Text style={historyStyle.gnlpractitioner}>{Strings.HISTORYTEXT.GENERALPRACTITIONER}</Text>
                </View>
                </View>
                <View style={historyStyle.detailmainView}>
                <Text style={historyStyle.detailtitleText}>{Strings.HISTORYTEXT.DETAIL}</Text>
                <Text style={historyStyle.idText}>{Strings.HISTORYTEXT.ID}</Text>
                </View>
                {
                  patientDetails.map((item, index) => {
                    return(
                      < View style={historyStyle.ptdetailsView}>
                      <Image style={historyStyle.ptimgStyle} source={item.ptimage}/>
                      <View>
                      <Text style={historyStyle.ptname}>{item.ptname}</Text>
                      <Text style={historyStyle.ptdob}>{item.ptdob}</Text>
                      </View>
                      </View>
                    )
                  })
                }
                <View style={historyStyle.consulationView}>
                <Text style={historyStyle.consulation}>{Strings.HISTORYTEXT.CONSULATION}</Text>
                <Text style={historyStyle.medication}>{Strings.HISTORYTEXT.MEDICATION}</Text>
                </View>

                {
                  medicinesdata.map((item,index) =>{
                    return(
                      <View style={historyStyle.medicinesdataView}>
                        <View style={historyStyle.datetimeView}>
                        <Image style={historyStyle.caltimeimg} source={require('../../../../assets/Images/img_clndr.png')}/>
                        <Text  style={historyStyle.datetime}>{item.date}</Text>
                        </View>
                        <View style={historyStyle.datetimeView}>
                        <Image style={historyStyle.caltimeimg} source={require('../../../../assets/Images/img_clock.png')}/>
                        <Text  style={historyStyle.datetime}>{item.time}</Text>
                        </View>
                        <View style={historyStyle.naView}>
                        <Text  style={historyStyle.na}>{item.na}</Text>
                       
                        </View>
                        </View>
                    )
                  })
                }
               <View style={historyStyle.historyNextlineborders}/>
                  <View style={historyStyle.invoicebtnHistoryNextView}>
                  <TouchableOpacity activeOpacity={1.0} style={historyStyle.invoicebtnHistoryNextstyle}
                   onPress={this. _historyThirdBtnAction} >
                <Text style={historyStyle.invoicebtnHistoryNext}>{Strings.HISTORYTEXT.INVOICE}</Text>
                </TouchableOpacity>
                </View>    
   </KeyboardAwareScrollView>
       </View> 

   )
     
    }
}