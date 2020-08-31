import React,{Component} from 'react';
import{Text,View,Image,TouchableOpacity,FlatList,ScrollView} from 'react-native';
import {Strings} from '../../../../util/Strings'
import invitestyle from './invite.Style'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';


export default class Invitefriends extends Component
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
          <View style={invitestyle.container}>
              
          <View style={invitestyle.categariesView}> 
          <TouchableOpacity
                 style={invitestyle.backButtonStyle}
                 onPress={this._backBtnAction} >
                 <Image
                   style={invitestyle.backImg}
                   source={require("../../../../assets/Images/icn_back1.png")} />
                  </TouchableOpacity>       
          <Text style={invitestyle.title}>{Strings.CATEGORIES.INVITE}</Text>
          <Text style={invitestyle.title}></Text>
          </View> 
          <View style={invitestyle.img}>
          <Image
                   style={invitestyle.backImgg}
                   source={require("../../../../assets/Images/Profile&settings/invitefriend_img.png")} />
                  
          </View>
          <View style={invitestyle.invite}>
              <Text style={invitestyle.text}>
                  Invite Frients
              </Text>

          </View>
          <View style={invitestyle.loream}>
           <Text>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent leo magna, porttitor non euismod sed, auctor vitae purus.
           </Text>
          </View>

          <LinearGradient
                    colors={['#41B0DC','#2788DA']}
                    style={invitestyle.signinbuttonn}
                >
            <TouchableOpacity activeOpacity={0.8} 
             style={invitestyle.signinbutton}
             onPress={this._navigateToSignUp}          >
             
             <Text style={invitestyle.textStyle}>{Strings.TEXTTITLE.INVITEFRIENDS}</Text>
             
           </TouchableOpacity>
           </LinearGradient>
          
          </View>
          )
        }
    }

          