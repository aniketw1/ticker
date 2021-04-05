import React, { useState } from "react";


function Form(props){

    const [name, setName] = useState("");

    function handleChange(e){
       setName(e.target.value);
    }
    
    function handleSubmit(e){
        e.preventDefault();
        props.addTask(name);
        setName("");
    }

   
    return(
    <form>
        <h4 className="label-wrapper">
            <label htmlFor="new-todo-input" className="label__lg">
            Search Your Ticker Symbol Here
            </label>
        </h4>
        <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
            onChange={handleChange}
        />
        <button type="submit" className="btn btn__primary btn__lg" onClick={handleSubmit}>
            Search
        </button>
        </form>
    );
    
}



export default Form;