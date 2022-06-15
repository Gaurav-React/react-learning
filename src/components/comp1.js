import React from "react";
import Comp2 from "./comp2";
export default function comp1() {

    const abc = {comps1:'comps1',comps2:'comps2',comps3:'comps3',comps4:'comps4',comps4:'comps5',comps6:'comps6',comps7:'comps7',comps8:'comps8',comps9:'comps9',comps10:'comps10'}
    console.log(abc);
    const xx = Object.keys(abc);
    return (
        <>
        {/* {
            xx.map((x,i) =>
            <li key={i}>
            {x}
            </li>
            )
        } */}
        <Comp2  data={abc}/>
        </>
  )
}
