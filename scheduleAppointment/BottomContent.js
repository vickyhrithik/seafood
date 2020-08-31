import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';



import HomePage from './app/components/dashboard/HomePageScreen';
import ScheduleMainScreen from './app/components/dashboard/schedulemainscreen/ScheduleScreen';
import SelectPatient from './app/components/scheduleAppointment/SelectPatientScreen';
import Categories from './app/components/dashboard/shop/categories/Categories'

const Tab = createMaterialBottomTabNavigator();

const BottomContent = () => (
    <Tab.Navigator
      initialRouteName="HomePage"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={ScheduleMainScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={SelectPatient}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Categories}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);
export default BottomContent;


// export default class BottomContent extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {firstName: '', lastName: '', mobile: '', dp: ''};
//     }
// }