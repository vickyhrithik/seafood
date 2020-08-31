import React,{Component} from 'react';
import{Text,View,Image,TouchableOpacity,FlatList} from 'react-native';
import {Strings} from '../../../../util/Strings'
import mycartStyle from './MyCart.Style'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import{ MyCartData} from './MyCartData'
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';


export default class MyCart extends Component
    {
      constructor(props){
        super(props)
        this.state={  count: 1 ,
      
        }
      
      }
   _backBtnAction = () => {
    this.props.navigation.navigate("Bottom Tabs")
   }
   _CheckOutBtnAction = () => {
    this.props.navigation.navigate("Order")
   }
   onPressPlus = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  onPressMinus = () => {
    this.setState({
      count: this.state.count - 1
    });
    };

    // _CheckOutBtnAction = () => {
     
    
    
    
    // axios.post('http://ec2-13-229-120-202.ap-southeast-1.compute.amazonaws.com:5000/api/v1.0/cart',{
    //   productSkuId: '',
    //   productId:'',
    //   userId:'',
    //   vendorId:'',
    //   qty:'',
    // }).then(response =>{
    //   console.log(response.data);
    //   if(response.status == 200){
    //     // this.props.navigation.navigate('Sigin')
    //     Alert.alert('Otp Verified Successfully')
    //   }else if(response.status == 400){
    //     Alert.alert('Email or otp not found')
    //   }else{
    //     Alert.alert('Something error')
    //   }
    // }).catch(error =>{
    //   console.log(error);
    // })
    
   
      
      
    // };
    render()
    {
      return(
        <View style={mycartStyle.container}>
               
        <View style={mycartStyle.categariesView}> 
        {/* <TouchableOpacity
               style={mycartStyle.backButtonStyle}
               onPress={this._backBtnAction} >
               <Image
                 style={mycartStyle.backImg}
                 source={require("../../../../assets/Images/icn_back1.png")} />
                </TouchableOpacity>        */}
        <Text style={mycartStyle.mycarttitle}>{Strings.CATEGORIES.MYCART}</Text>
        </View> 
        <KeyboardAwareScrollView contentContainerStyle={mycartStyle.scrollviewContainer}>
        <FlatList 
          data={MyCartData}
          style={{flex:0}}
          initialNumToRender={mycartStyle.length}
          renderItem={({item}) => 
         
          <View style={mycartStyle.item}>
          <TouchableOpacity>
          <View style={mycartStyle.closeImgView}>
          <Image style={mycartStyle.productImg} source={item.productImg}/>
          {/* <Image style={mycartStyle.closeImg} source={require('../../../../assets/Images/icn_close.png')}/> */}
              </View>
              </TouchableOpacity>
              <View style={mycartStyle.mainitem}>
          
          <View style={{flexDirection:'row',justifyContent:'space-around',marginLeft:60}}>
          <Text style={mycartStyle.productTitle}>{item.productTitle}</Text>
          <Text style={mycartStyle.avaliableStock1}>{item.avaliableStock}</Text>
        
       
          {/* <Text style={mycartStyle.productRate}>{item.productRate}</Text> */}
          </View>
          <View style={{flexDirection:'row',marginLeft:80}}>
          <Text style={mycartStyle.productTitle1}>{item.medium}</Text>
          <Text style={mycartStyle.avaliableStock}>{item.gram}</Text>
        
       
          {/* <Text style={mycartStyle.productRate}>{item.productRate}</Text> */}
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-around',marginLeft:50}}>
          <View style={mycartStyle.threeBtnView}>
         <TouchableOpacity onPress={this.onPressMinus}>
         <Image style={mycartStyle.minusImg} source={require('../../../../assets/Images/btn_minus.png')}/>
         </TouchableOpacity>
         <View style={mycartStyle.countImgView}>
         <Image style={mycartStyle.countImg} source={require('../../../../assets/Images/btn_plchldr.png')}/>  
         <Text style={mycartStyle.count}>{this.state.count ? this.state.count : "1"}</Text>
         </View>
         <TouchableOpacity onPress={this.onPressPlus}>
         <Image style={mycartStyle.plusImg} source={require('../../../../assets/Images/btn_plus.png')}/>
         </TouchableOpacity>
      
         </View>
         <Image style={mycartStyle.closeImg} source={require('../../../../assets/Images/icn_close.png')}/>

         </View>
          </View>
  
          
          </View>
          }
          />
        <View style={mycartStyle.medicinesdataView}>
        <View style={mycartStyle.totalview}>
        <Text  style={mycartStyle.productPrice}>{Strings.CATEGORIES.SUBTOTAL}</Text> 
        <Text  style={mycartStyle.productPrice}>300</Text> 
        </View>
        <View style={mycartStyle.totalview}>
        <Text  style={mycartStyle.productPrice}>{Strings.CATEGORIES.DELIVERY}</Text>
        <Text  style={mycartStyle.productPrice}>50</Text> 
        </View>
        <View style={mycartStyle.totalview}>
        <Text  style={mycartStyle.productPrice}>{Strings.CATEGORIES.TAX}</Text>
        <Text  style={mycartStyle.productPrice1}>(  - )</Text> 
        <Text  style={mycartStyle.productPrice2}>50</Text> 
        </View>
        <View style={mycartStyle.totalview}>
        <Text  style={mycartStyle.total}>{Strings.CATEGORIES.TOTAL}</Text>
        <Text  style={mycartStyle.total}>300</Text>
        </View>
        </View>
                
       <View style={mycartStyle.Btnstyle}>
      <TouchableOpacity style={mycartStyle.checkButton} onPress={this._CheckOutBtnAction}>
      <Text style={mycartStyle.checkText}>{Strings.CATEGORIES.CHECKOUT}</Text>
      </TouchableOpacity>
      </View>
        
          </KeyboardAwareScrollView>
          <View>
              
          </View>
          </View>
      
      )
    }
}
