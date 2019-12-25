import React, {Component} from 'react';
import { StyleSheet, ActivityIndicator} from 'react-native';
import { connect } from 'react-redux';
import WebView from 'react-native-webview';


//this view is where we can seee the repo we selected to visit. 

class WebPage extends Component{

    constructor(props) {
        super(props);
        this.state = {  

        };
    }

    LoadingView() {
      return (
       <ActivityIndicator
          color='#24292e'
          size='large'
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        />
      );
    }

    render() {
        const { navigation } = this.props;
        return (  
         <WebView
          source={{uri: navigation.getParam('url')}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          renderLoading={this.LoadingView} 
          startInLoadingState={true}
        />
       

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
  export default connect(mapStateToProps,mapDispatchToProps) (WebPage);