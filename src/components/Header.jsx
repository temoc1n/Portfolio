import React from "react";
import logo from '../assets/logo.png'

const Header = () => {
    return(
        <React.Fragment>
            <div className="text-center mb-5 header pt-3">
                <img className="img-fluid logo" alt="logo" src={logo}/>
                <hr />
            </div>
        </React.Fragment>
    )
}

export default Header;