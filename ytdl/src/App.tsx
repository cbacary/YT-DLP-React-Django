import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import UrlBody, { IUrl } from './Downloads'
import axios from "axios";
import Header from './Header';
import { API_URL } from '.';


class App extends Component {

  state = {
    response_url: [],
    processingStatus: false,
  };

  handleSubmit = (urlPassed: string) => {
    this.setState({ response_url: [] });
    axios.post(API_URL, { 'url': urlPassed }).then((res) => {
      const keys = Object.keys(res.data);
      for (let i = 0; i < keys.length; i++) {
        this.setState({
          response_url: [...this.state.response_url, { res: keys[i], url: res.data[keys[i]] }]
        })
      }
    });
    console.log(this.state);
  }

  render() {
    return (

      <div className="App">
        <Header />
        <div className="form-container justify-content-center align-items-center">
          <Form handleSubmit={this.handleSubmit} />
          {(this.state.response_url.length !== 0) ? <UrlBody url={this.state.response_url} /> : <div></div>}
          <p className="mt-3">
            To save bandwidth on our side and increase download speeds for our users, the download is routed through Google's server.
          </p>
        </div>

        <div className="tutorial-helper">
          <h3 className="">
            Steps to download the video:
          </h3>
          <ol className="list-group-numbered container d-flex flex-column rounded">
            <li className="list-group-item">
              Paste the youtube video url in the form above and click submit.
            </li>
            <li className="list-group-item">
              Click 'Choose Resolution' and choose your resolution, you will be redirected.
            </li>
            <li className="list-group-item">
              Click the three dots on the bottom right of the video player and click 'Download'.
            </li>
          </ol>
        </div>

      </div>
    )
  }
}

export default App;
