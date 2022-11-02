
import React, { useRef } from "react";
import '../index.css'
import Home from "./Home.js"

function Login() { 
    //the useref is something I learn after researching more about react. 
    // useref will return an object that can be used the whole lifecycle 
    // of the component

        const username = useRef();
        const password = useRef();

        // localstorage is a feature of the browsers to store or persist the data for later use.
        // this is where I will store the username and password 
        // so that I can use it later to log in
        const getUsername = localStorage.getItem("usernameData");
        const getPasword = localStorage.getItem("passwordData");
        const handleSubmit = () =>{
            if (username.current.value == "astdenis4" && password.current.value == "123456" ){
                localStorage.setItem("usernameData","astdenis4")
                localStorage.setItem("passwordData","123456")
            }
        }

        return (
            <div> 
                {
                

                    getUsername && getPasword ?
                    <Home/>:
                    // if username and password matches the one in the localstorage the home page will load
                    // therefore, logging in the user
                <form onSubmit={handleSubmit}>
                    <img id="welcomeimg" src="https://d11yoeluzb5ina.cloudfront.net/wp-content/uploads/2015/07/04222222/Welcome-beach.jpg"></img>
                    <div> <h3>Log In</h3></div>
                    <div className="m-1">
                    <input className="username" placeholder="username" type="text" ref={username}/>
                    {/* this is where the useRef comes in handy as it will set the value of the 
                    input to the username and it will check to see if it is the one that we want it to be  */}
                    </div>
                    <div className="m-1">
                        {/* here useref is doing the same thing as the username but for the password */}
                    <input className="password" placeholder="password" type="password" ref={password} />
                    {/* using a form i created a checkbox to use as a remember me bottom */}
                    <div class="form-check"> 
                    <input type="checkbox" class="form-check-input" id="dropdownCheck2"/>
                    <label id="checkbox" class="form-check-label" for="dropdownCheck2">
                    Remember me
                    </label>
                    </div>
                    <br/>
                    <button>Login</button>
                    </div>
                </form>
                }
            </div>
          
        );

    }
       



  export default Login;
