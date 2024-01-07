import React from "react";
import './SkillSet.scss'
import SkillSection from "./SkillSection/SkillSection";

const SkillSet = () => {
    const frontIconUrls : string[] = ["/language-icons/HTML-CSS-JS-icon.png", "/language-icons/React.png"].map((url) => process.env.PUBLIC_URL + url);
    const backIconUrls : string[] = ["/language-icons/Java.png", "/language-icons/Spring.png"].map((url) => process.env.PUBLIC_URL + url);
    const versionIconUrls : string[] = ["/language-icons/Git.png", "/language-icons/Github.png"].map((url) => process.env.PUBLIC_URL + url);

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