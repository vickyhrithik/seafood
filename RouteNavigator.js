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


  import AuthNavigator from './AuthNavigator';

  //Auth Screens
 import SplashScreen from './components/splashScreen/SplashScreen';
 import LoginScreen from './components/login/LoginScreen';
import OTP from './components/signup/OTPScreen';
// import Checkotp from './components/signup/Checkotp ';
import ResetPassword from './components/signup/ResetPasswordScreen';
import ForgotPassword from './components/signup/ForgotPwdScreen';
import SuccessScreen from './components/signup/SuccessScreen';
import SignupScreen from './components/signup/SignupScreen';
import SigninScreen from './components/signup/SigninScreen';

//App Screens

import Scheduleappt from './components/scheduleAppointment/ScheduleapptScreen'
import Calender from './components/scheduleAppointment/CalenderScreen'
import SelectPatient from './components/scheduleAppointment/SelectPatientScreen'
// import PatientIdentity from './components/scheduleAppointment/PatientIdentityScreen'
import AddNewPatient from './components/scheduleAppointment/AddNewPatientScreen'
import CategoryProductlist from './components/scheduleAppointment/CategoryProductlist'
 
import HomePage from './components/dashboard/HomePageScreen'
import NewPatientInfo from './components/scheduleAppointment/NewPatientInformationScreen'
import VideoCallWithDoctor from './components/dashboard/VideoCallWithDoctorScreen'
import IntroScreen from './components/walkthrough/IntroSliderScreen'
import ScheduleMainScreen from './components/dashboard/schedulemainscreen/ScheduleScreen'
import UpcomingAppt from './components/dashboard/upcomingappt/UpcomingApptScreen'
import ConsulationScreen from './components/scheduleAppointment/ConsulationScreen'
import PaymentScreen from './components/scheduleAppointment/PaymentScreen'

import HistoryScreen from './components/dashboard/schedule/history/HistoryScreen'
import HistorySecondScreen from './components/dashboard/schedule/history/HistorySecondScreen'
import HistoryThirdScreen from './components/dashboard/schedule/history/HistoryThirdScreen'
import WaitingScreen from './components/scheduleAppointment/WaitingScreen'
import FindDrScreen from './components/scheduleAppointment/FindingDoctorScreen'
import DrUnavailbleScreen from './components/scheduleAppointment/DrAvailableScreen'
import TermsandCondition from './components/scheduleAppointment/TermsandConditions'
import VerifyYourNumber from './components/scheduleAppointment/VerifyYourNumber'
import UpcomingApptSecondScreen from './components/dashboard/upcomingappt/UpcomingApptSecondScreen'
import ConfirmApptScreen from './components/scheduleAppointment/ConfirmApptScreen'
import Categories from './components/dashboard/shop/categories/Categories'
import Diabetes from './components/dashboard/shop/categorieitems/Diabetes'
import MyCart from './components/dashboard/shop/mycart/MyCart'
import DrFoundScreen from './components/scheduleAppointment/DrFoundScreen'
import Categorylists from './components/scheduleAppointment/Categorylists'
import CategoryProductdetails from './components/scheduleAppointment/CategoryProductdetails'
import Order from './components/dashboard/shop/order/Order'
import OrderHistory from './components/dashboard/shop/order/OrderHistory'
import OrderView from './components/dashboard/shop/order/OrderView'
import Wallet from './components/dashboard/shop/order/Wallet'
import Invitefriends from './components/dashboard/shop/order/Invitefriends'
import Manageaddress from './components/dashboard/shop/order/Manageaddress'
import Paymentmethods from './components/dashboard/shop/order/Paymentmethods'
import Payment from './components/dashboard/shop/order/Payment'
import EditProfile from './components/dashboard/shop/order/EditProfile'
import VerifyUpdate  from './components/PatientProfile/VerifyUpdate'
import PatientUpdate  from './components/PatientProfile/PatientUpdate'
import PatientsProfile from './components/PatientProfile/PatientProfileScreen'
import Profile from './components/account/Profile'
const Stack = createStackNavigator();

