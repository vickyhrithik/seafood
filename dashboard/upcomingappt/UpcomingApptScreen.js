
import React,{Component} from 'react'
import{Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    FlatList,
    Image,
    Dimensions,
    ListView,
    ScrollView
    } from 'react-native'
import  { Strings }  from '../../../util/Strings'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import upcomingapptStyle from './UpcomingAppt.Style'
import Modal from 'react-native-modal';

 export default class UpcomingAppt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show:false,
      modalVisible: false,
      data: [
       "No reason",
      "Iwant to choose other doctor ",
      "I've already seen a doctor",
      "It become on urgent situation",
      "Issue has already been resolved",
      "Price is too expensive",
       ],
       checked:0
     }
    }
  
    
    _ShowHideComponent = ({index,item}) => {
      if (this.state.show == true) {
        this.setState({ show: false });
      } else {
        this.setState({ show: true });
      }
    };
      setSelected(selected) {
        this.setState({selected});
      }

      setModalVisible = (isVisible) => {
        this.setState({ modalVisible: isVisible });
      }
      _backBtnAction = () => {
        this.props.navigation.navigate("Bottom Tabs");
       } 
       _secondBtnAction = () => {
        this.props.navigation.navigate("UpcomingApptSecondScreen");
       } 
        
     render(){
   
      const { modalVisible,show,data } = this.state;
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
            
             <View style={upcomingapptStyle.modalContainer}>
             <Modal
       animationType="slide"
       transparent={true}
           backdropColor={'black'}
    backdropOpacity= {0.5} 
       isVisible={modalVisible} 
        >
    
         <View style={upcomingapptStyle.modalView}>
          
               <Image style={upcomingapptStyle.bottomImgStyle} source={require('../../../assets/Images/img_mappin.png')}/>
               <Text style={upcomingapptStyle.didText}>{Strings.UPCOMINGAPPTTEXT.DID}</Text>
               <Text  style={upcomingapptStyle.didcontentText}>{Strings.UPCOMINGAPPTTEXT.DIDCONTENT}</Text>
               <View style={upcomingapptStyle.itemcontainer}>
                  {
                  this.state.data.map((data,key)=>{
                    return(
                      <View>
                       {
                         this.state.checked == key?  
                         <TouchableOpacity >
                         <View style={upcomingapptStyle.BtnView}>
                         <Text style={upcomingapptStyle.itemselectView}>{data}</Text>
                         <Image  style={upcomingapptStyle.radioBtnStyle} source={require('../../../assets/Images/btn_radiosel.png')}/>
                         </View>
                         </TouchableOpacity>
                     : 
                     <TouchableOpacity onPress={()=>this.setState({checked:key})} >
                     <View style={upcomingapptStyle.BtnView}>
                     <Text style={upcomingapptStyle.itemunselectView}>{data}</Text>
                     <Image  style={upcomingapptStyle.radioBtnStyle} source={require('../../../assets/Images/btn_radiounsel.png')}/>
                     </View>
                     </TouchableOpacity>
                    
                         
                       }
                              

                      </View>
                    )
                  })
                  }


                 

 </View>
 <View style={upcomingapptStyle.selectbtnView}>
           <TouchableOpacity activeOpacity={1.0}
            style={upcomingapptStyle.selectbtnstyle}
              onPressIn={this._secondBtnAction} onPressOut={() => {
               this.setModalVisible(!modalVisible)
             }}>      
             <Text style={upcomingapptStyle.selectbtn}>{Strings.UPCOMINGAPPTTEXT.SELECT}</Text>
       
           </TouchableOpacity>
         </View>
         </View>
     </Modal>
     </View>
   
            <View style={{marginBottom:"20%"}}>
             <TouchableOpacity style={upcomingapptStyle.cancelbtnstyle} activeOpacity={1.0} onPress={() => {
         this.setModalVisible(true)}}>
             <Text style={upcomingapptStyle.cancelbtn}>{Strings.UPCOMINGAPPTTEXT.CANCELAPPT}</Text>
             </TouchableOpacity>
             </View>
        
         </KeyboardAwareScrollView>  
       
         </View>
         )
         }
      }
    