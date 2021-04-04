import React, { Component } from "react";
import Plot from 'react-plotly.js'

class Stock extends Component{
    constructor(props){
        super(props);
        this.state = {
            query: props.name,
            time: [],
            price: []
        }
    }

    componentDidMount(){
        this.fetchStock(this.state.query);
    }

    fetchStock(query){
        const that = this;
        const API_KEY = 'NT2TLJEMKK8741F3';
        let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${query}&apikey=${API_KEY}`
        let stockChartX = [];
        let stockChartY = [];

        fetch(API_CALL)
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
                    console.log('kodak', stockChartY);
                }
            )
    }

    render() {
        return (
          <Plot
            data={[
              {
                x: this.state.time,
                y: this.state.price,
                type: 'scatter',
                mode: 'lines+markers',
                marker: {color: 'red'},
              }
            ]}
            layout={{width: 720, height: 440, title: `${this.state.query} Price For The Past Year`}}
          />
        );
    }
}

export default Stock;