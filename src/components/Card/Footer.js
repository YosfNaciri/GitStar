import React, {Component} from 'react';
import {View ,StyleSheet, Text} from 'react-native';
import { Avatar } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as color from '../../colors/Colors';
import { connect } from 'react-redux'


class Footer extends Component{
    constructor(props) {
        super(props);
        this.state = {
         
        };
      }
    
      render() {
        return ( 
            <View style={styles.Footer}>
              <View style={styles.box}>
                <Avatar size={20} rounded source = {{uri : this.props.owner.avatar_url}} />
                <Text style={{marginLeft : 4, color : this.props.theme.text_primary}}>{this.props.owner.login}</Text>
              </View>
              <View style={styles.box}>
                <FontAwesome name='star' color={color.STAR_COLOR} size={20}/>
                <Text style={{marginLeft : 4, color : this.props.theme.text_primary}}>{this.props.star}</Text>
              </View>
            </View>
        );
      }
}

const styles = StyleSheet.create({
   Footer : {
     marginHorizontal : 5,
     marginVertical : 10,
     flexDirection : "row",
     justifyContent : "space-around"
   },
   box : {
    flexDirection : "row",
    justifyContent : "flex-start"
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
export default connect(mapStateToProps,mapDispatchToProps)(Footer)