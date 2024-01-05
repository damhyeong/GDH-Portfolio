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
export default Main;