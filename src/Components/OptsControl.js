import Cookies from "js-cookie";
import React from "react";
import "../Css/MainStyle.css";
import { startDatas } from "../Data/geoData";

//其他控制
function OptsControl() {
  return (
    <div className="opts-container">
      <button
        onClick={(e) => {
          var target =
            startDatas[Cookies.get("startIndex")].end_opts[
              Cookies.get("endIndex")
            ];

          window.location = `https://maps.google.com/?q=${target.latitude},${target.longitude}&mode=d`;
        }}
      >
        開啟Google 地圖
      </button>
    </div>
  );
}

export default OptsControl;
