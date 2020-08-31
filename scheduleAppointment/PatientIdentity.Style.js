import { Fonts } from "../../util/Fonts";
import {Colors} from "../../util/Color"
import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    mainView:{ 
        backgroundColor: Colors.themeColor,
        flex:1 , 
        justifyContent: "flex-start",
        flexDirection: 'column',
        },
        patienttitle:{
            fontFamily:Fonts.PoppinsSemiBold,
            fontSize:24,
            textAlign:"center",
            marginTop:0
        },
       
        backButtonStyle: {
            alignSelf:'flex-start',
            marginLeft:10, 
            marginTop:60, 
    
          },
           backImg: {
            marginLeft: 5,
            alignSelf: "flex-start",
            resizeMode: "contain",
            width: 25
          },
     
       
      
        registeredaccount:{
            marginTop:5,

          textAlign:"center",
          color:Colors.textWhite,
          fontFamily: Fonts.PoppinsRegular,
          fontSize:16
        },
       
          uploadButton:{
            marginTop: 30,
            marginLeft: 10,
            marginRight: 10,
             justifyContent:'center',
            alignItems:'center',
            width:'95%',
            height:60,
           },
           uploadImg:{
             justifyContent:'center',
             alignItems:'center',
             width:'100%',
             height:60,
            },
          textStyle:{
            fontSize:17,
            fontFamily:Fonts.PoppinsMedium,
            color:Colors.lightgreyColor,
          },
      
          tickView:{
            justifyContent:'flex-start',
            width:"100%",
            flexDirection:'row',
           },
           
         tickImg:{
            marginTop: 10,
            marginLeft:"20%",
            alignSelf:'flex-start',
            width:'4%',
            height:23,
          },
          tickText:{
            marginTop: 10,
            marginLeft: 10,
            width : '62%',
            fontSize:13,
            fontFamily:Fonts.PoppinsMedium,
            color:Colors.textblack,
          },
          completeText:{
            marginTop: "40%",
            marginLeft: '13%',
            width : '88%',
            fontSize:12,
            fontFamily:Fonts.PoppinsMedium,
            color:Colors.textblack,
           // backgroundColor:Colors.pinkColor
          },

          confirmButton:{
            marginTop: 10,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:Colors.textWhite,
            width:'90%',
            height:55,
            marginLeft:20,
            marginRight:10,
            borderRadius: 8,
  
          },
          confirmtextStyle:{
            fontSize:17,
            fontFamily:Fonts.PoppinsMedium,
            color:Colors.lightgreyColor,
          },
        

          
});