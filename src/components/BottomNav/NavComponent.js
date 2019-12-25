import React, {Component} from 'react';
import { View ,StyleSheet,Text, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import NavItems from './NavItems';
import {StatusBar} from 'react-native';

//our app hase a custom nav bar so this is the nav bar component
// it' connected to our store for themming props
 
class NavComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {  

        };
    }

    render() {
      const {routes, index} = this.props.navigation.state
        return (  
          <View style = {[styles.container,{backgroundColor: this.props.theme.navbar}]}>
            <StatusBar backgroundColor = {this.props.theme.color} barStyle="light-content" />
            {routes.map((route,i) => {
              return (
               <NavItems key={route.routeName} isActive={index === i} navigation={this.props.navigation} {...route}/>
                )
              })}
          </View>
        );
      }
}

const styles = StyleSheet.create({
  container:{  
    height : '8%',
    width : '100%',
    flexDirection : "row",
    justifyContent : "space-around",
    alignItems : 'center',
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
  export default connect(mapStateToProps,mapDispatchToProps) (NavComponent);