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
export default class HistoryScreen extends Component {
  constructor(props){
    super(props)
    this.state={ patientDetails:[{
      ptname:"Tan Ah Kok ",
      ptdob:"Male, 09-mar-1978",
      ptimage:require("../../../../assets/Images/img_user.png")

      // ptimage:require("../../../assets/Images/img_user.png")
    }
    ],
    medicinesdata:[{
    date:"11 march 2020",
    time:"08.15 AM",
    item1:"1x Painkiller",
    item2:"1x Anti-killer",
    item3:"1x cough Syrup",
    item4:"1x Charcoal"}]
    }
  
  }
      _backBtnAction = () => {
        this.props.navigation.navigate("Bottom Tabs");
       } 
       _historySecondBtnAction = () => {
        // debugger
         this.props.navigation.navigate("HistorySecondScreen");
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
                        <View style={historyStyle.itemsView}>
                        <Text  style={historyStyle.items}>{item.item1}</Text>
                        <Text  style={historyStyle.items}>{item.item2}</Text>
                        <Text  style={historyStyle.items}>{item.item3}</Text>
                        <Text  style={historyStyle.items}>{item.item4}</Text>
                        </View>
                        </View>
                    )
                  })
                }
                <Text style={historyStyle.contactdetails}>{Strings.HISTORYTEXT.CONTACTDCT}</Text>
                <View style={historyStyle.subjectView}>
                 <Text style={historyStyle.subText}>{Strings.HISTORYTEXT.SUBJECT}</Text>
                <TextInput style={historyStyle.textinput1}></TextInput>
                  </View>
                <View style={historyStyle.msgView}>
                 <Text style={historyStyle.hisText}>{Strings.HISTORYTEXT.MSG}</Text>
                <TextInput style={historyStyle.textinput2}></TextInput>
                  </View>
                  <View style={historyStyle.btnView}>
                  <TouchableOpacity activeOpacity={1.0} style={historyStyle.createbtnstyle}
                  onPress={this. _historySecondBtnAction}>
                <Text style={historyStyle.createbtn}>{Strings.HISTORYTEXT.CREATETICKET}</Text>
                </TouchableOpacity>
                </View>
                <View style={historyStyle.lineborders}/>
                <View style={historyStyle.medicalinvoicebtnView}>
                  <TouchableOpacity  activeOpacity={1.0}  style={historyStyle.medicalBtn}>
                  <Text style ={historyStyle.btntextname1}>{Strings.HISTORYTEXT.MEDICAL}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity  activeOpacity={1.0}  style={historyStyle.invoiceBtn}>
                    <Text style ={historyStyle.btntextname2}>{Strings.HISTORYTEXT.INVOICE}</Text>
                    </TouchableOpacity>
                    </View>
                    
                {/* <View style={historyStyle.medicalinvoicebtnView}>
                <View style={historyStyle.medicalbtnView}>
                  <TouchableOpacity  activeOpacity={1.0}  style={historyStyle.medicalBtn}>
                    <View style={historyStyle.medicaltextView}>
                  <Text style ={historyStyle.btntextname1}>{Strings.HISTORYTEXT.MEDICAL}</Text>
                  </View>
                  </TouchableOpacity>
                  </View>
                  <View style={historyStyle.invoicebtnView}></View>
                  <TouchableOpacity  activeOpacity={1.0}  style={historyStyle.invoiceBtn}>
                    <Text style ={historyStyle.btntextname2}>{Strings.HISTORYTEXT.INVOICE}</Text>
                    </TouchableOpacity>
                </View> */}
              
   </KeyboardAwareScrollView>
       </View> 

   )
     
    }
}