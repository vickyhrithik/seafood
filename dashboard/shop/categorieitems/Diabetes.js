import React,{Component} from 'react';
import{Text,View,Image,TouchableOpacity,FlatList} from 'react-native';
import {Strings} from '../../../../util/Strings'
import diabetesStyle from './Diabetes.Style'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {DiabetesData} from './DiabetesData'
export default class Diabetes extends Component
    {
        constructor(){
            super()
            this.state={}
        }
        _MyCartBtnAction = () => {
          // debugger
           this.props.navigation.navigate("MyCart");
         };
       _backBtnAction = () => {
        this.props.navigation.navigate("Bottom Tabs");
  
       }
    render()
    {
        return(
          <View style={diabetesStyle.container}>
            <View style={{marginLeft:"2%",marginRight:"3%"}}>
          <View style={diabetesStyle.categariesView}> 
          <View style={diabetesStyle.nextcategariesView}>
          <TouchableOpacity
                 style={diabetesStyle.backButtonStyle}
                 onPress={this._backBtnAction} >
                 <Image
                   style={diabetesStyle.backImg}
                   source={require("../../../../assets/Images/icn_back1.png")} />
                  </TouchableOpacity>       
          <Text style={diabetesStyle.categariestitle}>{Strings.CATEGORIES.DIABETES}</Text>
          </View>
          <TouchableOpacity onPress={this._MyCartBtnAction}>
          <Image style={diabetesStyle.categariesImg} source={require('../../../../assets/Images/icn_cartwidround.png')}/>
          </TouchableOpacity>
          </View> 
            <FlatList 
            data={DiabetesData}
             numColumns={2}
            style={{flex:0}}
            initialNumToRender={diabetesStyle.length}
            renderItem={({item}) =>
          
            <View style={diabetesStyle.item}>
              <View style={diabetesStyle.itemTotalView}>
            <Image style={diabetesStyle.productImage} source={item.productImg}/>
            <Text style={diabetesStyle.productTitle}>{item.productTitle}</Text>
            <Text style={diabetesStyle.productRate}>{item.productRate}</Text>
            <TouchableOpacity activeOpacity={0.1} onPress={this._MyCartBtnAction}>
            <Image style={diabetesStyle.addtocart}source={require('../../../../assets/Images/btn_addcart.png')}/>
            </TouchableOpacity>
            </View>
            </View>
            }
            />
            </View>
          </View>
        )
    }
}