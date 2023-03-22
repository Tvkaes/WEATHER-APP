import React from "react";
import MyComponent from "./Input";
import CardT from "./CardT";
import { isInfo } from "../input";
import { useStore } from "@nanostores/react";
import { data } from "../input";


const Home = ({background})=>{
    const $isInfo = useStore(isInfo)
    const $isData = useStore(data)
    
    
    return(
        <div className={`hero min-h-screen text-black `}>
            <div className=" absolute min-h-screen flex items-center justify-center px-16">
                    <div className="relative w-full max-w-2xl">
                    <div className={`absolute top-0 left-4 w-72 h-72 ${background} rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob`}></div>
                    <div className={`absolute top-0 right-4 w-72 h-72 ${background} rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000`}></div>
                    <div className={`absolute -bottom-8 left-20 w-72 h-72 ${background} rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000`}></div>
                        <div className="m-8 relative ">
      
                            
 
                        </div>
                    </div>
            </div>
			<div className={`hero-content text-center p-4 ${$isInfo != "" ? "grid grid-cols-2 max-[675px]:grid-cols-1 justify-center items-center"  :""}`}>
			  <div className="max-w-md">
				<h1 className="text-5xl font-bold ">¡Hola! Bienvenido/a</h1>
				<p className="py-6">Aquí puedes buscar el clima actual y futuro de cualquier ciudad del mundo. Solo ingresa el nombre de la ciudad en el campo de búsqueda y en segundos obtendrás información detallada sobre el clima, como la temperatura actual, la humedad, la velocidad del viento 
                </p>
				<MyComponent></MyComponent>
			  </div>
              
                {Object.keys($isData).length != 0 ? <div className="col-span-1"><CardT></CardT></div> : null }
              
			</div>
			
		</div>
    )
}

export default Home;