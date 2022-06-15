import React from 'react'
import Comp3 from "./comp3";
export default function comp2(props) {
    const xyz = {...props.data}
    console.log(xyz);
  return (
    <Comp3  data1={xyz}/>
  )
}
