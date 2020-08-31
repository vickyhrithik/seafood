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
        Button:{
          backgroundColor:Colors.textWhite,
          borderWidth:1,
          borderRadius:20,
          borderColor:"grey",
          padding:12,
          width:"90%",
          marginRight:"5%",
          marginLeft:"5%",
          marginTop:"30%",
          flexDirection:'row',
          justifyContent:'center'

      },
      Button1:{
        backgroundColor:Colors.themeColor,
        borderWidth:1,
        borderRadius:20,
        borderColor:Colors.themeColor,
        padding:12,
        width:"90%",
        marginRight:"5%",
        marginLeft:"5%",
        marginTop:"20%"

    },
      Text:{
      fontSize:17,
      textAlign:"center",
      fontFamily:Fonts.PoppinsSemiBold,
      color:Colors.textblack,
     
      
      },
      Text1:{
        fontSize:17,
        textAlign:"center",
        fontFamily:Fonts.PoppinsSemiBold,
        color:Colors.textWhite,
       
        
        },
          categariesView:{
            // marginHorizontal:"7%",
            flexDirection:"row",
            height:"10%",
            backgroundColor:'#008DD2',
              justifyContent:"space-around",
             alignItems:'center'
            // marginTop:"15%",
            // marginBottom:"1%",
          },
          shadowContainerStyle: {   //<--- Style with elevation
            borderWidth: 1,
            borderRadius: 5,
            borderColor: '#008DD2',
            borderBottomWidth: 2,
            shadowColor: '#008DD2',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.9,
            shadowRadius: 10,
          },
          shadowBottonContainerStyle: {    //<--- Style without elevation
            borderWidth: 1,
            borderRadius: 5,
            borderColor: '#ddd',
            borderBottomWidth: 2,
            shadowColor: '#000000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.9,
            shadowRadius: 10,
          },
          backButtonStyle: {
            // marginTop:"1%", 
           },
         backImg: {
          resizeMode: "contain",
          width: 25,
          tintColor:'white',
        },
        backImg1: {
            resizeMode: "contain",
            width: 20,
            marginRight:10
            
          },
          backImg2:{
              marginTop:5

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
         textStyle:{
            fontSize:17,
            fontFamily:Fonts.PoppinsMedium,
            color:Colors.textWhite,
          },
        title:{
            fontFamily:Fonts.PoppinsMedium,
            fontSize:18,
            // marginRight:"12%",
            color:'white'
            // marginLeft:"4%"
          },
          tickStyle:{
              marginTop:"50%",
              alignSelf:"center"
          },
          successul:{
              marginTop:"4%",
              fontFamily:Fonts.PoppinsSemiBold,
              fontSize:22,
              textAlign:"center"
          },
          content:{
            marginTop:"3%",
            fontFamily:Fonts.PoppinsRegular,
            fontSize:15,
            textAlign:"center",
            marginHorizontal:"20%",
            color:Colors.textlightblack
          },
          vieworders:{
            marginTop:"2%",
            fontFamily:Fonts.PoppinsRegular,
            fontSize:15,
            textAlign:"center",
            color:Colors.themeColor
          }
        })