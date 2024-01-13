import React, {useCallback, useState} from "react";
import { FaRegPlayCircle } from "react-icons/fa";

import './GifPlayer.scss';

interface PFace{
    stopImg : string; // url
    startImg : string; // url
    alt : string; // 이미지 로딩 에러 시 나올 텍스트
    playButton? : string; // GifPlayer 재생을 유도하기 위한 Play 이미지 -> Default Image를 넣어 놓을 것이기 때문에, 추후 변동 원할 시, public URL에서 가져온다.
    string? : string; // 나중에 원하는 이펙트를 string으로 정할 수 있다면, npm 라이브러리로 출시하기 좋을 것 같다.
}

const GifPlayer = (Props : PFace) => {
    const {stopImg, startImg, alt, playButton, string} = Props;

    const [isStopGif, setIsStopGif] = useState<boolean>(true);

    const gifClick = useCallback(() => {
        setIsStopGif(!isStopGif);
    }, [isStopGif]);

    return (
        <div className={`gif-player-component ${isStopGif ? "stop-gif" : "run-gif"}`}>
            <img
                className={"gif-image"}
                src={isStopGif ? stopImg : startImg}
                alt={alt}
                onClick={gifClick}
            />
            {
                // isStopGif &&
                <FaRegPlayCircle
                    className={"play-icon"}
                    onClick={gifClick}
                    style={isStopGif ? {opacity : "1"} : {opacity : "0"}}
                />
            }
        </div>
    )
}
export default GifPlayer;