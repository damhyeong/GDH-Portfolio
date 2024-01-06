import React from "react";

const AboutMe = () => {

    return (
        <div className={"about-me-component"}>
            <div className={"about-line"}>
                <div>이름</div>
                <div>연락처</div>
                <div>생년월일</div>
            </div>
            <div className={"about-line"}>
                <div>이메일</div>
                <div>주소</div>
                <div>학력</div>
            </div>
        </div>
    )
}
export default AboutMe;