import { Fonts } from "../../../../util/Fonts"
import {Colors} from "../../../../util/Color"
import { StyleSheet,Dimensions} from 'react-native';
import { color } from "react-native-reanimated";
const{width,height}=Dimensions.get("window")
import { TouchableOpacity } from "react-native-gesture-handler";
export default StyleSheet.create({
    container: {
        flex: 1,
         backgroundColor: Colors.textWhite,
        },
        scrollviewContainer: {
            justifyContent: "flex-start",
          },
          backButtonStyle: {
            alignSelf:'flex-start',
            marginLeft:15, 
            marginTop:20, 
          },
           backImg: {
            marginLeft: 5,
            alignSelf: "flex-start",
            resizeMode: "contain",
            width: 25
          },
          titlealign:{
              flexDirection:"row",
              marginTop:"10%",
          },
          historyTitle:{
          marginHorizontal:"30%",
           fontSize:20,
           fontFamily:Fonts.PoppinsMedium,
           marginTop:15
          },
          dctprofileView:{
            flexDirection:"row",
            marginHorizontal:25,
            marginTop:"10%"
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
        detailmainView:{
            flexDirection:"row",
            justifyContent:"space-between",
            marginHorizontal:20,
            marginTop:40,
          },
          detailtitleText:{
            fontFamily:Fonts.PoppinsRegular,
            fontSize:17,
          },
          idText:{
            fontFamily:Fonts.PoppinsRegular,
            fontSize:17,
          },
          ptdetailsView:{
            flexDirection:"row",
            justifyContent:"space-around",
            marginTop:'5%',
            alignSelf:"flex-start",
            marginHorizontal:"5%"
          },
          ptimgStyle:{
            resizeMode:"contain",
          },
          ptname:{
            marginLeft:"5%",
            fontFamily:Fonts.PoppinsMedium,
            fontSize:14,
            color:Colors.darkgrayColor
          },
          ptdob:{
            marginLeft:"5%",
            fontFamily:Fonts.PoppinsRegular,
            fontSize:14,
            color:Colors.darkgrayColor
          },
          consulationView:{
            flexDirection:"row",
            justifyContent:"space-around",
            marginTop:'5%',
          },
          consulation:{
            fontFamily:Fonts.PoppinsRegular,
            fontSize:15,
            color:Colors.darkBlueColor
          },
          medication:{
            fontFamily:Fonts.PoppinsRegular,
            fontSize:15,
            marginLeft:"18%",
            color:Colors.darkBlueColor

          },
       
          datetimeView:{
            flexDirection:"row",
            justifyContent:"space-around",
            alignSelf:"flex-start",
          },
          datetime:{
            fontFamily:Fonts.PoppinsRegular,
            fontSize:14,
            color:Colors.darkgrayColor,
            marginTop:"1%"
          },
          caltimeimg:{
           resizeMode:"center",
           marginTop:"1%",
           marginHorizontal:"2%"
          },
          itemsView:{
            position:"absolute",
            alignSelf:"flex-end",
            marginHorizontal:"20%",
          },
          items:{
            fontFamily:Fonts.PoppinsRegular,
            fontSize:14,
            color:Colors.textlightblack,
            marginTop:"5%"
          },
          contactdetails:{
            fontFamily:Fonts.PoppinsRegular,
            fontSize:15,
            marginTop:"20%",
            marginLeft:"4%",
            marginBottom:"2%",
            borderColor:Colors.darkgrayColor
          },
          subjectView:{
            borderWidth:0.5,
            borderRadius:10,
            height:"7%",
            marginHorizontal:"4%",
            padding:"1%",
           borderColor:Colors.bordergrey,
           marginHorizontal:"4%",
          },
          subText:{
            fontSize:14,
            fontFamily:Fonts.PoppinsRegular,
            color:Colors.darkgrayColor,
            marginHorizontal:"4%",
            height:"30%",
            },
            textinput1:{
            color:Colors.textblack,
            fontSize:13,
            fontFamily:Fonts.PoppinsRegular,
            width:"92%",
            marginHorizontal:"4%",
            height:"70%",

            },
      hisText:{
        fontSize:15,
        fontFamily:Fonts.PoppinsRegular,
        color:Colors.darkgrayColor,
        marginHorizontal:"4%"
      },
      textinput2:{
      
        color:Colors.textblack,
        fontSize:15,
        fontFamily:Fonts.PoppinsRegular, 
        width:"92%",
        marginHorizontal:"4%",
        height:"80%"
      },
      msgView:{
        marginTop:"3%",
        borderWidth:0.5,
        borderRadius:10,
        height:"10%",
        marginHorizontal:"4%",
        padding:"1%",
       borderColor:Colors.bordergrey,
       marginHorizontal:"4%",
      
      },
      createbtnstyle:{
        backgroundColor:Colors.themeColor,
        borderWidth:1,
        borderRadius:10,
        borderColor:Colors.textWhite,
        padding:10,
        marginHorizontal:15,
        height:50
    },
    createbtn:{
      textAlign:"center",
      fontSize:18,
      color:Colors.textWhite,
      fontFamily:Fonts.PoppinsMedium
  },
  btnView:{
    marginTop:"3%"  
  },
  lineborders:{
    borderWidth:2,
    borderColor:Colors.silverGrey,
    opacity:0.1,
    marginTop:"10%",
    marginBottom:"2%" 
},
medicalinvoicebtnView:{
  marginTop:"2%",
flexDirection:"row",
justifyContent:"space-between",
},
medicalBtn:{
  borderWidth:1,
  borderRadius:10,
  padding:"1%",
  height:50,
 // height:"100%",
  width:"46%",
  borderColor:Colors.textWhite,
  backgroundColor:Colors.textblack,
  marginLeft:"3%",
},
invoiceBtn:{
  borderWidth:1,
  borderRadius:10,
  padding:"1%",
  height:"100%",
  width:"46%",
  borderColor:Colors.textWhite,
  backgroundColor:"#228B22",
  marginLeft:"1%",
  marginRight:"3%"

},
btntextname1:{
  marginTop:"5%",
textAlign:"center",
fontSize:14,
fontFamily:Fonts.PoppinsMedium,
color:Colors.textWhite,

},
btntextname2:{
  marginTop:"5%",
  textAlign:"center",
  fontSize:14,
  fontFamily:Fonts.PoppinsMedium,
  color:Colors.textWhite,
},   
naView:{
  position:"absolute",
  alignSelf:"flex-end",
  marginHorizontal:"13%",
  right:"2%"
},
na:{
  fontFamily:Fonts.PoppinsRegular,
  fontSize:14,
  color:Colors.darkgrayColor,
  marginTop:"10%"
},
historyNextlineborders:{
marginTop:"50%",
borderWidth:2,
borderColor:Colors.silverGrey,
opacity:0.1,

} ,
invoicebtnHistoryNextView:{
  marginTop:"4%"  
},
invoicebtnHistoryNext:{
  textAlign:"center",
  fontSize:18,
  color:Colors.textWhite,
  fontFamily:Fonts.PoppinsMedium,
 // backgroundColor:Colors.redColor
  
}  ,
invoicebtnHistoryNextstyle:{
  backgroundColor:"#228B22",
  borderWidth:1,
  borderRadius:10,
  borderColor:Colors.textWhite,
  padding:10,
  marginHorizontal:15,
  height:55
},
cancellationText:{
  marginTop:"10%",
  textAlign:"center",
  fontSize:15,
  fontFamily:Fonts.PoppinsRegular
},
cancelled:{
  marginTop:"35%",
  fontSize:15,
  fontFamily:Fonts.PoppinsMedium,
  marginHorizontal:"5%"
},
cancelledcontent:{
  marginTop:5,
  fontSize:14,
  fontFamily:Fonts.PoppinsRegular,
  color:Colors.textlightblack,
  marginHorizontal:"5%"
},
historyThirdlineborders:{
  marginTop:"10%",
borderWidth:2,
borderColor:Colors.silverGrey,
opacity:0.1,
}      
})