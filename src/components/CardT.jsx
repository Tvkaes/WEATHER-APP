import React from "react";
import { useStore } from '@nanostores/react';
import { data, isInfo,isIcon } from "../input";
const CardT = ()=>{

    const $isInfo = useStore(isInfo);
    const $isData =useStore(data);
    const $isIcon = useStore(isIcon)
   

  

   
    return(
        $isInfo ?


<div className="card lg:card-side glass p-4 max-w-2xl  text-black shadow-xl">
<figure></figure>
<div className="card-body">
  <div className="grid grid-cols-2 gap-4 max-[675px]:grid-cols-1">
    <div className="flex flex-row gap-1">
        <h2 className="card-title">{`${$isData.location.name}, ${$isData.location.region}`}</h2>
        <img src={$isIcon} alt="Album"/>
    </div>
    <div className="flex flex-col justify-end items-end text-sm">
        <p>Humedad: {$isData.current.humidity} %</p>
        <p>Precip: {$isData.current.precip_in} In</p>
        <p>Viento: a {$isData.current.wind_kph} km/h</p>
    </div>
  </div>

  <div className="flex flex-row justify-around">
    {$isData.forecast.forecastday.map((value,index)=>(
        <RenderCard icon={value.day.condition.icon.replace(/^/, "https:")} day={value.date} temp={value.day.avgtemp_c} ></RenderCard>
    ))}
  </div>

</div>
</div>
        
        : null
    )
}

const RenderCard = ({icon,day,temp}) => {

    function obtenerNombreDia(fecha) {
        const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        const indiceDia = new Date(fecha).getDay();
        return diasSemana[indiceDia];
      }

    return(
        <div className="card bg-white shadow-lg">
            <figure className="px-10 pt-10"><img src={icon}></img></figure>
            <div className="card-body flex flex-col justify-center items-center">
                <p className="font-bold">{obtenerNombreDia(day)}</p>
                <p className="font-bold">{temp}</p>
            </div>
        </div>
    )
}


export default CardT