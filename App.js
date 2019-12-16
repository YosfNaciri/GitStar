import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';
import moment from 'moment';
import CardComponent from './src/components/Card';
import { connect } from 'react-redux';
import { fetchRepos,refreshRepos } from './src/actions/ReposAction';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
      page : 1,
      date : null
    }
  }

  componentDidMount(){
    this.setState({date : this.getDate30()}, () => this._loadRepos(this.state.date,this.state.page))
   }

  getDate30(){ // funtction to help us get the date one month before the current date.
    let today = new Date();
    let lastMonthDate = moment(today).subtract(30,'day').format("YYYY-MM-DD");
  // we substract 30 days from th current date (-1 month)
    return   lastMonthDate;
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
          <ActivityIndicator size="large" color="#000000"/>
        </View>
      )
    }
  }

  render(){

    return(
      <View style={{flex: 1, paddingBottom:20}}>
        <FlatList
          data={this.props.repos}
          keyExtractor={(item,index) => index.toString()}
          renderItem={({item}) => <CardComponent repo = {item}/>}
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
    error: state.repositories.error
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
export default connect(mapStateToProps,mapDispatchToProps)(App)

