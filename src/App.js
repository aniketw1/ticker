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
import { Marginer } from './components/marginer.jsx';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

const tickersInit = [{id: 0, name:'msft'}, {id:1, name:'tsla'}];

var queries = new Set();
var queriesFavorites = new Set();
queries.add('msft')
queries.add('tsla')

var normal = [];

function App() {

  const [tickers, setTickers] = useState(tickersInit);
  const [favorites, setFavorites] = useState([]);
  const [searchTime, setSearchTime] = useState('b');
  const [active, setActive] = useState("normal");

  // function currentPrice(price){

  // }

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



  function renderRefresh(){

    tickers.map(ticker =>  ( 
      <div className="stocks1">
        <Marginer direction="vertical" margin={70}/>
        <div className="wrapBtn">
          <div id="fav">
            <h3> 
            <FavoriteIcon id="btn_favorites" onClick={() => addFav(ticker.name)}></FavoriteIcon>Add to favorites
            </h3>
          </div>
  
  
          <div>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Time Range</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={searchTime}
                onChange={handleChange}
              >
                <MenuItem value={'a'}>Past Week</MenuItem>
                <MenuItem value={'b'}>Past Month</MenuItem>
                <MenuItem value={'c'}>Past 3 Months</MenuItem>
                <MenuItem value={'d'}>Past 5 Months</MenuItem>
                <MenuItem value={'e'}>Past Year</MenuItem>
              </Select>
            </FormControl>
          </div>
  
  
          <div id="del">
            <h3>
              <DeleteForeverIcon id="deleteIcon"
              onClick={() => deleteTask(ticker.id,ticker.name)}></DeleteForeverIcon>Delete <span className="visually-hidden">{ticker.name}</span>
            </h3>
          </div>
        </div>
        <Stock name={ticker.name} key={ticker.id} type={searchTime}/>
      </div>
    ));
  }








  function showFavs() {
    setActive("favorites");
  }

  function showNormal() {
    setActive("normal");
  }

  const handleChange = (event) => {
    console.log('perkies calling', event.target.value)
    setSearchTime(event.target.value);
    let copy = tickers;
    let idx="asdfasfas";
    const rTasks = tickers.filter(ticker => idx !== ticker.id);
    setTickers(rTasks);
    renderRefresh();
  };

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  //Mapping tickers to react Stock components
  const stockitems = tickers.map(ticker =>  ( 
    <div className="stocks1">
      <Marginer direction="vertical" margin={70}/>
      <div className="wrapBtn">
        <div id="fav">
          <h3> 
          <FavoriteIcon id="btn_favorites" onClick={() => addFav(ticker.name)}></FavoriteIcon>Add to favorites
          </h3>
        </div>


        <div>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Time Range</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={searchTime}
              onChange={handleChange}
            >
              <MenuItem value={'a'}>Past Week</MenuItem>
              <MenuItem value={'b'}>Past Month</MenuItem>
              <MenuItem value={'c'}>Past 3 Months</MenuItem>
              <MenuItem value={'d'}>Past 5 Months</MenuItem>
              <MenuItem value={'e'}>Past Year</MenuItem>
            </Select>
          </FormControl>
        </div>


        <div id="del">
          <h3>
            <DeleteForeverIcon id="deleteIcon"
            onClick={() => deleteTask(ticker.id,ticker.name)}></DeleteForeverIcon>Delete <span className="visually-hidden">{ticker.name}</span>
          </h3>
        </div>
      </div>
      <Stock name={ticker.name} key={ticker.id} type={searchTime}/>
    </div>
  ));

  const stockitems1 = favorites.map(favorite =>  ( 
    <div className="stocks1">
      <Marginer direction="vertical" margin={70}/>
      <div className="wrapBtn">
        <div id="del">
          <h3>
            <DeleteForeverIcon id="deleteIcon"
            onClick={() => deleteFavorite(favorite.id,favorite.name)}></DeleteForeverIcon>Delete <span className="visually-hidden">{favorite.name}</span>
          </h3>
        </div>
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



  return (
    // <TabsContext.Provider value={contextValue}>
      <div className="todoapp stack-large">

        <div className="navbar">
          <h1>TICKER QUICKSCOPE</h1>
          <div className="navbar_left">
            <button className="btn btn__primary btn__lg nvl" onClick={() => showFavs()}><h5>Favorites</h5></button>
            <button className="btn btn__primary btn__lg nvl" onClick={() => showNormal()}><h5>Home</h5></button>

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

