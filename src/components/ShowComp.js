import React, { useState } from "react";

const ShowComp = ({boxList}) =>{
    return(
        <div>
            {boxList.map((color, i)=>(
                <div style={{backgroundColor:color, width:"100px", height:"100px", display:"inline-block", margin:"10px"}} key={i}></div>
            ))}
        </div>
    )
}
export default ShowComp;