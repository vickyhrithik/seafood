import { Fonts } from "../../util/Fonts";
import {Colors} from "../../util/Color"
import { StyleSheet } from 'react-native';
import { color } from "react-native-reanimated";
export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
         justifyContent: "flex-start",
         backgroundColor: Colors.themeColor,
        },
        scrollviewContainer: {
            justifyContent: "flex-start",
            padding:15
          },
          
   
  addpatienttitle:{
    fontFamily:Fonts.PoppinsSemiBold,
    fontSize:25,
    textAlign:"center",
    marginTop:20
},
addpatientcontent:{
    marginTop:10,
    fontFamily:Fonts.PoppinsRegular,
    textAlign:"center",
    color:Colors.textWhite,
    fontSize:15,
},
addpatientImg:{
    resizeMode:"contain",
    width:200,
    height:200,
    alignSelf:"center",
},
videoCallitem: {
      padding:25,
      marginLeft:'1%',
      marginRight:'1%',
      marginTop:15,
      width:'98%',
        marginVertical: 7,
        marginHorizontal: 15,
        shadowColor: Colors.shadowColor,
        borderRadius:5,
        flexDirection:"row",
        backgroundColor:Colors.textWhite,
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
textitem:{
    flex:1,
    marginVertical:30,
    marginHorizontal:20,
    flexDirection:"column",
  },
  name: {
    fontSize: 16,
    fontFamily:Fonts.PoppinsRegular,

  },
  profession: {
    fontSize:14,
    color:Colors.darkgrayColor,
    fontFamily:Fonts.PoppinsRegular
  },
  doctorimage:{
    width:100,
    height:100,
    borderRadius:10,
    resizeMode:"contain",
    marginLeft:"5%"
  
  },
question1:{
    marginTop:'5%',
    color:Colors.textWhite,
    fontSize:15,
    fontFamily:Fonts.PoppinsMedium,
},
answer:
{
    fontFamily:Fonts.PoppinsRegular,
    textAlign:"justify",
    color:Colors.textWhite,
    fontSize:12,
},
question2:{
    marginTop:'3%',
    color:Colors.textWhite,
    fontSize:15,
    fontFamily:Fonts.PoppinsMedium,
},

 continueButton:{
     backgroundColor:Colors.pinkColor,
     borderRadius:8,
     borderColor:Colors.textWhite,
     padding:10,
     marginTop:30
 },
 continueText:{
 fontSize:17,
 textAlign:"center",
 fontFamily:Fonts.PoppinsMedium,
 color:Colors.textblack,

 
 },
 findcontent:{
    marginTop:'30%',

    fontFamily:Fonts.PoppinsRegular,
    textAlign:"justify",
    color:Colors.textWhite,
    fontSize:12,
 },
 findButton:{
    marginTop: 10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:Colors.textWhite,
    //width:'90%',
    height:55,
    marginLeft:20,
    marginRight:10,
    borderRadius: 8,
    padding:10,

  },
  findtextStyle:{
    fontSize:18,
    fontFamily:Fonts.PoppinsMedium,
    color:Colors.lightgreyColor,
  },
})