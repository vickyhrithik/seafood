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
            alignItems:"center"
          },
    backButtonStyle: {
    alignSelf:'flex-start',
    marginLeft:10, 
    marginTop:40, 
  },
   backImg: {
    marginLeft: 5,
    alignSelf: "flex-start",
    resizeMode: "contain",
    width: 25
  },
  verifytitle:{
    fontFamily:Fonts.PoppinsSemiBold,
    fontSize:25,
    textAlign:"center",
    marginTop:8,
    paddingHorizontal:"5%"
},
verifycontent:{
   color:Colors.textWhite,
   marginTop:10,
paddingHorizontal:18,
   textAlign:"center",
   fontFamily:Fonts.PoppinsRegular,
   fontSize:15,
},
resend:{
    marginTop:5,
    paddingHorizontal:18,
       textAlign:"center",
       fontFamily:Fonts.PoppinsRegular,
       fontSize:15,
       marginBottom:35,
},
totalfourdigitView:{
flexDirection:"row",
justifyContent:"space-around",
marginBottom:"5%",
alignItems:"center",

},
fourdigit:{
    borderWidth:1,
    borderColor:Colors.borderColor,
    width:"10%",
    height:"70%",
    borderRadius:5,
    padding:"1%",
    marginLeft:"2%",
    marginRight:"2%",
   // backgroundColor:Colors.redColor
},
fourdigitText:{
    fontFamily:Fonts.PoppinsRegular,
    fontSize:15,
    textAlign:"center",
    marginTop:1

},
numpadView:{
    width:"74%",
    height:"40%",
    borderRadius:10,
 backgroundColor:Colors.textWhite,
 shadowOpacity: 0.3,
 shadowRadius: 5,
  shadowOffset: {
height: 2,
width: 0
},
shadowColor: Colors.textWhite,
//android
elevation: 3,

},
numpadTopView:{
    flexDirection:"row",
    justifyContent:"space-around",
    marginTop:"10%",
    marginLeft:"5%",
    marginRight:"5%",
  
},
numpadFirstView:{
    flexDirection:"row",
    justifyContent:"space-around",
    marginTop:"15%",
    marginLeft:"5%",
    marginRight:"5%",
   
},
numpadzeroView:{
 marginLeft:"33%",
 marginBottom:"5%"
},
numStyleText:{
    fontFamily:Fonts.PoppinsRegular,
    fontSize:18,
    textAlign:"center",
},
delteImg:{

},
numpadBackspaceView:{
},
proceedstyle:{
    fontFamily:Fonts.PoppinsRegular,
    fontSize:13,
    textAlign:"center",
    marginTop:"10%",
    marginBottom:"2%"

},
continueButton:{
    backgroundColor:Colors.textWhite,
    borderWidth:1,
    borderRadius:8,
    borderColor:Colors.textWhite,
    padding:10,
    width:"90%"
},
continueText:{
fontSize:17,
textAlign:"center",
fontFamily:Fonts.PoppinsMedium,
color:Colors.lightgreyColor,


}

})