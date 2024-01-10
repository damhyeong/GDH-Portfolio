import React, {useCallback, useEffect, useRef, useState} from "react";
import './SkillSet.scss'
import SkillSection from "./SkillSection/SkillSection";

interface iconInfo{
    url : string;
    height : number;
}

const SkillSet = () => {
    const frontIconUrls : iconInfo[] = [
        {
            url : "/language-icons/front/HTML-CSS-JS-icon.png",
            height : 80,
        },
        {
            url : "/language-icons/front/React.png",
            height : 80,
        },
        {
            url : "/language-icons/front/Typescript.png",
            height : 80,
        },
        {
            url : "/language-icons/front/Sass.png",
            height : 80,
        }
    ].map((iconInfo) => {
        return {
            ...iconInfo,
            url : process.env.PUBLIC_URL + iconInfo.url
        };
    });

    const backIconUrls : iconInfo[] = [
        {
            url : "/language-icons/back/Java.png",
            height : 80,
        },
        {
            url : "/language-icons/back/Spring.png",
            height : 80,
        },
        {
            url : "/language-icons/back/MySQL.png",
            height : 80,
        },
    ].map((iconInfo) => {
        return {
            ...iconInfo,
            url : process.env.PUBLIC_URL + iconInfo.url
        };
    });

    const versionIconUrls : iconInfo[] = [
        {
            url : "/language-icons/version/Git.png",
            height : 80,
        },
        {
            url : "/language-icons/version/Github.png",
            height : 80,
        },
    ].map((iconInfo) => {
        return {
            ...iconInfo,
            url : process.env.PUBLIC_URL + iconInfo.url
        };
    });

    const editorIconUrls : iconInfo[] = [
        {
            url : "/language-icons/editor/Eclipse.png",
            height : 80,
        },
        {
            url : "/language-icons/editor/Figma.png",
            height : 80,
        },
        {
            url : "/language-icons/editor/IntelliJ_IDEA.png",
            height : 80,
        },
        {
            url : "/language-icons/editor/VSCode.png",
            height : 80,
        },
    ].map((iconInfo) => {
        return {
            ...iconInfo,
            url : process.env.PUBLIC_URL + iconInfo.url
        };
    });

    const certificateIconUrls : iconInfo[] = [
        {
            url : "/language-icons/certificate/certi-1.png",
            height : 80,
        }
    ].map((iconInfo) => {
        return {
            ...iconInfo,
            url : process.env.PUBLIC_URL + iconInfo.url
        };
    });

    const etcIconUrls : iconInfo[] = [
        {
            url : "/language-icons/etc/AWS.png",
            height : 80,
        },
        {
            url : "/language-icons/etc/Jira-Confluence.png",
            height : 80,
        },
    ].map((iconInfo) => {
        return {
            ...iconInfo,
            url : process.env.PUBLIC_URL + iconInfo.url
        };
    });

    const [isActive, setIsActive] = useState<boolean>(false);
    const elementRef = useRef<HTMLDivElement>(null);

    const handleScroll = useCallback(() => {
        if(elementRef.current){
            const position = elementRef.current.getBoundingClientRect();

            if(position.top <= 400){
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    // 뒤엎어야 함
    return (
        <div ref={elementRef} className={`skill-set-component ${isActive ? "active" : ""}`}>
            <div className={"skill-set"}>
                <div className={"skill-set-title"}>
                    Skill Set
                </div>
                <hr/>
                <div className={"skill-sections"}>
                    <div className={"skill-section"}>
                        <div className={"skill-section-component"}>
                            <div className={"section-title"}>
                                {"Front-End"}
                            </div>
                            <div className={"skill-line"} style={{width : "20rem"}}>
                                <div className={"skill-cell"}>
                                    <img src={process.env.PUBLIC_URL + "/language-icons/front/HTML-CSS-JS-icon.png"} style={{width : "18rem"}}/>
                                </div>
                                <div className={"skill-cell"}>
                                    <img src={process.env.PUBLIC_URL + "/language-icons/front/React.png"} style={{width : "18rem"}}/>
                                </div>
                                <div className={"skill-cell"}>
                                    <div className={"several-img"}>
                                        <img src={process.env.PUBLIC_URL + "/language-icons/front/Typescript.png"} style={{width : "6rem"}}/>
                                    </div>
                                    <img src={process.env.PUBLIC_URL + "/language-icons/front/Sass.png"} style={{width : "10rem"}}/>
                                </div>
                            </div>
                        </div>
                        <SkillSection title={"Front-End"} imgLinks={frontIconUrls}/>
                        <SkillSection title={"Etc"} imgLinks={etcIconUrls}/>
                    </div>
                    <div className={"skill-section"}>
                        <SkillSection title={"Back-End"} imgLinks={backIconUrls}/>
                        <SkillSection title={"Version-control"} imgLinks={versionIconUrls}/>
                    </div>
                    <div className={"skill-section"}>
                        <SkillSection title={"Editor"} imgLinks={editorIconUrls}/>
                        <SkillSection title={"Certificate"} imgLinks={certificateIconUrls}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SkillSet;