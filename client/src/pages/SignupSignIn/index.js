import React, {useState} from "react";
import { Link } from "react-router-dom";

import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";
import Overlay from "../../components/Overlay";

import "./style.css";

function SignupSignin () {
    const [rightPanelActive, setRightPanelActive] = useState(false);

    const toggle = () => {
        setRightPanelActive(!rightPanelActive)
    };

    return(<>
        <div className="text-center">
            <h1><Link to="/rules">Or continue as guest</Link> </h1>
        </div>
        <div
            className={`containersignup ${rightPanelActive ? `right-panel-active` : ``}`}
            id="container"
        >
            <SignUp />
            <SignIn />
            <Overlay
                toggle={toggle}
            />
        </div>
        </>
    ) 

}

export default SignupSignin;