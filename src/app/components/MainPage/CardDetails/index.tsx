import React from "react";
import AddCard from "./CardItem/AddCard";
import OderSummery from "./CardItem/OderSummery";
import { useDispatch } from "react-redux";

function index({ cardValue }: any) {
  return (
    <div className="bg-zinc-200">
      <div className="w-[95%] ml-auto mr-auto">
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <AddCard value={cardValue}></AddCard>
          </div>
          <div className="">
            <OderSummery value={cardValue}></OderSummery>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
