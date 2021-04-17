// import 'bootstrap';
import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import News from './components/News.js'
import Stock from "./components/Stock.js";
import Form from "./components/Form.js";
import { nanoid } from "nanoid";
import { TabsContext } from "./accountContext";
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const tickersInit = [{id: 0, name:'msft'}, {id:1, name:'tsla'}];

var queries = new Set();
var queriesFavorites = new Set();
queries.add('msft')
queries.add('tsla')

var normal = [];

function App() {

  const [tickers, setTickers] = useState(tickersInit);
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState('');
  const [active, setActive] = useState("normal");

  function addTask(name) {
    if(queries.has(name)){
      alert("This stock has already been added")
    }
    
    else{
      const newTask = { id: "todo-" + nanoid(), name: name};
      queries.add(name)
      console.log("adding " + name)
      setTickers([newTask, ...tickers]);
      console.log('all', tickers);
      // console.log(queries)
    }
    
  }

  function deleteTask(id,name){
    console.log("deleting " + name)
    queries.delete(name)
    console.log(queries)
    
    const remainingTasks = tickers.filter(ticker => id !== ticker.id);
    setTickers(remainingTasks);
  }

  function deleteFavorite(id, name){
    queriesFavorites.delete(name);
    let remainingFavorites = favorites.filter(favorite => id !== favorite.id);
    setFavorites(remainingFavorites)
  }

  function addFav(name) {

    if(queriesFavorites.has(name)){
      alert("This stock has already been added to your Favorites")
    }
    
    else{
      console.log("Adding fav...");
      favorites.push({id: nanoid(), name: name});
      console.log(favorites);
    }
  }


  function showFavs() {
    // for (let item of favorites.values()) {     
    // }
    setActive("favorites");
  }

  function showNormal() {
    setActive("normal");
  }

  //Mapping tickers to react Stock components
  const stockitems = tickers.map(ticker =>  ( 
    <div className="stocks1">
      <div className="wrapBtn">
        <h3 id={ticker.id} className="ticker_opt">
          {ticker.name} Price
        </h3>
        <h3> 
        <FavoriteIcon id="btn_favorites" onClick={() => addFav(ticker.name)}></FavoriteIcon>Add to favorites
        </h3>
        
        <h3>
          <DeleteForeverIcon id="deleteIcon"
          onClick={() => deleteTask(ticker.id,ticker.name)}></DeleteForeverIcon>Delete <span className="visually-hidden">{ticker.name}</span>
        </h3>
      </div>
      <Stock name={ticker.name} key={ticker.id}/>
    </div>
  ));

  const stockitems1 = favorites.map(favorite =>  ( 
    <div className="stocks1">
      <div className="wrapBtn">
        <h3 id={favorite.id} className="ticker_opt">
          {favorite.name} Price
        </h3>
        <h3>
          <DeleteForeverIcon id="deleteIcon"
          onClick={() => deleteFavorite(favorite.id,favorite.name)}></DeleteForeverIcon>Delete <span className="visually-hidden">{favorite.name}</span>
        </h3>
      </div>
      <Stock name={favorite.name} key={favorite.id}/>
    </div>
  ));

  const newsitems = tickers.map((ticker) =>   
    <div className="news1">
      <h3>
        {ticker.name} News
      </h3>
      <News name={ticker.name}/>
      <div className="line_break"></div>
    </div>

  );


  // const switchToFavorites = () => {
  //   setActive("favorites");
  // }
  // const switchToMarkets = () => {
  //   setActive("markets");
  // }
  // const switchToNormal = () => {
  //   setActive("normal");
  // }

  // const contextValue = { switchToMarkets, switchToFavorites, switchToNormal };

  return (
    // <TabsContext.Provider value={contextValue}>
      <div className="todoapp stack-large">

        <div className="navbar">
          <h1>TICKER QUICKSCOPE</h1>
          <div className="navbar_left">
            <button className="btn btn__primary btn__lg nvl" onClick={() => showFavs()}><h5>Favorites</h5></button>
            <button className="btn btn__primary btn__lg nvl"><h5>Markets</h5></button>
            <button className="btn btn__primary btn__lg nvl" onClick={() => showNormal()}><h5>Normal</h5></button>

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
                {/* {stockitems} */}
                { active === "normal" && stockitems }
                { active === "favorites" && stockitems1 }
              </ul>
              
            </div>
          </div>
          <div className="test1 child">
            <div className="news_panel ">
              <h2 id="list-heading">
                <strong>NEWS</strong>
              </h2>
              {newsitems}
            </div>
            
          </div>
        </div>


      </div>
    // </TabsContext.Provider>
  );
}


export default App;

