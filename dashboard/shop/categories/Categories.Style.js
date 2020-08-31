import { Fonts } from "../../../../util/Fonts";
import {Colors} from "../../../../util/Color"
import { StyleSheet } from 'react-native';
import { color } from "react-native-reanimated";
import { TouchableOpacity } from "react-native-gesture-handler";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2B8EDB",
        },
        scrollviewContainer: {
            justifyContent: "flex-start",
          },
          categariesView:{
            marginHorizontal:"4%",
            flexDirection:"row",
            justifyContent:"space-between",
            marginTop:"15%",
            marginBottom:"8%"
          },
          videocallconsultationView:{
            borderTopLeftRadius: 40,
            // borderTopRightRadius: 30,
            paddingHorizontal: 20,
            paddingVertical: 30,
            backgroundColor:"white",
            height:'140%'
             
           },
          categariestitle:{
            fontFamily:Fonts.PoppinsMedium,
            fontSize:25,
          },
          categariesImg:{
              resizeMode:"contain"
          },
          itemmainView:{
        borderTopWidth:0.3,
         padding:10,
         borderColor:Colors.bordergrey,
          },
          itemView:{
              flexDirection:"row",
              justifyContent:"flex-start",
              marginHorizontal:"2%"
            
          },
          ImgStyle:{
              resizeMode:"contain"
          },
          categariesitemText:{
              marginTop:"4%",
              fontFamily:Fonts.PoppinsRegular,
              fontSize:15,
              color:Colors.textblack,
              marginLeft:"4%"


          }
        })