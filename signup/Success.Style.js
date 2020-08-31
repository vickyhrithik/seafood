import { Fonts } from "../../util/Fonts";
import {Colors} from "../../util/Color"
import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    mainView:{ 
        backgroundColor: Colors.themeColor,
        flex:1 , 
        justifyContent: "flex-start",
        flexDirection: 'column',

        },
        welcomeview:{ 
            flexDirection: 'row',
            backgroundColor: Colors.themeColor,
            },
        
        backButtonStyle: {
          alignSelf:'flex-start',
          marginLeft:10, 
          marginTop:35, 
    
          },
           backImg: {
            marginLeft: 5,
            alignSelf: "flex-start",
            resizeMode: "contain",
            width: 25
          },
     
        welcome: {
          //  marginTop:5, 
            textAlign: 'center',
            fontFamily:Fonts.PoppinsSemiBold,
            fontSize: 22,
            color:Colors.titleColor,
          },
          lifeline: {
          //  marginTop:5, 
            textAlign: 'center',
            fontFamily:Fonts.PoppinsBold,
            fontSize: 25,
            color:Colors.titleColor,

          },
      
        registeredaccount:{
            marginTop:"30%",
            marginLeft:'5%',
            marginRight:'5%',
            width:'90%',
          textAlign:"center",
          color:Colors.textWhite,
          fontFamily: Fonts.PoppinsMedium,
          fontSize:16
        },
        clickbelow:{ 
          marginLeft:'5%',
          marginRight:'5%',
          width:'90%', 
          color:Colors.greenColor,
          fontFamily: Fonts.PoppinsMedium,
          fontSize:18,
          textAlign:"center",
        },
        backtologinButton:{
            marginTop: "30%",
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:Colors.textWhite,
            width:'90%',
            
            height:55,
            marginLeft:'5%',
            marginRight:'5%',
            borderRadius: 8,
  
          },
          textStyle:{
            fontSize:17,
            fontFamily:Fonts.PoppinsMedium,
            color:Colors.lightgreyColor,
          },
      
      termsView:{
        marginTop:"15%",
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        },
       
          agree:{
            textAlign:'left',
            color:Colors.textWhite,
            fontSize:12,
            fontFamily:Fonts.PoppinsMedium,
           },
           termsbutton:{
            textAlign:'left',
           },
           termsText:{
            fontSize:14,
            fontFamily:Fonts.PoppinsBold,
            color:Colors.textWhite,
            textDecorationLine: 'underline',
    
            },
});