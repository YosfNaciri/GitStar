import React from 'react';
import { Text, View, Switch, StyleSheet  } from 'react-native';
import { connect } from 'react-redux';
import ToggleSwitch from '../components/Switch/ToggleSwitch';


//a basic screan to toggle betweeen dark and light mode.

class SettingsScreen extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
    
    }
  }

  render(){

    return(
      <View style={{paddingTop : "2%" ,flex : 1 ,backgroundColor : this.props.theme.body}}>
     
        <View style={styles.switcher}>
          <Text style = {{color : this.props.theme.text_primary}}> Dark Mode </Text>
          <ToggleSwitch />
        </View>

        
        
      </View>
    
    );
    }
  }
  const styles = StyleSheet.create({

  switcher : {
    flexDirection : 'row',
    justifyContent : 'space-evenly'
  }
  });

const mapStateToProps = (state) => { 
  return {
    toggleDark : state.themes.toggleDark,
    theme: state.themes.theme
  }
}
const mapDispatchToProps = dispatch => {
  return {
    
    
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SettingsScreen)

