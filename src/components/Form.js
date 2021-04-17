import React, { useState } from "react";


function Form(props){

    const [name, setName] = useState("");

    async function fetchStock(query){
        const API_KEY = 'NAXUQKS5O8AVX7G8';
        let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${query}&apikey=${API_KEY}`
 

        await fetch(API_CALL)
            .then(
                async function(response){
                    return response.json();
                }
            )
            .then(
                async function(data){
                    for(var i in data){
                        if(i === "Error Message"){
                            alert("please check ticker symbol");
                            return false;
                        }
                    }
                    return true;
                }
            )
    }

    function handleChange(e){
       setName(e.target.value);
    }
    
    function handleSubmit(e){
        e.preventDefault();
        if(fetchStock(name) === true){
            props.addTask(name);
            setName("");
        }
        // props.addTask(name);
        // setName("");
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