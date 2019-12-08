import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';
import {getRepos} from './src/api/API'
import moment from 'moment';
import Card from './src/components/Card'

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
      page : 1,
      items : []
    }
  }

  componentDidMount(){

    let date = this.getDate30()
    getRepos(date,this.state.page).then( data => {
      this.setState({
        items :[ ...this.state.items, ...data.items],
        isLoading : false
      })
    

    });

  }

  getDate30(){ // funtction to help us get the date one month before the current date.
    let today = new Date();
    let lastMonthDate = moment(today).subtract(30,'day').format("YYYY-MM-DD");
  // we substract 30 days from th current date (-1 month)
    return   lastMonthDate;
  }


  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.items}
          keyExtractor={(item,index) => index.toString()}
          renderItem={({item}) => <Card item = {item}/>}
        />
      </View>
    );
  }
}
