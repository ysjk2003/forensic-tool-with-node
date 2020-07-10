import React from 'react';
import searchIcon from './asset/search.svg'

import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className={"title"}>스트리머 팬심 테스트</h1>
      <h1>스트리머 검색</h1>
      <div className={"search-area"}>
        <input type={"text"} placeholder={"스트리머 검색"} className={"search-box"}/>
        <button className={"search-button"}><img src={searchIcon} alt={"검색"} className={"search-icon"} /></button>
      </div>
      <div>
        <span>문제 추가하기 &nbsp;</span>
        <span>| &nbsp;</span>
        <span>틀린문제 수정하기</span>
      </div>
      <footer className={"footer"}>
          <span>Made by&nbsp;</span>
          <span>김태훈(강도단)&nbsp;</span>
          <a href={"https://www.twitch.tv/"}>트위치</a>
      </footer>
    </div>
  );
}

export default App;
