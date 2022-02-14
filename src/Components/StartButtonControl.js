import React, { useEffect, useMemo, useState } from "react";
import { GeoFindMe } from "../util/GpsProvider";
import ButtonGroups from "./ButtonGroup";
import Cookies from "js-cookie";
import { Vector2 } from "three";
import { startDatas } from "../Data/geoData";

function StartButtonControl({onSet}) {
  const datas = useMemo(()=>startDatas) ;
  const [isReady, setIsReady] = useState(false);
  const [target_index, setTarget_Index] = useState(0);

  //找到gps定位點
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(position.coords);

    setTarget_Index(getClosestData(latitude, longitude));
    setIsReady(true);
  }

  //找到距離該點最近的一組資料
  function getClosestData(lat, lon) {
    const targetPos = new Vector2(lat, lon);
    var min_dis = 999;
    var result_index = 0;
    datas.forEach((data, i) => {
      const _startPos = new Vector2(data.latitude, data.longitude);
      const d = _startPos.distanceTo(targetPos);
      if (d < min_dis) {
        min_dis=d;
        result_index = i;
      }
    });
    return result_index;
  }

  useEffect(() => {
    Cookies.set("startIndex", 0);
    GeoFindMe(success);
  }, []);

  if (!isReady) {
    return <></>;
  } else
    return (
      <div className="button-group-container">
        <p>選擇起點</p>
        <ButtonGroups
          datas={datas}
          value={target_index}
          onSelect={(i) => {
            Cookies.set("startIndex", i);
          }}
        />
        <button onClick={()=>onSet(1)}>OK</button>
      </div>
    );
}

export default StartButtonControl;
