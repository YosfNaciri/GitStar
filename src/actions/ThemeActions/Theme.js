import * as color from '../../colors/Colors'

//stting the properties for the dark and light theme! 

export const themes = {
        light_theme : {
        id:"light_theme",
        body: color.BODY_LIGHT,
        card: color.CARD_LIGHT,
        navbar: color.NAV_LIGHT,
        navbarText : color.TEXT_PRIMARY_DARK,
        text_primary: color.TEXT_PRIMARY_DARK,
        text_secondary: color.TEXT_SECONDARY_DARK,
        color : color.GREY,

        },
        dark_theme: {
        id:"dark_theme",
        body: color.BODY_DARK,
        card: color.CARD_DARK,
        navbar: color.NAV_DARK,
        navbarText : color.TEXT_SECONDARY_LIGHT,
        text_primary: color.TEXT_PRIMARY_LIGHT,
        text_secondary: color.TEXT_SECONDARY_LIGHT,
        color : color.GREY,

        }
}
 
 