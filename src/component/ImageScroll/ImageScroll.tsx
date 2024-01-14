import React, {useCallback, useState} from "react";
import './ImageScroll.scss'

interface PIFace{
    urls : string[];
}
/** props로 전해진 url 길이와 내용을 기반으로 이전, 다음 버튼을 클릭 할 수 있으며
 * ImageScroll을 담는 Container의 길이에 맞출 수 있게 style의 width 는 100%로 설정한다. */
const ImageScroll = ({urls} : PIFace) => {
    const [imgNum, setImgNum] = useState<number>(1);

    const clickNext = useCallback(() => {

    }, [])

    return (
        <div className={"image-scroll-component"}>
            <img src={process.env.PUBLIC_URL + urls[imgNum]}/>
            <div className={"image-scroll"}>

            </div>
        </div>
    )
}
export default ImageScroll;