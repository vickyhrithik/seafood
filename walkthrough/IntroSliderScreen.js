import React from 'react';
import{View,Text,StyleSheet,TouchableOpacity,Image,ImageBackground} from 'react-native';
import { Fonts } from "../../util/Fonts";
import {Colors} from "../../util/Color"
import { Strings } from "../../util/Strings"
import Swiper from 'react-native-swiper'; 
import introsliderStyle from './IntroSliderScreen.Style'
import Swipeable from 'react-native-gesture-handler/Swipeable'

 
export default class SwiperScreen extends React.Component{
    constructor(props){
        super(props);
        this.onPress = this.onPress.bind(this); 
        // onMomentumScrollEnd={(e, state, context) =>
         
        //     console.log('index:', state.index)
        //               }
     }

     onPress = () => {
        this._swiper.scrollBy(1)
    }
    onPress = () => {
        this._swiper.scrollBy(1)
    }
    onPressbtnnavigation = () => {
        this.props.navigation.navigate("Signin");
      }
      _skipBtnAction = () => {
        this.props.navigation.navigate("Signin");
      }
    render(){
        return(
            //paginationStyle={{bottom:'0%', left:'10%', top:'62%', right: '10%'}}
            <Swiper 
          ref={(swiper) => {this._swiper = swiper;}}
               loop={false} 
                dot ={<View style={introsliderStyle.dot}  />}
                activeDot ={<View style={introsliderStyle.activedot} />} >
                    
            <View style={introsliderStyle.slide}>
                <View style={{flex:1}}>
                
             
                 <View style={introsliderStyle.footer}>
                     <Image source={require('../../assets/Images/intro1.png')}/>
                 </View>
                 <View style={introsliderStyle.swipView1}>
                
                 <Image
                style={introsliderStyle.dotimage}
                source={require("../../assets/Images/sliderdots.png")}
              />
                
                    
                 </View>
                 <View style={introsliderStyle.header}>
            <Text style={introsliderStyle.Title}>{Strings.INTROSLIDER.TITLE}</Text>
            <Text style={introsliderStyle.Content}>{Strings.INTROSLIDER.CONTENT}</Text>
                 </View>
                <View style={introsliderStyle.Nextbut}>
                <TouchableOpacity
             style={introsliderStyle.nextbutton}
             onPress={this.onPress}
           >
             <Text style={introsliderStyle.textStyle}>{Strings.TEXTTITLE.NEXT}</Text>
           </TouchableOpacity>

                </View>
                 
                 <View>
                    <TouchableOpacity onPress={this._skipBtnAction}>
                    <Text style={introsliderStyle.skipStyle}>Skip</Text>
                    </TouchableOpacity>
                    </View>
                 </View>
            </View>
            <View style={introsliderStyle.slide}>
               
                 <View style={introsliderStyle.footerimg2}>
                     <Image source={require('../../assets/Images/intro2.png')}/>
                 </View>
                 <View style={introsliderStyle.swipView2}>
                 <Image
                style={introsliderStyle.dotimage}
                source={require("../../assets/Images/sliderdots-1.png")}
              />
               
                 </View>
                 <View style={introsliderStyle.header}>
            <Text style={introsliderStyle.Title1}>{Strings.INTROSLIDER.SECTITLE}</Text>
            <Text style={introsliderStyle.Content}>{Strings.INTROSLIDER.CONTENT}</Text>
                 </View>
                <View style={introsliderStyle.Nextbut}>
                <TouchableOpacity
             style={introsliderStyle.nextbutton}
             onPress={this.onPress}
           >
             <Text style={introsliderStyle.textStyle}>{Strings.TEXTTITLE.NEXT}</Text>
           </TouchableOpacity>

                </View>
                 
                 <View>
                    <TouchableOpacity onPress={this._skipBtnAction}>
                    <Text style={introsliderStyle.skipStyle}>Skip</Text>
                    </TouchableOpacity>
                    </View>
            </View>
            
            <View style={introsliderStyle.slide}>
            <TouchableOpacity onPress={this.onPressbtnnavigation}>

                
             
                 <View style={introsliderStyle.footerimg3}>
                     <Image source={require('../../assets/Images/intro3.png')}/>
                 </View>
                 <View style={introsliderStyle.swipView3}>
               <Image
                style={introsliderStyle.dotimage1}
                source={require("../../assets/Images/sliderdots-2.png")}
              />
                
                 </View>
                 <View style={introsliderStyle.header}>
            <Text style={introsliderStyle.Title1}>{Strings.INTROSLIDER.THIRDTITLE}</Text>
            <Text style={introsliderStyle.Content}>{Strings.INTROSLIDER.CONTENT}</Text>
                 </View>
                <View style={introsliderStyle.Nextbut}>
                <TouchableOpacity
             style={introsliderStyle.nextbutton}
             onPress={this.onPressbtnnavigation}
           >
             <Text style={introsliderStyle.textStyle}>{Strings.TEXTTITLE.GET}</Text>
           </TouchableOpacity>

                </View>
                 
                

                 </TouchableOpacity>

            </View>
          
            </Swiper>
        )
    }
}
