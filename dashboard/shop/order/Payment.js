import React,{Component} from 'react';
import{Text,View,Image,TouchableOpacity,FlatList,ScrollView} from 'react-native';
import {Strings} from '../../../../util/Strings'
import PaymenttStyle from './Paymentt.Style'
import RBSheet from "react-native-raw-bottom-sheet";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';


export default class Payment extends Component
    {
        constructor(props){
            super(props)
            this.state={  
          
            }
          }
       _backBtnAction = () => {
        this.props.navigation.navigate("Bottom Tabs")
       }
       _OrderViewBtnAction = () => {
        this.props.navigation.navigate("Paymentmethods")
       }
   
      render()
        {
          return(
          <View style={PaymenttStyle.container}>
                 
          <View style={PaymenttStyle.categariesView}> 
          <TouchableOpacity
                 style={PaymenttStyle.backButtonStyle}
                 onPress={this._backBtnAction} >
                 <Image
                   style={PaymenttStyle.backImg}
                   source={require("../../../../assets/Images/icn_back1.png")} />
                  </TouchableOpacity>       
          <Text style={PaymenttStyle.title}>{Strings.CATEGORIES.PAYMENTTT}</Text>
          <Text style={PaymenttStyle.title}></Text>
          </View> 
         <View style={{marginLeft:"35%",marginRight:'35%',marginTop:30}}>
           <Text>
             Select your payment method
           </Text>
         </View>
          <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <View style={[PaymenttStyle.shadowContainerStyle,{width: 160, margin:20, height: 200, }]}>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <Text style={{color:'black',marginTop:5}}>Card 01</Text>
          <Image
                   style={PaymenttStyle.backImg2}
                   source={require("../../../../assets/Images/Innerpage/sel_checkbox.png")} /> 
          


          </View>
          <View style={{alignItems:'center'}}>
          <Text style={{color:'black',marginTop:10,fontSize:18,fontWeight:'bold'}}>Ajay Kumar</Text>
          {/* <Text style={{color:'black'}}>Address 01</Text> */}
          

          </View>
          <View style={{alignItems:'center'}}>
          <Text style={{color:'black',margin:10,fontSize:18,}}>**** **** **** 4567 </Text>
          {/* <Text style={{color:'black'}}>Address 01</Text> */}
          

          </View>
        </View>
 
        <View style={[PaymenttStyle.shadowBottonContainerStyle,{width: 160, margin:20, height: 200,}]}>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <Text style={{color:'black'}}>Card 02</Text>
         
          </View>
          <View style={{alignItems:'center'}}>
          <Text style={{color:'black',marginTop:10,fontSize:18,fontWeight:'bold'}}>Ajay Kumar</Text>
          {/* <Text style={{color:'black'}}>Address 01</Text> */}
          

          </View>
          <View style={{alignItems:'center'}}>
          <Text style={{color:'black',margin:10,fontSize:18,}}>**** **** **** 4567 </Text>
          {/* <Text style={{color:'black'}}>Address 01</Text> */}
          

          </View>
          
        </View>
      </View>
      <TouchableOpacity style={PaymenttStyle.Button} onPress={() => this.RBSheet.open()}>
      <Image
                   style={PaymenttStyle.backImg1}
                   source={require("../../../../assets/Images/Innerpage/add.png")} /> 
        <Text style={PaymenttStyle.Text}>{Strings.CATEGORIES.PAYMENT11}</Text>
        </TouchableOpacity>

        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={500}
          openDuration={250}
          customStyles={{
            container: {
                // flex:1
            //   justifyContent: "center",
            //   alignItems: "center"
            }
          }}
        >
          <View style={{justifyContent: "center",alignItems: "center",marginTop:15}}>
              <Text style={{fontWeight:'bold'}}>
                  Add New Card
              </Text>

          </View>
          <View style={{marginTop:15,marginLeft:10}}>
              <Text >
                  Card Number
              </Text>

          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:10,marginRight:10}}>
              <View style={{borderWidth:0.5,height:50,borderRadius:20,width:"20%",marginTop:10,alignItems:'center',justifyContent:'center'}}>
              <Text>
                  4352
              </Text>
              </View>
              <View style={{borderWidth:0.5,height:50,borderRadius:20,width:"20%",marginTop:10,alignItems:'center',justifyContent:'center'}}>
              <Text>
                  4666
              </Text>
              </View>
              <View style={{borderWidth:0.5,height:50,borderRadius:20,width:"20%",marginTop:10,alignItems:'center',justifyContent:'center'}}>
              <Text>
                  1233
              </Text>
              </View>
              <View style={{borderWidth:0.5,height:50,borderRadius:20,width:"20%",marginTop:10,alignItems:'center',justifyContent:'center'}}>
              <Text>
                  1223
              </Text>
              </View>

          </View>
          <View style={{marginTop:10,flexDirection:'row',justifyContent:'space-between'}}>
         <Text style={{marginLeft:10}}>
             Select Month
         </Text>
         <Text style={{marginRight:80}}>
             Select Year
         </Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:10,marginRight:10}}>
          <View style={{borderWidth:0.5,height:50,borderRadius:20,width:"40%",marginTop:10,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
              <Text style={{fontWeight:'bold',alignItems:'center',marginLeft:10}} >
                  6
              </Text>
              <Image
                   style={PaymenttStyle.backImg1}
                   source={require("../../../../assets/Images/Profile&settings/downarrow.png")} />
           </View>
              <View style={{borderWidth:0.5,height:50,borderRadius:20,width:"40%",marginTop:10,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
              <Text style={{fontWeight:'bold',alignItems:'center',marginLeft:10}} >
                  2018
              </Text>
              <Image
                   style={PaymenttStyle.backImg1}
                   source={require("../../../../assets/Images/Profile&settings/downarrow.png")} />
           </View>

          </View>
          {/* <View style={{marginTop:15,marginLeft:10,marginRight:10,borderWidth:0.5,
        height:50,borderRadius:20,alignItems:'center',flexDirection:'row',justifyContent:'space-between'
        }}>
              <Text style={{fontWeight:'bold',alignItems:'center',marginLeft:10}} >
                  Home
              </Text>
              <Image
                   style={PaymenttStyle.backImg1}
                   source={require("../../../../assets/Images/Profile&settings/downarrow.png")} />

          </View> */}
          <View style={{marginTop:15,marginLeft:10}}>
              <Text >
              Card Holder Name
              </Text>

          </View>
          <View style={{marginTop:15,marginLeft:10,marginRight:10,borderWidth:0.5,
        height:50,borderRadius:20,justifyContent:'center'
        }}>
              <Text style={{marginLeft:10}} >
                  Ajay kumar
              </Text>

          </View>
         

         
          <LinearGradient
                    colors={['#41B0DC','#2788DA']}
                    style={PaymenttStyle.signinbuttonn}
                >
            <TouchableOpacity activeOpacity={0.8} 
             style={PaymenttStyle.signinbutton}
             onPress={this._navigateToSignUp}          >
             
             <Text style={PaymenttStyle.textStyle}>{Strings.TEXTTITLE.ADD2}</Text>
             
           </TouchableOpacity>
           </LinearGradient>
         
        </RBSheet>
         
          </View>
          )
          }
          }
    