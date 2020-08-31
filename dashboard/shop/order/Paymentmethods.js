import React,{Component} from 'react';
import{Text,View,Image,TouchableOpacity,FlatList,ScrollView} from 'react-native';
import {Strings} from '../../../../util/Strings'
import Paymentstyle from './Payment.Style'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default class Paymentmethods extends Component
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
        this.props.navigation.navigate("OrderView")
       }
   
      render()
        {
          return(
          <View style={Paymentstyle.container}>
                 
          <View style={Paymentstyle.categariesView}> 
          <TouchableOpacity
                 style={Paymentstyle.backButtonStyle}
                 onPress={this._backBtnAction} >
                 <Image
                   style={Paymentstyle.backImg}
                   source={require("../../../../assets/Images/icn_back1.png")} />
                  </TouchableOpacity>       
          <Text style={Paymentstyle.title}>{Strings.CATEGORIES.PAYMENTT}</Text>
          </View> 
         <View style={{margin:"10%"}}>
           <Text>
             Select your Payment method
           </Text>
         </View>
          <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <View style={[Paymentstyle.shadowContainerStyle,{width: 160, margin:20, height: 200, }]}>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <Text style={{color:'black'}}>card 01</Text>
          <Text style={{color:'black'}}>Card 01</Text>
          

          </View>
          <View style={{alignItems:'center'}}>
          <Text style={{color:'black',marginTop:10,fontSize:18,fontWeight:'bold'}}>AJAY</Text>
          {/* <Text style={{color:'black'}}>Address 01</Text> */}
          

          </View>
          <View style={{alignItems:'center'}}>
          <Text style={{color:'black',margin:10,fontSize:18,}}>****4547*** </Text>
          {/* <Text style={{color:'black'}}>Address 01</Text> */}
          

          </View>
        </View>
 
        <View style={[Paymentstyle.shadowBottonContainerStyle,{width: 160, margin:20, height: 200,}]}>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <Text style={{color:'black'}}>Card 02</Text>
          {/* <Text style={{color:'black'}}>Card 02</Text> */}
          

          </View>
          <View style={{alignItems:'center'}}>
          <Text style={{color:'black',marginTop:10,fontSize:18,fontWeight:'bold'}}>AJAY</Text>
          {/* <Text style={{color:'black'}}>Address 01</Text> */}
          

          </View>
          <View style={{alignItems:'center'}}>
          <Text style={{color:'black',margin:10,fontSize:18,}}>****4547*** </Text>
          {/* <Text style={{color:'black'}}>Address 01</Text> */}
          

          </View>
          
        </View>
      </View>
      <TouchableOpacity style={Paymentstyle.Button} onPress={this._CheckOutBtnAction}>
        <Text style={Paymentstyle.Text}>{Strings.CATEGORIES.ADDADDRESS}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Paymentstyle.Button1} onPress={this._OrderViewBtnAction}>
        <Text style={Paymentstyle.Text1}>{Strings.CATEGORIES.CONFIRMADDRESS}</Text>
        </TouchableOpacity>
          
          {/* <Text style={orderStyle.successul}>{Strings.CATEGORIES.SUCCESSFUL}</Text>
          <Text style={orderStyle.content}>{Strings.CATEGORIES.ORDERCONTENT}</Text> */}
          {/* <TouchableOpacity  onPress={this._OrderViewBtnAction}>
          <Text style={orderStyle.vieworders}>{Strings.CATEGORIES.VIEWORDERS}</Text>
          </TouchableOpacity> */}
         
          </View>
          )
          }
          }
    