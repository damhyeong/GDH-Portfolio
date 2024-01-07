import React from "react";
import './SkillSection.scss'
import * as url from "url";

interface PFace{
    title : string;
    imgLinks : string[];
}

const SkillSection = ({title, imgLinks} :PFace) => {
    return (
        <div className={"skill-section-component"}>
            <div className={"section-title"}>
                {title}
            </div>
            <div>
                {imgLinks.map((strUrl, index) => <div>${strUrl}</div> ) }
            </div>
        </div>
    )
}
export default SkillSection;