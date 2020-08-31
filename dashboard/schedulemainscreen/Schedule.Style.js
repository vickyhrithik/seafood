import { Fonts } from "../../../util/Fonts"
import {Colors} from "../../../util/Color"
import { StyleSheet } from 'react-native';
import { color } from "react-native-reanimated";
import { TouchableOpacity } from "react-native-gesture-handler";
export default StyleSheet.create({
    container: {
        flex: 1,
         backgroundColor: Colors.textWhite,
        },
        scrollviewContainer: {
            justifyContent: "flex-start",
            backgroundColor: Colors.textWhite,

          },
          scheduletitle:{
            marginTop:"15%",
            fontFamily:Fonts.PoppinsSemiBold,
            fontSize:27,
            textAlign:"left",
            marginHorizontal:15
          },
          upcomingText:{
              marginTop:"6%",
              fontFamily:Fonts.PoppinsRegular,
              marginHorizontal:15,
              fontSize:18,
              marginBottom:"2%"
          },
          item:{
          padding:13,
        marginVertical: 7,
        marginHorizontal: 15,
        shadowColor: Colors.shadowColor,
        borderRadius:10,
        flexDirection:"row",
        backgroundColor:"white",
        //iOS
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowOffset: {
        height: 1,
         width: 0
         },
         shadowColor: 'black',
         //android
          elevation: 3,
          },
          doctorimage:{
              width:90,
              height:90,
              borderRadius:10,
             resizeMode:'contain',
          },
          name:{
            fontFamily:Fonts.PoppinsRegular,
            marginLeft:15,
              fontSize:15
          },
          date:{
              marginTop:"7%",
              fontFamily:Fonts.PoppinsRegular,
            marginLeft:15,
            fontSize:15,
            color:Colors.darkgrayColor

          },
          attendeeView:{
            marginTop:"7%",  
              flexDirection:"row",
          },
          attendee:{   
            fontFamily:Fonts.PoppinsRegular,
            marginLeft:15,
            fontSize:15,
          },
          attendeename:{
            fontFamily:Fonts.PoppinsRegular,
            fontSize:15,
            marginLeft:3,
          },
          historyText:{
            marginTop:"3%",
            fontFamily:Fonts.PoppinsRegular,
            marginHorizontal:15,
            fontSize:18,
            marginBottom:"3%",
          }
          
})