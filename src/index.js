import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
// import reportWebVitals from './reportWebVitals';
import { IntlProvider } from "react-intl";
import Spanish from "./i18N/es.json";
import English from "./i18N/en.json";

const local = navigator.language;
let messages;
if (local === "en-US") {
  messages = English;
} else {
  messages = Spanish
}

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <IntlProvider locale={local} messages={messages} >
      <App />
    </IntlProvider>
  </Provider>,
  // </React.StrictMode>
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
