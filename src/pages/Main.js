import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Loader } from "@react-three/drei";

import MyModel from "../models/Gl2";
import LoadModel from "../util/LoadModel";
import "../Css/MainStyle.css";
import VideoBackground from "../Components/VideoBackground";
import ButtonGroups from "../Components/ButtonGroup";
import StartButtonControl from "../Components/StartButtonControl";
import EndButtonControl from "../Components/EndButtonControl";
import DialogBox from "../Components/DialogBox";
import Cookies from "js-cookie";
import { startDatas } from "../Data/geoData";
import OptsControl from "../Components/OptsControl";
import { GeoFindMe } from "../util/GpsProvider";
import { Vector2 } from "three";

export default function Main() {
  const [uiIndex, setUiIndex] = useState(0);
  const [msg, setMsg] = useState("請選擇地點");
  const datas = useMemo(() => startDatas);

  //const model = useMemo(() => <LoadModel />);

  const onUiChange = (i) => {
    console.log(i);
    setUiIndex(i);

    //選擇完終點=> 切換對話
    if (i == 2) {
      //console.log(startDatas[Cookies.get("startIndex")].end_opts);
      var text =
        datas[Cookies.get("startIndex")].end_opts[Cookies.get("endIndex")]
          .mid_text;
      setMsg(text);
    }
  };
  const uis = [
    <StartButtonControl onSet={onUiChange} />,
    <EndButtonControl onSet={onUiChange} />,
    <OptsControl />,
    "",
  ];

  useEffect(() => {
    setInterval(() => {
      GeoFindMe(checkHasReached);
    }, 1500);
  }, []);

  function checkHasReached(position) {
    var targetPosition =
      datas[Cookies.get("startIndex")]?.end_opts[Cookies.get("endIndex")];
    var tv = new Vector2(targetPosition.latitude, targetPosition.longitude);
    var pv = new Vector2(position.coords.latitude, position.coords.longitude);
    var d = tv.distanceTo(pv);

    console.log(tv, pv, d);
    if (d <= 0.0005) {
      //0.0001=精度1公尺
      setMsg("完成導覽!");
    }
  }

  return (
    <>
      <div className="root-container">
        {/* 模型 */}
        <div className="character-container">
          {/*<LoadModel />*/}
          {/* 暫時用圖片 */}
          <img src="https://i.imgur.com/8UT2P8r.png" />

          {/* 對話 */}
          <div className="dialog-container">
            <DialogBox msg={msg} />
          </div>
        </div>
        {/* 地點選項UI */}
        <div>
          {/*<StartButtonControl />*/}
          {uis[uiIndex]}
        </div>

        {/*鏡頭背景 */}
        <VideoBackground />
      </div>
    </>
  );
}
