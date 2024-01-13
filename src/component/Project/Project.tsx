import React, {useCallback, useEffect, useRef, useState} from "react";
import './Project.scss'
import GifPlayer from "../GifPlayer/GifPlayer";

const Project = () => {
    const publicUrl : string = process.env.PUBLIC_URL;
    /** 웹 페이지에 들어온 사용자가 본격적으로 Project 컴포넌트에 진입했음을 알린다. */
    const [isActive, setIsActive] = useState<boolean>(false);
    const elementRef = useRef<HTMLDivElement>(null);
    const [displayWatch, setDisplayWatch] = useState<boolean>(true);
    const [isStopGif, setIsStopGif] = useState<boolean>(true);


    const handleScroll = useCallback(() => {
        if(elementRef.current){
            const position = elementRef.current.getBoundingClientRect();

            if(position.top <= 400){
                setIsActive(true);
                setDisplayWatch(false);
            } else {
                setIsActive(false);
                setDisplayWatch(true);
            }
        }
    }, []);

    const gifClick = useCallback(() => {
        setIsStopGif(!isStopGif);
        console.log(isStopGif);
    }, [isStopGif]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <div ref={elementRef} className={`project-component ${isActive ? "active" : ""}`}>
            <div className={"project-wrapper"}>
                <div className={"watch-effect-wrapper"} style={displayWatch ? {opacity : 0} : {opacity : 1}}>
                    <GifPlayer
                        stopImg={process.env.PUBLIC_URL + "/gif/watch-effect.png"}
                        startImg={process.env.PUBLIC_URL + "/gif/watch-effect.gif"}
                        alt={"Watch-Effect"}
                    />
                </div>
                <div className={"watch-effect-introduce"}>
                    a
                </div>
            </div>
        </div>
    )
}
export default Project