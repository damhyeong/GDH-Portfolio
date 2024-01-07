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
            <div className={"skill-line"}>
                {imgLinks.map(
                    (strUrl, index) =>
                        <div className={"skill-cell"}>
                            <img src={strUrl} height={80}/>
                        </div>
                )}
            </div>
        </div>
    )
}
export default SkillSection;