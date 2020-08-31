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
   marginHorizontal:"16%",
    marginTop:5,
    fontSize:20,
     textAlign:"center" ,
     fontFamily:Fonts.PoppinsMedium,
     color:"#3C3C70",
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
    flatlistStyle:{
        height:"50%"
      },
      onlinestoreitem: {
        marginVertical: 5,
        marginHorizontal:5,
        width:110,
        height:34,
        flexDirection:"column",
        backgroundColor:"#E9F0FE",
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:5,
        borderColor:Colors.borderColor,
      },
      Timeflatlist:{
        height:"15%",
        margin:10,
        alignItems:'center',
        // flexDirection:'column'
      },
      onlineflatlist:{
        height:"22%",
      marginHorizontal:10,
      marginLeft:'2%',
      marginRight:'2%',
      //backgroundColor:Colors.redColor,
     // width:'96%'
      //marginRight:20
     
     
        },
        title:{
          fontFamily:Fonts.PoppinsSemiBold,
          textAlign:"left",
          paddingHorizontal:5,
          color:'#6E96FA'  ,
          marginHorizontal:8,
          marginTop:5
        },
      scheduleitem: {
       padding:15,
       marginHorizontal: 15,
       borderRadius:25,
       flexDirection:"row",
       backgroundColor:"white",
       },
      doctorimage:{
        marginTop:"2%",
        resizeMode:"contain",
        width:60,
        height:60,
        borderRadius:10
      },
      doctr:{
        marginTop:'15%',

      },
      textitem:{
        flex:1,
        marginVertical:20,
        marginHorizontal:10,
        flexDirection:"column",
      },
      textitemtime:{
        // flex:1,
        marginVertical:20,
        marginHorizontal:10,
        // flexDirection:"column",
        backgroundColor:"#E9F0FE",
        width:80,
        height:30,
        alignItems:'center',
        borderRadius:5,
      },
      input: {
        margin: 10,
        height: 70,
        borderColor: '#EDEFF1',
        borderWidth: 1,
        borderRadius:10,
     },
     Border:{
      borderWidth: 0.5,
      marginTop:"10%",
      borderColor:'#EDEFF1',

     },
     signinbutton:{
      marginTop: 50,
      marginLeft:'4%',
      marginRight: '4%',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#497EF9' ,
      width:'92%',
      height:50,
      borderRadius: 8,

    },
    textStyle:{
      fontSize:17,
      fontFamily:Fonts.PoppinsMedium,
      color:Colors.textWhite,
    },
      name: {
        fontSize: 13,
        fontFamily:Fonts.PoppinsRegular,
        marginHorizontal:"10%",
        // marginVertical:"1%",
         marginTop:-10,
        
      },
      timename: {
        fontSize: 13,
        fontFamily:Fonts.PoppinsRegular,
        color:'#2f6deb',
        margin:7,
      },
      schedulename: {
        padding:15,
        marginHorizontal: 10,
        fontSize: 18,
        fontFamily:Fonts.PoppinsRegular,
        color:"#3C3C70"
      },
      year: {
        padding:10,
        marginHorizontal:10,
        fontSize: 14,
        fontFamily:Fonts.PoppinsRegular,
        color:"#3C3C70"

      },
      note: {
        padding:10,
        marginHorizontal:10,
        fontSize: 14,
        fontFamily:Fonts.PoppinsMedium,
        color:"#3C3C70"

      },
      profession: {
        fontSize:11,
        color:Colors.darkgrayColor,
        fontFamily:Fonts.PoppinsRegular,
        marginHorizontal:"10%",
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