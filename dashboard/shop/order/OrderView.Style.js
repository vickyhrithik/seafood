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
          View:{
            // marginHorizontal:"7%",
            flexDirection:"row",
            backgroundColor:"#008DD2",
            height:"10%",
            //  justifyContent:"center",
             alignItems:'center'
            // marginTop:"15%",
            // marginBottom:"1%",
          },
          backButtonStyle: {
            marginTop:"1%", 
           },
         backImg: {
          // resizeMode: "contain",
          resizeMode: "contain",
          width: 25,
          tintColor:'white',
          marginLeft:10
        },
        head:{
          color:'grey',
          marginTop:"5%",
          marginLeft:"2%"

        },
        title:{
            fontFamily:Fonts.PoppinsMedium,
            fontSize:18,
            justifyContent:'center',
            color:'white',
             marginLeft:"35%"
          },
          shippingdetails:{
            fontFamily:Fonts.PoppinsMedium,
            fontSize:20,
            textAlign:"left",
            marginHorizontal:"5%",
            marginTop:"10%",
            color:Colors.darkblue
          },
          dataView:{
              marginTop:"4%",
              marginHorizontal:"15%",
          },
          name:{
              fontFamily:Fonts.PoppinsMedium,
              fontSize:15,
              color:Colors.darkgrayColor
          },
          address:{
            fontFamily:Fonts.PoppinsRegular,
            fontSize:15,
            color:Colors.darkgrayColor,
            marginTop:"1%"
          },
          address1:{
            borderWidth:0.5,
            borderColor:'grey',
            height:"10%",
            marginLeft:'2%',
            marginRight:'2%',
            borderRadius:20,
            backgroundColor:'white',
            marginTop:'2%',
            backgroundColor:'#F6FAFB',
            flexDirection:'row',
            // justifyContent:'center',
            alignItems:'center'

          },
          card:{
            flexDirection:'row',
            justifyContent:'space-between',
            marginTop:"2%"

          },
          item:{
            padding:2,
            marginVertical: 5,
            marginHorizontal: 10,
            shadowColor: 'grey',
            // shadowColor: Colors.grey ,
            borderRadius:10,
            backgroundColor:Colors.textWhite ,
            flexDirection:'column',
            borderColor:"grey",
            borderWidth:0.4,
                shadowOpacity: 0.3,
         shadowRadius: 5,
          shadowOffset: {
        height: 2,
        width: 0
        },
        elevation: 3,
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
                resizeMode:'contain',
            },
            closeImgView:{
                 position:"absolute",
                alignSelf:"flex-start",
                justifyContent:'center',
                marginTop:5
                // right:"5%"
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
          productTitle11:{
            marginTop:"2%",
          fontFamily:Fonts.PoppinsMedium,
            fontSize:15,
            color:'grey',
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
          home:{
            fontFamily:Fonts.PoppinsSemiBold,
            fontSize:15,
            marginLeft:"2%"

          },
          country:{
            fontFamily:Fonts.PoppinsRegular,
            fontSize:15,
            color:Colors.darkgrayColor,
            marginTop:"1%"
          },
          pincode:{
            fontFamily:Fonts.PoppinsRegular,
            fontSize:15,
            color:Colors.darkgrayColor,
            marginTop:"1%",
          },
          phoneno:{
            fontFamily:Fonts.PoppinsRegular,
            fontSize:15,
            color:Colors.darkgrayColor,
            marginTop:"1%",
          },
          atmnumber:{
            fontFamily:Fonts.PoppinsRegular,
            fontSize:15,
            color:Colors.darkgrayColor,
            marginTop:"1%"
          },
          orderSummaryView:{
              marginTop:"15%",
              marginHorizontal:"5%"
          },
          FirstView:{
              flexDirection:"row",
              justifyContent:"space-between"
          },
          orderSummary:{
            fontFamily:Fonts.PoppinsMedium,
            fontSize:16,
            color:Colors.darkblue
          },
          prices:{
            fontFamily:Fonts.PoppinsMedium,
            fontSize:16,
            color:Colors.darkblue
          },
          data:{
              flexDirection:"row",
              justifyContent:"space-between"
          },
          medicines:{
            fontFamily:Fonts.PoppinsRegular,
            fontSize:15,
            color:Colors.darkgrayColor,
            marginTop:"1%"

          },
          price:{
            fontFamily:Fonts.PoppinsRegular,
            fontSize:15,
            color:Colors.darkgrayColor,
            marginTop:"1%"

          },
          ordertotalView:{
            marginTop:"8%",
            marginHorizontal:"5%"
          },
          medicinesdataView:{
            marginHorizontal:10

        },
        totalview:{
          flexDirection:"row",
          justifyContent:"space-between"

        },
        productPrice:{
            fontFamily:Fonts.PoppinsRegular,
            fontSize:15,
            color:Colors.darkgrayColor,
            marginTop:"2%"
          },
          total:{
            fontFamily:Fonts.PoppinsMedium,
            fontSize:15,
            marginTop:"2%"
          },
          content:{
              marginTop:"23%",
              marginHorizontal:"5%",
              textAlign:"justify",
              fontFamily:Fonts.PoppinsRegular,
              fontSize:15,
              color:Colors.darkgrayColor,
          },
          Btnstyle:{
            marginTop:"15%",
          alignItems:"center",
          borderWidth:1,
          padding:25,
          backgroundColor:Colors.textWhite,
          borderColor:Colors.textWhite,
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
          Button:{
            backgroundColor:Colors.buttonGreen,
            borderWidth:1,
            borderRadius:8,
            borderColor:Colors.buttonGreen,
            padding:12,
            width:"100%"
        },
        Text:{
        fontSize:17,
        textAlign:"center",
        fontFamily:Fonts.PoppinsSemiBold,
        color:Colors.textWhite,
       
        
        }


        })