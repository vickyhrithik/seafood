import { Fonts } from "../../util/Fonts";
import {Colors} from "../../util/Color"
import { StyleSheet } from 'react-native';
import { color } from "react-native-reanimated";
export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
         justifyContent: "flex-start",
         backgroundColor:'white',
        },
        titlealign:{
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
  scheduletitle:{ 
   marginHorizontal:"6%",
    marginTop:5,
    fontSize:20,
     textAlign:"center" ,
     fontFamily:Fonts.PoppinsRegular
    },
    calenderImg:{
        marginTop:50,
        alignSelf:"center",
        width:200,
        height:100
    },
    schedulecontent:{
    marginTop:50,
   paddingHorizontal:50,
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
      scheduleitem: {
       // height:180,
        padding:25,
        marginVertical: 7,
        marginHorizontal: 15,
        shadowColor: Colors.shadowColor,
        borderRadius:5,
        flexDirection:"row",
        backgroundColor:"white",
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
        marginTop:"2%",
        resizeMode:"contain",
        width:110,
        height:110,
        borderRadius:10
      },
      textitem:{
        flex:1,
        marginVertical:30,
        marginHorizontal:20,
        flexDirection:"column",
      },
      name: {
        fontSize: 16,
        fontFamily:Fonts.PoppinsRegular
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