import { createStore, combineReducers , applyMiddleware} from 'redux';
import RepositoriesReducer from './reducers/RepositoriesReducer'
import ThemeReducer from './reducers/ThemeReducer'
import thunk from 'redux-thunk';

//the main store of our app
//combinnig the repo reduhcer and the theme reducer.

const rootReducer = combineReducers({
  repositories: RepositoriesReducer,
  themes : ThemeReducer
});


export const  store =  createStore(rootReducer, {} ,applyMiddleware(thunk));

