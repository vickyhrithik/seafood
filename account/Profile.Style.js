import { Fonts } from "../../util/Fonts";
import {Colors} from "../../util/Color"
import { StyleSheet } from 'react-native';
import { color } from "react-native-reanimated";
export default StyleSheet.create({
    container: {
        flex: 1,
        //  justifyContent: "flex-start",
         backgroundColor: Colors.textWhite,
        },
        FirstView:{
            flexDirection:"row",
            justifyContent:"space-around",
            alignItems:'center',
            height:"10%",
            backgroundColor:'#008DD2'
           
        },
        name:{
            fontFamily:Fonts.PoppinsMedium,
            fontSize:17,
            color:Colors.darkBlueColor
        },
        backImg: {
            // resizeMode: "contain",
            width: 25,
            tintColor:'white',
          },
          profileimg:{
            // resizeMode: "contain",
            marginTop:10,
            marginLeft:10,
             width: 120,
             height:120
            // tintColor:'white',

          },
          profileimgg:{
              flexDirection:"row"

          },
          emaill:{
              color:'white',
              marginLeft:5

          },
          emaill1:{
            color:'white',
            marginLeft:5,
            // marginTop:5

        },
          heal:{
              borderColor:'#008DD2',
              borderWidth:1,
              backgroundColor:'#008DD2',
              height:30,
              flexDirection:'row',
              marginTop:5,
              borderRadius:5,
              alignItems:'center',
              width:120

          },
          head:{
              fontSize:16,
              fontFamily:Fonts.PoppinsBold,
              marginTop:15

          },
          column:{
              flexDirection:'column',
              marginTop:10,
              marginLeft:10,

          },
        profile:{
            fontFamily:Fonts.PoppinsSemiBold,
            fontSize:18,
            color:Colors.textWhite
        },
        text:{
            marginLeft:10

        },
        categariesImg:{
            marginRight:10

        },
        signinbuttonn:{
            marginTop: 30,
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
          signinbutton:{
           marginTop: 5,
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
        header:{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            borderWidth:0.5,
            height:50,
            marginTop:10,
            marginLeft:10,
            marginRight:10,
            borderRadius:20,
            backgroundColor:'#F6FAFB',borderColor:'#F6FAFB'

        },
        email:{
            fontFamily:Fonts.PoppinsLight,
            fontSize:18,
            color:Colors.darkBlueColor,
            marginTop:"4%",
            

        },
        settingsView:{
            flexDirection:"row",
            justifyContent:"flex-start",
            marginTop:"6%",
            marginHorizontal:"4%"
            
        },
        unselect:{
            resizeMode:"contain"


        },
        title:{
            fontFamily:Fonts.PoppinsRegular,
            fontSize:14,
            color:Colors.darkBlueColor,
            marginHorizontal:"4%",
            marginTop:"2%",

        },
        selecttitle:{
            fontFamily:Fonts.PoppinsRegular,
            fontSize:14,
            color:Colors.pinkColor,
            marginHorizontal:"4%",
            marginTop:"2%",

        }


    })
