import { useStore } from "@nanostores/react";
import React, { useState } from "react";
import { isInfo } from "../input";
import { data } from "../input";
import CardT from "./CardT";
import { isIcon } from "../input";

function MyComponent() {
  const $isInfo = useStore(isInfo)
  const $isData = useStore(data)
  const API_KEY ="8e5f22e2675c469fa1963615232901";


  const [info,setInfo] =useState("")

  async function getWeather(city){
        
    const ENDPOINT = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7`;
    const response = await fetch(ENDPOINT);
    const datas = await response.json()
    console.log(datas ? datas.current.condition.icon.replace(/^/, "https:") : '')
    data.set(datas)
    isIcon.set(datas ? datas.current.condition.icon.replace(/^/, "https:") : '')
    isInfo.set(!$isInfo)  
}


  
    return (
      <div className="flex flex-col justify-center items-center gap-4" >
					<input type="text" className="input bg-white text-black shadow-lg" onChange={(event)=>{setInfo(event.target.value)}}  />
					<button id="myButton" className="btn btn-primary shadow-lg" onClick={()=>{getWeather(info)}}>hola</button>
			</div>
    );
  }
  
  export default MyComponent;