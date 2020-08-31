import { Fonts } from "../../util/Fonts";
import {Colors} from "../../util/Color"
import { StyleSheet } from 'react-native';
import { color } from "react-native-reanimated";
export default StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'column',
        //  justifyContent: "flex-start",
         backgroundColor: Colors.textWhite,
       
        },
        header:{
            backgroundColor:"#008DD2",
            height:"10%",
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-around'

        },
        categariesImg:{
            tintColor:'white'
        },
        name:{
            color:'white',
            fontFamily:Fonts.PoppinsSemiBold,
            fontSize:18,

        },
        onlinestoreitem:{
            margin:10,
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
        list1:{
           
              flexDirection:'row',
            //    marginTop:60,
                 justifyContent:'space-around',
                alignItems:'center',
               borderWidth:1.5,
            borderColor:"#F7F7F7",
             backgroundColor:'#F6FAFB',
            borderRadius:20,
            // width:"100%",
             height:50,
            //  width:"100%",
             marginTop:20,
             marginLeft:"5%",
             marginRight:"5%"
            // marginHorizontal:10,
            // marginVertical:10,

        },
        title:{
                //  marginLeft:10,
                // alignItems:'flex-start',
                fontSize:18,
                fontFamily:Fonts.PoppinsSemiBold,
        },
        title1:{
            fontSize:14,
            // marginLeft:10,
        //   alignItems:'center',
        //   justifyContent:'center'
    },
    titleImage1:{
        alignItems:'flex-end',
        justifyContent:'flex-end'

    },
        list2:{
            // margin:10,
           

        },
        list:{
            // backgroundColor:'#E2E3EB',
            flex:1
           
           
           

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