import React,{Component} from 'react';
import{Text,View,Image,TouchableOpacity,FlatList} from 'react-native';
import { Strings } from '../../util/Strings';
import scheduleapptStyle from "./Scheduleappt.Style";  
import {ScheduleapptData} from "./ScheduleapptData"
export default class Scheduleappt extends Component
{
   constructor(){
       super()
       this.state={ }
   }
   _navigateToContinue = (data) => {
    // debugger
    const {item, index} = data

  console.log(data);
    this.props.navigation.navigate("Calender");

   };
   _backBtnAction = () => {
    this.props.navigation.navigate("Bottom Tabs");

   }
    render()
    {
      
        return(
            <View style={scheduleapptStyle.container}>
              <View  style={scheduleapptStyle.titlealign}>
            <TouchableOpacity
                 style={scheduleapptStyle.backButtonStyle}
                 onPress={this._backBtnAction}
               >
                 <Image
                   style={scheduleapptStyle.backImg}
                   source={require("../../assets/Images/icn_back.png")}
                 />
                 </TouchableOpacity>
        <Text style={scheduleapptStyle.scheduletitle}>{Strings.TEXTTITLE.SCHEDULEAPPTTITLE}</Text>
        </View>
        <Image  style={scheduleapptStyle.calenderImg} source={require("../../assets/Images/img_scheule.png")}/>
        <Text style={scheduleapptStyle.schedulecontent}>{Strings.TEXTTITLE.SCHEDULEAPPTCONTENT}</Text>
        <Text style={scheduleapptStyle.choosedoctor}>{Strings.TEXTTITLE.CHOOSEDOCTOR}</Text>
        <View style={scheduleapptStyle.flatlistStyle}>
        <FlatList
        showsVerticalScrollIndicator ={true} data={ScheduleapptData}
        style={{ flex: 0 }}
        initialNumToRender={ScheduleapptData.length}
        renderItem={({ item, index }) => 
       

       <TouchableOpacity activeOpacity={1.0} onPress={()=>{
        this._navigateToContinue({item,index})
       }}>
        <View style={scheduleapptStyle.scheduleitem} >
         <Image style={scheduleapptStyle.doctorimage} source={item.doctorimage}/>
         <View style={scheduleapptStyle.textitem}>
         <Text style={scheduleapptStyle.name}>{item.name}</Text>
        <Text style={scheduleapptStyle.profession}>{item.profession}</Text>
        </View>
        <View style={scheduleapptStyle.priceText}> 
        <Text style={scheduleapptStyle.price}>{item.price}</Text>
          </View>
       </View>
       </TouchableOpacity>

       }
        keyExtractor={item => item.id}
      /></View>
      </View>
        )
    }
}
   