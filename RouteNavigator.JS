/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Icon,
  Image,
  TextInput
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  createStackNavigator
} from "@react-navigation/stack";
import {
  createDrawerNavigator
} from "@react-navigation/drawer";
import {
  createMaterialBottomTabNavigator
} from "@react-navigation/material-bottom-tabs";
import{
  NavigationContainer
} from "@react-navigation/native";
import SplashScreen from "./app/components/splashScreen/SplashScreen";
import LoginScreen from "./app/components/login/LoginScreen";
import OTP from "./app/components/signup/OTPScreen"
import ResetPassword from "./app/components/signup/ResetPasswordScreen"
import ForgotPassword from "./app/components/signup/ForgotPwdScreen"
import SuccessScreen from './app/components/signup/SuccessScreen';
import SignupScreen from './app/components/signup/SignupScreen';

import Scheduleappt from './app/components/scheduleAppointment/ScheduleapptScreen'
import Calender from './app/components/scheduleAppointment/CalenderScreen'
import SelectPatient from './app/components/scheduleAppointment/SelectPatientScreen'
import PatientIdentity from './app/components/scheduleAppointment/PatientIdentityScreen'
import AddNewPatient from './app/components/scheduleAppointment/AddNewPatientScreen'
import HomePage from './app/components/dashboard/HomePageScreen'
import NewPatientInfo from './app/components/scheduleAppointment/NewPatientInformationScreen'
import VideoCallWithDoctor from './app/components/dashboard/VideoCallWithDoctorScreen'
import IntroScreen from './app/components/walkthrough/IntroSliderScreen'
import ScheduleMainScreen from './app/components/dashboard/schedulemainscreen/ScheduleScreen'
import UpcomingAppt from './app/components/dashboard/upcomingappt/UpcomingApptScreen'
import ConsulationScreen from './app/components/scheduleAppointment/ConsulationScreen'
import PaymentScreen from './app/components/scheduleAppointment/PaymentScreen'
import PatientProfile from './app/components/PatientProfile/PatientProfileScreen'
import HistoryScreen from './app/components/dashboard/schedule/history/HistoryScreen'
import HistorySecondScreen from './app/components/dashboard/schedule/history/HistorySecondScreen'
import HistoryThirdScreen from './app/components/dashboard/schedule/history/HistoryThirdScreen'
import WaitingScreen from './app/components/scheduleAppointment/WaitingScreen'
import FindDrScreen from './app/components/scheduleAppointment/FindingDoctorScreen'
import DrUnavailbleScreen from './app/components/scheduleAppointment/DrAvailableScreen'
import TermsandCondition from './app/components/scheduleAppointment/TermsandConditions'
import VerifyYourNumber from './app/components/scheduleAppointment/VerifyYourNumber'
import UpcomingApptSecondScreen from './app/components/dashboard/upcomingappt/UpcomingApptSecondScreen'
import ConfirmApptScreen from './app/components/scheduleAppointment/ConfirmApptScreen'
import Categories from './app/components/dashboard/shop/categories/Categories'
import Diabetes from './app/components/dashboard/shop/categorieitems/Diabetes'
import MyCart from './app/components/dashboard/shop/mycart/MyCart'
import DrFoundScreen from './app/components/scheduleAppointment/DrFoundScreen'
import Order from './app/components/dashboard/shop/order/Order'
import OrderHistory from './app/components/dashboard/shop/order/OrderHistory'
import OrderView from './app/components/dashboard/shop/order/OrderView'
import VerifyUpdate  from './app/components/PatientProfile/VerifyUpdate'
import PatientUpdate  from './app/components/PatientProfile/PatientUpdate'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();

export default class App extends React.Component {
  constructor(Props) {
    super(Props);
    this.state = {
      timePassed: false
    };
    if (Text.defaultProps == null) Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
    
    if (TextInput.defaultProps == null) TextInput.defaultProps = {};
    TextInput.defaultProps.allowFontScaling = false;
  }
  componentDidMount() {
    setTimeout(() => {
      // console.log('Our data is fetched');
      this.setTimePassed();
    }, 4000);
  }

  setTimePassed() {
    this.setState({ timePassed: true });
  }
 
