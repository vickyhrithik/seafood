import { Fonts } from "../../../../util/Fonts"
import {Colors} from "../../../../util/Color"
import { StyleSheet } from 'react-native';
import { color } from "react-native-reanimated";
import { TouchableOpacity } from "react-native-gesture-handler";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
        },
          categariesView:{
            // marginHorizontal:"7%",
            flexDirection:"row",
            justifyContent:'center',
            alignItems:'center',
            height:"10%",
            backgroundColor:'#008DD2',
            justifyContent:'space-around'
            // justifyContent:"flex-start",
            // marginTop:"15%",
            // marginBottom:"1%",
          },
          img:{
               height:"40%"

          },
          invite:{
              justifyContent:'center',
              alignItems:'center',
              marginTop:"35%"

          },
          text:{

            fontFamily:Fonts.PoppinsMedium,
            fontSize:18,
          },
          backImgg:{
               resizeMode:'contain'

          },
          loream:{
              marginLeft:40,
              marginRight:40,
              marginTop:10,
            //   justifyContent:'center',
            //   alignItems:'center'

          },
          signinbuttonn:{
            marginTop: 60,
            marginLeft:'4%',
            marginRight:'4%',
            justifyContent:'center',
            alignItems:'center',
             // backgroundColor:"blue",
            width:'92%',
            height:50,
            borderRadius: 19,
           //  borderColor:"red"
  
          },
          textStyle:{
            fontSize:17,
            fontFamily:Fonts.PoppinsMedium,
            color:Colors.textWhite,
          },
          signinbutton:{
           marginTop: 5,
           marginLeft:'4%',
           marginRight:'4%',
           justifyContent:'center',
           alignItems:'center',
            // backgroundColor:"blue",
           width:'92%',
           height:50,
           borderRadius: 19,
          //  borderColor:"red"
 
         },
          backButtonStyle: {
            marginTop:"1%", 
           },
         backImg: {
          resizeMode: "contain",
          width: 25,
          // alignItems:'flex-start',
          // marginRight:"50%",
          tintColor:'white',
        },
        title:{
            fontFamily:Fonts.PoppinsMedium,
            fontSize:18,
            alignItems:'center',
            // marginLeft:"4%",
            color:'white',
            // marginRight:"40%",
          },
         })