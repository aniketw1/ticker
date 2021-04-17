import React, { Component } from "react";
import Plot from 'react-plotly.js'

class Stock extends Component{
    constructor(props){
        super(props);
        this.state = {
            y_slice: props.type,   //a 0-5, b , c, d, e -> string
            query: props.name,
            time: [],
            price: []
        }
    }

    
    componentDidMount(){
        this.fetchStock(this.state.query);
    }
   
    


    async fetchStock(query){
        const that = this;
        const API_KEY = 'NT2TLJEMKK8741F3';
        let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${query}&outputsize=compact&apikey=${API_KEY}`
        let stockChartX = [];
        let stockChartY = [];

        await fetch(API_CALL)
            .then(
                function(response){
                    return response.json();
                }
            )
            .then(
                function(data){
                    console.log('etf', data);
                    for(var key in data['Time Series (Daily)']){
                        stockChartX.push(key);
                        stockChartY.push(data['Time Series (Daily)'][key]['1. open']);
                    }
                
                    that.setState({
                        time: stockChartX,
                        price: stockChartY
                    });
                    
                }
            )
    }

    

    render() {
        var data_slice = this.state.price.slice(0,5)

        if(this.state.y_slice === "a"){
            data_slice = this.state.price.slice(0,5)
        }
        if(this.state.y_slice === "b"){
            data_slice = this.state.price.slice(0,20)
        }
        if(this.state.y_slice === "c"){
            data_slice = this.state.price.slice(0,60)
        }
        if(this.state.y_slice === "d"){
            data_slice = this.state.price.slice(0,100)
        }
        if(this.state.y_slice === "e"){
            data_slice = this.state.price.slice(0,252)
        }

        return (
          <Plot id="bvb"
          data={[
            {
              x: this.state.time,
              y: data_slice,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'red'},
            }
          ]}
            layout={{width: 900, height: 600, title: `${this.state.query} Price Today: <b>$${this.state.price[this.state.price.length-1]}</b>`,
            "titlefont": {
              "size": 36,
            }}}
          />
        );
    }
}


export default Stock;