import React, {useCallback, useEffect, useRef, useState} from "react";
import './SkillSet.scss'
// import SkillSection from "./SkillSection/SkillSection";

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
        {
            url : "/language-icons/editor/XCode.png",
            height : 80,
        }
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
            url : "/language-icons/etc/Jira.png",
            height : 80,
        },
        {
            url : "/language-icons/etc/Confluence.png",
            height : 80,
        }
    ].map((iconInfo) => {
        return {
            ...iconInfo,
            url : process.env.PUBLIC_URL + iconInfo.url
        };
    });

    const [isActive, setIsActive] = useState<boolean>(false);
    const elementRef = useRef<HTMLDivElement>(null);
    const publicUrl = process.env.PUBLIC_URL;
    const skillLineStyle = {
        width : "20rem",
    }

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
                            <div className={"skill-line"} style={skillLineStyle}>
                                <div className={"skill-cell"}>
                                    <img alt={"skill"} src={publicUrl + "/language-icons/front/HTML-CSS-JS-icon.png"} style={{width : "17rem"}}/>
                                </div>
                                <div className={"skill-cell"}>
                                    <img alt={"skill"} src={publicUrl + "/language-icons/front/React.png"} style={{width : "17rem"}}/>
                                </div>
                                <div className={"skill-cell"}>
                                    <div className={"icon-img"}>
                                        <img alt={"skill"} src={publicUrl + "/language-icons/front/Typescript.png"} style={{width : "7rem"}}/>
                                    </div>
                                    <div className={"icon-img"}>
                                        <img alt={"skill"} src={publicUrl + "/language-icons/front/Sass.png"} style={{width : "10rem"}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"skill-section-component"}>
                            <div className={"section-title"}>
                                {"Etc"}
                            </div>
                            <div className={"skill-line"} style={skillLineStyle}>
                                <div className={"skill-cell"}>
                                    <img alt={"skill"} src={publicUrl + "/language-icons/etc/AWS.png"} style={{width : "18rem"}}/>
                                </div>
                                <div className={"skill-cell"}>
                                    <img alt={"skill"} src={publicUrl + "/language-icons/etc/Jira.png"} style={{width : "10rem"}}/>
                                </div>
                                <div className={"skill-cell"}>
                                    <img alt={"skill"} src={publicUrl + "/language-icons/etc/Confluence.png"} style={{width : "18rem"}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"skill-section"}>
                        <div className={"skill-section-component"}>
                            <div className={"section-title"}>
                                {"Back-End"}
                            </div>
                            <div className={"skill-line"} style={skillLineStyle}>
                                <div className={"skill-cell"}>
                                    <img alt={"skill"} src={publicUrl + "/language-icons/back/Spring.png"} style={{width : "18rem"}}/>
                                </div>
                                <div className={"skill-cell"}>
                                    <div className={"icon-img"}>
                                        <img alt={"skill"} src={publicUrl + "/language-icons/back/Java.png"} style={{width : "8rem"}}/>
                                    </div>
                                    <div>
                                        <img alt={"skill"} src={publicUrl + "/language-icons/back/MySQL.png"} style={{width : "10rem"}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"skill-section-component"}>
                            <div className={"section-title"}>
                                {"Ver-Control"}
                            </div>
                            <div className={"skill-line"} style={skillLineStyle}>
                                <div className={"skill-cell"}>
                                    <img alt={"skill"} src={publicUrl + "/language-icons/version/Git.png"} style={{width : "12rem"}}/>
                                </div>
                                <div className={"skill-cell"}>
                                    <img alt={"skill"} src={publicUrl + "/language-icons/version/Github.png"} style={{width : "12rem"}}/>
                                </div>
                            </div>
                        </div>
                        <div className={"skill-section-component"}>
                            <div className={"section-title"}>
                                {"Mobile"}
                            </div>
                            <div className={"skill-line"} style={skillLineStyle}>
                                <div className={"skill-cell"}>
                                    <img alt={"skill"} src={publicUrl + "/language-icons/mobile/Swift.png"} style={{width : "15rem"}}/>
                                </div>
                                <div className={"skill-cell"}>
                                    <img alt={"skill"} src={publicUrl + "/language-icons/mobile/WatchOs.png"} style={{width : "17rem"}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"skill-section"}>
                        <div className={"skill-section-component"}>
                            <div className={"section-title"}>
                                {"Editor"}
                            </div>
                            <div className={"skill-line"} style={skillLineStyle}>
                                <div className={"skill-cell"}>
                                    <img alt={"skill"} src={publicUrl + "/language-icons/editor/Eclipse.png"} style={{width : "16rem"}}/>
                                </div>
                                <div className={"skill-cell"}>
                                    <img alt={"skill"} src={publicUrl + "/language-icons/editor/Figma.png"} style={{width : "15rem"}}/>
                                </div>
                                <div className={"skill-cell"}>
                                    <img alt={"skill"} src={publicUrl + "/language-icons/editor/IntelliJ_IDEA.png"} style={{width : "18rem"}}/>
                                </div>
                                <div className={"skill-cell"}>
                                    <img alt={"skill"} src={publicUrl + "/language-icons/editor/VSCode.png"} style={{width : "19rem"}}/>
                                </div>
                                <div className={"skill-cell"}>
                                    <img alt={"skill"} src={publicUrl + "/language-icons/editor/XCode.png"} style={{width : "15rem"}}/>
                                </div>
                            </div>
                        </div>
                        <div className={"skill-section-component"}>
                            <div className={"section-title"}>
                                {"Editor"}
                            </div>
                            <div className={"skill-line"} style={skillLineStyle}>
                                <div className={"skill-cell"}>
                                    <img alt={"skill"} src={publicUrl + "/language-icons/certificate/certi-1.png"} style={{width : "18rem"}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SkillSet;