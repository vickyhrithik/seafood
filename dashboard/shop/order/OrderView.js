import React,{Component} from 'react';
import{Text,View,Image,TouchableOpacity,FlatList} from 'react-native';
import {Strings} from '../../../../util/Strings'
import orderStyle from './OrderView.Style'
import {OrderData} from './OrderData'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default class OrderView extends Component
    {
        constructor(props){
            super(props)
            this.state={  shippingdetailsdata:[{
                name:"Tan Ah Kok",
                address:"130 Joo Seng Road #02-02/03",
                country:"Singapore ",
                pincode:" 368357",
                phoneno:"9650 5632",
                atmnumber:"Visa xxxx-xxxx-xxxx-4839"
            }],
            medicinesdata:[{ medicines: "1x Painkiller", price:"$20.00"},
                          { medicines: "1x Anti-killer", price: "$8.00"},
                           { medicines: "1x cough Syrup", price:"$4.99"},
                          { medicines: "1x Charcoal", price:"$18.00"}],
            }
          
          }
       _backBtnAction = () => {
        this.props.navigation.navigate("OrderHistory")
       }
    //    _CheckOutBtnAction = () => {
    //     this.props.navigation.navigate("Order")
    //    }
  
      render()
        {
            const {shippingdetailsdata,medicinesdata} = this.state
          return(
          <View style={orderStyle.container}>
                 {/* <KeyboardAwareScrollView contentContainerStyle={orderStyle.scrollviewContainer}> */}
                 <View style={orderStyle.View}> 
          <TouchableOpacity
                 style={orderStyle.backButtonStyle}
                 onPress={this._backBtnAction} >
                 <Image
                   style={orderStyle.backImg}
                   source={require("../../../../assets/Images/icn_back1.png")} />
                  </TouchableOpacity>       
          <Text style={orderStyle.title}>{Strings.CATEGORIES.ORDER}</Text>
          </View> 

          <KeyboardAwareScrollView contentContainerStyle={orderStyle.scrollviewContainer}>
          
         <View style={orderStyle.header}>
         {/* <Text style={orderStyle.head}>2 items, 24 July 2020, 07.20 AM </Text> */}
         <Text style={orderStyle.head}>Delivery Address </Text>
         </View>
         <View style={orderStyle.address1}>
             <Text style={orderStyle.home}>
                 Home
             </Text>
             <Text>
                 # 52 Nethaji road ,madurai
             </Text>

         </View>
         <View style={orderStyle.card}>
             <Text>
                 **** **** **** 4567

             </Text>
             <Text>
                 Home

             </Text>

         </View>

         <FlatList 
          data={OrderData}
          style={{flex:0}}
          initialNumToRender={orderStyle.length}
          renderItem={({item}) => 
         
          <View style={orderStyle.item}>
          <TouchableOpacity>
          <View style={orderStyle.closeImgView}>
          <Image style={orderStyle.productImg} source={item.productImg}/>
          {/* <Image style={mycartStyle.closeImg} source={require('../../../../assets/Images/icn_close.png')}/> */}
              </View>
              </TouchableOpacity>
              <View style={orderStyle.mainitem}>
          
          <View style={{flexDirection:'row',justifyContent:'space-around',marginLeft:60}}>
          <Text style={orderStyle.productTitle}>{item.productTitle}</Text>
          <Text style={orderStyle.avaliableStock1}>{item.avaliableStock}</Text>
        
       
          {/* <Text style={mycartStyle.productRate}>{item.productRate}</Text> */}
          </View>
          <View style={{flexDirection:'row',marginLeft:80}}>
          <Text style={orderStyle.productTitle1}>{item.medium}</Text>
          {/* <Text style={orderStyle.avaliableStock}>{item.gram}</Text> */}
        
       
          {/* <Text style={mycartStyle.productRate}>{item.productRate}</Text> */}
          </View>
          <View style={{flexDirection:'row',marginLeft:80}}>
          <Text style={orderStyle.productTitle11}>{item.qty}</Text>
          {/* <Text style={orderStyle.avaliableStock}>{item.gram}</Text> */}
        
       
          {/* <Text style={mycartStyle.productRate}>{item.productRate}</Text> */}
          </View>
         
          </View>
  
          
          </View>
          }
          />
           </KeyboardAwareScrollView>

<View style={orderStyle.medicinesdataView}>
        <View style={orderStyle.totalview}>
        <Text  style={orderStyle.productPrice}>{Strings.CATEGORIES.SUBTOTAL}</Text> 
        <Text  style={orderStyle.productPrice}>300</Text> 
        </View>
        <View style={orderStyle.totalview}>
        <Text  style={orderStyle.productPrice}>{Strings.CATEGORIES.DELIVERY}</Text>
        <Text  style={orderStyle.productPrice}>50</Text> 
        </View>
        <View style={orderStyle.totalview}>
        <Text  style={orderStyle.productPrice}>{Strings.CATEGORIES.TAX}</Text>
        <Text  style={orderStyle.productPrice1}>(  - )</Text> 
        <Text  style={orderStyle.productPrice2}>50</Text> 
        </View>
        <View style={orderStyle.totalview}>
        <Text  style={orderStyle.total}>{Strings.CATEGORIES.TOTAL}</Text>
        <Text  style={orderStyle.total}>350</Text>
        </View>
        </View>
         
        <View style={orderStyle.Btnstyle}>
      <TouchableOpacity style={orderStyle.checkButton} onPress={this._CheckOutBtnAction}>
      <Text style={orderStyle.checkText}>{Strings.CATEGORIES.PLACE}</Text>
      </TouchableOpacity>
      </View> 
        
         
          </View>
          )
        }
    }
