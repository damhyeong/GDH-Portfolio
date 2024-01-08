import React from "react";
import './SkillSet.scss'
import SkillSection from "./SkillSection/SkillSection";

const SkillSet = () => {
    const frontIconUrls : string[] = [
        "/language-icons/front/HTML-CSS-JS-icon.png",
        "/language-icons/front/React.png",
        "/language-icons/front/Typescript.png",
        "/language-icons/front/Sass.png"
    ].map((url) => process.env.PUBLIC_URL + url);

    const backIconUrls : string[] = [
        "/language-icons/back/Java.png",
        "/language-icons/back/Spring.png",
        "/language-icons/back/MySQL.png"
    ].map((url) => process.env.PUBLIC_URL + url);

    const versionIconUrls : string[] = [
        "/language-icons/version/Git.png",
        "/language-icons/version/Github.png",
    ].map((url) => process.env.PUBLIC_URL + url);

    return (
        <div className={"skill-set-component"}>
            <div className={"skill-set"}>
                <div className={"skill-set-title"}>
                    Skill Set
                </div>
                <hr/>
                <div className={"skill-section"}>
                    <SkillSection title={"Front-End"} imgLinks={frontIconUrls}/>
                </div>
                <div className={"skill-section"}>
                    <SkillSection title={"Back-End"} imgLinks={backIconUrls}/>
                </div>
                <div className={"skill-section"}>
                    <SkillSection title={"version-control"} imgLinks={versionIconUrls}/>
                </div>
            </div>
        </div>
    )
}
export default SkillSet;