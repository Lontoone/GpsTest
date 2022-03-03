import React from "react";
import "../Css/NewStyle.css";

import bg from "../Img/btn.png";
import bg_inner from "../Img/inner.png";
import play_btn from "../Img/game_btn.png";

function NewInfoBox({ data }) {
  return (
    <div className="infoBox-root">
      <div className="infoBox-container">
        {/* 背景 */}
        <img src={bg} className="infoBox-bg"></img>
        <img src={bg_inner} className="infoBox-bg-inner"></img>

        {/* 內容 */}
        <div className="infoBox-content">
          {/* 標頭圖片 */}
          <div className="infoBox-imgContainer">
            <img
              className="infoBox-titleImage"
              src="https://photo.travelking.com.tw/scenery/EF643D1A-2E8D-439D-8E16-648F976D2837_d.jpg"
            ></img>
          </div>

          {/* 標題 */}
          <div className="infoBox-title"> {data.name}</div>

          <span className="infoBox-sm">介紹</span>
          <div className="infoBox-hr" />

          <div className="infoBox-text">{data.text}</div>

          <div className="infoBox-optsContainer">
            {data.opts ? <div className="infoBox-btn">
                <img src={play_btn}></img>
            </div> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewInfoBox;
