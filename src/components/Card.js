import React, {Component} from 'react';
import { View, Text ,StyleSheet} from 'react-native';

export default class Card extends Component{
    constructor(props) {
        super(props);
        this.state = {
         
        };
      }
      
    
      render() {
        return ( 
           <View>
              <Text>{this.props.item.name}</Text>
              <Text>{this.props.item.description }</Text>
           </View>               
        );
      }
}

const styles = StyleSheet.create({
    
});
