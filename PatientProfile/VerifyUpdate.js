import React, { Component } from "react"
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
  Platform,
  FlatList,
  Picker,
  Keyboard,
  ScrollView
} from "react-native";
import {Indicator} from "../../util/Indicator"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Strings } from "../../util/Strings"
import verifyyournumberStyle from "./VerifyUpdate.Style"
import {Colors} from "../../util/Color"

//hide the Keyboard
Keyboard.dismiss()
//const datalist = [{key:[1,2,3]},
//{key:[4,5,6]},
//{key:[7,8,9]}]
//const datalist = [{key:'1'},{key:'2'},{key:'3'},{key:'4'},{key:'5'},{key:'6'},{key:'7'},{key:'8'},{key:'9'}]
export default class VerifyUpdate extends React.Component {
    constructor(props) {
      super(props);
      this.state = { pin1:'',
    pin2:'',
    pin3:'',
    pin4:'',
    number1:'',
    number2:'',
  number3:'',
number4:''
}


    }
       
    _ShowHideComponent = ({}) => {
      if (this.state.show == true) {
        this.setState({ show: false });
      } else {
        this.setState({ show: true });
      }
    };
    componentDidMount=()=>{
       this.refs.pin1ref.focus()
       
    }
    _navigateToContinue = () => {
      // debugger
      
      this.props.navigation.navigate("PatientIdentity");

     };
     _backBtnAction = () => {
      this.props.navigation.navigate("NewPatientInfo");

     }


   handleTextChange = (inputText,pin1,pin2,pin4,pin3) => {  
     {this.setState({pin1:inputText})
      if(pin1 != ' ') {
          this.refs.pin2ref.focus() 
      }
    }
    {this.setState({pin2:inputText})
    if(pin2 != ' ') {
        this.refs.pin3ref.focus() 
    }
  }
  {this.setState({pin3:inputText})
  if(pin3 != ' ') {
      this.refs.pin4ref.focus() 
  }
}
{this.setState({pin4:inputText})
if(pin4 != ' ') {
   null
}
}
    } 
    backspace = () => {
      
    }
    
    _renderItem =({item,index})=>{
          return(
         <TouchableOpacity>
              <View style={verifyyournumberStyle.keyvalueView}>
                 <Text style={verifyyournumberStyle.keystyle}>{item.key}</Text>
             </View>
             </TouchableOpacity>
           
          )
 
     }
  
