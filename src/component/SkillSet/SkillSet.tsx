import React from "react";
import './SkillSet.scss'
import SkillSection from "./SkillSection/SkillSection";

// `url(${process.env.PUBLIC_URL + '/clean-sky-building.jpg'})`

const SkillSet = () => {
    const frontIconUrls = ["./language-icons/HTML-CSS-JS-icon.png", "./language-icons/React.png"];
    const backIconUrls : string[] = ["./language-icons/Java.png", "./language-icons/Spring.png"];
    const versionIconUrls : string[] = ["./language-icons/Git.png", "./language-icons/Github.png"];

    return (
        <div className={"skill-set-component"}>
            <div className={"skill-set"}>
                <div className={"skill-set-title"}>
                    Skill Set
                </div>
                <hr/>
                <div className={"skill-section"}>
                    <SkillSection title={"front"} imgLinks={frontIconUrls}/>
                </div>
                <div className={"skill-section"}>
                    <SkillSection title={"back"} imgLinks={backIconUrls}/>
                </div>
                <div className={"skill-section"}>
                    <SkillSection title={"version-control"} imgLinks={versionIconUrls}/>
                </div>
            </div>
        </div>
    )
}
export default SkillSet;