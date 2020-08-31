import { Fonts } from "../../util/Fonts";
import {Colors} from "../../util/Color"
import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
         justifyContent: "flex-start",
         backgroundColor: Colors.customizationbgDarkColor,
       },
       scrollviewContainer: {
        flexDirection: 'column',
        backgroundColor:Colors.textWhite
        },
        header:{
          height:"10%",
          backgroundColor:'white',
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center'
 
        },
       
      
         forgotPwdView:{
            alignItems:'center',
            flexDirection:'column',
            backgroundColor: Colors.textWhite
           },
       
        backButtonStyle: {
         alignSelf:'flex-start',
         marginLeft:10, 
         marginTop:35, 
 
       },
       backButtonStyle1: {
        marginLeft:10,
        // alignSelf:'center',
       

     },
        backImg: {
         marginLeft: 5,
         alignSelf: "flex-start",
         resizeMode: "contain",
         width: 30
       },
      
    welcome: {
       marginTop:0, 
       textAlign: 'center',
       fontFamily:Fonts.PoppinsSemiBold,
       fontSize: 16,
       color:Colors.titleColor,
 
     },
     lifeline: {
      // marginTop:5, 
       textAlign: 'center',
       fontFamily:Fonts.PoppinsBold,
       fontSize: 25,
       color:Colors.titleColor,
 
     },
     
      checkemail:{
        color:Colors.textWhite,
        fontFamily:Fonts.PoppinsMedium,
        fontSize:16,
         textAlign:"center",
         paddingBottom:40,
         marginTop: 30,

         marginHorizontal:25
      },
  
     descriptionView:{
       marginLeft:"20%",
       marginRight:'20%',
       justifyContent:'center',
       alignItems:'center',
       flexDirection:'row',
       height:"10%"
      },
   
    
        uniquepassword:{
          marginLeft:'2%',
          marginRight:'2%',
          width:'90%',
          textAlign:'center',
          color:Colors.textblack,
          fontSize:15,
          fontFamily:Fonts.PoppinsMedium,
        
         },
         uniquepassword1:{
          marginLeft:'2%',
          marginRight:'2%',
          width:'90%',
          textAlign:'center',
          color:Colors.textblack,
          fontSize:14,
          fontFamily:Fonts.PoppinsRegular,
          marginTop:'5%'
         
         },
       
       
       textbgView:{
        marginTop:10,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        height : "22%"
        
       },
     
     textViewStyle:{
     alignSelf:'flex-start',
     textAlign:'left',
     marginLeft:"4%",
     marginRight:"4%",
     marginTop:"7%",
     width:'92%',
     padding: 10,
     height:55,
     borderWidth: 0.5,
     borderColor:Colors.textblack,
     borderRadius: 20,
     fontSize:15,
     fontFamily:Fonts.PoppinsMedium,
     color:Colors.textblack,
     },
   
     
         signinbutton:{
           justifyContent:'center',
           alignItems:'center',
           backgroundColor:Colors.themeColor,
           width:'95%',
           height:55,
           borderRadius: 20,
 
         },
         textStyle:{
           fontSize:17,
           fontFamily:Fonts.PoppinsMedium,
           color:Colors.textWhite,
         },
             
           socialMedia:{
             marginTop:15,
             justifyContent:'flex-start',
             width:"100%",
             height:"70%",
             alignItems:'center',
             flexDirection:'column',
             backgroundColor:Colors.textWhite
            },
            or:{
             textAlign:'left',
             color:Colors.silverGrey,
             fontSize:17,
             fontFamily:Fonts.PoppinsMedium,           
              alignItems:'center',
              marginTop:10
            },
            facebookbutton:{
              marginTop: 10,
              justifyContent:'center',
              alignItems:'center',
              marginLeft:'4%',
              marginRight:'4%',
              width:'92%',
              height:55,
              borderRadius: 10,
              backgroundColor:Colors.fbblueColor,
              flexDirection:'row'
             },
             facebookImg:{
               justifyContent:'flex-start',
               alignItems:'flex-start',
               width:40,
               height:40,
              marginLeft:-40,
             
               
              },
              fbtextStyle:{
               fontSize:16,
               fontFamily:Fonts.PoppinsMedium,
               color:Colors.textWhite,
               marginLeft:'8%',
               width:'60%',
              // backgroundColor:Colors.textWhite
 
             },
              googlebutton:{
                 marginTop: 14,
                 
                 justifyContent:'center',
                 alignItems:'center',
                 marginLeft:'4%',
                 marginRight:'4%',
                 width:'92%',
                 height:55,
                 borderRadius: 10,
                 backgroundColor:Colors.textblack,
                 // borderColor:Colors.textblack,
                 // borderWidth:1
                 flexDirection:'row'
 
                },
                googleImg:{
                 justifyContent:'flex-start',
                 alignItems:'flex-start',
                 width:40,
                 height:40,
                marginLeft:-40,
                 },
                 googletextStyle:{
                   fontSize:16,
                   fontFamily:Fonts.PoppinsMedium,
                   color:Colors.textWhite,
                   marginLeft:'8%',
                   width:'60%',
                  // backgroundColor:Colors.textWhite
     
                 },
          
               termsView:{
                marginTop:20,
                justifyContent:'center',
                alignItems:'center',
                flexDirection:'row',
               },
               agree:{
                textAlign:'left',
                color:Colors.textblack,
                fontSize:12,
                fontFamily:Fonts.PoppinsMedium,
               },
               termsbutton:{
                textAlign:'left',
               },
               termsText:{
                fontSize:12,
                color:Colors.titleColor,
                fontFamily:Fonts.PoppinsBold,
                textDecorationLine: 'underline',
  
              },
           activityIndicator: {
             flex: 1,
             position: "absolute",
             left: 0,
             top: 0,
             backgroundColor: "transparent",
             width: "100%",
             height: "100%"
           },
});