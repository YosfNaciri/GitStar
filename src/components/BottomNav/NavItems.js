import React, {Component} from 'react';
import { View ,StyleSheet,Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

//nav items represent the link to every "View" declared in our navigator.
//also connected to the store for themming purposes.

class NavItems extends Component{

    constructor(props) {
        super(props);
        this.state = {  

        };
    }

    icon(name,state){
      if(state){
        const icons = {
            Home: <MaterialCommunityIcons name="home"  size={24} style={{color : this.props.theme.navbarText}} />,
            Setting: <MaterialCommunityIcons name="settings"  size={24} style={{color : this.props.theme.navbarText}}  />,
        }
        return (
          icons[name]
        )
      }
      if(!state){
        const icons = {
          Home: <MaterialCommunityIcons name="home-outline" size={25}  style={{color : this.props.theme.navbarText}} />,
          Setting: <MaterialCommunityIcons name="settings-outline" size={25} style={{color : this.props.theme.navbarText}}  />,
        }
        return (
          icons[name]
        )
      }
    }

    render() {
        const {routeName, isActive} = this.props
        
       if(isActive){
        return (  
            <View >
              <TouchableOpacity 
              style={{alignItems : 'center' , justifyContent : 'center'}}
              onPress = {() => this.props.navigation.navigate(''+routeName)}
              >
                  {this.icon(routeName,isActive)}
                  <Text style={{color : this.props.theme.navbarText}}  >{routeName}</Text>
              </TouchableOpacity>
            </View>
            )
       } 
       if (!isActive){
        return (  
            <View>
              <TouchableOpacity 
              onPress = {() => this.props.navigation.navigate(''+routeName)}
              >
                 {this.icon(routeName,isActive)}
              </TouchableOpacity>
            </View>
            )
       }
        
      }
}

const styles = StyleSheet.create({
  isActive:{  
    backgroundColor:  '#ffffff', 
  },
  unActive:{  
    backgroundColor: 'red',
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
export default connect(mapStateToProps,mapDispatchToProps) (NavItems);