import { Fonts } from "../../util/Fonts";
import {Colors} from "../../util/Color"
import { StyleSheet } from 'react-native';
import { color } from "react-native-reanimated";
export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
         justifyContent: "flex-start",
         backgroundColor: Colors.themeColor,
       
        },
        scrollviewContainer: {
            justifyContent: "flex-start",
          },
       
    backButtonStyle: {
    alignSelf:'flex-start',
    marginLeft:10, 
    marginTop:"10%", 
  },
   backImg: {
    marginLeft: 5,
    alignSelf: "flex-start",
    resizeMode: "contain",
    width: 25
  },
  selectpatienttitle:{
      fontFamily:Fonts.PoppinsSemiBold,
      fontSize:26,
      textAlign:"center",
      marginTop:5
  },
  selectpatientcontent:{
     color:Colors.textWhite,
     marginTop:5,
  paddingHorizontal:18,
     textAlign:"center",
     fontFamily:Fonts.PoppinsRegular,
     fontSize:15,
     marginBottom:25
  },
  flatlistview:{
      height:'58%'
  },
  item: {
    padding:12,
    height:110,
    marginVertical: 7,
    marginHorizontal: 15,
    backgroundColor:Colors.textWhite,
    borderRadius:5,
    flexDirection:"row"
  },
 patientname:{
   
     fontSize:16,
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
 
    fontSize:14,
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
fontSize:14
 },
 selectpatient:{
    fontFamily:Fonts.PoppinsRegular,
    fontSize:15,
    marginLeft:'50%',
    color:Colors.darkgrayColor
 },
 addnewpatientText:{
     marginTop:5,
     fontSize:18,
     fontFamily:Fonts.PoppinsSemiBold,
     textAlign:"center",
 },
 settingsbtn:{
 

 }
 
});