import React,{Component} from 'react'
import{Text,
    TouchableOpacity,
    View,
    FlatList,
    Image,
    
    } from 'react-native'
import  { Strings }  from '../../../../util/Strings'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import categoriesStyle from './Categories.Style'
import {categoriesdata} from "./categoriesdata"
const numberOfRows = 2

 const CategoriesData= [
    {key: 'Diabetes',
    Images:require('../../../../assets/Images/icn_diabet.png')},

   //  Images:require('../../../../assets/Images/icn_diabet.png')},
    {key: 'Dengue',
    Images:require('../../../../assets/Images/icn_dengue.png')},
    {key: 'Migranie Headaches',
    Images:require('../../../../assets/Images/icn_hedache.png')},
    {key: 'Asthma',
    Images:require('../../../../assets/Images/icn_asthma.png')},
    {key: 'Alcohol, tobacco & drug related illnesses',
    Images:require('../../../../assets/Images/icn_alchcl.png')},
    {key: 'Chicken pox',
    Images:require('../../../../assets/Images/icn_chikenpox.png')},
    {key: 'Food Poisoning',
    Images:require('../../../../assets/Images/icn_fodpoison.png')},
    {key: 'Malaria',
    Images:require('../../../../assets/Images/icn_maleria.png')},
    {key: 'Yellow Fever',
    Images:require('../../../../assets/Images/icn_ylwfevr.png')},
   ]
 export default class Categories extends Component {
 
    _CategorieBtnAction = () => {
        // debugger
         this.props.navigation.navigate("Diabetes");
       };
       _MyCartBtnAction = () => {
        // debugger
         this.props.navigation.navigate("MyCart");
       };
     render(){
         return(
          <View style={categoriesStyle.container}>
          {/* <KeyboardAwareScrollView contentContainerStyle={categoriesStyle.scrollviewContainer}> */}
    
            <View>
            <View style={categoriesStyle.categariesView}>
  <Text style={categoriesStyle.lifeline}>{Strings.TEXTTITLE.CATEGORIESS}</Text>
  <TouchableOpacity onPress={this._MyCartBtnAction}>
      <Image style={categoriesStyle.categariesImg} source={require('../../../../assets/Images/Categories/Iconfeather-search.png')}/>
      </TouchableOpacity>
      </View>
  {/* <Text style={selectPatientStyle.selectpatienttitle}>{Strings.TEXTTITLE.CATEGORIEES}</Text> */}
</View>

   
   <View style={categoriesStyle.videocallconsultationView}>
   <View style={categoriesStyle.onlineflatlist}>
      <FlatList
        showsVerticalScrollIndicator={true} data={categoriesdata}
        style={{ flex: 0 }}
        initialNumToRender={categoriesdata.length}
        numColumns={2}
        renderItem={({ item }) =>

          <TouchableOpacity activeOpacity={1.0} onPress={this._CategorieBtnAction}>
            <View style={categoriesStyle.onlinestoreitem}>
            <Image style={categoriesStyle.titleImage1} source={item.titleImage}/>
              <Text style={categoriesStyle.title}>{item.Category}</Text>
              <Text style={categoriesStyle.title}>{item.items}</Text>
            </View>
          </TouchableOpacity>}
        numberOfRows={numberOfRows}
        keyExtractor={(item, index) => `${index}${item}`}
      />
    </View>
    

    
 


   
 </View>
  
       
       {/* </KeyboardAwareScrollView> */}
       </View>
  )
}
}