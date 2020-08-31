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
        scrollviewContainer: {
            justifyContent: "flex-start",
          },
          categariesView:{
            
            justifyContent:"center",
            height:"10%",
            alignItems:'center',
            backgroundColor:'#008DD2'
            
          },
          backButtonStyle: {
            marginTop:"1%", 
           },
         backImg: {
          resizeMode: "contain",
          width: 25
        },
        mycarttitle:{
            fontFamily:Fonts.PoppinsMedium,
            fontSize:18,
            color:'white'
            // marginLeft:"4%"
          },
          item:{
            padding:2,
            marginVertical: 5,
            marginHorizontal: 15,
            backgroundColor:'#F6FAFB',borderColor:'#F6FAFB',
            borderRadius:10,
            flexDirection:'column',
            borderWidth:0.5,
                
            },
            mainitem:{
                marginTop:"5%",
                marginBottom:"5%",
                flexDirection:"column",
                marginLeft:15

            },
            productImg:{
                width:90,
                height:90,
              //  resizeMode:'contain',
            },
            closeImgView:{
                 position:"absolute",
                alignSelf:"flex-start",
                justifyContent:'center',
                marginTop:20
                // right:"5%"
            },
            closeImg:{
                 resizeMode:"contain",
                 marginTop:"3%"
            },
            productTitle:{
                marginTop:"2%",
              fontFamily:Fonts.PoppinsMedium,
                fontSize:15,
            },
            productTitle1:{
              marginTop:"2%",
            fontFamily:Fonts.PoppinsMedium,
              fontSize:15,
              color:Colors.themeColor,
          },
            avaliableStock:{
                fontFamily:Fonts.PoppinsRegular,
                fontSize:15,
                color:Colors.grey,
                marginLeft:20,
                marginTop:5,
            },
            avaliableStock1:{
              fontFamily:Fonts.PoppinsRegular,
              fontSize:15,
              color:Colors.black,
              marginLeft:20,
              marginTop:5,
          },
            productRate:{
                marginTop:"8%",
                fontFamily:Fonts.PoppinsRegular,
                fontSize:15,
          
            },
            threeBtnView:{ 
                flexDirection:"row",
                justifyContent:"center",
            },
            minusImg:{
                resizeMode:"contain"
            },
            countImgView:{
            

            },
            countImg:{
                resizeMode:"contain"
            },
            count:{
              marginLeft:18,
              marginTop:-32,
              marginHorizontal:"2%"
            },
            plusImg:{
                resizeMode:"contain"
            },
            medicinesdataView:{
                marginHorizontal:20

            },
            totalview:{
              flexDirection:"row",
              justifyContent:"space-between"

            },
            totalview1:{
              flexDirection:"row",
              justifyContent:"space-around"

            },
            productPrice:{
                fontFamily:Fonts.PoppinsRegular,
                fontSize:15,
                color:Colors.darkgrayColor,
                marginTop:"2%"
              },
              productPrice2:{
                fontFamily:Fonts.PoppinsRegular,
                fontSize:15,
                color:Colors.themeColor,
                marginTop:"2%"
              },
              productPrice1:{
                fontFamily:Fonts.PoppinsRegular,
                fontSize:15,
                color:Colors.darkgrayColor,
                marginTop:"2%",
                marginLeft:"40%"
              },
              total:{
                fontFamily:Fonts.PoppinsMedium,
                fontSize:15,
                marginTop:"2%"
              },
             
              Btnstyle:{
                marginTop:"30%",
              marginBottom:"20%",
              alignItems:"center"

              },
              checkButton:{
                backgroundColor:Colors.themeColor,
                borderWidth:1,
                borderRadius:20,
                borderColor:Colors.themeColor,
                padding:10,
                width:"90%"
            },
            checkText:{
            fontSize:17,
            textAlign:"center",
            fontFamily:Fonts.PoppinsSemiBold,
            color:Colors.textWhite,
           
            
            }


        })