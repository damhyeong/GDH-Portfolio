import React from "react";
import "./Introduce.scss";
import AboutMe from "../AboutMe/AboutMe";

const Introduce = () => {
    return (
        <div className={"introduce-component"}>
            <div className={"introduce-title"}>
                Introduce About Me
            </div>
            <hr/>
            <div className={"introduce-information"}>
                <AboutMe/>
            </div>
        </div>
    )
}
export default Introduce;