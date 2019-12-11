import React, {Component} from 'react';
import {View ,StyleSheet, Text} from 'react-native';
import {Avatar } from 'react-native-elements';
import { RFC_2822 } from 'moment';

export default class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
      }
     
      
      render() {
          
        return ( 
            <View>
                <Text style={styles.Title}>{this.props.name}</Text>
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