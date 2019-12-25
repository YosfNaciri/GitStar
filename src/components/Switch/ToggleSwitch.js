import React from 'react';
import { Text, View, Switch, StyleSheet  } from 'react-native';
import { connect } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { onToggleDark, onToggleLight } from '../../actions/ThemeActions/ThemeActions'

//this little component is responsible for the swithing between the dark and light mode.
//Implemented with redux: had so much fun figuring it out ^^.


class ToggleSwitch extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
    
    }
  }



  handleChange = () => {
    if(!this.props.toggleDark)
      this.props.setDark()
    if(this.props.toggleDark)
      this.props.setLight()
    };

  render(){
    return(
      <View style={styles.container}>
         <Switch size={40} onValueChange ={() => this.handleChange()} value={this.props.toggleDark} thumbColor={this.props.theme.text_primary} trackColor={{true: '#ba0239', false: 'grey'}} />
         {this.props.toggleDark ? (
            <MaterialCommunityIcons name="brightness-2" size={25} style={{color : this.props.theme.text_primary}}/>
          ) : (
            <MaterialCommunityIcons name="white-balance-sunny" size={25}  />
          )}
      </View>
    
    );
    }
  }

  const styles = StyleSheet.create({
      container : {
        flexDirection: "row",

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
      setLight: () => {
        dispatch(onToggleLight())
      },
      setDark: () => {
        dispatch(onToggleDark())
    }
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps) (ToggleSwitch)