    render() {
        const{pin1,pin2,pin3,pin4} = this.state
        return (
         <View style={verifyyournumberStyle.container}>
          <ScrollView contentContainerStyle={verifyyournumberStyle.scrollviewContainer} keyboardShouldPersistTaps="never" >
          <TouchableOpacity
                 style={verifyyournumberStyle.backButtonStyle}
                 onPress={this._backBtnAction}>
                 <Image
                   style={verifyyournumberStyle.backImg}
                   source={require("../../assets/Images/icn_back.png")} />
                  </TouchableOpacity> 
                  <View>
                  <Text style={verifyyournumberStyle.verifytitle}>{Strings.VERIFYNUMBERTEXT.VERIFY}</Text>
                  <Text style={verifyyournumberStyle.verifycontent}>{Strings.VERIFYNUMBERTEXT.VERIFYCONTENT}</Text>
                  <TouchableOpacity>
                  <Text style={verifyyournumberStyle.resend}>{Strings.VERIFYNUMBERTEXT.RESEND}</Text>
                  </TouchableOpacity>
                  </View>


                  <View style={verifyyournumberStyle.totalfourdigitView}>


                  <View style={verifyyournumberStyle.fourdigit}>
                  <TextInput  editable={false} ref={"pin1ref"} 
              value = {pin1}  maxLength={1}  style={verifyyournumberStyle.fourdigitText}>{this.state.number1}</TextInput>
                  </View>
                  <View style={verifyyournumberStyle.fourdigit}>
                  <TextInput editable={false}  ref={"pin2ref"}
                  value = {pin2}  maxLength={1} style={verifyyournumberStyle.fourdigitText}>{this.state.number2}</TextInput>  
                    </View>
                  <View style={verifyyournumberStyle.fourdigit}>
                  <TextInput  editable={false} ref={"pin3ref"} 
                  value = {pin3} maxLength={1}  style={verifyyournumberStyle.fourdigitText}>{this.state.number3}</TextInput>     
                    </View>
                  <View style={verifyyournumberStyle.fourdigit}>
                  <TextInput  editable={false} ref={"pin4ref"}
                  value = {pin4} maxLength={1}  style={verifyyournumberStyle.fourdigitText}>{this.state.number4}</TextInput> 
                      </View>
                  </View>
                  <View style={verifyyournumberStyle.numpadView}>
                   <View style={verifyyournumberStyle.numpadTopView}>
                   <TouchableOpacity >

                 {/* </TouchableOpacity><TouchableOpacity  onPress={()=> {this.handleTextChange('1')}}> */}
                       <Text style={verifyyournumberStyle.numStyleText}>1</Text>
                     </TouchableOpacity>
                     <TouchableOpacity >

                     {/* <TouchableOpacity onPress={()=> {this.handleTextChange('2')}}> */}
                       <Text style={verifyyournumberStyle.numStyleText}>2</Text>
                     </TouchableOpacity>
                     <TouchableOpacity >

                     {/* <TouchableOpacity onPress={()=> {this.handleTextChange('3')}}> */}
                       <Text style={verifyyournumberStyle.numStyleText}>3</Text>
                     </TouchableOpacity >               
                       </View>
                       <View style={verifyyournumberStyle.numpadFirstView}>
                       <TouchableOpacity >

                       {/* <TouchableOpacity onPress={()=> {this.handleTextChange('4')}}> */}
                       <Text style={verifyyournumberStyle.numStyleText}>4</Text>
                     </TouchableOpacity>
                     <TouchableOpacity >

                     {/* <TouchableOpacity onPress={()=> {this.handleTextChange('5')}}> */}
                       <Text style={verifyyournumberStyle.numStyleText}>5</Text>
                     </TouchableOpacity>
                     <TouchableOpacity >

                     {/* <TouchableOpacity onPress={()=> {this.handleTextChange('6')}}> */}
                       <Text style={verifyyournumberStyle.numStyleText}>6</Text>
                     </TouchableOpacity>
                       </View>
                       <View style={verifyyournumberStyle.numpadFirstView}>
                       <TouchableOpacity >

                       {/* <TouchableOpacity onPress={()=> {this.handleTextChange('7')}}> */}
                       <Text style={verifyyournumberStyle.numStyleText}>7</Text>
                     </TouchableOpacity>
                     <TouchableOpacity >

                     {/* <TouchableOpacity onPress={()=> {this.handleTextChange('8')}}> */}
                       <Text style={verifyyournumberStyle.numStyleText}>8</Text>
                     </TouchableOpacity >
                     <TouchableOpacity >

                     {/* <TouchableOpacity onPress={()=> {this.handleTextChange('9')}}> */}
                       <Text style={verifyyournumberStyle.numStyleText}>9</Text>
                     </TouchableOpacity >
                       </View>
                       <View style={verifyyournumberStyle.numpadFirstView}>
                       <View style={verifyyournumberStyle.numpadzeroView}>
                       <TouchableOpacity >

                       {/* <TouchableOpacity onPress={()=> {this.handleTextChange('0')}}> */}
                       <Text style={verifyyournumberStyle.numStyleText}>0</Text>
                     </TouchableOpacity>
                     </View>
                     <View style={verifyyournumberStyle.numpadBackspaceView}>
                     <TouchableOpacity onPress={this.backspace} >
                     <Image
                   style={verifyyournumberStyle.delteImg}
                   source={require("../../assets/Images/icn_cnclbtn.png")} />
                     </TouchableOpacity>
                     </View>
                     </View>
                
                     </View>
                     <View>
                     <Text style={verifyyournumberStyle.proceedstyle}>{Strings.VERIFYNUMBERTEXT.PROCEED}</Text>
                     </View>
                     <TouchableOpacity activeOpacity={1.0} style={verifyyournumberStyle.continueButton} onPress={this._navigateToContinue}>
        <Text style={verifyyournumberStyle.continueText}>{Strings.VERIFYNUMBERTEXT.CONFORM}</Text>
        </TouchableOpacity>
  
            
                  </ScrollView>
                  </View>
                      )
                      }
                      }
   
    
                        