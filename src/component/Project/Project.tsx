import React, {useCallback, useEffect, useRef, useState} from "react";
import {CgArrowsExpandRight, CgCompressRight} from "react-icons/cg";
import './Project.scss'
import GifPlayer from "../GifPlayer/GifPlayer";
import ImageScroll from "../ImageScroll/ImageScroll";
import ExpandImageScroll from "../ExpandImageScroll/ExpandImageScroll";

const Project = () => {
    const publicUrl : string = process.env.PUBLIC_URL;
    /** 웹 페이지에 들어온 사용자가 본격적으로 Project 컴포넌트에 진입했음을 알린다. */
    const [isActive, setIsActive] = useState<boolean>(false);
    /** project 단에 들어올 시, 배경색을 #222로 바꾸기 위함. */
    const elementRef = useRef<HTMLDivElement>(null);
    const [isStopGif, setIsStopGif] = useState<boolean>(true);
    const [isExpandCoupang, setIsExpandCoupang] = useState<boolean>(false);

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
        /** project-view-src, project-introduce 클래스 이름을 가진 영역은 다른 animation 효과를 가진다.  */
        const imgViews = document.querySelectorAll(".project-view-src");
        const imgIntros = document.querySelectorAll(".project-introduce");

        const viewObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle("active-move", entry.isIntersecting);
            })
        }, {
            threshold: 0.5
        })
        const introObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle("active-move", entry.isIntersecting);
            })
        }, {
            threshold: 0.5
        })

        imgViews.forEach(imgView => {
            viewObserver.observe(imgView);
        })
        imgIntros.forEach(imgIntro => {
            introObserver.observe(imgIntro);
        })
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
            <div className={`project-wrapper`}>
                <div className={`project-view-src`}>
                    <GifPlayer
                        stopImg={process.env.PUBLIC_URL + "/gif/watch-effect.png"}
                        startImg={process.env.PUBLIC_URL + "/gif/watch-effect.gif"}
                        alt={"Watch-Effect"}
                    />
                </div>
                <div className={`project-introduce`} style={{width : "40rem"}}>
                    <div className={"title-section"}>
                        Vibe-Flash
                    </div>
                    <hr/>
                    <div className={"introduce-section"}>
                        <b>Swift와 WatchOs를 사용해 만든 어플리케이션입니다.</b><br/><br/>
                        애플워치의 정적 배경화면은 사용자의 스타일을 표현하기 위한 좋은 악세사리입니다.<br/><br/>

                        헬스 케어, 알람, 시간 확인에 중점 된 기능 외, 자신을 표현 할 수 있는 특별한 기능이 있었으면 좋겠다 생각해서 만든 프로그램입니다.<br/><br/>

                        기본적으로 탑재된 CPU, RAM 스펙이 높아 제작 가능했습니다.<br/><br/>

                        "높은 스펙에 비해 낮은 배터리" 라는 한계를 가지고 있기 때문에, IOS에 비해 WatchOS가 사용 할 수 있는 기본 라이브러리는 적었습니다.<br/><br/>

                        이를 극복하기 위해 SKScene, vDSP 라이브러리를 사용하여 애플워치에 사운드 반응형 어플리케이션을 제작 할 수 있었습니다.<br/><br/>

                        vDSP 기능을 통해 Low Level 수준의 계산을 실행하여 계산량을 줄였으며, SKScene을 통해 그림을 그리는 것이 불가능했던 WatchOS의 한계를 없앴습니다.<br/>
                    </div>
                </div>
            </div>
            <div className={"project-wrapper"}>
                <div className={`project-view-src`}>
                    <div className={`image-viewer ${isExpandCoupang ? "expand" : ""}`}>
                        <ExpandImageScroll urls={["/project-src/coupang-mail.png", "/project-src/coupang-price-list.png"]}/>
                    </div>
                    <ImageScroll urls={["/project-src/coupang-mail.png", "/project-src/coupang-price-list.png"]}/>
                    <div className={"image-expand-icon"} onClick={() =>
                    {setIsExpandCoupang(!isExpandCoupang)}
                    }>
                        {isExpandCoupang ? <CgCompressRight/> : <CgArrowsExpandRight/>}
                    </div>
                </div>
                <div className={`project-introduce`}>
                    <div className={"title-section"} style={{fontSize : "4rem"}}>
                        기업의 보안 미비성 수정 제안
                    </div>
                    <hr/>
                    <div className={"introduce-section"}>
                        introduce-section
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Project