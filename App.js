import React from 'react';
import 'react-native-gesture-handler';
//  import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import store from './app/redux/store';
import RouteNavigator from './app/RouteNavigator';
class App extends React.Component {
  constructor() {
    super();
    console.disableYellowBox = true;
  }
  // componentDidMount() {
  //   SplashScreen.hide();
  // }
render() {
    return (
      
      <Provider store={store}>
        <RouteNavigator />
      </Provider>
      
    );
  }
}

export default App;
