import { Fonts } from "../../util/Fonts";
import {Colors} from "../../util/Color"
import { StyleSheet } from 'react-native';
import { color } from "react-native-reanimated";
export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
         justifyContent: "flex-start",
         backgroundColor: Colors.textWhite
        },
        textalign:{
          flexDirection:"row",
          marginTop:"10%"
        },
    backButtonStyle: {
    alignSelf:'flex-start',
    marginLeft:10, 
    marginTop:10, 
  },
   backImg: {
    marginLeft: 5,
    alignSelf: "flex-start",
    resizeMode: "contain",
    width: 25
  },
  videocallwithtitle:
  {
    marginHorizontal:"10%",
    marginTop:5,
    fontSize:20,
    textAlign:"center" ,
    fontFamily:Fonts.PoppinsRegular
  },
videocallImg:{
marginTop:50,
alignSelf:"center",
resizeMode: "contain",
width:200,
height:100,

},
videocallcontent:{
 marginTop:50,
 
textAlign:"center",
fontSize:15,
fontFamily:Fonts.PoppinsRegular,
color:Colors.darkgrayColor
},
choosedoctor:{
    marginTop:20,
    fontFamily:Fonts.PoppinsRegular,
    fontSize:19,
    marginHorizontal:20,
    marginBottom:15
},
// container: {
//     flex: 1,
//     marginTop: 10,
//   },
  flatlistStyle:{
    height:"50%"
  },
  videoCallitem: {
    
    padding:25
       , marginVertical: 7,
        marginHorizontal: 15,
        shadowColor: Colors.shadowColor,
        borderRadius:5,
        flexDirection:"row",
        backgroundColor:Colors.textWhite,
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
  doctorimage:{
    width:100,
    height:100,
    borderRadius:10,
    resizeMode:"contain",
    marginLeft:"5%"
  
  },
  dctImgView:{
    marginTop:"2%",
    borderRadius:10
  },
  avaliablepriceamt:{
   marginTop:"10%",
   left:20
  },
  avaliable:{
    fontSize: 18,
    fontFamily:Fonts.PoppinsRegular,
  },
  priceamount:{
    fontFamily:Fonts.PoppinsRegular,
    fontSize:14,
    color:Colors.darkgrayColor,
  },
  doctorimage:{
    marginTop:"2%",
    resizeMode:"contain",
    width:110,
    height:110,
    borderRadius:15
  },
  textitem:{
    flex:1,
    marginVertical:30,
    marginHorizontal:20,
    flexDirection:"column",
  },
  name: {
    fontSize: 16,
    fontFamily:Fonts.PoppinsRegular,

  },
  profession: {
    fontSize:14,
    color:Colors.darkgrayColor,
    fontFamily:Fonts.PoppinsRegular
  },
  priceText:{
    flex:1,
  position:"absolute",
  right:15,
  top:15,
  fontFamily:Fonts.PoppinsRegular
  },
  price:{
    fontSize:12,
    color:Colors.darkgrayColor,
    fontFamily:Fonts.PoppinsRegular

      },
})