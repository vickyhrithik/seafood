import { Fonts } from "../../util/Fonts";
import {Colors} from "../../util/Color"
import { StyleSheet } from 'react-native';
import { color } from "react-native-reanimated";
export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
         justifyContent: "flex-start",
         backgroundColor: Colors.textWhite,
       
        },
        scrollviewContainer: {
            justifyContent: "flex-start",
          },
       
    backButtonStyle: {
    alignSelf:'flex-start',
    marginLeft:20, 
    marginTop:"15%", 
  },
   backImg: {
    marginLeft: 5,
    alignSelf: "flex-start",
    resizeMode: "contain",
    width: 25
  },
  selectpatienttitle:{
      fontFamily:Fonts.PoppinsSemiBold,
      fontSize:27,
      textAlign:"left",
      marginTop:17,
      marginLeft: 10
  },
  selectpatientcontent:{
     color:Colors.textWhite,
     marginTop:5,
  paddingHorizontal:18,
     textAlign:"center",
     fontFamily:Fonts.PoppinsRegular,
     fontSize:16,
     marginBottom:25
  },
  flatlistview:{
      height:'80%'
  },
  item: {
    padding:12,
    height:110,
    marginVertical: 7,
    marginHorizontal: 15,
    borderRadius:5,
    borderWidth:1,
    flexDirection:"row",
    shadowColor: Colors.shadowColor,
    flexDirection:"row",
    backgroundColor:Colors.textWhite,
    borderColor:Colors.textWhite,
    //iOS
    shadowOpacity: 0.3,
   shadowRadius: 5,
    shadowOffset: {
  height: 2,
  width: 0
  },
shadowColor: 'black',
//android
elevation: 3,
  },
 patientname:{
   
     fontSize:17,
     fontFamily:Fonts.PoppinsRegular,
     color:Colors.textlightblack
 },
 iconView:{
     flexDirection:"row",
     justifyContent:"space-between",

 },
 dobView:{
     marginTop:3
 },
 
 dob:{
 
    fontSize:15,
    fontFamily:Fonts.PoppinsRegular,
    color:Colors.darkgrayColor
 },
 bottomText:{
  marginTop:10,
  marginBottom:5,
 flexDirection:"row",
 justifyContent:"space-between",
 },
 parent:{
    color:Colors.themeColor,
fontFamily:Fonts.PoppinsRegular,
fontSize:15
 },
 selectpatient:{
    fontFamily:Fonts.PoppinsRegular,
    fontSize:15,
    marginLeft:'50%',
    color:Colors.darkgrayColor
 },
 addnewpatientText:{
     marginTop:10,
     fontSize:18,
     fontFamily:Fonts.PoppinsSemiBold,
     textAlign:"center",
 },
 settingsbtn:{
 

 }
 
});