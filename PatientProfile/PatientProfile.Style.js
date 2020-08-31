import { Fonts } from "../../util/Fonts";
import {Colors} from "../../util/Color"
import { StyleSheet } from 'react-native';
import { color } from "react-native-reanimated";
export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        //  justifyContent: "flex-start",
        //  backgroundColor: "#2B8EDB",
          backgroundColor: Colors.textWhite,
       
        },
        onlinestoreitem: {
          marginVertical: 25,
          // alignItems:'center',
          marginHorizontal:25,
          // flex:1,
          
          backgroundColor:"white",
         
        },
        titleImage222:{
          width:20,
          height:20,marginTop:10,
          alignItems:'flex-end',
          justifyContent:'flex-end',
          backgroundColor:'white',
          marginRight:5
        },
        columnn:{
          flexDirection:"column",
          justifyContent:"flex-start",
          alignItems:'flex-start'

      },
      titleImage2:{
        width:130,height:120,
        alignItems:'flex-end'
        // justifyContent:'flex-end'

    },
        titleImage22:{
          // margin:10,
          width:20,
          height:20
          // resizeMode: "contain",

        },
        title:{
          fontFamily:Fonts.PoppinsRegular,
          
          color:Colors.textlightblack  ,
         

        },
        title11:{
          fontFamily:Fonts.PoppinsBold,
          
          color:Colors.textlightblack  ,
         

        },
        rown:{
          flexDirection:"row",
          justifyContent:'space-between'
          

      },
      onlineflatlist:{
          // height:"25%",
         marginHorizontal:10,
        // marginLeft:'2%',
        // marginRight:'2%',
        
       
       
          },
          Texti:{
              fontSize:18,
              fontFamily:Fonts.PoppinsSemiBold,
              margin:10,

          },
        titleimage1:{
          resizeMode:"contain",
          marginHorizontal:18,
          marginTop:5,
          alignItems:'center'

        },
        title:{
          // fontFamily:Fonts.PoppinsBold,
          textAlign:"left",
          paddingHorizontal:1,
          color:"grey"  ,
          marginHorizontal:1,
          marginTop:5

        },
      //   onlinestoreitem: {
      //     marginVertical: 15,
      //     alignItems:'center',
      //     marginHorizontal:15,
      //     width:140,
      //     height:160,
      //     flexDirection:"column",
      //     backgroundColor:"white",
      //     //iOS
      //     shadowOpacity: 0.3,
      //    shadowRadius: 5,
      //     shadowOffset: {
      //   height: 2,
      //   width: 0
      //   },
      // shadowColor: 'black',
      // //android
      // elevation: 3,
      //     borderRadius:10,
      //     borderColor:Colors.borderColor,
      //   },
        titleImage1:{
          margin:20

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
      marginTop:22,
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
  categariesView:{
    // marginHorizontal:"4%",
    // flexDirection:"row",
     justifyContent:"center",
     height:"10%",
     backgroundColor:'#008DD2'
    // marginTop:"15%",
    // marginBottom:"8%",
    // justifyContent: "flex-end",
  },
  lifeline:{
    //  marginTop:"10%",
     fontFamily:Fonts.PoppinsSemiBold,
     fontSize:18,
     textAlign:"center",
    //  marginHorizontal:15,
    //  marginLeft:"30%",
     color:'white'
 },
 categariesImg:{
     resizeMode:"contain",
    // width:40,height:40
},
videocallconsultationView:{
    borderTopLeftRadius: 40,
    // borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor:"white",
    height:'140%',
    width:"100%"
     
   },
  item: {
    padding:12,
    height:120,
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
   
     fontSize:15,
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
fontSize:15
 },
 selectpatient:{
    fontFamily:Fonts.PoppinsRegular,
    fontSize:14,
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