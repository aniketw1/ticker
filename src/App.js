// import 'bootstrap';
import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import News from './components/News.js'
import Stock from "./components/Stock.js";
import Form from "./components/Form.js";
import { nanoid } from "nanoid";

const tickersInit = [{id: 0, name:'msft'}, {id:1, name:'tsla'}];


function App() {

  const [tickers, setTickers] = useState(tickersInit);
  const [search, setSearch] = useState('');

  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name};
    setTickers([...tickers, newTask]);
    console.log('all', tickers);
  }

  function deleteTask(id){
    const remainingTasks = tickers.filter(ticker => id !== ticker.id);
    setTickers(remainingTasks);
  }

  //Mapping tickers to react Stock components
  const stockitems = tickers.map(ticker =>  ( 
    <div className="stocks1">
      <div className="wrapBtn">
        <h3 id={ticker.id} className="ticker_opt">
          {ticker.name} Price
        </h3>
        <button
          type="button"
          className="btn btn__danger ticker_opt"
          onClick={() => deleteTask(ticker.id)}
          >
          Delete <span className="visually-hidden">{ticker.name}</span>
        </button>
      </div>
      <Stock name={ticker.name} key={ticker.id}/>
    </div>
  ));

  const newsitems = tickers.map((ticker) =>   
    <div className="news1">
      <h3>
        {ticker.name} News
      </h3>
      <News name={ticker.name}/>
    </div>
  );

  

  return (
    <div className="todoapp stack-large">

      <div className="navbar">
        <h1>TICKER QUICKSCOPE</h1>
        <div className="navbar_left">
          <button className="btn btn__primary btn__lg nvl"><h5>Favorites</h5></button>
          <button className="btn btn__primary btn__lg nvl"><h5>Markets</h5></button>
          
        </div>
      </div>
      <div className="bigP">
      
        <div className="test child">
          <Form addTask={addTask}/>
      
          <div className="charts child">
            <ul
              role="list"
              className="todo-list stack-large stack-exception"
              aria-labelledby="list-heading"
            >
              {stockitems}
            </ul>
            
          </div>
        </div>
        <div className="test1 child">
          <div className="news_panel ">
            <h2 id="list-heading">
              NEWS
            </h2>
            {newsitems}
          </div>
          
        </div>
      </div>


    </div>
    
  );
}


export default App;