  render() {
   createBottomTabs = () =>{

   // inactiveColor="#3e2465"
  
     return <MaterialBottomTabs.Navigator  activeColor= "#4285f4"  

     barStyle={{ backgroundColor: 'white' }}>
       
        <MaterialBottomTabs.Screen 
        name = "Home" 
        component = {HomePage}
        options={{
              
          tabBarLabel: 'Home',
      
          // tabBarLabel: <Text style={styles.tabbarStyle}>Home</Text>,

        //  tabBarLabel:<Text style={{paddingVertical:10}}>Test</Text>
         // tabBarLabel:<Text style={{color:"4285f4",fontFamily:"Poppins-Bold",fontSize:14}}>Home</Text>
    
          tabBarIcon: ({ tintColor }) => (  
            <Image
            style={{ width: 25,
              height: 25,tintColor}}
            source={require("./app/assets/Images/btmicn_hmesel.png")}
          />
          ),
        }}/>
      
       <MaterialBottomTabs.Screen name = "Schedule"  component = {ScheduleMainScreen} options={{
          tabBarLabel: <Text style={styles.tabbarStyle}>Schedule</Text>,
          tabBarIcon: ({ tintColor }) => (  
            <Image
            style={{ width: 25,
              height: 25,tintColor}}
            source={require("./app/assets/Images/btmicn_aponmntsel.png")}

          />
          ),
        }}/>
         <MaterialBottomTabs.Screen name = "Patients"  component = {PatientProfile} options={{
          tabBarLabel: <Text style={styles.tabbarStyle}>Patients</Text>,
          tabBarIcon: ({ tintColor }) => (  
            <Image
            style={{ width: 25,
              height: 25,tintColor}}
            source={require("./app/assets/Images/btmicn_patientsel.png")}
          />
          ),
        }}/>
         <MaterialBottomTabs.Screen name = "Categories"  component = {Categories} options={{
          tabBarLabel: <Text style={styles.tabbarStyle}>Categories</Text>,
          tabBarIcon: ({ tintColor }) => (  
            <Image
            style={{ width: 25,
              height: 25,tintColor}}
            source={require("./app/assets/Images/btmicn_cartsel.png")}
          />
          ),
        }}/>
         <MaterialBottomTabs.Screen name = "Profile"  component = {HomePage} options={{
          tabBarLabel: <Text style={styles.tabbarStyle}>Profile</Text>,
          tabBarIcon: ({ tintColor }) => (  
            <Image
            style={{ width: 25,
              height: 25,tintColor}}
            source={require("./app/assets/Images/btmicn_prflesel.png")}
          />
          ),
        }}/>
     
     </MaterialBottomTabs.Navigator> 
   }
    if (!this.state.timePassed) {
      // debugger
      console.log("Our data is fetched", this.state.timePassed);
      return <SplashScreen />;
    } else {
      //return <RootApp />;
    return ( 
      <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
    {/* <Stack.Screen name="Login" component = {LoginScreen} options={{navigation:{headermode:null}}}/>
      <Stack.Screen name="Signup" component = {SignupScreen} options={{navigation:{Header:"none"}}}/> */}
      <Stack.Screen name="Intro" component = {IntroScreen} />
      <Stack.Screen name="Login" component = {LoginScreen} />
      <Stack.Screen name="Signup" component = {SignupScreen} />
      <Stack.Screen name="Forgotpassword" component = {ForgotPassword} />
      <Stack.Screen name="ResetPassword" component = {ResetPassword} />
      <Stack.Screen name="SuccessScreen" component = {SuccessScreen} />
      <Stack.Screen name="OTP" component = {OTP} />

      
      <Stack.Screen name="Scheduleappt" component = {Scheduleappt} />
      <Stack.Screen name="Calender" component = {Calender} />
      <Stack.Screen name="SelectPatient" component = {SelectPatient} />
      <Stack.Screen name="AddNewPatient" component = {AddNewPatient} />
      <Stack.Screen name="NewPatientInfo" component = {NewPatientInfo} />
      <Stack.Screen name="PatientIdentity" component = {PatientIdentity} />
      <Stack.Screen name="VideoCallWithDoctor" component = {VideoCallWithDoctor} />
      <Stack.Screen name="UpcomingAppt" component = {UpcomingAppt}/>
      <Stack.Screen name="HistoryScreen" component ={HistoryScreen} />
      <Stack.Screen name="HistorySecondScreen" component={HistorySecondScreen}/>
      <Stack.Screen name="HistoryThirdScreen" component={HistoryThirdScreen}/>
      <Stack.Screen name="Consulation" component = {ConsulationScreen}/>
      <Stack.Screen name="PaymentScreen" component = {PaymentScreen}/>
      <Stack.Screen name="WaitingScreen" component = {WaitingScreen}/>
      <Stack.Screen name="FindingDr" component = {FindDrScreen}/>
      <Stack.Screen name="DrUnavailble" component = {DrUnavailbleScreen}/>
      <Stack.Screen name="TermsandCondition" component = {TermsandCondition}/>
      <Stack.Screen name="VerifyYourNumber" component = {VerifyYourNumber}/>
      <Stack.Screen name="UpcomingApptSecondScreen" component = {UpcomingApptSecondScreen}/>
      <Stack.Screen name="ConfirmApptScreen" component = {ConfirmApptScreen}/>
      <Stack.Screen name="Categories" component={Categories}/>
      <Stack.Screen name="Diabetes" component={Diabetes}/>
      <Stack.Screen name="MyCart" component={MyCart}/>
      <Stack.Screen name="DrFoundScreen" component={DrFoundScreen}/>
      <Stack.Screen name="Order" component={Order}/>
      <Stack.Screen name="OrderHistory" component={OrderHistory}/>
      
      <Stack.Screen name="OrderView" component={OrderView}/>
      <Stack.Screen name="VerifyUpdate" component={VerifyUpdate}/>
      <Stack.Screen name="PatientUpdate" component={PatientUpdate}/>


      <Stack.Screen name="Bottom Tabs" children = {createBottomTabs} />
      
    </Stack.Navigator>
    </NavigationContainer>);
    }
    
    // return (
    //   <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //     <Text>
    //       Try editing me! 🎉
    //     </Text>
    //   </View>
    // );
  //return <LoginScreen/>;

  }
}

const styles = StyleSheet.create({
  tabbarStyle: {
    color:"#4285f4",
    fontFamily:"Poppins-Bold",
    fontSize:12,
   
}
})
