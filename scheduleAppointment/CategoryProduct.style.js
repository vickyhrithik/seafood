import { Fonts } from "../../util/Fonts";
import {Colors} from "../../util/Color"
import { StyleSheet } from 'react-native';
import { color } from "react-native-reanimated";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
        // backgroundColor:"#2C8EDB",
        // flexDirection: 'column',
        //  justifyContent: "flex-start",
        //  backgroundColor: "white",
        },
        top:{
            marginTop:20

        },
        slider:{
            margin:20,
            flexDirection:'column',
            


        },
        titleImage:{ 
          // alignItems:"flex-start",
         
          //  resizeMode:"contain",
           marginHorizontal:4,
           marginTop:5,
           height:80,
           width:120
    
      },
        titleImage2:{
            width:130,height:120,
            alignItems:'flex-end'
            // justifyContent:'flex-end'

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
            justifyContent:'space-around',
            backgroundColor:"#2C8EDB",
            width:"100%",
             height:"10%",
             alignItems:'center'


        },
        onlinestoreitem: {
            marginVertical: 5,
            marginHorizontal:5,
            width:90,
            height:70,
            flexDirection:"column",
            backgroundColor:"white",
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
            borderRadius:10,
            borderColor:Colors.borderColor,
          },
          columnn:{
              flexDirection:"column",
              justifyContent:"flex-start",
              alignItems:'flex-start'

          },
          rown:{
            flexDirection:"row",
            justifyContent:'space-between'
            

        },
        titleImageeq:{ 
          alignItems:"center",
         // resizeMode:"cover",
          marginHorizontal:5,
         //  marginTop:5,
         width:36,
         height:36,
         borderRadius:5,
         marginTop:5
     
     },
        onlinestoreitemm1: {
  
          flexDirection:"column",
           backgroundColor:"white",
          width:78,
          height:81,
          borderRadius:16,
          borderWidth:2,
          marginHorizontal:10,
          alignItems:'center',
          borderColor:'#8291AC'
          
          
        },
        onlinestoreitem1: {
          marginVertical: 5,
          marginHorizontal:5,
          width:155,
          height:227,
          flexDirection:"column",
          backgroundColor:"white",
         
      
        },
       
       
        onlinestoreitem12: {
          marginVertical: 5,
          marginHorizontal:5,
          width:100,
          height:100,
          flexDirection:"column",
          backgroundColor:"white",
         
        },
         
          titleImage1:{
            resizeMode: "cover",
            borderRadius:5,
            //  margin:10,
            width:154,
            height:148
  
          },
          titleImagecat:{
            // resizeMode: "contain",
            //  margin:10,
            width:88,
            height:71,
            borderRadius:5
  
          },
          titleImage11:{
             resizeMode: "cover",
           
  
          },
          titleImage12:{
            // margin:10,
            width:20,
            height:20,
            marginTop:-70
            // resizeMode: "contain",
  
          },
          titleImage22:{
            // margin:10,
            width:20,
            height:20
            // resizeMode: "contain",
  
          },
          titleImage222:{
            width:20,
            height:20,marginTop:10,
            alignItems:'flex-end',
            justifyContent:'flex-end',
            backgroundColor:'white',
            marginRight:5
          },
          title:{
            fontFamily:Fonts.PoppinsRegular,
            
            color:Colors.textlightblack  ,
           
  
          },
          title11:{
            fontFamily:Fonts.PoppinsBold,
            
            color:Colors.textlightblack  ,
           
  
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
            width:"50%",
            justifyContent:'flex-end',
            marginRight:50,
           


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
      flexDirection:'row',
      justifyContent:'space-around'

  },
   backImg: {
    alignSelf: "flex-end",
    resizeMode: "contain",
    width: 20,
    tintColor:'white',
    marginLeft:45,
    marginBottom:10
    
  },
  plus:{
    width: 15,
    height:15

  },
  plus1:{
    width: 25,
    height:25,
    justifyContent:'flex-end',
    alignItems:'flex-end',
    marginLeft:120,
    marginTop:10

  },
  backImg1: {
    alignSelf: "flex-end",
    resizeMode: "contain",
    width: 20,
    marginLeft:20,
    marginBottom:10
    
  },
  addpatienttitle:{
    fontFamily:Fonts.PoppinsSemiBold,
    fontSize:16,
    color:"white",
    marginLeft:15,
    
    marginTop:10,
    // justifyContent:'flex-end',
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