import React, {useCallback, useEffect, useState} from 'react';
import './App.scss';
import Main from "./component/Main/Main";
import Introduce from "./component/Introduce/Introduce";
import SkillSet from "./component/SkillSet/SkillSet";

function App() {
    const [isTop, setIsTop] = useState<boolean>(true);

    const handleScroll = useCallback(() => {
        const scrollTop = window.scrollY;
        setIsTop(scrollTop < 50);
    }, [])

    useEffect(() => {
        // 컴포넌트 mount 될 시, 이벤트 리스너 추가
        window.addEventListener('scroll', handleScroll);

        // 컴포넌트 언마운트 시, 이벤트 리스너 제거 - 최적화를 취함
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

  return (
    <div className="App">
      <div className={`header ${isTop ? '' : 'not-top'}`}>
        <div className={"logo"}>Gong Dam Hyeong</div>
        <nav className={"navi"}>
            <a href={"#Main"} className={"nav"}>Main</a>
            <a href={"#Introduce"} className={"nav"}>Introduce</a>
        </nav>
      </div>
        <div id={"Main"}>
            <Main/>
        </div>
        <div id={"Introduce"}>
            <Introduce/>
        </div>
        <div id={"SkillSet"}>
            <SkillSet/>
        </div>
    </div>
  );
}

export default App;
