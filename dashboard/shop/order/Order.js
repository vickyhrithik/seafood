import React,{Component} from 'react';
import{Text,View,Image,TouchableOpacity,FlatList,ScrollView} from 'react-native';
import {Strings} from '../../../../util/Strings'
import orderStyle from './Order.Style'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default class MyCart extends Component
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
          <View style={orderStyle.container}>
                 
          <View style={orderStyle.categariesView}> 
          <TouchableOpacity
                 style={orderStyle.backButtonStyle}
                 onPress={this._backBtnAction} >
                 <Image
                   style={orderStyle.backImg}
                   source={require("../../../../assets/Images/icn_back1.png")} />
                  </TouchableOpacity>       
          <Text style={orderStyle.title}>{Strings.CATEGORIES.ORDERHISTORY}</Text>
          <Text style={orderStyle.title}></Text>
          </View> 
         <View style={{margin:"10%"}}>
           <Text>
             Set your address to deliver your products
           </Text>
         </View>
          <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <View style={[orderStyle.shadowContainerStyle,{width: 160, margin:20, height: 200, }]}>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <Text style={{color:'black'}}>Address 01</Text>
          <Text style={{color:'black'}}>Address 01</Text>
          

          </View>
          <View style={{alignItems:'center'}}>
          <Text style={{color:'black',marginTop:10,fontSize:18,fontWeight:'bold'}}>Home</Text>
          {/* <Text style={{color:'black'}}>Address 01</Text> */}
          

          </View>
          <View style={{alignItems:'center'}}>
          <Text style={{color:'black',margin:10,fontSize:18,}}>#52 nethaji street ,madurai </Text>
          {/* <Text style={{color:'black'}}>Address 01</Text> */}
          

          </View>
        </View>
 
        <View style={[orderStyle.shadowBottonContainerStyle,{width: 160, margin:20, height: 200,}]}>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <Text style={{color:'black'}}>Address 01</Text>
          <Text style={{color:'black'}}>Address 01</Text>
          

          </View>
          <View style={{alignItems:'center'}}>
          <Text style={{color:'black',marginTop:10,fontSize:18,fontWeight:'bold'}}>Home</Text>
          {/* <Text style={{color:'black'}}>Address 01</Text> */}
          

          </View>
          <View style={{alignItems:'center'}}>
          <Text style={{color:'black',margin:10,fontSize:18,}}>#52 nethaji street ,madurai </Text>
          {/* <Text style={{color:'black'}}>Address 01</Text> */}
          

          </View>
          
        </View>
      </View>
      <TouchableOpacity style={orderStyle.Button} onPress={this._CheckOutBtnAction}>
        <Text style={orderStyle.Text}>{Strings.CATEGORIES.ADDADDRESS}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={orderStyle.Button1} onPress={this._OrderViewBtnAction}>
        <Text style={orderStyle.Text1}>{Strings.CATEGORIES.CONFIRMADDRESS}</Text>
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
    