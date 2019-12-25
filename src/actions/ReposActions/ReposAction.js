import {FETCHING_REPOS,FETCHING_REPOS_FAILURE,FETCHING_REPOS_SUCCESS,REFRESH_REPOS,REFRESH_REPOS_FAILURE,REFRESH_REPOS_SUCCESS} from './Types'
import { REPOS_OPT_URL , REPOS_URL } from  '../../api/API'

//the methods in order to fetch or refresh data. 

export function getFetchRepos() { //to fetch the datat, we should dispatch the fetching type to init the loding state to true.
    return {
      type: FETCHING_REPOS,
    }
  }
  
  export function getReposSuccess(repos){ //once the datat is recived, we dispatch the success type to store it in our store.
    return {
      type: FETCHING_REPOS_SUCCESS, 
      repos: repos,
    }
  }
  export function getReposFailure(){  //if it failes, we dispatch the fail type (rturns true or false), 
                                      //it's handy when implementing the infinite scroll.
    return {
      type: FETCHING_REPOS_FAILURE
    }
  }
  
  export function getRefreshRepos() {  //the same process goes for the refreshing types.
    return {
      type: REFRESH_REPOS,
    }
  }
  
  export function refreshReposSuccess(repos){
    return {
      type: REFRESH_REPOS_SUCCESS,
      repos: repos,
    }
  }
  
  export function refreshReposFailure(){
    return {
      type: REFRESH_REPOS_FAILURE
    }
  }

  export function fetchRepos(date,page) { //the main function for fetching, where the link is recived from the api.js file.
    return (dispatch) => {
        dispatch(getFetchRepos()) //setting loading to true.
       return(fetch(REPOS_URL+''+date+''+REPOS_OPT_URL+''+page)
       )
       .then(res => res.json())
       .then(json => {    
           dispatch(getReposSuccess(json)) //data recived successfully.
         })
       .catch( err => dispatch(getReposFailure())) // if error.
     }
  }

  export function refreshRepos(date) { // the same goes for the refreshing function.
      const page = 1
    return (dispatch) => {
        dispatch(getRefreshRepos())
       return(fetch(REPOS_URL+''+date+''+REPOS_OPT_URL+''+page)
       )
       .then(res => res.json())
       .then(json => {    
           dispatch(refreshReposSuccess(json))
         })
       .catch( err => dispatch(refreshReposFailure()))
     }
  }