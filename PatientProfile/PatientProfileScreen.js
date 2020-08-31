import React,{Component} from 'react';
import{Text,View,Image,TouchableOpacity,FlatList,ImageBackground,AsyncStorage} from 'react-native';
import { Strings } from '../../util/Strings';
import selectPatientStyle from "./PatientProfile.Style";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {PatientProfileData } from './PatientProfileData';
import Modal from "react-native-modal";
const numberOfRows = 2

export default class PatientsProfile extends Component
{
    constructor(){
        super()
        this.state={
           modalVisible: false,modal2:false,
           items: [],
           productSkuId:'',
           productId:'',
           userId:'',
          }
    }
    componentWillMount() {
      AsyncStorage.getItem("PatientProfileScreen", (err, res) => {
        if (!res) this.setState({items: []});
        else this.setState({items: JSON.parse(res)});
      });
    }
    _CheckOutBtnAction = () => {
     
    
    
    
      axios.post('http://ec2-13-229-120-202.ap-southeast-1.compute.amazonaws.com:5000/api/v1.0/wishlist',{
        productSkuId: '',
        productId:'',
        userId:'',
        
      }).then(response =>{
        console.log(response.data);
        if(response.status == 200){
          // this.props.navigation.navigate('Sigin')
          // Alert.alert('Otp Verified Successfully')
        }else if(response.status == 400){
          // Alert.alert('Email or otp not found')
        }else{
          Alert.alert('Something error')
        }
      }).catch(error =>{
        console.log(error);
      })
      
     
        
        
      };
    _navigateToNewPatient = () => {
       // debugger
        this.props.navigation.navigate("CategoryProductlist");
      };
       _backBtnAction = () => {
        this.props.navigation.navigate("Bottom Tabs");

       }
       
       setModalVisible = (show) => {
        this.setState({ modalVisible: show });
      }
      setModalVisible2 = (show) => {
        this.setState({ modalVisible2: show });
      }
     
    render()
    {
        const { modalVisible, modalVisible2} = this.state;
        return(
            <View style={selectPatientStyle.container}>
                {/* <KeyboardAwareScrollView contentContainerStyle={selectPatientStyle.scrollviewContainer}> */}
          
                 
                  <View style={selectPatientStyle.categariesView}>
        <Text style={selectPatientStyle.lifeline}>{Strings.TEXTTITLE.CATEGORIESS}</Text>
        {/* <TouchableOpacity onPress={this._MyCartBtnAction}>
            <Image style={selectPatientStyle.categariesImg} source={require('../../assets/Images/Categories/Iconfeather-search.png')}/>
            </TouchableOpacity> */}
            </View>
        {/* <Text style={selectPatientStyle.selectpatienttitle}>{Strings.TEXTTITLE.CATEGORIEES}</Text> */}
    
    
         
         {/* <View style={selectPatientStyle.videocallconsultationView}> */}
         <View style={selectPatientStyle.onlineflatlist}>
         <FlatList
            //  horizontal={true}
              showsVerticalScrollIndicator={true} data={PatientProfileData}
              style={{ flex: 0 }}
              initialNumToRender={PatientProfileData.length}
               numColumns={2}
              renderItem={({ item }) =>

                <TouchableOpacity 
                activeOpacity={1} onPress={this._navigateToContinue}>
                  <View style={
                      
                      selectPatientStyle.onlinestoreitem
                      
                    
                    }
                   
                    >
                       <ImageBackground style={selectPatientStyle.titleImage2} source={item.titleImage}
                  
                  
                  >
                    <Image style={selectPatientStyle.titleImage222} source={item.titleImage2}/>
                    </ImageBackground>
                  {/* <Image style={selectPatientStyle.titleImage2} source={item.titleImage}/> */}
                  <View style={selectPatientStyle.columnn}>
                  <Text style={selectPatientStyle.title11}>{item.Category}</Text>
                  <Text style={selectPatientStyle.title}>{item.gram}</Text>

                  </View>
                  <View style={selectPatientStyle.rown}>
                  <Text style={selectPatientStyle.title11}>{item.price}</Text>
                  <Image style={selectPatientStyle.titleImage22} source={item.titleImage1}/>
                  

                  </View>
                    
                    {/* <Text style={CategoryProductstyle.title}>{item.items}</Text> */}
                  </View>
                </TouchableOpacity>}
               numberOfRows={numberOfRows}
              keyExtractor={(item, index) => `${index}${item}`}
            />
           
          </View>
          

          
       

     
         
       {/* </View> */}
        
             
             {/* </KeyboardAwareScrollView> */}
             </View>
        )
    }
}
  