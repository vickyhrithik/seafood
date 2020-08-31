import React,{Component} from 'react';
import{Text,View,Image,TouchableOpacity,FlatList} from 'react-native';
import {Strings} from '../../util/Strings'
import videoCallWithDoctorStyle from './VideoCallWithDoctor.Style'
import {VideoCallWithDoctorData} from './VideoCallWithDoctorData'
export default class VideoCallWithDoctor extends Component
    {
        constructor(){
            super()
            this.state={}
        }
        _videocallsceduleBtnAction = () => {

          // debugger
           this.props.navigation.navigate("SelectPatient");
     
       }
       _backBtnAction = () => {
        this.props.navigation.navigate("Bottom Tabs");
  
       }
    render()
    {
        return(
            <View style={videoCallWithDoctorStyle.container}>
              <View style={videoCallWithDoctorStyle.textalign}>
            <TouchableOpacity
                 style={videoCallWithDoctorStyle.backButtonStyle}
                 onPress={this._backBtnAction} >
                 <Image
                   style={videoCallWithDoctorStyle.backImg}
                   source={require("../../assets/Images/icn_back.png")} />
                  </TouchableOpacity> 
                  <Text style={videoCallWithDoctorStyle.videocallwithtitle}>{Strings.TEXTTITLE.VIDEOCALLWITHDOCTORTITLE}</Text>
                  </View>
                  <Image style={videoCallWithDoctorStyle.videocallImg}source={require("../../assets/Images/img_consult.png")}/>
                  <Text style={videoCallWithDoctorStyle.videocallcontent}>{Strings.TEXTTITLE.VIDEOCALLWITHDOCTORCONTENT}</Text>
                  <Text style={videoCallWithDoctorStyle.choosedoctor}>{Strings.TEXTTITLE.CHOOSEDOCTOR}</Text>
                  <FlatList showsVerticalScrollIndicator ={true}
        data={VideoCallWithDoctorData}
        style={{ flex: 0 }}
        initialNumToRender={VideoCallWithDoctorData.length}
        renderItem={({ item }) => 
        <TouchableOpacity  activeOpacity={1.0} onPress={this._videocallsceduleBtnAction}>
        <View style={videoCallWithDoctorStyle.videoCallitem}>
        <View style={videoCallWithDoctorStyle.dctImgView1}>
      <Image style={videoCallWithDoctorStyle.doctorfrstImg} source={item.doctorfrstImg}/>
      </View>
         <View style={videoCallWithDoctorStyle.avaliablepriceamt}>
         <Text style={videoCallWithDoctorStyle.avaliable}>{item.avaliable}</Text>
         <Text style={videoCallWithDoctorStyle.priceamount}>{item.priceamount}</Text>
      </View>
      <View style={videoCallWithDoctorStyle.dctImgView2}>
      <Image style={videoCallWithDoctorStyle.doctorimage} source={item.doctorimage}/>
      </View>
         <View style={videoCallWithDoctorStyle.textitem}>
         <Text style={videoCallWithDoctorStyle.name}>{item.name}</Text>
        <Text style={videoCallWithDoctorStyle.profession}>{item.profession}</Text>
        </View>
        <View style={videoCallWithDoctorStyle.priceText}> 
        <Text style={videoCallWithDoctorStyle.price}>{item.price}</Text>
          </View>
       </View>
       </TouchableOpacity>
        }
        keyExtractor={item => item}
      />
        </View>
               )
               }
               }
            