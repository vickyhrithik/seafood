import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  AsyncStorage,
  Platform,FlatList
} from "react-native";
import {Colors} from "../../util/Color"
import {Indicator} from "../../util/Indicator"
import { Strings } from "../../util/Strings"
import Categorystyle from "./Categorylist.Style"
import { CategorylistData } from "./CategorylistData"
const numberOfRows = 1

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Modal from 'react-native-modal';
export default class Categorylists extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        profiledata:[{name:"Change Password",
        select:require('../../assets/Images/icn_pswrd_sel.png'),
        unselect:require('../../assets/Images/icn_pswrd_unsel.png'),},
       {name:"Payment Method",
        select:require('../../assets/Images/icn_paymnt_sel.png'),
        unselect:require('../../assets/Images/icn_paymnt_unsel.png'),},
        {name:"Contact Us",
        select:require('../../assets/Images/icn_cntct_sel.png'),
        unselect:require('../../assets/Images/icn_cntct_unsel.png'),},
        {name:"Ticket Support",
        select:require('../../assets/Images/icn_suprt_sel.png'),
        unselect:require('../../assets/Images/icn_suprt_unsel.png'),},
        {name:"Information",
        select:require('../../assets/Images/icn_info_sel.png'),
        unselect:require('../../assets/Images/icn_info_unsel.png'),},
        //{name:"Logout", 
       // select:require('../../assets/Images/icn_lgot_sel.png'),
       // unselect:require('../../assets/Images/icn_lgot_unsel.png'),}
      ],
          data:["Logout"],
          show:false,
    checked:null
       };
    }
    _ShowHideComponent = ({index,item}) => {
      if (this.state.show == true) {
        this.setState({ show: false });
      } else {
        this.setState({ show: true });
      }
    };
    
     _onlineStroeAction = ()=>{
        this.props.navigation.navigate("CategoryProductlist");  
     }
    //  CategoryProductlist

    render() {
      const { modalVisible,profiledata,data } = this.state;
       //  debugger
        return (
         <View style={Categorystyle.container}>
      {/* <KeyboardAwareScrollView contentContainerStyle={Categorystyle.scrollviewContainer}> */}
            <View style={Categorystyle.header}>
            <Image style={Categorystyle.categariesImg} source={require('../../assets/Images/Login&signup/back_arrow.png')}/>   
            <Text style={Categorystyle.name}>Categories</Text>
            <Image style={Categorystyle.categariesImg} source={require('../../assets/Images/Innerpage/Search.png')}/>
              {/* <Text style={Categorystyle.email}>email@email.com</Text> */}

            </View>
             <View style={Categorystyle.list}>
             
             <FlatList
        // horizontal={true}
         showsVerticalScrollIndicator ={true} 
        data={CategorylistData} 
        style={{ flex: 0 }}
        initialNumToRender={CategorylistData.length}
          numColumns={1}
        renderItem={({ item }) =>
        
        <TouchableOpacity activeOpacity={1.0}   onPress={this._onlineStroeAction}>
                        <View style={Categorystyle.list2}>
                        <View style={Categorystyle.list1}>
                         
                         <Text style={Categorystyle.title}>{item.Category}</Text>
                         <Text style={Categorystyle.title1}>{item.items}</Text>
                         <Image style={Categorystyle.titleImage1} source={item.titleImage}/>
                         </View>
                         </View>
                        </TouchableOpacity>}
          numberOfRows={ numberOfRows}
       keyExtractor={(item, index) => `${index}${item}`}
      />
             
            

             </View>



              
      
  

              


 
            


      {/* </KeyboardAwareScrollView> */}
      </View>
        )
    }
}
