import React, {Component} from 'react';
import { View, Text ,StyleSheet, TouchableOpacity} from 'react-native';
import { Card } from 'react-native-elements';
import Header from './Header'
import Footer from './Footer'
import { connect } from 'react-redux'

class CardComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
         
        };
      }
      
    
      render() {
        return ( 
         <Card key={this.props.repo.id}>
            <View> 
               <TouchableOpacity onPress={()=>{console.warn("pressed !")}}>
                  <Header name={this.props.repo.name} />
                     <View style={styles.Body}>
                        <View style ={{width : '100%'}}>
                           <Text style={styles.Content}>{this.props.repo.description}</Text>
                        </View>
                     </View> 
                  <Footer owner={this.props.repo.owner} star={this.props.repo.stargazers_count}/>
               </TouchableOpacity>
            </View>
      </Card>        
        );
      }
}

const styles = StyleSheet.create({
    
});

const mapStateToProps = (state) => { 
   return {
    
   }
 }
 const mapDispatchToProps = dispatch => {
   return {
     
    
   }
 }
 export default connect(mapStateToProps,mapDispatchToProps)(CardComponent)