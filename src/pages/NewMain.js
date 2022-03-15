import React, { useEffect, useState } from "react";
import { Vector2 } from "three";
import NewInfoBox from "../Components/NewInfoBox";
import VideoBackground from "../Components/VideoBackground";
import { GeoFindMe } from "../util/GpsProvider";
import canpasIcon from "../Img/canpas.png";
import map from "../Img/map.png";

const datas = [
  {
    latitude: 24.139222576886265,
    longitude: 120.66989999746198,
    name: "植生過濾帶",
    text: "利用不同植物植生之地區，將雨水逕流以薄層漫流通過，攔截逕流沉積物及去除營養鹽之設施。植生有草坪、草原、灌木、森林植線及本土植被等。",
    opts: {},
  },
  {
    latitude: 24.1412568,
    longitude: 120.6735361,
    name: "林之助紀念廣場",
    text: "台中公園，1979呼應柳川西路二段旁的台灣膠彩畫之父故居[林之助紀念館]，取樣畫家林之助於西元1979年的[台中公園]的畫作，以馬賽克拼貼的方式呈現廣場立面上，增添柳川藝術氣息並成為人們活動的一抹風景。",
    opts: {},
  },
  {
    latitude: 24.055021,
    longitude: 120.646092,
    name: "林之助紀念廣場",
    text: "台中公園，1979呼應柳川西路二段旁的台灣膠彩畫之父故居[林之助紀念館]，取樣畫家林之助於西元1979年的[台中公園]的畫作，以馬賽克拼貼的方式呈現廣場立面上，增添柳川藝術氣息並成為人們活動的一抹風景。",
    opts: true,
  },
];

//取得範圍內的點
function GetMatchPosition(position) {
  var currentPosition = new Vector2(
    position.coords.latitude,
    position.coords.longitude
  );

  for (var i = 0; i < datas.length; i++) {
    var tv = new Vector2(datas[i].latitude, datas[i].longitude);
    var d = tv.distanceTo(currentPosition);

    //0.0001=精度1公尺
    if (d <= 0.0005) {
      return d[i];
    }
  }
  return null;
}

function NewMain() {
  const [cloestPoint, setCloestPoint] = useState(datas[1]);

  useEffect(() => {
    setInterval(() => {
      var _point = GeoFindMe(GetMatchPosition);
      if (_point != null) {
        console.log(_point);
        setCloestPoint(_point);
      }
    }, 1500);
  }, []);

  return (
    <>
      <div className="root-container">
        {/* 羅盤icon */}
        <div className="canpasIcon-container">
          <img src={canpasIcon} />
        </div>

        {/* 模型 */}
        <div className="character-container">
          {/*<LoadModel />*/}
          {/* 暫時用圖片 */}
          <img
            src="https://i.imgur.com/8UT2P8r.png"
            className="character-container_img"
          />

          {/* 資訊欄位 */}
          {cloestPoint ? <NewInfoBox data={cloestPoint}></NewInfoBox> : null}

        </div>

        {/* 地點選項UI */}
        <div className="new-options-root">
          <div className="new-options-title">
            <img src={map} />
            <span>鄰近景點</span>
          </div>

          <div className="new-option-container">
            {/* ... 選項 */}
            {opt("132")}
            {opt("132")}
          </div>
        </div>


        {/*鏡頭背景 */}
        <VideoBackground />
      </div>
    </>
  );
}

const opt = (text) => {
  return(
  <div className="new-option">
    <span>{text}123</span>
    <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGc+PHBhdGggZD0iTTE1Ny42NjY2Nyw4NmMwLDM5LjU3NzkyIC0zMi4wODg3NSw3MS42NjY2NyAtNzEuNjY2NjcsNzEuNjY2NjdjLTM5LjU3NzkyLDAgLTcxLjY2NjY3LC0zMi4wODg3NSAtNzEuNjY2NjcsLTcxLjY2NjY3YzAsLTM5LjU3NzkyIDMyLjA4ODc1LC03MS42NjY2NyA3MS42NjY2NywtNzEuNjY2NjdjMzkuNTc3OTIsMCA3MS42NjY2NywzMi4wODg3NSA3MS42NjY2Nyw3MS42NjY2N3oiIGZpbGw9IiMyZWNjNzEiPjwvcGF0aD48cGF0aCBkPSJNNzguODMzMzMsNzguODMzMzNoMTQuMzMzMzN2MzkuNDE2NjdoLTE0LjMzMzMzek05NC45NTgzMyw1OS4xMjVjMCw0Ljk0MTQyIC00LjAxNjkyLDguOTU4MzMgLTguOTU4MzMsOC45NTgzM2MtNC45NDE0MiwwIC04Ljk1ODMzLC00LjAxNjkyIC04Ljk1ODMzLC04Ljk1ODMzYzAsLTQuOTQxNDIgNC4wMTY5MiwtOC45NTgzMyA4Ljk1ODMzLC04Ljk1ODMzYzQuOTQxNDIsMCA4Ljk1ODMzLDQuMDE2OTIgOC45NTgzMyw4Ljk1ODMzeiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+" />
  </div>
  )
}

export default NewMain;
