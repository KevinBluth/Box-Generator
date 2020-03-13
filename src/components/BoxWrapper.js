import React, { useState } from "react";
import CreateComp from './CreateComp';
import ShowComp from './ShowComp';

const BoxWrapper = () =>{
    const[colorState, setColorState] = useState("")

    const[boxState, setBoxState] = useState([])

    const onChangeHandler = (event) =>{
        setColorState(event.target.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        setBoxState([...boxState, colorState])
        setColorState("")
    }

    return(
        <div>
            <h1>Type a color in this box</h1>
            <div style={{margin:"10px", width:"50px", marginLeft:"45%"}}>
                <CreateComp changeHandler={onChangeHandler} submitHandler={onSubmitHandler} />
                <ShowComp boxList={boxState} />
            </div>
        </div>
    )
}

export default BoxWrapper