import React from 'react';

const CreateComp = ({changeHandler, submitHandler}) => {

    return(
        <form onSubmit={submitHandler}>
            <input type="text" name="color" onChange={changeHandler} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default CreateComp;
