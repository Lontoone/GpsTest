import React, { useEffect, useState } from "react";
import { Vector2 } from "three";
import NewInfoBox from "../Components/NewInfoBox";
import VideoBackground from "../Components/VideoBackground";
import { GeoFindMe } from "../util/GpsProvider";
import canpasIcon from "../Img/canpas.png";

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
          <img src={canpasIcon}/>
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
        <div></div>

        {/*鏡頭背景 */}
        <VideoBackground />
      </div>
    </>
  );
}

export default NewMain;
