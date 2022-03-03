import Cookies from "js-cookie";
import React, { useEffect, useMemo } from "react";
import ButtonGroups from "./ButtonGroup";
import { startDatas } from "../Data/geoData";

function EndButtonControl({ onSet }) {
  const datas = useMemo(() => startDatas[Cookies.get("startIndex")].end_opts);
  useEffect(() => {
    Cookies.set("endIndex", 0);
  }, []);
  return (
    <div className="button-group-container">
      <p>選擇終點</p>
      <ButtonGroups
        datas={datas}
        value={0}
        onSelect={(i) => {
          Cookies.set("endIndex", i);
        }}
      />
      <button onClick={() => onSet(2)}>OK</button>
      <button onClick={() => onSet(0)}>上一步</button>
    </div>
  );
}

export default EndButtonControl;
