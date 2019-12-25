import React, {Component} from 'react';
import { View, Text ,StyleSheet, TouchableOpacity} from 'react-native';
import { Card } from 'react-native-elements';
import Header from './Header'
import Footer from './Footer'
import { connect } from 'react-redux'

//the main card component is comosed of 3 parts:
//                                    - the header where the title of the repo 
//                                    - the body where the main discription of the repo
//                                    - the footer where the owner name and avatar next to the star_count.


class CardComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
         
        };
      }
      
    
      render() {
        return ( 
          
         <Card containerStyle={{borderRadius : 25 , borderWidth : 0 , backgroundColor : this.props.theme.card}} key={this.props.repo.id}>
               <TouchableOpacity onPress={()=>{ this.props.navigation("WebView")}}>
                  <Header name={this.props.repo.name} />
                     <View style ={{width : '100%'}}>
                        <Text style={{color : this.props.theme.text_secondary}}>{this.props.repo.description}</Text>
                     </View> 
                  <Footer owner={this.props.repo.owner} star={this.props.repo.stargazers_count}/>
               </TouchableOpacity>
      </Card> 
             
        );
      }
}


const mapStateToProps = (state) => { 
   return {
    theme: state.themes.theme

   }
 }
 const mapDispatchToProps = dispatch => {
   return {
     
    
   }
 }
 export default connect(mapStateToProps,mapDispatchToProps)(CardComponent)