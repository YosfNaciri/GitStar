import React, {Component} from 'react';
import { View, Text ,StyleSheet, TouchableOpacity} from 'react-native';
import { Card } from 'react-native-elements';
import Header from './Header'
import Footer from './Footer'

export default class CardComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
         
        };
      }
      
    
      render() {
        return ( 
         /*  <View>
              <Text>{this.props.item.name}</Text>
              <Text>{this.props.item.description }</Text>
           </View>         */
           <Card key={this.props.item.id}>
               <View> 
                  <TouchableOpacity onPress={()=>{console.warn("pressed !")}}>
                     <Header name={this.props.item.name} />
                        <View style={styles.Body}>
                           <View style ={{width : '100%'}}>
                              <Text style={styles.Content}>{this.props.item.description}</Text>
                           </View>
                        </View> 
                     <Footer owner={this.props.item.owner} star={this.props.item.stargazers_count}/>
                  </TouchableOpacity>
               </View>
            </Card>        
        );
      }
}

const styles = StyleSheet.create({
    
});
