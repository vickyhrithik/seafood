import React,{Component} from 'react'
import{Text,
    TouchableOpacity,
    View,
    FlatList,
    Image,
    Dimensions,
    Modal,
    ImageBackground,
    ListView,
    TextInput
    } from 'react-native'
import  { Strings }  from '../../util/Strings'
import  { Colors }  from '../../util/Color'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import paymentStyle from './Payement.Style'
import {QuestionData}  from './ConsulationData'

 export default class ConsulationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
         variable:""  };
    }
  
      setSelected(selected) {
        this.setState({selected});
      }
      
      _saveBtnAction = () => {
        this.props.navigation.navigate("WaitingScreen");

      }
      _backBtnAction = () => {
        this.props.navigation.navigate("PatientIdentity");
       } 
       _addnow = () => {
        this.props.navigation.navigate("PatientIdentity");
       } 
       onChanged(text){
        let newText = '';
        let numbers = '0123456789';
    
        for (var i=0; i < text.length; i++) {
            if(numbers.indexOf(text[i]) > -1 ) {
                newText = newText + text[i];
            }
            else {
                // your call back function
                alert("please enter numbers only");
            }
        }
        this.setState({ myNumber: newText });
    }
     render(){
   

         return(
           // source={require("../../../assets/Images/icn_back.png")} />

            <View style={paymentStyle.container}>
            <KeyboardAwareScrollView contentContainerStyle={paymentStyle.scrollviewContainer}>
              <View style={paymentStyle.headerView}>
            <TouchableOpacity
              style={paymentStyle.backButtonStyle}
              onPress={this._backBtnAction}
            >
              <Image
                style={paymentStyle.backImg}
                source={require("../../assets/Images/icn_back.png")}
              />
              </TouchableOpacity>
         <Text style= {paymentStyle.addcardtitle}>
         {Strings.CONFIRMCONSULATTEXT.ADDCARD}
         </Text>
         </View>
               <View style={paymentStyle.cardView}>

               <ImageBackground
                   style={paymentStyle.cardImgStyle}
                   source={require("../../assets/Images/img_visabg.png")} >
                                  <Text style={paymentStyle.cardTitleStyle}>{Strings.CONFIRMCONSULATTEXT.VISA}</Text>
                                  <View style={paymentStyle.cardNoView}>
                                  <Text style={paymentStyle.cardNoStyle}>3308</Text>
                                  <Text style={paymentStyle.cardNoStyle}>1420</Text>
                                  <Text style={paymentStyle.cardNoStyle}>5050</Text>
                                  <Text style={paymentStyle.cardNoStyle}>2444</Text>

                                    </View>
                                    <View style={paymentStyle.cardNameView}>
                                  <Text style={paymentStyle.cardNameStyle}>{Strings.CONFIRMCONSULATTEXT.CARDHOLDERNAME}</Text>
                                  <Text style={paymentStyle.cardValidStyle}>{Strings.CONFIRMCONSULATTEXT.VALIDTEXT}</Text>
                                 

                                    </View>
                                  <View style={paymentStyle.cardValueView}>
                                  <Text style={paymentStyle.cardNameValueStyle}>Dimitri Petrenko</Text>
                                  <Text style={paymentStyle.cardDateStyle}>09/20</Text>
                                 

                                    </View>
                                    
                                    <View style={paymentStyle.cardNoView}>
                            </View>

</ImageBackground>

              


           </View>
           <View style={paymentStyle.fullnameView}>
                    <Text style={paymentStyle.fullnameText}>{Strings.PLACEHOLDER.CARDNUMBER} </Text>
                  <TextInput style={paymentStyle.fullnameTextinput}             
                keyboardType='numeric'
                onChangeText={(text)=> this.onChanged(text)}
                value={this.state.myNumber}
             ></TextInput>
    
                 </View>
                 <View style={paymentStyle.nricView}>
                    <Text style={paymentStyle.nricText}>{Strings.PLACEHOLDER.CARDHOLDERNAME} </Text>
                  <TextInput style={paymentStyle.nricTextinput}   
             ></TextInput>
                 </View>
                    <View style={paymentStyle.mainValidView}>
                 <View style={paymentStyle.expiryView}>
                    <Text style={paymentStyle.expiryText}>{Strings.CONFIRMCONSULATTEXT.EXPIRY} </Text>
                  <TextInput style={paymentStyle.expiryTextinput} ></TextInput>
                 
                 </View>
                 <View style={paymentStyle.codeView}>
                 <Text style={paymentStyle.codeText} >{Strings.CONFIRMCONSULATTEXT.SECURITYCODE} </Text>
                  <TextInput style={paymentStyle.codeTextinput}  keyboardType='numeric'></TextInput>
                 
                 </View>
                 
                 </View>
                 <TouchableOpacity style={paymentStyle.savebtnstyle} onPress={this._saveBtnAction}>
                <Text style={paymentStyle.savebtn}>{Strings.CONFIRMCONSULATTEXT.SAVEPAYMENTMETHOD}</Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>  
      
            </View>
            )
            }
      }