const MaterialBottomTabs = createMaterialBottomTabNavigator();



  class RouteNavigator extends React.Component {
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
      tabBarLabel:() => {return null},
      
      tabBarIcon: ({ tintColor, focused,}) => (focused?  
        
        <Image
        style={{ width: 15,
          height: 15,bottom:2,}}
          source={require('./assets/Images/Innerpage/Sel_Home.png')}
        
      />:
      <Image
      style={{ width: 15,
        height: 15,tintColor,bottom:2}}
        source={require('./assets/Images/Innerpage/Unsel_Home.png')}
      
    />
      ), 
    }}/>

      <MaterialBottomTabs.Screen name = "PatientsProfile"  component = {PatientsProfile} options={{
                              
      tabBarLabel:() => {return null},
      tabBarIcon: ({ tintColor,focused }) => (focused?
        <Image
        style={{ width: 15,
          height: 15,bottom:2,}}
          source={require('./assets/Images/Innerpage/Sel_Heart.png')}
        
      />:
      <Image
      style={{ width: 15,
        height: 15,bottom:2,}}
        source={require('./assets/Images/Innerpage/Unsel_Heart.png')}
      
    />
      ),
    }}/>
      <MaterialBottomTabs.Screen name = "MyCart"  component = {MyCart} options={{
        
        tabBarLabel:() => {return null},
      tabBarIcon: ({ tintColor,focused }) => ( focused? 
        <Image
        style={{ width: 15,
          height: 15,bottom:2,}}
          source={require('./assets/Images/Innerpage/Sel_Cart.png')}
        
      />:
      <Image
      style={{ width: 15,
        height: 15,bottom:2,}}
        source={require('./assets/Images/Innerpage/Unsel_Cart.png')}
      
    />
      ),
    }}/>
      <MaterialBottomTabs.Screen name = "Profile"  component = {Profile} options={{
      
      tabBarLabel:() => {return null},
      tabBarIcon: ({ tintColor,focused }) => (focused? 
        <Image
        style={{ width: 15,
          height: 15,bottom:2,}}
          source={require('./assets/Images/Innerpage/Sel_user.png')}
        
      />:
      <Image
      style={{ width: 15,
        height: 15,bottom:2,}}
        source={require('./assets/Images/Innerpage/Unsel_user.png')}
      
    />
      ),
    }}/>
  </MaterialBottomTabs.Navigator> 
           }
      if (!this.state.timePassed) {
        console.log("Our data is fetched", this.state.timePassed);
        return <SplashScreen />;
      } else {
        
      return ( 
        <NavigationContainer>
      <Stack.Navigator 
      
      screenOptions={{headerShown: false}}>
      
        <Stack.Screen name="Intro" component = {IntroScreen} />
        <Stack.Screen name="Login" component = {LoginScreen} />
        <Stack.Screen name="Signin" component = {SigninScreen} />
        <Stack.Screen name="Signup" component = {SignupScreen} />
        <Stack.Screen name="Forgotpassword" component = {ForgotPassword} />
        <Stack.Screen name="ResetPassword" component = {ResetPassword} />
        <Stack.Screen name="SuccessScreen" component = {SuccessScreen} />
        <Stack.Screen name="OTP" component = {OTP} />
        <Stack.Screen name="Categorylists" component = {Categorylists} />
        <Stack.Screen name="Scheduleappt" component = {Scheduleappt} />
        <Stack.Screen name="SelectPatient" component = {SelectPatient} />
        <Stack.Screen name="AddNewPatient" component = {AddNewPatient} />
        <Stack.Screen name="Wallet" component = {Wallet} />
        <Stack.Screen name="EditProfile" component = {EditProfile} />
        <Stack.Screen name="Manageaddress" component = {Manageaddress} />
        <Stack.Screen name="Invitefriends" component = {Invitefriends} />
        <Stack.Screen name="CategoryProductlist" component = {CategoryProductlist} />
        <Stack.Screen name="CategoryProductdetails" component = {CategoryProductdetails} />
        <Stack.Screen name="NewPatientInfo" component = {NewPatientInfo} />
        {/* <Stack.Screen name="PatientIdentity" component = {PatientIdentity} /> */}
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
        <Stack.Screen name="Paymentmethods" component={Paymentmethods}/>
        <Stack.Screen name="Payment" component={Payment}/>
        <Stack.Screen name="DrFoundScreen" component={DrFoundScreen}/>
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="OrderHistory" component={OrderHistory}/>
        <Stack.Screen name="OrderView" component={OrderView}/>
        <Stack.Screen name="VerifyUpdate" component={VerifyUpdate}/>
        <Stack.Screen name="PatientUpdate" component={PatientUpdate}/>
         <Stack.Screen name="Profile" component={Profile}/>
         <Stack.Screen name="Calender" component={Calender}/>
         <Stack.Screen name="PatientsProfile" component={PatientsProfile}/>
        <Stack.Screen name="Bottom Tabs" children = {createBottomTabs} />
        
      </Stack.Navigator>
      </NavigationContainer>);
      }
      
      
  
    }
  }
  const styles = StyleSheet.create({
    tabbarStyle: {
      color:"#4285f4",
      fontFamily:"Poppins-Regular",
      fontSize:11
  }
  })
  
  export default RouteNavigator;