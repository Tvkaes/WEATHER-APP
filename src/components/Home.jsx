import React from "react";
import MyComponent from "./Input";
import CardT from "./CardT";
import { isInfo } from "../input";
import { useStore } from "@nanostores/react";
import { data } from "../input";


const Home = ()=>{
    const $isInfo = useStore(isInfo)
    const $isData = useStore(data)
    
    
    return(
        <div className={`hero min-h-screen text-white ${$isData != "" ? "grid grid-cols-2"  :""}`}>
			<div className="hero-content text-center">
			  <div className="max-w-md">
				<h1 className="text-5xl font-bold ">Hello there</h1>
				<p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
				<MyComponent></MyComponent>
			  </div>
			</div>
			 {$isData !="" ? <div className="col-span-1"><CardT></CardT></div> : null }
		</div>
    )
}

export default Home;