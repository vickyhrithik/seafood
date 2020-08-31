import React,{Component} from 'react';
import{Text,View,Image,TouchableOpacity,FlatList,ScrollView} from 'react-native';
import {Strings} from '../../../../util/Strings'
import orderStyle from './OrderHistory.Style'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default class OrderHistory extends Component
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
          <View style={orderStyle.FlatListView}>
                <FlatList
                data={this.state.orderhistorydata}
                renderItem={({item}) =>
              <View style={orderStyle.item}>
            <View style={orderStyle.View}>
            <Text style={orderStyle.order}>{item.order}</Text>
            <TouchableOpacity onPress={this._OrderViewBtnAction}>
            <Text style={orderStyle.viewdetail}>{item.viewdetail}</Text>
            </TouchableOpacity>
            </View>
            <View style={orderStyle.View}>
            <Text style={orderStyle.status}>Status:</Text>
            <Text style={orderStyle.preparing}>preparing</Text>
            </View>
            <View style={orderStyle.View}>
            <Text style={orderStyle.total}>{item.total}</Text>
            <Text style={orderStyle.spend}>{item.spend}</Text>
            </View>
  
              </View> }
                />
            </View>
          </View>
          )
        }
    }

          