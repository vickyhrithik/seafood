import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  AsyncStorage,
  Platform,
  FlatList,
  TouchableHighlight,
  StyleSheet,
  Alert,
} from "react-native";
import { Colors } from "../../util/Color";
import { Indicator } from "../../util/Indicator";
import { Strings } from "../../util/Strings";
import CategoryProductdet from "./CategoryProductdet.Style";
import { CategoryProductData } from "./CategoryProductData";
import Swiper from "react-native-swiper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ScrollView } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import CheckBox from "react-native-check-box";
import RBSheet from "react-native-raw-bottom-sheet";
import { color } from "react-native-reanimated";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
const numberOfRows = 1;
// const [checked, setChecked] = React.useState('first');
export default class CategoryProductdetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      versionName: "",
      pressStatus: false,
     
      isChecked: true,
      count: 1,
      // dataCategories1: [],
      productDetail: props.route.params.productDetail,
      types1: [{label: 'small', value: 0}, {label: 'medium', value: 1},{label: 'large', value: 1}],
      value1: 0,
      value1Index: 0,
      value1_1: 0,
      value1_1Index: 0,
      types2: [{label: 'param1', value: 0}, {label: 'param2', value: 1}, {label: 'param3', value: 2},],
      value2: 0,
      value2Index: 0,
      types3: [{label: 'param1', value: 0}, {label: 'param2', value: 1}, {label: 'param3', value: 2},],
      value3: 0,
      value3Index: 0,
      currentColor:"grey"
    };

    oncolor=()=>{
      // let letters = '0123456789ABCDEF';
      let color = '#008DD2';
      for (let i = 0; i < 6; i++ ) {
         color += letters[Math.floor(Math.random() * 16)];
      }
      this.setState({currentColor:color})
    }

    console.log("itemID", props.route.params.productDetail);
  }
  componentDidMount = () => {};


  _onHideUnderlay() {
    this.setState({ pressStatus: false });
  }
  _onShowUnderlay() {
    this.setState({ pressStatus: true });
  }

  _backBtnAction = () => {
    this.props.navigation.navigate("CategoryProductlist");
  };
  _navigateToHome = () => {};

  onPressPlus = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  onPressMinus = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  onChangeQual(productDetail)
  {
    const dataCar = this.state.productDetail
    let cantd = productSkus[0].unitPrice;

    if (type) {
     cantd = cantd + 1
     productSkus[0].unitPrice = cantd
     this.setState({productDetail:dataCar})
    }
    else if (type==false&&cantd>=2){
     cantd = cantd - 1
     productSkus[0].unitPrice = cantd
     this.setState({productDetail:dataCar})
    }
    else if (type==false&&cantd==1){
     dataCar.splice(item,1)
     this.setState({productDetail:dataCar})
    } 
  }
  login =()=>{
    this.props.navigation.navigate("Signin")
  }

  onselect = () =>{
    this.setState({

    })
    this.state.productDetail.productSkus[0].name
  }

  render() {
    var BASE_IMAGE_URL =
      "http://ec2-13-229-120-202.ap-southeast-1.compute.amazonaws.com:5000";
    return (
      <View style={CategoryProductdet.container}>
        {/* <KeyboardAwareScrollView contentContainerStyle={CategoryProductstyle.scrollviewContainer}> */}
        <View style={CategoryProductdet.header}>
          <View style={CategoryProductdet.header1}>
            <TouchableOpacity
              style={CategoryProductdet.backButtonStyle}
              onPress={this._backBtnAction}
            >
              <Image
                style={CategoryProductdet.backImg}
                source={require("../../assets/Images/Login&signup/back_arrow.png")}
              />
            </TouchableOpacity>
            {/* <Text style={CategoryProductstyle.addpatienttitle}>{Strings.TEXTTITLE.FISH}</Text> */}
          </View>

          <View style={CategoryProductdet.header2}>
            <TouchableOpacity 
            // onPress={() => this.RBSheet.open()}
            >
              <Image
                style={CategoryProductdet.backImg11}
                source={require("../../assets/Images/Innerpage/whishlist.png")}
              />
            </TouchableOpacity>
            <Image
              style={CategoryProductdet.backImg1}
              source={require("../../assets/Images/Innerpage/Share.png")}
            />
          </View>
        </View>
        <View style={CategoryProductdet.onlinestoreitem}>
          <Image
            style={CategoryProductdet.titleImage2}
            source={{ uri: encodeURI(BASE_IMAGE_URL + this.state.productDetail.imgPath) }}
          />
          <View style={CategoryProductdet.columnn}>
            <Text style={CategoryProductdet.title11}>{this.state.productDetail.name}</Text>
            <Text style={CategoryProductdet.pricetitle}>
            ₹ {this.state.productDetail.productSkus[0].unitPrice}
            </Text>
          </View>

          <View style={CategoryProductdet.main}>
            <Text style={CategoryProductdet.title111}>
              {this.state.productDetail.productSkus[0].unitValue} {this.state.productDetail.productSkus[0].units}
            </Text>
            {/* <Text style={CategoryProductdet.title}>{item.productSku[0].cleaningDescription}</Text> */}
            <Text style={CategoryProductdet.title}>{this.state.productDetail.description}</Text>
          </View>
        </View>
        

        <CheckBox
          style={{marginTop:110,marginLeft:10}}
          onClick={() => {
            this.setState({
              isChecked: !this.state.isChecked,
            });
          }}
          
          // tintColors={{ true: 'red', false: 'blue' }}
          isChecked={this.state.isChecked}
          rightText={this.state.productDetail.productSkus[0].cleaningDescription}
          color={"grey"}
        />

        {/* </View> */}
        <LinearGradient
          colors={["#41B0DC", "#2788DA"]}
          style={CategoryProductdet.signinbuttonnn}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            style={CategoryProductdet.signinbutton}
            onPress={() => this.RBSheet.open()}
          >
            <Text style={CategoryProductdet.textStyle}>
              {Strings.TEXTTITLE.ADDTOBAG}
            </Text>
          </TouchableOpacity>
        </LinearGradient>

        <RBSheet
          ref={(ref) => {
            this.RBSheet = ref;
          }}
          height={380}
          openDuration={10}
          customStyles={{
            container: {
              borderTopLeftRadius:20,
              borderTopRightRadius:20
            },
          }}
        >
          <View style={StyleSheet.container}>
            
            <View style={CategoryProductdet.sheet}>
              <Text style={CategoryProductdet.top}>
                
                {this.state.productDetail.name}
                
              </Text>
              <Text style={CategoryProductdet.topgram}>
                
                {this.state.productDetail.productSkus[0].unitValue} {this.state.productDetail.productSkus[0].units}
                
              </Text>
            </View>
           
            <View style={{
              borderWidth:0.3,
              color:'grey',
              borderRadius: 1,
              borderStyle: 'dashed',
              marginRight:10,
              marginLeft:10,
              marginTop:10,
              marginBottom:10}}>

            </View>

            <View style={CategoryProductdet.rown}>
              <View style={{flexDirection:'row'}}>
              <Image 
                style={CategoryProductdet.plus1}
                source={require("../../assets/Images/Innerpage/unsel_radio_btn.png")}
              />
            <Text style={{marginLeft:5}}>
              {this.state.productDetail.productSkus[0].name}
            </Text>
            <Image 
                style={CategoryProductdet.plus1}
                source={require("../../assets/Images/Innerpage/info.png")}
              />

              </View>
            
            
            <Text>
            ₹ {this.state.productDetail.productSkus[0].unitPrice} / {this.state.productDetail.productSkus[0].units}
            </Text>
            </View>
            
            <View style={CategoryProductdet.rown}>
            <View style={{flexDirection:'row'}}>
            <Image 
                style={CategoryProductdet.plus1}
                source={require("../../assets/Images/Innerpage/sel_radio_btn.png")}
              />
              
              <Text style={{color:'#008DD2',marginLeft:5}}>
              {this.state.productDetail.productSkus[1].name}
            </Text>
            </View>
            <Text style={{color:'#008DD2'}}>
            ₹ {this.state.productDetail.productSkus[1].unitPrice} / {this.state.productDetail.productSkus[0].units}
            </Text>
             </View>
           
           
           

            <View style={CategoryProductdet.threeBtnView}>
              <TouchableOpacity onPress={()=>this.onChangeQual(false)}>
                <Image
                  style={CategoryProductdet.minusImg}
                  source={require("../../assets/Images/btn_minus.png")}
                />
              </TouchableOpacity>
              <View style={CategoryProductdet.countImgView}>
                <Image
                  style={CategoryProductdet.countImg}
                  source={require("../../assets/Images/btn_plchldr.png")}
                />
                <Text style={CategoryProductdet.count}>
                  {this.state.count ? this.state.count : "1"}
                </Text>
              </View>
              <TouchableOpacity onPress={()=>this.onChangeQual(true)}>
                <Image
                  style={CategoryProductdet.plusImg}
                  source={require("../../assets/Images/btn_plus.png")}
                />
              </TouchableOpacity>
            </View>
            <LinearGradient
              colors={["#41B0DC", "#2788DA"]}
              style={CategoryProductdet.signinbuttonn}
            >
              <TouchableOpacity
                activeOpacity={0.8}
                style={CategoryProductdet.signinbutton}
                onPress={() => 
                  this.props.navigation.navigate('MyCart')}>
                {/* //  {Alert.alert('Your items are add to cart')}}> */}
                  {/* // this.login()} */}
                 
                <Text style={CategoryProductdet.textStyle}>
                  {Strings.TEXTTITLE.ADDTOBAG}
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </RBSheet>
      </View>
    );
  }
}
