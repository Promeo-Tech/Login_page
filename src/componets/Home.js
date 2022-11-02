import React from "react";
import '../index.css'

function Home() {
    const logout = () => {
        // since the key username and password is safe in the localstorage I need to clear it and 
        // reload the page to go back to the login screen
        localStorage.clear();
        window.location.reload();
}

return ( 
        <>
        <h1 className="homeMessage">Welcome to your website!</h1>
        <button className="logout" onClick={logout} > Logout</button>
        <div>
                <img src="https://i.ytimg.com/vi/a5jmSipdH8U/maxresdefault.jpg"></img>
        </div>

        </>
        )
}

export default Home;