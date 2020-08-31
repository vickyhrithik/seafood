import { Fonts } from "../../util/Fonts";
import {Colors} from "../../util/Color"
import { StyleSheet } from 'react-native';
import { color } from "react-native-reanimated";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
       
        },
        plus1:{
          width:20,height:20,
          marginLeft:5

        },
        top:{
            marginTop:10,
            fontSize:18,
            fontFamily:Fonts.PoppinsBold,

        },
        topgram:{
            marginTop:5,
            fontSize:16,
            color:'grey'
            // fontFamily:Fonts.PoppinsBold,

        },
        check:{
            flexDirection:'row',
            // marginTop:12,
            marginLeft:10

        },
        slider:{
            margin:20,
            flexDirection:'column',
            


        },
        top1:{
            marginTop:20,
             marginLeft:90,
             justifyContent:'flex-end',
            alignItems:'flex-end'

        },
        cat:{
            marginTop:10,
            marginLeft:20 

        },
        cat1:{
            marginTop:10,
            // marginLeft:20 

        },
        border:{
            borderColor:"#DBDCE6",
            borderWidth:0.5,
            borderRadius:20,
            alignItems:'center',
            width:70,height:40

        },
        listrow:{
            marginTop:10,
            flexDirection:'row',
            justifyContent:'space-around'
            // marginLeft:20 

        },
        header:{
            flexDirection:'row',
            // marginTop:50,
            justifyContent:'space-between',
            backgroundColor:"#2C8EDB",
            width:"100%",
             height:"10%",
             alignItems:'center'


        },
        onlinestoreitem: {
            flexDirection:'column',
           
            
           
          },
          imageview:{
              flex:1

          },
          main:{
              marginLeft:10,
              marginRight:10,
            // width:323,
            // height:222

          },
          columnn:{
              flexDirection:"row",
              justifyContent:'space-between',
              marginTop:10,
              marginBottom:10,
              marginRight:10,
              marginLeft:10

          },
          rown:{
            flexDirection:"row",
             justifyContent:'space-between',
            marginLeft:10,
            marginRight:10,
            marginTop:10
            

        },
        
        threeBtnView:{ 
            // top:"52%",
            // right:"2%",
            // position:"absolute",
            alignSelf:"center",
            flexDirection:"row",
            justifyContent:"space-around",
            marginTop:50,
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
        
          onlinestoreitem1: {
            // marginVertical: 10,
            alignItems:'center',
            // marginHorizontal:10,
            // width:50,
            // height:50,
            flexDirection:"column",
            
          },
          titleImage1:{
            resizeMode: "contain",
             margin:10,
            // width:80,
            // height:85
  
          },
          titleImage2:{
           
            width:360,
            height:262,
           
  
          },
          titleImage22:{
            // margin:10,s
            width:20,
            height:20
            // resizeMode: "contain",
  
          },
          title:{
            fontFamily:Fonts.PoppinsRegular,
            
            color:Colors.textlightblack  ,
           
  
          },
          signinbuttonn:{
             marginTop: 20,
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
          signinbuttonnn:{
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
          title11:{
            fontFamily:Fonts.PoppinsBold,
            
            color:Colors.textlightblack  ,
            fontSize:24
           
  
          },
          pricetitle:{
            fontFamily:Fonts.PoppinsRegular,
            
            color:Colors.textlightblack  ,
            fontSize:16

          },
          title111:{
            fontFamily:Fonts.PoppinsRegular,
            
            color:Colors.textlightblack  ,
            marginBottom:10,
           
  
          },
        onlineflatlist:{
            height:"25%",
          marginHorizontal:10,
          marginLeft:'2%',
          marginRight:'2%',
          
         
         
            },
            Texti:{
                fontSize:18,
                fontFamily:Fonts.PoppinsSemiBold,
                margin:10,

            },
            onlineflatlist1:{
                paddingHorizontal:10,
                paddingVertical:10,
                flex:1
                
            //   marginHorizontal:10,
            //   marginLeft:'2%',
            //   marginRight:'2%',
             
             
             
                },
                row:{
                    marginLeft:10

                },
                Text:{
                    fontSize:16,
                fontFamily:Fonts.PoppinsRegular,

                },
        header1:{
            flexDirection:'row',
            justifyContent:'space-between',
            width:"50%"
           


        },
        listshow:{
            // height:"80%",
            // width:"100%",
            backgroundColor:'white',
            flex:1
            // borderTopLeftRadius: 50,


        },
        header2:{
            flexDirection:'row',
            // width:"50%",
            // justifyContent:'flex-end',
            // marginRight:50,
           


        },
        scrollviewContainer: {
            justifyContent: "flex-start",
            padding:15
          },
    backButtonStyle: {
    alignSelf:'flex-start',
    marginLeft:5, 
    marginTop:20, 
  },
  sheet:{
      marginTop:5,
      marginLeft:10
    //   flexDirection:'row',
    //   justifyContent:'space-around'

  },
   backImg: {
    alignSelf: "flex-start",
    resizeMode: "contain",
    width: 20,
    tintColor:'white',
    marginLeft:15,
    marginBottom:15
    //  alignSelf:"center",
  },
  backImg11: {
    alignSelf: "flex-start",
    resizeMode: "contain",
    width: 20,
    tintColor:'white',
    // marginLeft:15,
    marginRight:15,
    // marginBottom:15
    //  alignSelf:"center",
  },
  backImg1: {
    alignSelf: "flex-start",
    resizeMode: "contain",
    width: 25,
    marginLeft:8,
    marginRight:10
    //  alignSelf:"center",
  },
  addpatienttitle:{
    fontFamily:Fonts.PoppinsSemiBold,
    fontSize:18,
    color:"white",
    
    marginTop:10,
    justifyContent:'flex-end',
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
why:{
    marginTop:25,
    color:Colors.textWhite,
    fontSize:20,
    fontFamily:Fonts.PoppinsSemiBold,
},
whycontent:
{
    fontFamily:Fonts.PoppinsRegular,
    textAlign:"justify",
    color:Colors.textWhite,
    fontSize:14,
},
isitsecure:{
    marginTop:20,
    color:Colors.textWhite,
    fontSize:20,
    fontFamily:Fonts.PoppinsSemiBold,
},
isitsecurecontent:
{
    fontFamily:Fonts.PoppinsRegular,
    textAlign:"justify",
    color:Colors.textWhite,
    fontSize:14,
    marginBottom:"15%"
},
 continueButton:{
     backgroundColor:Colors.textWhite,
     borderWidth:1,
     borderRadius:8,
     borderColor:Colors.textWhite,
     padding:10,
 },
 continueText:{
 fontSize:17,
 textAlign:"center",
 fontFamily:Fonts.PoppinsMedium,
 color:Colors.lightgreyColor,

 
 }
})