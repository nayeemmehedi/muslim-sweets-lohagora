"use client"
import React from 'react'
import AddCard from "../../components/(card)/AddCard"
import OderSummery from "../../components/(card)/OderSummery"
import { useSelector } from "react-redux";

function page() {
  const cardValue = useSelector((state) => state.counter.value);
  console.log("cardValue", cardValue)
  
  return (
    // <div className="bg-zinc-200">
    //   <div className="w-[95%] ml-auto mr-auto">
    //     <div className="grid grid-cols-3">
    //       <div className="col-span-2">
    //         <AddCard value={cardValue}></AddCard>
    //       </div>
    //       <div className="">
    //         <OderSummery value={cardValue}></OderSummery>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>ddd</div>
  )
}


export default page