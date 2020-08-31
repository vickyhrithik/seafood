import React,{Component} from 'react'
import{Text,
    TouchableOpacity,
    View,
    FlatList,
    Image,
    
    } from 'react-native'
import  { Strings }  from '../../../util/Strings'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import scheduleStyle from './Schedule.Style'
import {ScheduleUpcomingData}from './ScheduleUpcomingData'
import {ScheduleHistoryData}from './ScheduleHistoryData'


 export default class ScheduleMainScreen extends Component {
    _upcomingapptBtnAction = () => {
        // debugger
         this.props.navigation.navigate("UpcomingAppt");
       };
       _historyBtnAction = () => {
        // debugger
         this.props.navigation.navigate("HistoryScreen");
       };
     render(){
         return(
            <View style={scheduleStyle.container}>
            <KeyboardAwareScrollView contentContainerStyle={scheduleStyle.scrollviewContainer}>             
            <Text style={scheduleStyle.scheduletitle}>{Strings.TEXTTITLE.SCHEDULEMAINTITLE}</Text>
            <Text style={scheduleStyle.upcomingText}>{Strings.TEXTTITLE.UPCOMINGAPPOINTMENT}</Text>
            
            <View stule={scheduleStyle.flatListView}> 
            <FlatList showsVerticalScrollIndicator ={true}
            data={ScheduleUpcomingData}
            style={{flex:0}}
            initialNumToRender={ScheduleUpcomingData.length}
            renderItem={({item}) => 

           <TouchableOpacity activeOpacity={1.0} onPress={this._upcomingapptBtnAction}>

            <View style={scheduleStyle.item}>
            <Image style={scheduleStyle.doctorimage} source={item.doctorimage}/>
            <View>
            <Text style={scheduleStyle.name}>{item.name}</Text>
            <Text style={scheduleStyle.date}>{item.date}</Text>
            <View style={scheduleStyle.attendeeView}>
            <Text style={scheduleStyle.attendee}>{item.attendee}</Text>
            <Text style={scheduleStyle.attendeename}>Tan Ah Ma</Text>
            </View>
            </View>
            </View>
             </TouchableOpacity>}
            />
            </View>


            <Text style={scheduleStyle.historyText}>{Strings.TEXTTITLE.HISTORY}</Text>
            <View stule={scheduleStyle.flatListViewSecond}> 
            <FlatList showsVerticalScrollIndicator ={true}
            data={ScheduleHistoryData}
            style={{flex:0}}
            initialNumToRender={ScheduleHistoryData.length}
            renderItem={({item}) => 
             <TouchableOpacity activeOpacity={1.0} onPress={this._historyBtnAction}>
            <View style={scheduleStyle.item}>
            <Image style={scheduleStyle.doctorimage} source={item.doctorimage}/>
            <View>
            <Text style={scheduleStyle.name}>{item.name}</Text>
            <Text style={scheduleStyle.date}>{item.date}</Text>
            <View style={scheduleStyle.attendeeView}>
            <Text style={scheduleStyle.attendee}>{item.attendee}</Text>
            <Text style={scheduleStyle.attendeename}>Tan Ah Ma</Text>
            </View>
            </View>
            </View>
             </TouchableOpacity>}
            />
            </View>

            </KeyboardAwareScrollView>    
            </View>
         )
     }
 }
