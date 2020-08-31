import { Fonts } from "../../util/Fonts";
import {Colors} from "../../util/Color"
import { StyleSheet } from 'react-native';
import { color } from "react-native-reanimated";
export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
         justifyContent: "flex-start",
         backgroundColor: "white",
        },
        scrollviewContainer: {
            justifyContent: "flex-start",
            padding:15
          },
    backButtonStyle: {
    alignSelf:'flex-start',
    marginLeft:5, 
    marginTop:20, 
  },
   backImg: {
    alignSelf: "flex-start",
    resizeMode: "contain",
    width: 25,
    alignSelf:"center",
  },
  addpatienttitle:{
    fontFamily:Fonts.PoppinsSemiBold,
    fontSize:25,
    textAlign:"center",
    marginTop:0
},
addpatientcontent:{
    marginTop:10,
    fontFamily:Fonts.PoppinsRegular,
    textAlign:"center",
    color:Colors.textWhite,
    fontSize:15,
},
addpatientImg:{
    resizeMode:"contain",
    width:200,
    height:200,
    alignSelf:"center",
},
why:{
    marginTop:25,
    color:Colors.textWhite,
    fontSize:20,
    fontFamily:Fonts.PoppinsSemiBold,
},
whycontent:
{
    fontFamily:Fonts.PoppinsRegular,
    textAlign:"justify",
    color:Colors.textWhite,
    fontSize:14,
},
isitsecure:{
    marginTop:20,
    color:Colors.textWhite,
    fontSize:20,
    fontFamily:Fonts.PoppinsSemiBold,
},
isitsecurecontent:
{
    fontFamily:Fonts.PoppinsRegular,
    textAlign:"justify",
    color:Colors.textWhite,
    fontSize:14,
    marginBottom:"15%"
},
 continueButton:{
     backgroundColor:Colors.textWhite,
     borderWidth:1,
     borderRadius:8,
     borderColor:Colors.textWhite,
     padding:10,
 },
 continueText:{
 fontSize:17,
 textAlign:"center",
 fontFamily:Fonts.PoppinsMedium,
 color:Colors.lightgreyColor,

 
 }
})