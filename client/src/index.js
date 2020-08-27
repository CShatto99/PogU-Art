import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const injectGA = () => {
  if (typeof window == 'undefined') {
    return;
  }
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', 'UA-176071889-1');
}

ReactDOM.render(
  <Fragment>
    <script async  src="https://www.googletagmanager.com/gtag/js?id=UA-176071889-1"/>
    <script>{injectGA()}</script>
    <App />
  </Fragment>,
  document.getElementById('root')
);
