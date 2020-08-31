import { Fonts } from "../../util/Fonts"
import {Colors} from "../../util/Color"
import { StyleSheet,Dimensions} from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
         backgroundColor: Colors.textWhite,
        },
        scrollviewContainer: {
            justifyContent: "flex-start",
            backgroundColor:Colors.textWhite
          },
          backButtonStyle: {
            alignSelf:'flex-start',
            marginLeft:10, 
            marginTop:15, 
          },
           backImg: {
            marginLeft: 5,
            alignSelf: "flex-start",
            resizeMode: "contain",
            width: 25
          },
          titlealign:{
              flexDirection:"row",
              marginTop:"10%"
          },
          upcomingTitle:{
          marginHorizontal:45,
           fontSize:20,
           fontFamily:Fonts.PoppinsMedium,
           marginTop:10
          },
          dctprofileView:{
              flexDirection:"row",
              marginHorizontal:25,
              marginTop:"12%"
          },
          imgStyle:{
              borderRadius:10,
              width:70,
              height:70,
              resizeMode:"contain"
          },
          dcttextView:{
              marginLeft:35
          },
          dctname:{
              marginTop:"3%",
              fontFamily:Fonts.PoppinsRegular,
              fontSize:15,
              marginBottom:"2%"
          },
          gnlpractitioner:{
            fontFamily:Fonts.PoppinsRegular,
            fontSize:13,
            color:Colors.darkgrayColor
          },
          apptView:{
            marginTop:"9%",
            flexDirection:"row",
            marginHorizontal:"15%"
          },
          appt:{
            fontFamily:Fonts.PoppinsRegular,
            fontSize:17,
            color:Colors.darkgrayColor,
          },
          date:{
            fontFamily:Fonts.PoppinsRegular,
            fontSize:16,
            color:Colors.darkgrayColor
          },
          ptdetailsmainView:{
            flexDirection:"row",
            justifyContent:"space-between",
            marginHorizontal:20,
            marginTop:'20%',

          },
          paymentView:{
            flexDirection:"row",
            justifyContent:"space-between",
            marginHorizontal:20,
            marginTop:'10%',
          },
          ptdetailsView:{
            flexDirection:"row",
            justifyContent:"space-between",
            marginHorizontal:35,
            marginTop:20,
            marginRight:20
          },
          ptiddetailstitleText:{
            fontFamily:Fonts.PoppinsRegular,
            fontSize:16,
          },
          patientBtntitle:{

          },
          patientname:{
            fontSize:17,
            fontFamily:Fonts.PoppinsRegular
        },
          ptiddetailstitlerightText:{
            fontFamily:Fonts.PoppinsRegular,
            fontSize:16,
          },
          patientaddNowrightText:{
            fontFamily:Fonts.PoppinsMedium,
            fontSize:16,
            color:Colors.themeColor
          },
          text:{
            fontFamily:Fonts.PoppinsRegular,
            fontSize:16,
            color:Colors.darkgrayColor
          },
          righttext:{
            fontFamily:Fonts.PoppinsRegular,
            fontSize:16,
            color:Colors.darkgrayColor
          },
          remtitle:{
              marginTop:"10%",
            fontFamily:Fonts.PoppinsRegular,
            fontSize:19,
            textAlign:"left",
            marginHorizontal:20,
          },
          remcontent:{
            marginTop:"3%",
            fontFamily:Fonts.PoppinsRegular,
            fontSize:15,
            textAlign:"left",
            marginHorizontal:35,
            color:Colors.darkgrayColor
            },
        lineborder:{
            marginTop:"5%",
            borderWidth:2,
            borderColor:Colors.silverGrey,
            opacity:0.1,
            marginBottom:"5%",
        },
        feesText:{
          fontFamily:Fonts.PoppinsMedium,
          fontSize:21,
          textAlign:"center",
          color:Colors.themeColor,
          alignItems:"center"
        },
        consultbtnstyle:{
            backgroundColor:Colors.themeColor,
            borderWidth:1,
            borderRadius:10,
            borderColor:Colors.textWhite,
            padding:10,
            marginHorizontal:15,
            height:50
        },
        consultbtn:{
            textAlign:"center",
            fontSize:18,
            color:Colors.textWhite,
            fontFamily:Fonts.PoppinsRegular
    
        },
        textStyle: {
          color: "white",
          fontWeight: "bold",
          textAlign: "center"
        },
        patientname:{
            fontSize:15,
            fontFamily:Fonts.PoppinsRegular
        },
        parent:{
            fontFamily:Fonts.PoppinsRegular,
            fontSize:11
            
             },
        item: {
           // padding:10,
            height:55,
            marginVertical: 7,
            marginHorizontal: 15,
           flexDirection:"column"
          },
 
  
 
 
  
  
        })