import { Fonts } from "../../util/Fonts";
import {Colors} from "../../util/Color"
import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        //  justifyContent: "flex-start",
         backgroundColor: Colors.textWhite,
       },
      
       title:{
        fontFamily:Fonts.PoppinsMedium,
        fontSize:18,
        // marginRight:"12%",
        // color:'white'
        // marginLeft:"4%"
      },
       header:{
         height:"10%",
         backgroundColor:'white',
         flexDirection:'row',
         justifyContent:'space-between',
         alignItems:'center'

       },
       backImg1:{
        resizeMode: "contain",
        width: "60%",
        marginBottom:"10%"

       },
       backImg2:{
        resizeMode: "contain",
       width:25

       },
       key:{
        marginLeft:10,
        width:20

      },
       scrollviewContainer: {
          justifyContent: "flex-start",
          alignItems: "center",
        },
        forgotpassword:{
            // marginTop: 15,
            // alignSelf:'center',
            // width:'35%',
            // height:50,
            },
            User1:{
                marginTop: 2,
                alignSelf:'flex-start',
                width:'35%',
                height:20,
                 marginLeft:20,
                 marginBottom:5

            },
          forgottextStyle:{
            fontSize:14,
            fontFamily:Fonts.PoppinsMedium,
            color:Colors.textblack,
          },
        signinbuttonn:{
            // marginTop: 35,
            marginLeft:'4%',
            marginRight:'4%',
            justifyContent:'center',
            alignItems:'center',
             // backgroundColor:"blue",
            width:'92%',
            height:50,
            borderRadius: 19,
           //  borderColor:"red"
  
          },
        signinView:{
            // marginTop:60,
        //  justifyContent:'flex-start',
        //  width:"100%",
        //  height:"69%",
         
         alignItems:'center',
         flexDirection:'column',
         backgroundColor: Colors.textWhite
        },
        Title:{
            fontFamily:Fonts.PoppinsSemiBold,
            fontSize: 22,
            marginTop:30

        },
        font:{
            marginLeft:10

        },
        font1:{
            marginRight:10

        },
        action: {
            flexDirection: 'row',
        //  marginTop: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        width:"90%",
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:19
        // paddingBottom: 5
        },
        action1: {
            flexDirection: 'row',
         marginTop: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        width:"90%",
        height:50,
        alignItems:'center',
        borderRadius:19
        // paddingBottom: 5
        },
        signinbutton1:{
          marginTop: 25,
          marginLeft:'4%',
          marginRight:'4%',
          justifyContent:'center',
          alignItems:'center',
          //  backgroundColor:"blue",
          width:'92%',
          height:50,
          borderRadius: 19,
           borderColor:"#DADBE5",
           borderWidth:1.5,

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
          height:"66%",
          alignItems:'center',
          flexDirection:'column',
          backgroundColor: Colors.themeColor
         },
        backButtonStyle: {
          marginLeft:10,
          // alignSelf:'center',
         
 
       },
        backImg: {
        //  marginLeft: 5,
         alignSelf: "center",
         resizeMode: "contain",
        //  width: "50%",
         
       },
      
    welcome: {
      //  marginTop:5, 
       textAlign: 'center',
       fontFamily:Fonts.PoppinsSemiBold,
       fontSize: 22,
       color:Colors.titleColor,
 
     },
     lifeline: {
       marginTop:5, 
       textAlign: 'center',
       fontFamily:Fonts.PoppinsBold,
       fontSize: 28,
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
       marginTop:30,
       justifyContent:'center',
       alignItems:'center',
       flexDirection:'row',
      },
     account:{
         textAlign:'left',
         color:Colors.textblack,
         fontSize:15,
         fontFamily:Fonts.PoppinsMedium,
 
        },
        uniquepassword:{
          textAlign:'center',
          color:Colors.textWhite,
          fontSize:17,
          fontFamily:Fonts.PoppinsMedium,
  
         },
        signupbutton:{
         textAlign:'left',
        },
        signuptextStyle:{
         fontSize:15,
         fontFamily:Fonts.PoppinsBold,
          color:Colors.textblack,
 
       },
       textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
       textViewStyle:{
        
        fontSize:15,
        fontFamily:Fonts.PoppinsMedium,
        color:Colors.textblack,
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
            marginTop: 10,
            marginLeft:'4%',
            marginRight:'4%',
            justifyContent:'center',
            alignItems:'center',
             // backgroundColor:"blue",
            width:'92%',
            height:50,
            borderRadius: 19,
           //  borderColor:"red"
 
         },
         textStyle:{
           fontSize:17,
           fontFamily:Fonts.PoppinsMedium,
           color:Colors.textWhite,
         },
         resetsocialMedia:{
          marginTop:15,
          justifyContent:'flex-start',
          width:"100%",
          alignItems:'center',
          flexDirection:'column',
          backgroundColor:Colors.textWhite
         },
         socialMedia:{
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
      /*   facebookbutton:{
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
               justifyContent:'center',
               alignItems:'center',
               width:40,
               height:40,
              // marginLeft:-40,
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
                  justifyContent:'center',
                  alignItems:'center',
                  width:40,
                  height:40,
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