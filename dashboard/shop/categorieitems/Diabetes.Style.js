import { Fonts } from "../../../../util/Fonts"
import {Colors} from "../../../../util/Color"
import { StyleSheet } from 'react-native';
import { color } from "react-native-reanimated";
import { TouchableOpacity } from "react-native-gesture-handler";
export default StyleSheet.create({
    container: {
          flex: 1,
         backgroundColor: Colors.onlineBgColor,
         justifyContent:"flex-start"
        },
          categariesView:{
            marginHorizontal:"2%",
            flexDirection:"row",
            justifyContent:"space-between",
            marginTop:"12%",
            marginBottom:"5%"
          },
          nextcategariesView:{
          flexDirection:"row",
          justifyContent:"flex-start",
          marginLeft:"3%"
          },
        backButtonStyle: {
          marginTop:"3%", 
         },
       backImg: {
        resizeMode: "contain",
        width: 25
      },
          categariestitle:{
            fontFamily:Fonts.PoppinsMedium,
            fontSize:25,
            marginLeft:"6%"
          },
          categariesImg:{
              resizeMode:"contain"
          },
          item:{
            marginVertical:10,
          borderRadius:5,
          backgroundColor:Colors.textWhite,
          margin:5,
          width:"48%",
          height:"95%"
            },
            itemTotalView:{
              marginHorizontal:"5%",
              marginBottom:"2%",
            
            },
            productImage:{
                width:90,
                height:90,
               resizeMode:'contain',
               alignSelf:"center"
            },
            productTitle:{
              fontFamily:Fonts.PoppinsMedium,    
                fontSize:15,
                textAlign:"center"
            },
            productRate:{
                fontFamily:Fonts.PoppinsRegular,
                 fontSize:15,
                 textAlign:"center"
            },
            addtocart:{
             marginTop:"2%",
             resizeMode:'contain',
             alignSelf:"center"

            }
        
        })
          