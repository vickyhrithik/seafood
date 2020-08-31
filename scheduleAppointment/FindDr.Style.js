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
            padding:15
          },
   
  addpatienttitle:{
    fontFamily:Fonts.PoppinsSemiBold,
    fontSize:25,
    textAlign:"center",
    marginTop:20
},
addpatientcontent:{
    marginTop:10,
    fontFamily:Fonts.PoppinsMedium,
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
    marginTop:'20%',
    color:Colors.textWhite,
    fontSize:18,
    fontFamily:Fonts.PoppinsSemiBold,
},
whycontent:
{
    fontFamily:Fonts.PoppinsRegular,
    textAlign:"justify",
    color:Colors.textWhite,
    fontSize:12,
},

 continueButton:{
     backgroundColor:Colors.pinkColor,
     borderRadius:8,
     borderColor:Colors.textWhite,
     padding:10,
     marginTop:30
 },
 continueText:{
 fontSize:17,
 textAlign:"center",
 fontFamily:Fonts.PoppinsMedium,
 color:Colors.textblack,

 
 },
 findcontent:{
    marginTop:'30%',

    fontFamily:Fonts.PoppinsRegular,
    textAlign:"justify",
    color:Colors.textWhite,
    fontSize:12,
 },
 findButton:{
    marginTop: 10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:Colors.textWhite,
    //width:'90%',
    height:55,
    marginLeft:20,
    marginRight:10,
    borderRadius: 8,
    padding:10,

  },
  findtextStyle:{
    fontSize:18,
    fontFamily:Fonts.PoppinsMedium,
    color:Colors.lightgreyColor,
  },
})