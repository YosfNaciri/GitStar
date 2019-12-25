import React from 'react';
import { FlatList, ActivityIndicator, View  } from 'react-native';
import moment from 'moment';

import CardComponent from '../components/Card/Card'
import { connect } from 'react-redux';

const lastMonthDate = moment(new Date()).subtract(30,'day').format("YYYY-MM-DD"); // one variable to get the date a month ago 

import { fetchRepos,refreshRepos } from '../actions/ReposActions/ReposAction';

//this is the main screan for our repos list
//infinit scrolling is already a feature in react-native : Thank you Facebook ^^.

class HomeScreen extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
      page : 1,
      date : null
    }
  }

  componentDidMount(){
    this.setState({date : lastMonthDate}, () => this._loadRepos(this.state.date,this.state.page))
   }

  _refresh(date){
    this.setState({page : 1})
    this.props.refreshRepos(date)
  }

  _loadRepos(date,page){
    this.props.getRepos(date,page)
  }


  _spinner(){

    if(this.props.isFetching && !this.props.isRefreshing){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator size="large" color={this.props.theme.text_primary}/>
        </View>
      )
    }
  }

  render(){

    return(
      <View style={{flex: 1 , backgroundColor : this.props.theme.body}}>
        <FlatList
          data={this.props.repos}
          keyExtractor={(item,index) => index.toString()}
          renderItem={({item}) => <CardComponent navigation={() => this.props.navigation.navigate('WebView', {url : item.html_url})} repo = {item}/>}
          onEndReachedThreshold={0.1}
          onEndReached={() => {
            this.setState({page : this.state.page+1}, () => this._loadRepos(this.state.date,this.state.page))
              }}
          refreshing={this.props.isRefreshing}
          onRefresh={() => this._refresh(this.state.date) }    
         ListFooterComponent={this._spinner()} 
        />
          
      </View>
    
    );
    }
  }


const mapStateToProps = (state) => { 
  return {
    repos: state.repositories.repos,
    isFetching: state.repositories.isFetching,
    isRefreshing : state.repositories.isRefreshing,
    error: state.repositories.error,
    theme: state.themes.theme
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getRepos: (date,page) => {
      dispatch(fetchRepos(date,page))
    },
    refreshRepos: (date) => {
      dispatch(refreshRepos(date))
    },
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen)

