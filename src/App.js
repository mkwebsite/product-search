import React, { Component } from 'react';
import './scss/index.scss';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main.css';
import Routes from './routes/index';
import store from './redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <Routes />
      </Router>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Provider>
    );
  }
}

export default App;
