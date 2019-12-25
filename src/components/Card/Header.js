import React, {Component} from 'react';
import {View ,StyleSheet, Text} from 'react-native';
import {Avatar } from 'react-native-elements';
import { RFC_2822 } from 'moment';
import { connect } from 'react-redux'

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
      }
     
      
      render() {
          
        return ( 
            <View>
                <Text style={[styles.Title, {color : this.props.theme.text_primary}]} >{this.props.name}</Text>
            </View>
        );
      }
}

const styles = StyleSheet.create({
    Title : {
      paddingBottom : 10,
      fontSize : 20,
      fontWeight : "400"
    }
});


const mapStateToProps = (state) => { 
  return {
   theme: state.themes.theme

  }
}
const mapDispatchToProps = dispatch => {
  return {
    
   
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)