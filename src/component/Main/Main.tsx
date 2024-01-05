/*
import React from "react";
import "./Main.scss"

const Main = () => {
    return (
        <div className={"main-component"}>
            <div className={"hello-world"}>
                Hello, World!
            </div>
            <div className={"hello-world-korean"}>
                <div className={"korean-text-1"}>
                    다양한 세상과 코드의 만남.
                </div>
                <div className={"korean-text-2"}>
                    코드로 세상을 재해석합니다.
                </div>

            </div>
        </div>
    )
}
export default Main;*/

import React, { useState, useEffect, useRef } from "react";
import "./Main.scss";

const Main: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const helloWorldRef = useRef<HTMLDivElement | null>(null);

    const callbackFunction = (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, {
            root: null,
            threshold: 0.8 // 10%가 보일 때 애니메이션을 트리거합니다.
        });

        if (helloWorldRef.current) observer.observe(helloWorldRef.current);

        return () => {
            if (helloWorldRef.current) observer.unobserve(helloWorldRef.current);
        };
    }, []);

    return (
        <div className="main-component">
            <div
                className={`hello-world ${isVisible ? "fade-in" : "fade-out"}`}
                ref={helloWorldRef}
            >
                Hello, World!
            </div>
            <div className={`hello-world-korean ${isVisible ? "fade-in" : "fade-out"}`}>
                <div className={`korean-text-1 ${isVisible ? "fade-in" : "fade-out"}`}>
                    다양한 세상과 코드의 만남.
                </div>
                <div className={`korean-text-2 ${isVisible ? "fade-in" : "fade-out"}`}>
                    코드로 세상을 재해석합니다.
                </div>
            </div>
        </div>
    );
};

export default Main;
