import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Route,BrowserRouter} from 'react-router-dom';
const setTitle = title => () => document.title = title;

// rem适配
function fontSizeInit() {
    var doc = document.documentElement,
        cli = doc.clientWidth,
        clh = doc.clientHeight;
        if(cli < clh){
            if (cli < 750) {
                cli = cli / 7.5;
            } else {
                cli = 100;
            }
        }else{
            if (clh < 750) {
                cli = clh / 7.5;
            } else {
                cli = 100;
            }
        }

    doc.style.fontSize = cli + "px";
}
fontSizeInit();
ReactDOM.render((
	<BrowserRouter>
		<Route path="/" component={App} onEnter={setTitle('首页')}/>
		<Route path="/index" component={App} onEnter={setTitle('首页')}/>
	</BrowserRouter>)
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
