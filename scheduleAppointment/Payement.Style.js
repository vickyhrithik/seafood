import { Fonts } from "../../util/Fonts"
import {Colors} from "../../util/Color"
import { StyleSheet,Dimensions} from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
         backgroundColor: Colors.textWhite,
        },
        scrollviewContainer: {
            justifyContent: "flex-start",
            backgroundColor:Colors.textWhite
          },
          headerView:{
            marginTop:20,
            flexDirection:'row',
            alignItems:'flex-start',
          },
          addcardtitle:{
            fontFamily:Fonts.PoppinsMedium,
            fontSize:20,
            alignItems:'center',
            textAlign:"center",
            marginLeft:'30%',
            marginTop:25, 

        },
       
        backButtonStyle: {
            alignSelf:'flex-start',
            marginLeft:10, 
            marginTop:35, 
    
          },
           backImg: {
            marginLeft: 5,
            alignSelf: "flex-start",
            resizeMode: "contain",
            width: 25
          },
         
          
          cardView:{
            flexDirection:"column",
             marginLeft:'3%',
             marginRight:'3%',
            // backgroundColor:Colors.blueColor,
          //  marginHorizontal:25,
            marginTop:"5%",
            borderRadius:7,

        },
          cardImgStyle: {
            justifyContent: "center",
           alignItems: "flex-start",
           flexDirection:"column",

         //  marginTop:5,
          margin:'1%',
          flex:1,
          //  marginLeft:'1%',
          //  marginRight:'1%',
           width:'99%',
          // height:'98%',
            // flex: 1,
        //    backgroundColor: "#000000"
          },
          cardTitleStyle: {
            marginTop:5,
            marginLeft:20,
            fontSize:26,
           fontFamily:Fonts.PoppinsBold,
           color:Colors.textWhite
          },

          cardNoView:{
            marginTop:20,
            flexDirection:'row',
            alignItems:'flex-start',
            
          },
          cardNoStyle: {
            marginTop:10,
            marginLeft:20,
            fontSize:16,
           fontFamily:Fonts.PoppinsMedium,
           color:Colors.textWhite
          },
          
          cardNameView:{
            marginTop:40,
            marginLeft:10,
            flexDirection:'row',
            alignItems:'flex-start',
            width:'100%'
          },
         
          cardNameStyle:{
            marginLeft:10,
            width : '52%',
            fontSize:14,
            fontFamily:Fonts.PoppinsMedium,
            color:Colors.textWhite,
          },
           
                  cardValidStyle:{

                    alignSelf:'flex-end',
                    width:'35%',
                   // justifyContent:'center',
                   textAlign:'right',
                  fontSize:14,
                  fontFamily:Fonts.PoppinsMedium,
                  color:Colors.textWhite,
                },
                cardValueView:{
                 // marginTop:20,
                  marginLeft:10,
                  flexDirection:'row',
                  alignItems:'flex-start',
                  width:'100%'
                },
               
                cardNameValueStyle:{
                  marginLeft:10,
                  width : '52%',
                  fontSize:13,
                  fontFamily:Fonts.PoppinsRegular,
                  color:Colors.textWhite,
                },
                 
                cardDateStyle:{
      
                          alignSelf:'flex-end',
                          width:'35%',
                         // justifyContent:'center',
                         textAlign:'right',
                        fontSize:13,
                        fontFamily:Fonts.PoppinsRegular,
                        color:Colors.textWhite,
                      },
                      fullnameView:{
                        borderWidth:1,
                        borderRadius:6,
                        borderColor:Colors.bordergrey,
                        backgroundColor:Colors.textWhite,
                         height:"6%",
                         paddingHorizontal:"3%",
                         paddingTop:"1%",
                         paddingBottom:"1%",
                         width:"92%",
                         height:60,
                         marginTop:30,
                         marginLeft:'4%',
                         marginRight:'4%'
                      },
                         
                      fullnameText:{
                        color:Colors.textlightblack,
                        fontSize:13,
                        fontFamily:Fonts.PoppinsRegular,
                      //  backgroundColor:Colors.redColor,
                       // paddingBottom:"1%"
                        
                      },
                      fullnameTextinput:{
                        color:Colors.darkBlueColor,
                        fontSize:12,
                        fontFamily:Fonts.PoppinsRegular, 
                        width:"100%",
                       // backgroundColor:Colors.pinkColor,
                        marginLeft:-3,
                        marginTop:-5,


                      },
                      nricView:{
                        borderWidth:1,
                        borderRadius:6,
                        borderColor:Colors.bordergrey,
                        backgroundColor:Colors.textWhite,
                         height:"6%",
                         paddingHorizontal:"3%",
                         paddingTop:"1%",
                         paddingBottom:"1%",
                         width:"92%",
                         height:60,
                         marginTop:15,
                         marginLeft:'4%',
                         marginRight:'4%'
                      },
                      nricText:{
                        color:Colors.textlightblack,
                        fontSize:13,
                        fontFamily:Fonts.PoppinsRegular,
                      },
                      nricTextinput:{
                        color:Colors.darkBlueColor,
                        fontSize:12,
                        fontFamily:Fonts.PoppinsRegular, 
                        width:"100%",
                        marginTop:-5,

                      },
         
         
                      mainValidView:{
                        marginTop:"4%",
                        flexDirection:"row",
                        justifyContent:"space-between",
                        height:60,
                      //  backgroundColor:Colors.redColor
                      },
                      expiryView:{
                        width:"44%",
                        borderWidth:1,
                        borderRadius:6,
                        borderColor:Colors.bordergrey,
                        backgroundColor:Colors.textWhite,
                       paddingHorizontal:"3%",
                        paddingTop:"1%",
                        paddingBottom:"1%",
                        marginRight:"2%",
                        marginLeft:'4%',

                      },
                       expiryText:{
                        color:Colors.textlightblack,
                        fontSize:12,
                        fontFamily:Fonts.PoppinsRegular,
                       // paddingBottom:"2%"
                      },
                      expiryTextinput:{
                        color:Colors.textblack,
                        fontSize:13,
                        fontFamily:Fonts.PoppinsRegular,
                        width:"82%",
                        paddingBottom:"1%",
                        marginTop:-5,
                       
                      },
                      codeView:{
                        width:"44%",
                        borderWidth:1,
                        borderRadius:6,
                        borderColor:Colors.bordergrey,
                        backgroundColor:Colors.textWhite,
                        paddingHorizontal:"3%",
                        paddingTop:"1%",
                        paddingBottom:"1%",
                        marginLeft:"2%",
                        marginRight:'4%'
                      },
                      codeText:{
                        color:Colors.textlightblack,
                        fontSize:13,
                        fontFamily:Fonts.PoppinsRegular,
                        paddingBottom:"1%"
                      },
                      codeTextinput:{
                        color:Colors.textblack,
                        marginTop:-5,
                        fontSize:12,
                        fontFamily:Fonts.PoppinsRegular,
                        width:"82%",
                       
                      },
                      savebtnstyle:{
                        backgroundColor:Colors.themeColor,
                        borderWidth:1,
                        borderRadius:10,
                        borderColor:Colors.textWhite,
                        padding:10,
                        marginHorizontal:15,
                        height:50,
                        marginTop:'20%'
                    },
                    savebtn:{
                        textAlign:"center",
                        fontSize:18,
                        color:Colors.textWhite,
                        fontFamily:Fonts.PoppinsRegular
                
                    },
  
 
 
  
  
        })