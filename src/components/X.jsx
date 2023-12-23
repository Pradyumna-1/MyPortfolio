import { useEffect } from "react";
import { useState } from "react"

const Work =()=>{
    const [itmes,setItems]=useState([]);
    const [visible,setVisible]=useState(3);

    useEffect(()=>{
        fetch("../assets/data.json").then((res)=>res.json())
        .then((data)=>setItems(data))
    },[]);

    return(
        <div id="work">
            <div className="container"></div>
        </div>
    )
}