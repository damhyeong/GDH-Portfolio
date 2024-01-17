import React, {useCallback, useState} from "react";
import './ExpandImageScroll.module.scss';
import {CgArrowLeft, CgArrowRight} from "react-icons/cg";

interface PIFace{
    urls : string[]
}

const ExpandImageScroll = ({urls} : PIFace) => {
    const [imgNum, setImgNum] = useState<number>(0);

    const imagePrevious = useCallback(() => {
        setImgNum((imgNum <= 0) ? (urls.length - 1) : (imgNum - 1));
    }, [imgNum]);

    const imageNext = useCallback(() => {
        setImgNum((imgNum >= urls.length - 1) ? (0) : (imgNum + 1));
    }, [imgNum]);

    return (
        <div className={"image-scroll-component"}>
            <img
                className={"image-view"}
                src={process.env.PUBLIC_URL + urls[imgNum]}
            />
            <div className={"image-scroller"}>
                <div className={"image-pre"} onClick={imagePrevious}>
                    <CgArrowLeft/>
                </div>
                <div className={"image-next"} onClick={imageNext}>
                    <CgArrowRight/>
                </div>
            </div>
            <div className={"image-scroll-num"}>
                <div className={"current-img-number"}>
                    {imgNum + 1}
                </div>
                <div className={"slash"}>
                    /
                </div>
                <div className={"last-img-number"}>
                    {urls.length}
                </div>
            </div>
        </div>
    )
}