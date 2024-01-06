import React from "react";
import {
    FcBusinessman,
    FcCallTransfer,
    FcPlanner,
    FcAddressBook,
    FcHome,
    FcGraduationCap,
} from "react-icons/fc";

import './AboutMe.scss'

const AboutMe = () => {

    return (
        <div className={"about-me-component"}>
            <div className={"column-line"}>
                <div className={"info-cell"}>
                    <div className={"info-logo"}>
                        <FcBusinessman/>
                    </div>
                    <div className={"info-title"}>
                        이름
                    </div>
                    <div className={"info-text"}>
                        공담형
                    </div>
                </div>
                <div className={"info-cell"}>
                    <div className={"info-logo"}>
                        <FcAddressBook/>
                    </div>
                    <div className={"info-title"}>
                        이메일
                    </div>
                    <div className={"info-text"}>
                        rhdwhdals8@naver.com
                    </div>
                </div>
            </div>
            <div className={"column-line"}>
                <div className={"info-cell"}>
                    <div className={"info-logo"}>
                        <FcCallTransfer/>
                    </div>
                    <div className={"info-title"}>
                        연락처
                    </div>
                    <div className={"info-text"}>
                        010-2570-9448
                    </div>
                </div>
                <div className={"info-cell"}>
                    <div className={"info-logo"}>
                        <FcHome/>
                    </div>
                    <div className={"info-title"}>
                        주소
                    </div>
                    <div className={"info-text"}>
                        경기도 화성시 동탄
                    </div>
                </div>
            </div>
            <div className={"column-line"}>
                <div className={"info-cell"}>
                    <div className={"info-logo"}>
                        <FcPlanner/>
                    </div>
                    <div className={"info-title"}>
                        생년월일
                    </div>
                    <div className={"info-text"}>
                        98.04.25
                    </div>
                </div>
                <div className={"info-cell"}>
                    <div className={"info-logo"}>
                        <FcGraduationCap/>
                    </div>
                    <div className={"info-title"}>
                        학력
                    </div>
                    <div className={"info-text"}>
                        강남대학교-소프트웨어
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutMe;