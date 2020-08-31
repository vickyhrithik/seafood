import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  AsyncStorage,
  Platform,
  FlatList,
} from "react-native";
import { Colors } from "../../util/Color";
import { Indicator } from "../../util/Indicator";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Strings } from "../../util/Strings";
import homepageStyle from "./HomePage.Style";
import { HomePageOnlineData } from "./HomePageOnlineData";
import { HomePageData } from "./HomePageData";
import { SliderBox } from "react-native-image-slider-box";
import { FastImage } from "react-native-fast-image";
import { HomePageNewsData } from "./HomePageNewsData";
// import { Item } from "react-native-paper/lib/typescript/src/components/List/List";
const numberOfRows = 3;
export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      versionName: "",
      dataBanner: [],
      dataCategories: [],
      Slide_Buttons: [],
      selectCatg: [],
      pressStatus: false,
      selectCatg: 0,
      images: [
        require("../../assets/Images/CardItem-6.png"),
        require("../../assets/Images/CardItem-6.png"),

        require("../../assets/Images/CardItem-6.png"),
      ],
    };
    // console.log("product skus", props.route.params.CategoryProductlist)
  }
  getSecondApiResponse = () => {
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
      })
      .catch((error) => {
        console.error(error);
      });
  };

  componentDidMount = () => {
    //  this.getFirstApiResposnse()
    this.getSecondApiResponse();
  };

  _renderButtons1 = ({ item, index }) => {
    var BASE_IMAGE_URL =
      "http://ec2-13-229-120-202.ap-southeast-1.compute.amazonaws.com:5000";
    console.log("imageurl", BASE_IMAGE_URL + item.imgPath);
    return (
      <TouchableOpacity
        activeOpacity={1.0}
        onPress={() => {
          this._onlineStroeAction(item);
        }}
      >
        <View style={homepageStyle.onlinestoreitem1}>
          <Image
            style={homepageStyle.titleImage1}
            source={{ uri: encodeURI(BASE_IMAGE_URL + item.imgPath) }}
          />
          <Text style={{ margin: 10 }}>{item.categoryName}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  _onlineStroeAction = (item) => {
    console.log(item);
    
    this.props.navigation.navigate("CategoryProductlist", {
      categoryId: item.id,
    });
  };

  render() {
    //  debugger
    return (
      <View style={homepageStyle.container}>
        <View style={homepageStyle.content}>
          <View style={homepageStyle.categariesView}>
            <Text style={homepageStyle.lifeline}>{Strings.TEXTTITLE.HOME}</Text>
            <TouchableOpacity onPress={this._MyCartBtnAction}>
              <Image
                style={homepageStyle.categariesImg}
                source={require("../../assets/Images/Notification_icon.png")}
              />
            </TouchableOpacity>
          </View>

          <SliderBox
            ImageComponent={FastImage}
            images={this.state.images}
            sliderBoxHeight={180}
            dotColor="#008DD2"
            autoplay
            circleLoop
            resizeMethod={"resize"}
            resizeMode={"cover"}
            inactiveDotColor="#90A4AE"
            paginationBoxVerticalPadding={15}
            onCurrentImagePressed={(index) =>
              console.warn(`image ${index} pressed`)
            }
          />
        </View>

        <View style={homepageStyle.videocallconsultationView}>
          <Text style={homepageStyle.cat}>{Strings.TEXTTITLE.CATEGORIESS}</Text>
          <View style={homepageStyle.onlineflatlist1}>
            <FlatList
              horizontal={true}
              data={this.state.dataCategories}
              renderItem={this._renderButtons1}
              // }
              keyExtractor={(renderItem, index) => index.toString()}
            />
          </View>

          <View style={homepageStyle.onlinstoreview}>
            <Text style={homepageStyle.onlinestore}>
              {Strings.TEXTTITLE.NEWARRIVALS}
            </Text>
            <TouchableOpacity style={homepageStyle.moreButton}>
              <Text style={homepageStyle.more}>
                {Strings.TEXTTITLE.VIEWALL}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={homepageStyle.onlineflatlist}>
            <FlatList
              horizontal={true}
              data={HomePageData}
              style={{ flex: 0 }}
              initialNumToRender={homepageStyle.length}
              renderItem={({ item }) => (
                <TouchableOpacity activeOpacity={1.0}>
                  <View style={homepageStyle.onlinestoreitem}>
                    <View style={homepageStyle.row}>
                      <Text style={homepageStyle.title}>{item.title}</Text>
                      <Text style={homepageStyle.title}>{item.Price}</Text>
                    </View>
                    <View style={homepageStyle.row1}>
                      <Image
                        style={homepageStyle.titleImage}
                        source={item.titleImage}
                      />
                      <View
                        style={{
                          width: 50,
                          height: 20,
                          borderWidth: 0.1,
                          backgroundColor: "#008DD2",
                          marginTop: 65,
                          borderRadius: 20,
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ color: "white" }}>$500</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(renderItem, index) => index.toString()}
            />
          </View>
        </View>
      </View>
    );
  }
}
