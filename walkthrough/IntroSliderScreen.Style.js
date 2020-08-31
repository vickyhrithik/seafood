import { Fonts } from "../../util/Fonts";
import {Colors} from "../../util/Color"
import { StyleSheet } from 'react-native';
import { color } from "react-native-reanimated";
import { TouchableOpacity } from "react-native-gesture-handler";
export default StyleSheet.create({
    slide:{
        flex:1,
        backgroundColor:Colors.textWhite,
    
    },
    skipStyle:{
        marginTop:"3%",
        justifyContent:"center",
        alignItems:"center",
        // marginRight:"8%",
        fontSize:16,
        fontFamily:Fonts.PoppinsRegular,
        textAlign:"center",
        color:Colors.textblack
    },
    header:{
        marginTop:"5%",
        justifyContent:"center",
        alignItems:"center"
    },
    footer:{
        // marginTop:"5%",
        // alignItems:"center",
        // paddingHorizontal:1
        width:"100%",
        height:"50%"
    },
    Title:{
        fontFamily:Fonts.PoppinsSemiBold,
        fontSize:27,
        textAlign:"center"
    },
    Title1:{
        fontFamily:Fonts.PoppinsSemiBold,
        fontSize:24,
        textAlign:"center",
        justifyContent:'center',
        marginHorizontal:"10%",
    },
    Content:{
        marginTop:"2%",
        fontFamily:Fonts.PoppinsRegular,
        textAlign:"center",
        color:Colors.textblack,
        marginHorizontal:"10%",
        fontSize:15
    },
    
    nextbutton:{
        marginTop: 45,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.textsky,
        width:'50%',
        height:40,
        borderRadius: 14,

      },
      Nextbut:{
        justifyContent:'center',
        alignItems:'center',

      },
      textStyle:{
        color:'#FFFFFF',
      },
    flexibleTitle:{
        fontFamily:Fonts.PoppinsSemiBold,
        fontSize:27,
        textAlign:"center"
    },
    flexibleContent:{
        marginTop:"2%",
        fontFamily:Fonts.PoppinsRegular,
        textAlign:"center",
        color:Colors.textWhite,
        marginHorizontal:"5%",
        fontSize:15
    },
    footerimg2:{
        width:"100%",
        height:"50%"
        // marginTop:"5%",
        // alignItems:"center",
        // paddingHorizontal:1
    },
    medicationsTitle:{
        fontFamily:Fonts.PoppinsSemiBold,
        fontSize:22,
        textAlign:"center",
        marginHorizontal:"2%",
        marginBottom:"2%"
    },
    medicationsContent:{
        marginTop:"1%",
        fontFamily:Fonts.PoppinsRegular,
        textAlign:"center",
        color:Colors.textWhite,
        marginHorizontal:"5%",
        fontSize:16
    },
    footerimg3:{
        width:"100%",
        height:"50%"
        // marginTop:"5%",
        // alignItems:"center",
        // paddingHorizontal:10
    },
    // dot:{
    //     backgroundColor:'rgb(255,255,255)',
    //     width:15,
    //     height:4,
    //     borderRadius:4,
    //     marginHorizontal:6,
    //     marginVertical:5,
    //     marginBottom:"40%",



    // },
    // activedot:{
    //     backgroundColor:'#eb4c42',
    //     width:30,
    //     height:4,
    //     borderRadius:4,
    //     marginBottom:"40%",
    //     marginVertical:3,
    //   //  marginTop: 20
       
    // },
    swipView1:{
       // backgroundColor:Colors.textblack,
        alignItems:'center'  

    },
    swipView2:{
      //  backgroundColor:Colors.textblack, 
        alignItems:'center'  


    },
    swipView3:{
   //  backgroundColor:Colors.textblack,
     alignItems:'center'  

    },
    dotimage:{
        marginTop:50,
    },
    dotimage1:{
        marginTop:60,
    },
    swipViewText1:{
        marginTop:"15%",
        fontFamily:Fonts.PoppinsMedium,
        textAlign:"center",
        color:Colors.textWhite,
        marginHorizontal:"5%",
        fontSize:17
    },
    swipViewText2:{
        marginTop:"15%",
        fontFamily:Fonts.PoppinsMedium,
        textAlign:"center",
        color:Colors.textWhite,
        marginHorizontal:"5%",
        fontSize:17
    },
    swipViewText3:{
        marginTop:"15%",
        fontFamily:Fonts.PoppinsMedium,
        textAlign:"center",
        color:Colors.textWhite,
        marginHorizontal:"5%",
        fontSize:17
    },

})