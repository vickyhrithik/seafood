import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  ImageBackground,
  ActivityIndicator,
  Platform
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Fonts } from "../../util/Fonts";
import {
  Plane,
  Chase,
  Bounce,
  Wave,
  Wander,
  Pulse,
  Flow,
  Circle,
  Grid,
  CircleFade,
  Fold,
  Swing,
} from 'react-native-animated-spinkit'
//import Dimensions from "Dimensions";
export default class SplashScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {versionName : ""};
    }
    render() {
       // debugger;
      return (
       
        <View style={styles.container}>
          <Image style={styles.logoStyle}
         source={require("../../assets/Images/Marketpro_Logo-1.png")} >
           
         </Image>

        </View>

             

        
      );
    }
  }


const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      backgroundColor: "#FFFFFF"
    },
  
    logoStyle: {
       justifyContent: "center",
       alignItems: "center",
      // flex: 1,
      //backgroundColor: "#FFFFFF"
    },
    spinkitView:{
      flex:1,
      alignItems:"center",
      marginTop:"70%"

    },
    splashscreenView:{
      flex:1,
     position:"absolute",
     left:15,
     top:"55%"
    
    },
    splashscreencontent:{
      marginTop:"4%",
      fontSize:17,
      color:"white",
      fontFamily:Fonts.PoppinsSemiBold,
    
    },activityindicatorView:{
      position:"absolute",
      flex:1,
      left:"40%",
      top:"30%"
    },
    activityindicator:{

    },
    activityindicatorImg:{
      width:50,
      height:50
    }

  
  });