(this.webpackJsonpfinance_quickscope=this.webpackJsonpfinance_quickscope||[]).push([[0],{13:function(e,t,s){},14:function(e,t,s){},15:function(e,t,s){},24:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(7),i=s.n(a),l=(s(13),s.p,s(14),s(2)),r=s(3),o=s(5),j=s(4),d=(s(15),s(0));var h=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(e){var c;return Object(l.a)(this,s),(c=t.call(this,e)).state={query:e.name,list:[]},c}return Object(r.a)(s,[{key:"componentDidMount",value:function(){this.fetchNews(this.state.query)}},{key:"fetchNews",value:function(e){var t="https://api.polygon.io/v1/meta/symbols/".concat(e,"/news?perpage=50&page=1&apiKey=JZ2cGukXpDFRSPmZubtZOUfV4EEa8_TA"),s=this,c=[];fetch(t).then((function(e){return e.json()})).then((function(e){for(var t in e)c.push(e[t]);s.setState({list:c})}))}},{key:"render",value:function(){var e=this.state.list;return Object(d.jsx)("div",{className:"app",children:Object(d.jsx)("ul",{children:e.map((function(e,t){return Object(d.jsxs)("li",{className:"item",children:[Object(d.jsx)("img",{src:e.image,className:"thumbnail"}),Object(d.jsx)("h2",{className:"title",children:Object(d.jsx)("a",{href:e.url,children:e.title})}),Object(d.jsx)("p",{className:"description",children:e.description}),Object(d.jsx)("div",{className:"meta",children:Object(d.jsxs)("span",{children:[(s=e.timestamp,new Date(s).toLocaleDateString(void 0,{dateStyle:"long"}))," ",e.source," "]})})]},t);var s}))})})}}]),s}(n.a.Component),b=s(8),u=s.n(b),m=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(e){var c;return Object(l.a)(this,s),(c=t.call(this,e)).state={query:e.name,time:[],price:[]},c}return Object(r.a)(s,[{key:"componentDidMount",value:function(){this.fetchStock(this.state.query)}},{key:"fetchStock",value:function(e){var t=this,s="https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=".concat(e,"&apikey=").concat("NT2TLJEMKK8741F3"),c=[],n=[];fetch(s).then((function(e){return e.json()})).then((function(e){for(var s in console.log("etf",e),e["Time Series (Daily)"])c.push(s),n.push(e["Time Series (Daily)"][s]["1. open"]);t.setState({time:c,price:n}),console.log("kodak",n)}))}},{key:"render",value:function(){return Object(d.jsx)(u.a,{data:[{x:this.state.time,y:this.state.price,type:"scatter",mode:"lines+markers",marker:{color:"red"}}],layout:{width:900,height:600,title:"".concat(this.state.query," Price For The Past Year")}})}}]),s}(c.Component);function p(){}var O=function(e){var t=["tsla","msft"],s=t.map((function(e){return Object(d.jsxs)("div",{className:"news1",children:[Object(d.jsxs)("h3",{className:"news-0",children:[e," News"]}),Object(d.jsx)(h,{name:e})]})})),c=t.map((function(e){return Object(d.jsxs)("div",{className:"stocks1",children:[Object(d.jsxs)("h3",{id:"stock-0",children:[e," Price"]}),Object(d.jsx)(m,{name:e})]})}));return Object(d.jsxs)("div",{className:"todoapp stack-large",children:[Object(d.jsxs)("div",{className:"navbar",children:[Object(d.jsx)("h1",{children:"TICKER QUICKSCOPE"}),Object(d.jsxs)("div",{className:"navbar_left",children:[Object(d.jsx)("button",{className:"btn btn__primary btn__lg nvl",children:Object(d.jsx)("h5",{children:"Favorites"})}),Object(d.jsx)("button",{className:"btn btn__primary btn__lg nvl",children:Object(d.jsx)("h5",{children:"Markets"})})]})]}),Object(d.jsxs)("div",{className:"bigP",children:[Object(d.jsxs)("div",{className:"test child",children:[Object(d.jsxs)("form",{children:[Object(d.jsx)("h4",{className:"label-wrapper",children:Object(d.jsx)("label",{htmlFor:"new-todo-input",className:"label__lg",children:"Search Your Ticker Symbol Here"})}),Object(d.jsx)("input",{type:"text",id:"new-todo-input",className:"input input__lg",name:"text",autoComplete:"off"}),Object(d.jsx)("button",{type:"submit",className:"btn btn__primary btn__lg",onClick:p,children:"Search"})]}),Object(d.jsxs)("div",{className:"charts child",children:[Object(d.jsxs)("ul",{role:"list",className:"todo-list stack-large stack-exception","aria-labelledby":"list-heading",children:[c,Object(d.jsxs)("li",{className:"todo stack-small",children:[Object(d.jsxs)("div",{className:"c-cb",children:[Object(d.jsx)("input",{id:"todo-0",type:"checkbox",defaultChecked:!0}),Object(d.jsx)("label",{className:"todo-label",htmlFor:"todo-0",children:"Sell Tesla"})]}),Object(d.jsxs)("div",{className:"btn-group",children:[Object(d.jsxs)("button",{type:"button",className:"btn",children:["Edit ",Object(d.jsx)("span",{className:"visually-hidden",children:"Eat"})]}),Object(d.jsxs)("button",{type:"button",className:"btn btn__danger",children:["Delete ",Object(d.jsx)("span",{className:"visually-hidden",children:"Eat"})]})]})]})]}),Object(d.jsxs)("div",{className:"filters btn-group stack-exception",children:[Object(d.jsxs)("button",{type:"button",className:"btn toggle-btn","aria-pressed":"true",children:[Object(d.jsx)("span",{className:"visually-hidden",children:"Show "}),Object(d.jsx)("span",{children:"Favorites"}),Object(d.jsx)("span",{className:"visually-hidden",children:" Tickers"})]}),Object(d.jsxs)("button",{type:"button",className:"btn toggle-btn","aria-pressed":"false",children:[Object(d.jsx)("span",{className:"visually-hidden",children:"Show "}),Object(d.jsx)("span",{children:"Active"}),Object(d.jsx)("span",{className:"visually-hidden",children:" Tickers"})]}),Object(d.jsxs)("button",{type:"button",className:"btn toggle-btn","aria-pressed":"false",children:[Object(d.jsx)("span",{className:"visually-hidden",children:"Show "}),Object(d.jsx)("span",{children:"Market Specific"}),Object(d.jsx)("span",{className:"visually-hidden",children:" Tickers"})]})]})]})]}),Object(d.jsx)("div",{className:"test1 child",children:Object(d.jsxs)("div",{className:"news_panel ",children:[Object(d.jsx)("h2",{id:"list-heading",children:"NEWS"}),s]})})]})]})},x=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,25)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),c(e),n(e),a(e),i(e)}))};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),x()}},[[24,1,2]]]);
//# sourceMappingURL=main.f254ab4d.chunk.js.map