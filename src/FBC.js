import React, { useState } from 'react'

export default function FBC(props) {
   let [state,changeState]=useState()
  return (
    <div>Iam a FBC {props.topic}</div>
  )
}
