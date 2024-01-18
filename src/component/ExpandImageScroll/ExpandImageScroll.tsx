import React, {useCallback, useState} from "react";
import './ExpandImageScroll.scss';
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
        <div className={"expand-image-scroll-component"}>
            <div className={"expand-image-scroll-num"}>
                <div className={"expand-current-img-number"}>
                    {imgNum + 1}
                </div>
                <div className={"expand-slash"}>
                    /
                </div>
                <div className={"expand-last-img-number"}>
                    {urls.length}
                </div>
            </div>
            <img
                className={"expand-image-view"}
                src={process.env.PUBLIC_URL + urls[imgNum]}
            />
            <div className={"expand-image-scroller"}>
                <div className={"expand-image-pre"} onClick={imagePrevious}>
                    <CgArrowLeft/>
                </div>
                <div className={"expand-image-next"} onClick={imageNext}>
                    <CgArrowRight/>
                </div>
            </div>
        </div>
    )
}
export default ExpandImageScroll;