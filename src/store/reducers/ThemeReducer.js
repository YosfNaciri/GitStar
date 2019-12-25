import { TOGGLE_DARK_THEME, TOGGLE_LIGHT_THEME } from '../../actions/ThemeActions/Types';
import * as color from '../../colors/Colors'

//the theme reducer where we act based on the action types to specify our "Globale app variables" if we can call the so ^^.
//by default, our app is set for the light theme.

const INITIAL_STATE = { 
    theme : {
      
        id:"light_theme",
        body: color.BODY_LIGHT,
        card: color.CARD_LIGHT,
        navbar: color.NAV_LIGHT,
        navbarText : color.TEXT_PRIMARY_DARK,
        text_primary: color.TEXT_PRIMARY_DARK,
        text_secondary: color.TEXT_SECONDARY_DARK,
        color : color.GREY,
      
    } ,
    toggleDark: false,
     }

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
 ///////////////Fetching actions/////////
 case TOGGLE_DARK_THEME:{
    return { ...state, toggleDark: true, theme: action.theme };
  }
  case TOGGLE_LIGHT_THEME:{
    console.log(action.theme);
    return { ...state, toggleDark : false, theme: action.theme };
  }
///////////////Default actions/////////         
    default:
      return state;
  }
}