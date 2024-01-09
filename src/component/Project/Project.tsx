import React, {useCallback, useEffect, useRef, useState} from "react";
import './Project.scss'

const Project = () => {
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

    return (
        <div ref={elementRef} className={`project-component ${isActive ? "active" : ""}`}>
            <div>
                asdf
            </div>
        </div>
    )
}
export default Project