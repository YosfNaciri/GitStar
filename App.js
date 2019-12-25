import React from 'react';
import {  View  } from 'react-native';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
      page : 1,
      date : null
    }
  }

  render(){

    return(
      <View style={{flex: 1, paddingBottom:20}}>
    
      </View>
    
    );
    }
  }


export default App

