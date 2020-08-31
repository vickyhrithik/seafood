import { Fonts } from "../../util/Fonts";
import {Colors} from "../../util/Color"
import { StyleSheet } from 'react-native';
import { color } from "react-native-reanimated";
import { TouchableOpacity } from "react-native-gesture-handler";
export default StyleSheet.create({
    container: {
        flex: 1,
        //  backgroundColor: "#2B8EDB",
        //  alignItems: "center",
        
        
        },
        content:{
          width:"100%",
          height:"35%",
          // backgroundColor: "#2B8EDB",

        },
        scrollviewContainer: {
            justifyContent: "flex-start",
           
          },
          slide:{
            // marginLeft:20,
            // marginRight:20,
            // marginBottom:10,
            // marginTop:10,

          },
       
   lifeline:{
      //  marginTop:"10%",
       fontFamily:Fonts.PoppinsSemiBold,
       fontSize:18,
       textAlign:"center",
       marginHorizontal:15,
       marginLeft:"40%",
       color:'white'
   },
   categariesView:{
    // marginHorizontal:"4%",
    flexDirection:"row",
     justifyContent:"space-between",
    // marginTop:"5%",
    // marginBottom:"4%",
    height:"25%",
    backgroundColor: "#2B8EDB",
    alignItems:'center'
    // justifyContent: "flex-end",
  },
   categariesImg:{
    // resizeMode:"contain",
    width:40,height:35
},
   videocallconsultation:{
       marginTop:"5%",
       fontFamily:Fonts.PoppinsRegular,
       fontSize:17,
       marginBottom:"5%",
       textAlign:"left",
       marginHorizontal:15
   },
   videocallconsultationView:{
    
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor:"white",
    height:'65%'
     
   },
   videocallconsultationButton:{
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
   
    width:"45%",
    height:130,
    padding:8,
    marginLeft:15,
    marginHorizontal:5
   },
   videocallsceduleButton:{
    // borderWidth:1,
    // shadowColor: Colors.shadowColor,
    // shadowOffset: {width:0},
    // shadowOpacity: 0.2,
    // shadowRadius: 1,
    // elevation: 0.5,
    // borderRadius:5,
    // borderColor:Colors.borderColor,
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
    width:"45%",
    height:130,
    padding:8,
    marginRight:15,
    marginHorizontal:5

   },
   consultImg:{ 
   resizeMode:"contain",
   marginTop:-25,
   marginLeft: 15
   },
   imgView:{
       resizeMode:"contain"

   },
   consultndsce:{
       marginTop:"10%",
       fontSize:12,
       fontFamily:Fonts.PoppinsRegular,
       color:Colors.textlightblack  
   }
   ,
   general:{
       fontFamily:Fonts.PoppinsRegular,
       color:Colors.textlightblack
   },
   onlinstoreview:{
    justifyContent:"space-between",
    flexDirection:"row",
     marginTop:"2%",
    // paddingHorizontal: 15,
    // paddingVertical: 15,
   
   },
   onlinestore:{
    fontFamily:Fonts.PoppinsBold,
    fontSize:18,
    // marginBottom:"2%"
   },
  
   onlineflatlist:{
   height:"50%",
   paddingHorizontal: 5,
    paddingVertical: 5,
  // marginHorizontal:10,
  // marginLeft:'2%',
  // marginRight:'2%',
 

   },
   onlineflatlist1:{
      height:"30%",
      marginHorizontal:2,
      // justifyContent:'center'
  
    },
  row:{
    // marginTop:2,
    flexDirection:'row',
     justifyContent:'space-around'

  },
  row1:{
    // marginTop:2,
    flexDirection:'row',
     justifyContent:'space-around'

  },

   onlinestoreitem: {
    marginVertical: 5,
    marginHorizontal:5,
    width:250,
    height:150,
    flexDirection:"column",
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
    borderRadius:10,
    borderColor:Colors.borderColor,
  },
  onlinestoreitem1: {
  
    flexDirection:"column",
     backgroundColor:"white",
    width:78,
    height:81,
    borderRadius:16,
    borderWidth:2,
    marginHorizontal:10,
    alignItems:'center',
    borderColor:'#8291AC'
    
    
  },
  titleImage:{ 
       marginHorizontal:10,
       marginTop:5,
       height:80,
       width:120

  },
  titleImage2:{ 
    // alignItems:"flex-start",
    width:80,
    height:40,
    //  resizeMode:"contain",
    marginHorizontal:4,
    marginTop:55

},
  titleImage1:{ 
     alignItems:"center",
    // resizeMode:"cover",
     marginHorizontal:5,
    //  marginTop:5,
    width:36,
    height:36,
    borderRadius:5,
    marginTop:5

},
cat:{
  fontSize:18,
  fontFamily:Fonts.PoppinsBold,

},
  title:{
    fontFamily:Fonts.PoppinsBold,
    fontSize:16,
    // textAlign:"left",
    // paddingHorizontal:5,
    color:Colors.textlightblack  ,
    // marginHorizontal:8,
    // marginTop:5
  },
  newsview:{ 
    justifyContent:"space-between",
    flexDirection:"row",
    color:Colors.textlightblack , 
    marginBottom:"2%",
    marginTop:"5%"
  },
  news:{
  
    fontFamily:Fonts.PoppinsRegular,
    fontSize:18,
    marginHorizontal:15
   
  },
  moresButton:{
  
    borderRadius:7,
     backgroundColor:"#E8EAF6",
    marginHorizontal:15,
    height:20,
    width: 50,
 },
  mores:{
   
    color:Colors.themeColor,
    fontFamily:Fonts.PoppinsRegular,
    fontSize:11,
    marginLeft: 10,
    
  },
   moreButton:{
    // borderRadius:7,
    // backgroundColor:"#E8EAF6",
   height:30,
   width: 60,
   },
   more:{
    color:Colors.textblack,
    fontFamily:Fonts.PoppinsRegular,
    fontSize:11,
    marginLeft: 10,
   },
  newsflatlist:{
      marginTop: 5  
},
newsItems:{
    marginVertical: 5,
   
    width:140,
    height:140,
    flexDirection:"column",
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
    borderRadius:10,
    borderColor:Colors.borderColor,
    padding:8,
    marginLeft:15
   
},
NewsImage:{
borderRadius:5,
resizeMode:"cover",
width:140,
height:80,

},
Description:{
    marginTop:"2%",
    fontFamily:Fonts.PoppinsRegular,
    color:Colors.textlightblack,
    fontSize:10,
  // paddingBottom:"5%"
    
},
Details:{
    fontFamily:Fonts.PoppinsRegular,
    color:Colors.themeColor,
    fontSize:10,
    paddingBottom:"1%"

}
   })