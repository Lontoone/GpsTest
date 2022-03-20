import React from "react";
import "../Css/NewStyle.css";

import bg from "../Img/btn.png";
import bg_inner from "../Img/inner.png";
import play_btn from "../Img/game_btn.png";
import camera from "../Img/camera.png";
import tail from "../Img/tail.png";

function NewInfoBox({ data }) {
  return (
    <div className="infoBox-root">
      <div className="infoBox-container">        
        {/* 內容 */}
        <div className="infoBox-content">
          {/* 標頭圖片 */}
          <img
            className="infoBox-titleImage"
            src="https://photo.travelking.com.tw/scenery/EF643D1A-2E8D-439D-8E16-648F976D2837_d.jpg"
          ></img>

          {/* 標題 */}
          <div className="infoBox-titleBox">
            <img src={camera} />
            <div className="infoBox-title"> {data.name}</div>
          </div>
          {/* 虛線 */}
          <div className="hr-line"></div>
          {/* 內文 */}
          <div className="infoBox-text">{data.text}</div>
          
          {/* 遊戲按鈕? */}
          <div className="infoBox-optsContainer">
            {data.opts ? <div className="infoBox-btn">
              <img src={play_btn}></img>
            </div> : null}
          </div>

        </div>
        {/* 尾巴 */}
        <img src={tail} className="infoBox-tail"></img>
      </div>
    </div>
  );
}

export default NewInfoBox;
