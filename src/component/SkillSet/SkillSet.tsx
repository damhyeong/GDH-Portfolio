import React, {useCallback, useEffect, useRef, useState} from "react";
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

    const editorIconUrls : string[] = [
        "/language-icons/editor/Eclipse.png",
        "/language-icons/editor/Figma.png",
        "/language-icons/editor/Intellij_IDEA.png",
        "/language-icons/editor/VSCode.png",
    ].map((url) => process.env.PUBLIC_URL + url);

    const certificateIconUrls : string[] = [
        "/language-icons/certificate/certi-1.png",
    ].map((url) => process.env.PUBLIC_URL + url);

    const etcIconUrls : string[] = [
        "/language-icons/etc/AWS.png",
        "/language-icons/etc/Jira-Confluence.png",
    ].map((url) => process.env.PUBLIC_URL + url);

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
                <div className={"skill-section"}>
                    <SkillSection title={"Front-End"} imgLinks={frontIconUrls}/>
                </div>
                <div className={"skill-section"}>
                    <SkillSection title={"Back-End"} imgLinks={backIconUrls}/>
                </div>
                <div className={"skill-section"}>
                    <SkillSection title={"Version-control"} imgLinks={versionIconUrls}/>
                </div>
                <div className={"skill-section"}>
                    <SkillSection title={"Editor"} imgLinks={editorIconUrls}/>
                </div>
                <div className={"skill-section"}>
                    <SkillSection title={"Certificate"} imgLinks={certificateIconUrls}/>
                </div>
                <div className={"skill-section"}>
                    <SkillSection title={"Etc"} imgLinks={etcIconUrls}/>
                </div>
            </div>
        </div>
    )
}
export default SkillSet;