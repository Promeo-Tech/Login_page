import React from "react";
import NavBar from "./NavLogin";
import Login from './logincode'
// elem will be use instead of react.createelement so that I dont have to keep typing it
let elem = React.createElement; 
// in here I render the navbar and the login page together

export default class LoginApp1 extends React.Component {
    render() {
        return elem('div',{}, 
        elem(NavBar, {}, null),
        elem(Login,{},null)
        );
    }
}