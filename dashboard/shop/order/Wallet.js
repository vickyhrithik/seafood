import React,{Component} from 'react';
import{Text,View,Image,TouchableOpacity,FlatList,ScrollView} from 'react-native';
import {Strings} from '../../../../util/Strings'
import Walletstyle from './Wallet.Style'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default class Wallet extends Component
    {
        constructor(props){
            super(props)
            this.state={  
                orderhistorydata:[{
                    order:"Order #1002",
                    viewdetail:"View Details",
                    total:"Total x10 items",
                    spend:"S$100.0 spend"
                },
                {
                    order:"Order #1001",
                    viewdetail:"View Details",
                    total:"Total x10 items",
                    spend:"S$100.0 spend"
                },
                {
                    order:"Order #1000",
                    viewdetail:"View Details",
                    total:"Total x10 items",
                    spend:"S$100.0 spend"
                }
            
            
            ]
          
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
          <View style={Walletstyle.container}>
              
          <View style={Walletstyle.categariesView}> 
          <TouchableOpacity
                 style={Walletstyle.backButtonStyle}
                 onPress={this._backBtnAction} >
                 <Image
                   style={Walletstyle.backImg}
                   source={require("../../../../assets/Images/icn_back1.png")} />
                  </TouchableOpacity>       
          <Text style={Walletstyle.title}>{Strings.CATEGORIES.Wallet}</Text>
          <Text style={Walletstyle.title}></Text>
          </View> 
          <View style={Walletstyle.border}>
              <Text style={Walletstyle.redeem}>
                  Your Points
              </Text>
              <Text style={Walletstyle.redeem1}>
                  $ 1250
              </Text>
              <View style={Walletstyle.redeem2}>
               <Text style={Walletstyle.redeem3}>
                   Redeem
               </Text>
              </View>

          </View>
          <View style={Walletstyle.history}>
              <Text style={Walletstyle.history1}>
                  Redeem History
              </Text>

          </View>
          <View style={Walletstyle.points}>
          <Text>
              05/04/2020
          </Text>
          <Text>
              -200 points
          </Text>
          </View>
          <View style={Walletstyle.points}>
          <Text>
              05/04/2020
          </Text>
          <Text>
              -200 points
          </Text>
          </View>
          <View style={Walletstyle.points}>
          <Text>
              05/04/2020
          </Text>
          <Text>
              -200 points
          </Text>
          </View>
          <View style={Walletstyle.points}>
          <Text>
              05/04/2020
          </Text>
          <Text>
              -200 points
          </Text>
          </View>
          </View>
          )
        }
    }

          