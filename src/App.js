// import 'bootstrap';
import logo from './logo.svg';
import './App.css';
import News from './components/News.js'
import Stock from "./components/Stock.js";

function App(props) {
  const tickers = ['tsla', 'msft'];
  const newsItems = tickers.map((ticker) =>   
    <div className="news1">
      <h3 className="news-0">
        {ticker} News
      </h3>
      <News name={ticker}/>
    </div>
  );
  const stockItems = tickers.map((ticker) =>   
    <div className="stocks1">
      <h3 id="stock-0">
        {ticker} Price
      </h3>
      <Stock name={ticker}/>
    </div>
  );
  return (
    <div className="todoapp stack-large">
      
      {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
        </div> */}
      {/* </nav> */}

      <div className="navbar">
        <h1>TICKER QUICKSCOPE</h1>
        <div className="navbar_left">
          <button className="btn btn__primary btn__lg nvl"><h5>Favorites</h5></button>
          <button className="btn btn__primary btn__lg nvl"><h5>Markets</h5></button>
          
        </div>
      </div>
      <div className="bigP">
      
        <div className="test child">
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
            />
            <button type="submit" className="btn btn__primary btn__lg" onClick={api_search}>
              Search
            </button>
          </form>
      
          <div className="charts child">
            <ul
              role="list"
              className="todo-list stack-large stack-exception"
              aria-labelledby="list-heading"
            >
              {stockItems}
              <li className="todo stack-small">
                <div className="c-cb">
                  <input id="todo-0" type="checkbox" defaultChecked={true} />
                  <label className="todo-label" htmlFor="todo-0">
                    Sell Tesla
                  </label>
                </div>
                <div className="btn-group">
                  <button type="button" className="btn">
                    Edit <span className="visually-hidden">Eat</span>
                  </button>
                  <button type="button" className="btn btn__danger">
                    Delete <span className="visually-hidden">Eat</span>
                  </button>
                </div>
              </li>
            </ul>
            <div className="filters btn-group stack-exception">
              <button type="button" className="btn toggle-btn" aria-pressed="true">
                <span className="visually-hidden">Show </span>
                <span>Favorites</span>
                <span className="visually-hidden"> Tickers</span>
              </button>
              <button type="button" className="btn toggle-btn" aria-pressed="false">
                <span className="visually-hidden">Show </span>
                <span>Active</span>
                <span className="visually-hidden"> Tickers</span>
              </button>
              <button type="button" className="btn toggle-btn" aria-pressed="false">
                <span className="visually-hidden">Show </span>
                <span>Market Specific</span>
                <span className="visually-hidden"> Tickers</span>
              </button>
            </div>
          </div>
        </div>
        <div className="test1 child">
          <div className="news_panel ">
            <h2 id="list-heading">
              NEWS
            </h2>
            {newsItems}
          </div>
          
        </div>
      </div>


    </div>
    
  );
}

function api_search(){

}

export default App;

