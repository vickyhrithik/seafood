import { Fonts } from "../../util/Fonts";
import {Colors} from "../../util/Color"
import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
         justifyContent: "flex-start",
         backgroundColor: Colors.textWhite,
       },
       scrollviewContainer: {
          justifyContent: "flex-start",
          alignItems: "center",
        },
        signinView:{
         justifyContent:'flex-start',
         width:"100%",
         height:"69%",
         alignItems:'center',
         flexDirection:'column',
         backgroundColor: Colors.themeColor
        },
        resetPwdView:{
          justifyContent:'flex-start',
          width:"100%",
          height:"67%",
          alignItems:'center',
          flexDirection:'column',
          backgroundColor: Colors.themeColor
         },
         otpView:{
          justifyContent:'flex-start',
          width:"100%",
          height:"60%",
          alignItems:'center',
          flexDirection:'column',
          backgroundColor: Colors.themeColor
         },
        backButtonStyle: {
         alignSelf:'flex-start',
         marginLeft:10, 
         marginTop:60, 
 
       },
        backImg: {
         marginLeft: 5,
         alignSelf: "flex-start",
         resizeMode: "contain",
         width: 25
       },
      
    welcome: {
       marginTop:5, 
       textAlign: 'center',
       fontFamily:Fonts.PoppinsSemiBold,
       fontSize: 22,
       color:Colors.titleColor,
 
     },
     lifeline: {
       marginTop:5, 
       textAlign: 'center',
       fontFamily:Fonts.PoppinsBold,
       fontSize: 25,
       color:Colors.titleColor,
 
     },
     Emailverificationview:{ 
      backgroundColor: '#4285f4',
      marginTop: 30,
      },
      checkemail:{
        color:Colors.textWhite,
        fontFamily:Fonts.PoppinsMedium,
        fontSize:20,
         textAlign:"center",
         paddingBottom:40,
         marginTop: 30,

         marginHorizontal:25
      },
  
     signupView:{
       marginTop:20,
       justifyContent:'center',
       alignItems:'center',
       flexDirection:'row',
      },
     account:{
         textAlign:'left',
         color:Colors.textWhite,
         fontSize:17,
         fontFamily:Fonts.PoppinsMedium,
 
        },
        uniquepassword:{
          textAlign:'center',
          color:Colors.textWhite,
          fontSize:15,
          fontFamily:Fonts.PoppinsMedium,
  
         },
        signupbutton:{
         textAlign:'left',
        },
        signuptextStyle:{
         fontSize:17,
         fontFamily:Fonts.PoppinsBold,
          color:Colors.greenColor,
 
       },
     textViewStyle:{
      alignSelf:'flex-start',
      textAlign:'left',
      marginLeft:'4%',
      marginRight: '4%',
      marginTop: 20,
      width:'92%',
      padding: 10,
      height:55,
      borderWidth: 1,
      borderColor:Colors.textWhite,
      borderRadius: 7,
      fontSize:15,
      fontFamily:Fonts.PoppinsMedium,
      color:Colors.textWhite,
     },
     otpcodeViewStyle:{
      alignSelf:'flex-start',
      textAlign:'left',
      marginLeft: 10,
      marginRight: 10,
      marginTop: 20,
      width:'95%',
      padding: 10,
      height:55,
      borderWidth: 1,
      borderColor:Colors.textWhite,
      borderRadius: 7,
      fontSize:17,
      fontFamily:Fonts.PoppinsMedium,
      color:Colors.textWhite,
      },
  
     
         signinbutton:{
           marginTop: 15,
           justifyContent:'center',
           alignItems:'center',
           backgroundColor:Colors.textWhite,
           height:50,
           borderRadius: 8,
           marginLeft:'4%',
           marginRight: '4%',
           width:'92%',
         },
         textStyle:{
           fontSize:17,
           fontFamily:Fonts.PoppinsMedium,
           color:Colors.lightgreyColor,
         },
         resetsocialMedia:{
          marginTop:15,
          justifyContent:'flex-start',
          width:"100%",
          alignItems:'center',
          flexDirection:'column',
          backgroundColor:Colors.textWhite
         },
       
         or:{
           
          textAlign:'left',
          color:Colors.silverGrey,
          fontSize:17,
          fontFamily:Fonts.PoppinsMedium,           
           alignItems:'center'

         },
       /*  facebookbutton:{
          marginTop: 10,
          justifyContent:'center',
          alignItems:'center',
          marginLeft:'4%',
          marginRight:'4%',
          width:'92%',
          height:55,
          borderRadius: 9,
          backgroundColor:Colors.fbblueColor,
          borderColor:Colors.fbblueColor,
          borderWidth:1
         },
         facebookImg:{
           justifyContent:'center',
           alignItems:'center',
           width:'100%',
           height:60,
          },
          googlebutton:{
             marginTop: 12,
             
             justifyContent:'center',
             alignItems:'center',
             marginLeft:'4%',
             marginRight:'4%',
             width:'92%',
            height:55,
             borderRadius: 9,
             backgroundColor:Colors.textblack,
             borderColor:Colors.textblack,
             borderWidth:1
            },
            googleImg:{
              justifyContent:'center',
              alignItems:'center',
              width:'100%',
              height:60,
             },*/
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
             //  borderColor:Colors.fbblueColor,
             //  borderWidth:1,
              flexDirection:'row'
             },
             facebookImg:{
               justifyContent:'flex-start',
               alignItems:'flex-start',
               width:40,
               height:40,
              marginLeft:-40,
             //  backgroundColor:'red'
               
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
              marginTop:10,
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