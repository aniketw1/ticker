import React from 'react';
import './News.css';

class News extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            query: props.name,
            list: []
        }
    }


    componentDidMount() {
        this.fetchNews(this.state.query);
    }

    fetchNews(query){

        const API_KEY = 'JZ2cGukXpDFRSPmZubtZOUfV4EEa8_TA';
        let API_CALL = `https://api.polygon.io/v1/meta/symbols/${query}/news?perpage=50&page=1&apiKey=JZ2cGukXpDFRSPmZubtZOUfV4EEa8_TA`
        const that = this;
        let newsHeadline = [];

        fetch(API_CALL)
            .then(
                function(response){
                    return response.json();
                }
            )
            .then(
                function(data){
                    for(var key in data){
                        newsHeadline.push(data[key]);
                    }
                    that.setState({
                        list: newsHeadline
                    })

                }
            )
    }


    render() {
        const that = this;
        const query = "msft";
        const items = this.state.list;
        const separateWords = s => s.replace(/[A-Z][a-z]+/g, '$& ').trim();
        const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });
        return (
            <div className="app">
            
            <ul>
                {items.map((item, index) =>{
                    return <li key={index} className="item">
                        <img src={item.image} className="thumbnail"/>
                        <h2 className="title">
                            <a href={item.url}>{item.title}</a>
                        </h2>
                        <p className="description">
                            {item.description}
                        </p>
                        <div className="meta">
                            <span>{formatDate(item.timestamp)} {item.source} </span>
                        </div>
                    </li>
                })}
            </ul>
            </div>
        );
    }
}

function Item({ item }) {
    const separateWords = s => s.replace(/[A-Z][a-z]+/g, '$& ').trim();
    const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });
    return (
        <li className="item">
          {item.image &&
            <img className="thumbnail"
              alt=""
              src={item.image?.thumbnail?.contentUrl}
            />
          }
          <h2 className="title">
            <a href={item.url}>{item.name}</a>
          </h2>
          <p className="description">
            {item.description}
          </p>
          <div className="meta">
            <span>{formatDate(item.datePublished)}</span>
            <span className="provider">
              {item.provider[0].image?.thumbnail &&
                <img className="provider-thumbnail"
                  alt=""
                  src={item.provider[0].image.thumbnail.contentUrl + '&w=16&h=16'}
                />
              }
              {item.provider[0].name}
            </span>
            {item.category &&
              <span>{separateWords(item.category)}</span>
            }
          </div>
        </li>
    );
}

export default News;