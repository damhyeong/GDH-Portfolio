import React, { useState, useEffect, useRef } from "react";
import {FaRegDotCircle} from "react-icons/fa";

import "./Main.scss";


const Main: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const helloWorldRef = useRef<HTMLDivElement | null>(null);
    const [backgroundImage, setBackgroundImage] = useState('');
    const [loadingBackground, setLoadingBackground] = useState<boolean>(true);

    const loadImage = () => {
        const image = new Image();
        image.src = `${process.env.PUBLIC_URL}/clean-sky-building.png`;
        image.onload = () => {
            setBackgroundImage(image.src);
            console.log("Image loaded");
        };
        setLoadingBackground(false);
    };

    // 컴포넌트가 마운트될 때 이미지를 로드합니다.
    useEffect(() => {
        loadImage();
    }, []);

    useEffect(() => {
        const mainViewComponent = document.querySelectorAll(".main-component")

        const mainObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                setIsVisible(true);
            })
        }, {
            threshold: 0.5

        });

        mainViewComponent.forEach(mainView => {
            mainObserver.observe(mainView)
        })


    }, []);

    return (
         loadingBackground  ?
            (<div className={"main-component"} style={{backgroundColor : "black"}}>
                <div className={"loading-text"}>
                    Loading...
                </div>
                <div className={"loading-circles"}>
                    <div className={"odd-circle"}>
                        <FaRegDotCircle/>
                    </div>
                    <div className={"even-circle"}>
                        <FaRegDotCircle/>
                    </div>
                    <div className={"odd-circle"}>
                        <FaRegDotCircle/>
                    </div>
                </div>
            </div>) :

        (<div className={`main-component`}
             style={{ backgroundImage: `url(${backgroundImage})` }}
             onLoad={() => console.log("complete")}
        >
            <div
                className={`hello-world ${isVisible ? "fade-in" : "fade-out"}`}
                ref={helloWorldRef}
                style={isVisible ? {opacity : 1} : {opacity : 0}}
            >
                Hello, World!
            </div>
            <div className={`hello-world-korean ${isVisible ? "fade-in" : "fade-out"}`}
                style={isVisible ? {opacity : 1} : {opacity : 0}}
            >
                <div className={`korean-text-1 ${isVisible ? "fade-in" : "fade-out"}`}>
                    세상과 직접 부딪혀 얻은 지혜를
                </div>
                <div className={`korean-text-2 ${isVisible ? "fade-in" : "fade-out"}`}>
                    코드로서 풀이하고자 노력합니다.
                </div>
            </div>
        </div>)
    );
};

export default Main;
