import { TOGGLE_DARK_THEME, TOGGLE_LIGHT_THEME } from './Types';
import {themes} from './Theme'


//only two functions to dispatche to current theme to use.
export function onToggleDark() {
    const theme = themes.dark_theme
return {
  type: TOGGLE_DARK_THEME,
  theme : theme
}
}

export function onToggleLight(){
    const theme = themes.light_theme
return {
  type: TOGGLE_LIGHT_THEME,
  theme: theme
}
}
