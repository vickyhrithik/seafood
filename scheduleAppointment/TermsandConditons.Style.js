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
            alignItems:"center",
            marginHorizontal:"1%"
          },
          btnView:{
            flexDirection:"row",
            justifyContent:"space-between",
           
          },
    backButtonStyle: {
    alignItems:"flex-start"
  },
   backImg: {
    marginTop:60, 
    resizeMode: "contain",
    width: 25
  },
  closeButtonStyle:{
    alignItems:"flex-end",
    marginLeft:"75%",
    marginRight:"5%"

  },
  closeText:{
    marginTop:55,
   fontFamily:Fonts.PoppinsLight,
   fontSize:25,
   textAlign:"right",
   width:30,
   color:Colors.textWhite,
  },
  title:{
      fontFamily:Fonts.PoppinsSemiBold,
      fontSize:23,
      textAlign:"center",
      marginTop:16,
      marginHorizontal:"10%",
      marginBottom:"5%"
  },
  termsText:{
    fontFamily:Fonts.PoppinsSemiBold,
    fontSize:20,
    textAlign:"left",
    paddingHorizontal:"5%",
    marginTop:"15%"

  },
  contents:{
     color:Colors.textWhite,
  paddingHorizontal:18,
     textAlign:"justify",
     fontFamily:Fonts.PoppinsRegular,
     fontSize:15,
     
  },
  acceptButton:{
    backgroundColor:Colors.textWhite,
    borderWidth:1,
    borderRadius:8,
    borderColor:Colors.textWhite,
    padding:10,
    width:"90%",

},
acceptText:{
  fontSize:17,
  textAlign:"center",
  fontFamily:Fonts.PoppinsMedium,
  color:Colors.lightgreyColor,

},
acceptBtnView:{
    marginTop:"20%",
    marginBottom:"15%",
    alignItems:"center"
  
   
}})