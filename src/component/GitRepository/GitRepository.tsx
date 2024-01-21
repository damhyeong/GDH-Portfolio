import React from "react";
import "./GitRepository.scss"

const GitRepository = () => {
    return (
        <div className={"git-repository-component"}>
            <div className={"git-component-title"}>
                <div className={"git-component-text"}>
                    Github Repository
                </div>
                <hr/>
            </div>
            <div className={"git-repository-container"}>
                <a
                    className={"github-img-a"}
                    href={"https://github.com/damhyeong"}>
                    <img
                        className={"github-img"}
                        src={process.env.PUBLIC_URL + "/project-src/github-repository.png"}
                        alt={"github-img"}
                    />
                    <div className={"github-img-hover"}/>
                </a>

                {/*<div className={"git-repository-introduce"}>
                    repository-introduce
                </div>*/}
            </div>
        </div>
    )
}
export default GitRepository;