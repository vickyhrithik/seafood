import { Fonts } from "../../../util/Fonts"
import {Colors} from "../../../util/Color"
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
        marginTop:30, 
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
       marginTop:22
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
        marginTop:45,
      },
    
      ptiddetailstitleText:{
        fontFamily:Fonts.PoppinsRegular,
        fontSize:16,
      },
      ptiddetailstitlerightText:{
        fontFamily:Fonts.PoppinsRegular,
        fontSize:16,
      
      },
      ptdetailsView:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:35,
        marginTop:20,
        marginRight:20
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
          marginTop:"20%",
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
    cancelbtnstyle:{
        backgroundColor:"#ff726f",
        borderWidth:1,
        borderRadius:10,
        borderColor:"#ff726f",
        padding:15,
        marginHorizontal:15,
    },
    cancelbtn:{
        textAlign:"center",
        fontSize:18,
        color:Colors.textWhite,
        fontFamily:Fonts.PoppinsMedium

    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalContainer:{},
modalView: {
position: "absolute",
bottom: -20,
left: 0,
right: 0,
height:720,
backgroundColor: Colors.textWhite,
borderRadius: 18,
marginHorizontal:-20,
alignItems: "center",
},
bottomImgStyle:{
marginTop:"4%",
width:70,
height:90,
marginBottom:"5%"
},
didText:{
fontFamily:Fonts.PoppinsMedium,
fontSize:17,
marginBottom:"2%",
marginHorizontal:"15%"

},
didcontentText:{
fontFamily:Fonts.PoppinsRegular,
fontSize:15,
marginBottom:"10%",
textAlign:"center",
marginHorizontal:"10%",
color:Colors.textlightblack

},
itemcontainer: {
height:"40%",
marginTop:"2%",
marginBottom:"2%",
},
BtnView:{
flexDirection:"row",
justifyContent:"space-between",
borderBottomWidth:0.3,
borderColor:Colors.silverGrey,
marginHorizontal:"5%"

},
itemunselectView: {
 fontSize: 15,
 fontFamily:Fonts.PoppinsRegular,
 color:Colors.darkgrayColor,
 marginVertical:10,
 marginRight:"20%"
},
itemselectView:{
fontSize: 15,
fontFamily:Fonts.PoppinsRegular,
    marginVertical:10,
    marginRight:"20%"
},
radioBtnStyle:{
marginVertical:10
},


selectbtnView:{
marginTop:"2%",
marginBottom:"2%",

},
selectbtnstyle:{
backgroundColor:"#ff726f",
borderWidth:1,
borderRadius:10,
borderColor:"#ff726f",
padding:15,
marginHorizontal:15,
width:width-30

},
selectbtn:{
textAlign:"center",
fontSize:18,
color:Colors.textWhite,
fontFamily:Fonts.PoppinsMedium
},

cancelapptcontent:{
marginTop:"5%",
textAlign:"center",
marginHorizontal:"5%",
fontFamily:Fonts.PoppinsRegular,
fontSize:15,
marginBottom:"10%"
}
  
        })