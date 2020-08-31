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
  ImageBackground,
} from "react-native";
import { Colors } from "../../util/Color";
import { Indicator } from "../../util/Indicator";
import { Strings } from "../../util/Strings";
import CategoryProductstyle from "./CategoryProduct.style";
// import Slider from '@react-native-community/slider'
import { CategoryData } from "./categoryData";
import { CategoryData1 } from "./CategoryData1";
import Swiper from "react-native-swiper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ScrollView } from "react-native-gesture-handler";
// import RangeSlider from 'react-native-range-slider'
import RBSheet from "react-native-raw-bottom-sheet";
import { debug } from "react-native-reanimated";
import {   Toast, } from 'native-base';
// import RangeSlider from 'rn-range-slider';
const numberOfRows = 2;
export default class CategoryProductlist extends React.Component {
  constructor(props) {
    super(props);
    //   this.onPress = this.onPress.bind(this);
    this.state = {
      versionName: "",
      pressStatus: false,
      sliderValue: 15,
      categoryId: props.route.params.categoryId,
    };
    console.log("categoryId", props.route.params.categoryId);
  }

  componentDidMount = () => {
    //  this.getFirstApiResposnse()
    this.getCategoryResponse();
  };

  getCategoryResponse = () => {
    fetch(
      "http://ec2-13-229-120-202.ap-southeast-1.compute.amazonaws.com:5000/api/v1.0/category/list?parent=1",
      {
        method: "Get",
      }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          dataCategories: responseJson.result.rows,
        });
        this.getProductsResponse();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  getProductsResponse = () => {
    fetch(
      "http://ec2-13-229-120-202.ap-southeast-1.compute.amazonaws.com:5000/api/v1.0/product/list?categoryId=" +
        this.state.categoryId,
      {
        method: "Get",
      }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          dataCategories1: responseJson.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  _renderButtons1 = ({ item, index }) => {
    var BASE_IMAGE_URL =
      "http://ec2-13-229-120-202.ap-southeast-1.compute.amazonaws.com:5000";
    return (
      
        <View style={CategoryProductstyle.onlinestoreitem1}>
           <TouchableOpacity activeOpacity={1.0} onPress={() => {
        this._getButtons(item);
      }}>
          <ImageBackground
          
          // {/* // OnPress={this.addToWishlist.bind(this)} */}
            style={CategoryProductstyle.titleImage1}
            source={{ uri: encodeURI(BASE_IMAGE_URL + item.imgPath) }}>
            <Image 
            // OnPress={this.addToWishlist.bind(this)}
                style={CategoryProductstyle.plus1}
                source={require("../../assets/Images/Innerpage/Wishlisth.png")}
              />
          
          </ImageBackground>
         
          <Text style={{ marginTop: 2, marginLeft: 10, fontWeight: "bold" }}>
            {item.name}
          </Text>
          <Text style={{ marginTop: 2, marginLeft: 10 }}>
            {item.productSkus[0].unitValue} {item.productSkus[0].units}
          </Text>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{ marginTop: 2, marginLeft: 10, fontWeight: "bold" }}>
            ₹ {item.productSkus[0].unitPrice}
          </Text>
          <Image
                style={CategoryProductstyle.plus}
                source={require("../../assets/Images/Add.png")}
              />

          </View>
          
          </TouchableOpacity>
        </View>
      
    );
  };

  _getButtons = (item) => {
    console.log(item);

    this.props.navigation.navigate("CategoryProductdetails", {
      productDetail: item,
    });
  };
  _renderButtons = ({ item, index }) => {
    var BASE_IMAGE_URL =
      "http://ec2-13-229-120-202.ap-southeast-1.compute.amazonaws.com:5000";
    return (
      <TouchableOpacity
        activeOpacity={1.0}
        // onPress={this._getButtons(item)}
      >
        <View style={CategoryProductstyle.onlinestoreitemm1}>
          <Image
            style={CategoryProductstyle.titleImageeq}
            source={{ uri: encodeURI(BASE_IMAGE_URL + item.imgPath) }}
          />
          <Text style={{ margin: 10 }}>{item.categoryName}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  // addToWishlist = () => {
  //   var categoryId = this.state.categoryId;
  //   var success = true;
  //   AsyncStorage.getItem("PatientProfileScreen", (err, res) => {
  //     if (!res) AsyncStorage.setItem("PatientProfileScreen", JSON.stringify([categoryId]));
  //     else {
  //       var item = JSON.parse(res);
  //       if (this.search(items, categoryId)) {
  //         success = false
  //       }
  //       else {
  //         item.push(categoryId);
  //         AsyncStorage.setItem("PatientProfileScreen", JSON.stringify(item));
  //       }
  //     }
  //     if (success) {
  //       Toast.show({
  //         text: 'Product added to your wishlist !',
  //         position: 'bottom',
  //         type: 'success',
  //         buttonText: 'Dismiss',
  //         duration: 3000
  //       });
  //     }
  //     else {
  //       Toast.show({
  //         text: 'This product already exist in your wishlist !',
  //         position: 'bottom',
  //         type: 'danger',
  //         buttonText: 'Dismiss',
  //         duration: 3000
  //       });
  //     }
  //   });
  // }

  _onHideUnderlay() {
    this.setState({ pressStatus: false });
  }
  _onShowUnderlay() {
    this.setState({ pressStatus: true });
  }

  
  _backBtnAction = () => {
    this.props.navigation.navigate("Bottom Tabs");
  };

  render() {
    
    return (
      <View style={CategoryProductstyle.container}>
        <View style={CategoryProductstyle.header}>
          <View style={CategoryProductstyle.header1}>
            <TouchableOpacity
              style={CategoryProductstyle.backButtonStyle}
              onPress={this._backBtnAction}
            >
              <Image
                style={CategoryProductstyle.backImg}
                source={require("../../assets/Images/Login&signup/back_arrow.png")}
              />
            </TouchableOpacity>
            <Text style={CategoryProductstyle.addpatienttitle}>
              {Strings.TEXTTITLE.FISH}
            </Text>
          </View>

          <View style={CategoryProductstyle.header2}>
            <TouchableOpacity onPress={() => this.RBSheet.open()}>
              <Image
                style={CategoryProductstyle.backImg}
                source={require("../../assets/Images/Productlist&filter/filter.png")}
              />
            </TouchableOpacity>
            <Image
              style={CategoryProductstyle.backImg1}
              source={require("../../assets/Images/Productlist&filter/Iconfeathersearch.png")}
            />
          </View>
        </View>

        <View style={CategoryProductstyle.listshow}>
          <View style={CategoryProductstyle.onlineflatlist}>
            <Text style={CategoryProductstyle.Texti}>Categories</Text>
            <FlatList
              horizontal={true}
              data={this.state.dataCategories}
              renderItem={this._renderButtons}
              keyExtractor={(renderItem, index) => index.toString()}
            />
          </View>

          <View style={CategoryProductstyle.onlineflatlist1}>
            <View style={CategoryProductstyle.row}>
              <Text style={CategoryProductstyle.Text}>{this.state.count}</Text>
            </View>

            <FlatList
              horizontal={true}
              data={this.state.dataCategories1}
              renderItem={this._renderButtons1}
              keyExtractor={(renderItem, index) => index.toString()}
            />
          </View>
        </View>

        <RBSheet
          ref={(ref) => {
            this.RBSheet = ref;
          }}
          height={750}
          openDuration={false}
          customStyles={{
            container: {
              borderTopLeftRadius: 40,
            },
          }}
        >
          <View style={StyleSheet.container}>
            <View style={CategoryProductstyle.sheet}>
              <Text style={CategoryProductstyle.top} />
              <Text style={CategoryProductstyle.top}>
                {Strings.TEXTTITLE.FILTER}
              </Text>
              <Text style={CategoryProductstyle.top1}>
                {Strings.TEXTTITLE.RESET}
              </Text>
            </View>
            <Text style={CategoryProductstyle.cat}>
              {Strings.TEXTTITLE.CATEGORIEESS}
            </Text>
            <View style={CategoryProductstyle.listrow}>
              <View style={CategoryProductstyle.border}>
                <Text style={CategoryProductstyle.cat1}>
                  {Strings.TEXTTITLE.FISH}
                </Text>
              </View>

              <View style={CategoryProductstyle.border}>
                <Text style={CategoryProductstyle.cat1}>
                  {Strings.TEXTTITLE.PRAWN}
                </Text>
              </View>
              <View style={CategoryProductstyle.border}>
                <Text style={CategoryProductstyle.cat1}>
                  {Strings.TEXTTITLE.CROP}
                </Text>
              </View>
            </View>
            <View style={CategoryProductstyle.slider}>
              <Text>{Strings.TEXTTITLE.PRICE}</Text>

              <Text>{Strings.TEXTTITLE.WEIGHT}</Text>
            </View>
          </View>
        </RBSheet>
      </View>
    );
  }
}
