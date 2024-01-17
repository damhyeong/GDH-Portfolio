import React, {useCallback, useState} from "react";
import {CgArrowRight, CgArrowLeft, CgArrowsExpandRight} from "react-icons/cg";

import './ImageScroll.scss'

interface PIFace{
    urls : string[];
}
/** props로 전해진 url 길이와 내용을 기반으로 이전, 다음 버튼을 클릭 할 수 있으며
 * ImageScroll을 담는 Container의 길이에 맞출 수 있게 style의 width 는 100%로 설정한다. */
const ImageScroll = ({urls} : PIFace) => {
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
export default ImageScroll;