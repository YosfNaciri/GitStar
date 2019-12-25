import React from 'react';
import {  View, StyleSheet, Text  } from 'react-native';
import { connect } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//the app header is little touche to add more appearance to the app ;). 

class AppHeader extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
      page : 1,
      date : null
    }
  }

  render(){

    return(
      <View style={[styles.container,{backgroundColor: this.props.theme.navbar}]}>
        <MaterialCommunityIcons name="github-circle" size={40} style={{color : this.props.theme.text_primary}}/>
        <Text style={{paddingLeft : "1%" ,color : this.props.theme.text_primary ,fontSize : 17, fontWeight : "bold"}}>Github Trending Repos</Text>      
      </View>
    
    );
    }
  }

  
const styles = StyleSheet.create({
    container:{  
      height : '8%',
      width : '100%',
      flexDirection : "row",
      alignItems : 'center',
      paddingLeft : "3%"
    },
    
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
  export default connect(mapStateToProps,mapDispatchToProps) (AppHeader);