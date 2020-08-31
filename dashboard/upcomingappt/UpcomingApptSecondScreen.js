import React,{Component} from 'react'
import{Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    FlatList,
    Image,
    Dimensions,
    Modal,
    ListView
    } from 'react-native'
import  { Strings }  from '../../../util/Strings'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import upcomingapptStyle from './UpcomingAppt.Style'
    

 export default class UpcomingApptSecondScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modalVisible: false,
          data: [
            {key: "No reason"},
            {key: "Iwant to choose other doctor "},
            {key: "I've already seen a doctor"},
            {key: "It become on urgent situation"},
            {key: "Issue has already been resolved"},
            {key: "Price is too expensive"},
           ],
          checked: 0,
          selected: true       };
    }
  
      setSelected(selected) {
        this.setState({selected});
      }

      setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
      }
      _backBtnAction = () => {
        this.props.navigation.navigate("UpcomingAppt");
       } 
     render(){
         return(
            <View style={upcomingapptStyle.container}>
            <KeyboardAwareScrollView contentContainerStyle={upcomingapptStyle.scrollviewContainer}>
                <View style={upcomingapptStyle.titlealign}>
            <TouchableOpacity
                 style={upcomingapptStyle.backButtonStyle}
                 onPress={this._backBtnAction} >
                 <Image
                   style={upcomingapptStyle.backImg}
                   source={require("../../../assets/Images/icn_back.png")} />
                  </TouchableOpacity> 
               <Text style={upcomingapptStyle.upcomingTitle}>{Strings.UPCOMINGAPPTTEXT.UPCOMINGAPPOINTMENTTITLE}</Text>
               </View> 
            <View style={upcomingapptStyle.dctprofileView}>
                <Image style={upcomingapptStyle.imgStyle} source={require('../../../assets/Images/img_doc.png')}/>
                <View style={upcomingapptStyle.dcttextView}>
                <Text style={upcomingapptStyle.dctname}>{Strings.UPCOMINGAPPTTEXT.DCTNAME}</Text>
                <Text style={upcomingapptStyle.gnlpractitioner}>{Strings.UPCOMINGAPPTTEXT.GENERALPRACTITIONER}</Text>
                </View>
                </View>

                <View style={upcomingapptStyle.apptView}>
                <Text style={upcomingapptStyle.appt}>{Strings.UPCOMINGAPPTTEXT.APPOINTMENT}</Text>
                <Text style={upcomingapptStyle.date}>15-April-2020 (7.30AM)</Text>
                </View>

                <View style={upcomingapptStyle.ptdetailsmainView}>
                <Text style={upcomingapptStyle.ptiddetailstitleText}>{Strings.UPCOMINGAPPTTEXT.PATIENTDETAILS}</Text>
                <Text style={upcomingapptStyle.ptiddetailstitlerightText}>{Strings.UPCOMINGAPPTTEXT.ID}</Text>
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

                <Text style={upcomingapptStyle.remtitle}>{Strings.UPCOMINGAPPTTEXT.REMAINDER}</Text>
                <Text style={upcomingapptStyle.remcontent}>{Strings.UPCOMINGAPPTTEXT.REMAINDERCONTENT}</Text>
                <View style={upcomingapptStyle.lineborder}/>

                <Text style={upcomingapptStyle.cancelapptcontent}>{Strings.UPCOMINGAPPTTEXT.CANCELAPPTCONTENT}</Text>
           
            </KeyboardAwareScrollView>  
          
            </View>
            )
            }
      }
    