import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { Strings } from '../../util/Strings';
import Calender from "./Calender.Style";
import moment from 'moment';
import CalendarStrip from 'react-native-slideable-calendar-strip';
import { Calenderdata } from './Calenderdata';
import { ScrollView } from 'react-native-gesture-handler';
const numberOfRows = 3
export default class CalenderScreen extends Component {
  constructor() {
    super();
    let currentDate = moment(new Date()).format('DD');
    this.state = {
      selectedDate: moment(new Date()),
      // markedDate: moment(new Date()).format(),
      calVisible: false,
      refreshing: false,
      aToken: '',
      cancelModelVisible: false,
    };
    // super()
    // this.state = {}
  }
  _navigateToContinue = (data) => {
    // debugger
    const { item, index } = data

    console.log(data);
    this.props.navigation.navigate("SelectPatient");

  };
  _backBtnAction = () => {
    this.props.navigation.navigate("Bottom Tabs");

  }
  render() {

    return (
      <View style={Calender.container}>
        <View style={Calender.titlealign}>
          <TouchableOpacity
            style={Calender.backButtonStyle}
            onPress={this._backBtnAction}
          >
            <Image
              style={Calender.backImg}
              source={require("../../assets/Images/icn_back.png")}
            />
          </TouchableOpacity>
          <Text style={Calender.scheduletitle}>{Strings.TEXTTITLE.CALENDERAPPTTITLE}</Text>
        </View>
        <ScrollView>
        <View style={Calender.flatlistStyle}>
          

          <View style={Calender.scheduleitem} >
            <Image style={Calender.doctorimage} source={require("../../assets/Images/img_doc.png")} />
            <View style={Calender.textitem}>
              <Text style={Calender.name}>{Strings.TEXTTITLE.NAME}</Text>
              <Text style={Calender.profession}>{Strings.TEXTTITLE.PROFESSION}</Text>
            </View>
          </View>
          <View>
            <Text style={Calender.schedulename}>{Strings.TEXTTITLE.SCHEDULE}</Text>

            <Text style={Calender.year}>{Strings.TEXTTITLE.YEAR}</Text>
            {/* <CalendarStrip
                selectedDate={this.state.selectedDate}
                height={75} //height of the strip -- default 75
                dayPressed={day => {
                  this.setState({selectedDate: moment(day)});
                  this.DateChange(day);
                }}
                showMonth={true}
                showYear={true}
                startingDate={moment()}
                activeDay={this.state.selectedDate}
                currentDate={moment(new Date())}
                //activeDay={moment().add(1, 'days')} //accepts Date/Moment date format
                onMount={() => {
                  this.setState({selectedDate: moment(new Date())});
                }}
                calendarSwiped={direction =>
                  direction == 0
                    ? console.log('calendar swiped to left')
                    : console.log('calendar swiped to right')
                }
              /> */}

            <CalendarStrip
              isEnglish
              // showWeekNumber
              // showEnglishLunar
              showyear
              
              selectedDate={this.state.selectedDate}
              onPressDate={(date) => {
                this.setState({ selectedDate: date });
              }}
              onPressGoToday={(today) => {
                this.setState({ selectedDate: today });
              }}
              onSwipeDown={() => {
                alert('onSwipeDown');
              }}
              markedDate={['2018-05-04', '2018-05-15', '2018-06-04', '2018-05-01']}
              weekStartsOn={1} // 0,1,2,3,4,5,6 for S M T W T F S, defaults to 0
            />

            <Text style={Calender.year}>{Strings.TEXTTITLE.TIME}</Text>

          </View>
          {/* <View style={Calender.flatlistStyle}> */}

          <View style={Calender.onlineflatlist}>
            <FlatList
              showsVerticalScrollIndicator={true} data={Calenderdata}
              style={{ flex: 0 }}
              initialNumToRender={Calenderdata.length}
              numColumns={3}
              renderItem={({ item }) =>

                <TouchableOpacity activeOpacity={1.0} onPress={this._onlineStroeAction}>
                  <View style={Calender.onlinestoreitem}>

                    <Text style={Calender.title}>{item.time}</Text>
                  </View>
                </TouchableOpacity>}
              numberOfRows={numberOfRows}
              keyExtractor={(item, index) => `${index}${item}`}
            />
          </View>

        </View>
        <View style={Calender.doctr}>

          <Text style={Calender.note}>{Strings.TEXTTITLE.NOTE}</Text>
          <TextInput style={Calender.input}
          editable={false} 
            underlineColorAndroid="transparent"
            placeholder="Please enter the information you'd like to reply to the doctor before the call"
            placeholderTextColor="#676891"
            multiline={true}
          />


        </View>

        <View style={Calender.Border}>

        </View>
        <TouchableOpacity
          style={Calender.signinbutton}
          onPress={this._navigateToContinue}
        >
          <Text style={Calender.textStyle}>{Strings.TEXTTITLE.CONFIRMAPPOINTMENT}</Text>
        </TouchableOpacity>
        </ScrollView>
      </View>
      


      //   </View>
    )
  }
}