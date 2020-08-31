import { Fonts } from "../../../../util/Fonts"
import {Colors} from "../../../../util/Color"
import { StyleSheet } from 'react-native';
import { color } from "react-native-reanimated";
import { TouchableOpacity } from "react-native-gesture-handler";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
        },
          categariesView:{
            // marginHorizontal:"7%",
            flexDirection:"row",
            justifyContent:'center',
            alignItems:'center',
            height:"10%",
            backgroundColor:'#008DD2',
            justifyContent:'space-around'
            // justifyContent:"flex-start",
            // marginTop:"15%",
            // marginBottom:"1%",
          },
          backButtonStyle: {
            marginTop:"1%", 
           },
         backImg: {
          resizeMode: "contain",
          width: 25,
          // alignItems:'flex-start',
          // marginRight:"50%",
          tintColor:'white',
        },
        title:{
            fontFamily:Fonts.PoppinsMedium,
            fontSize:18,
            alignItems:'center',
            // marginLeft:"4%",
            color:'white',
            // marginRight:"40%",
          },
          FlatListView:{

        },
        item:{
          padding:15,
          marginVertical: 5,
          marginHorizontal: 15,
          shadowColor: Colors.shadowColor,
          borderRadius:10,
          backgroundColor:Colors.textWhite,
          },
          View:{
              marginHorizontal:"2%",
              flexDirection:"row",
              justifyContent:"space-between"
          },
          order:{
            fontFamily:Fonts.PoppinsMedium,
            fontSize:15,
            color:Colors.darkblue,
            marginTop:"2%"

          },
          viewdetail:{
            fontFamily:Fonts.PoppinsRegular,
            fontSize:15,
            color:Colors.themeColor,
            marginTop:"2%"

          },
          status:{
            fontFamily:Fonts.PoppinsRegular,
            fontSize:15,
            color:Colors.darkgrayColor,
            marginTop:"2%"

          },
          preparing:{
            fontFamily:Fonts.PoppinsMedium,
            fontSize:15,
            color:Colors.darkgrayColor,
            marginTop:"2%"

          },
          redeem:{
              color:'white',
              fontFamily:Fonts.PoppinsBold,
              fontSize:20,
              marginTop:30


          },
          redeem1:{
            color:'white',
            fontFamily:Fonts.PoppinsBold,
            fontSize:40,
            // marginTop:30


        },
        redeem3:{
            color:'white',
            fontFamily:Fonts.PoppinsBold,

        },
        history1:{
            // color:'white',
            fontFamily:Fonts.PoppinsBold,
            fontSize:20,

        },
        points:{
            height:"8%",
            borderWidth:0.5,
            borderColor:'#F6FAFB',
            marginTop:15,
            marginLeft:"5%",
            marginRight:"5%",
            borderRadius:20,
            backgroundColor:'#F6FAFB',
            flexDirection:'row',
            justifyContent:'space-around',
            alignItems:'center'


        },
        history:{
            justifyContent:'center',
            marginTop:15,
            alignItems:'center'

        },
        redeem2:{
            borderWidth:0.5,
            height:30,
            width:90,
            borderRadius:5,
            backgroundColor:'#008DD2',
            borderColor:'#008DD2',
            alignItems:'center',
            justifyContent:'center'

        },
          border:{
              height:"30%",
              marginRight:"5%",
              marginLeft:"5%",
              borderWidth:1,
              marginTop:10,
              borderRadius:10,
              backgroundColor:'#1AA8ED',
              borderColor:'#0A9BE2',
            //   justifyContent:'center',
              alignItems:'center',
              flexDirection:'column'


          },
          total:{
            fontFamily:Fonts.PoppinsRegular,
            fontSize:15,
            color:Colors.darkgrayColor,
            marginTop:"2%"

          },
          spend:{
            fontFamily:Fonts.PoppinsMedium,
            fontSize:15,
            color:Colors.darkblue,
            marginTop:"2%"

          }})