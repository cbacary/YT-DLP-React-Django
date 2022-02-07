import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form/Form';
import DisplayVideos, { IVideo } from './Components/Video/Video'
import axios from "axios";
import Header from './Components/Header/Header';
import { API_URL } from '.';
import VideoCard from './Components/Form/VideoCard';

class App extends Component {

  state = {
    videos: [],
    bestVideo: {
      res: "",
      title: "",
      url: "",
      thumbnail: "",
    },
    // bestVideo: as any,
    processingStatus: false,
  };

  handleSubmit = (urlPassed: string) => {
    this.setState({ videos: [] });
    axios.post(API_URL, { 'url': urlPassed }).then((res) => {
      this.setState({ videos: res });
      const highestResObj = res.data.reduce((prev: any, curr: any) => {
        return parseInt(prev.res, 10) > parseInt(curr.res, 10) ? prev : curr;
      });
      this.setState({ bestVideo: highestResObj });
      console.log(this.state.bestVideo);
    });
  }

  render() {
    return (

      <div className="App">
        <Header />
        <hr />
        <div className="">
          <Form handleSubmit={this.handleSubmit} />
          {/* {(this.state.videos.length !== 0) ? <DisplayVideos vid={this.state.bestVideo} /> : <div></div>} */}
          <p className="mt-3">
            To save bandwidth on our side and increase download speeds for our users, the download is routed through Google's server.
          </p>
          <p className="mt-2">
            Once converted, click "Go to raw video," wait to be redirected, and right click the player and select "Save video as..." Or, click the ellipses and then click "Download."
          </p>
        </div>
        <small id="urlHelp" className="form-text text-muted bottom">We're open source! Check out our <a href="https://github.com/CrabbleOrNiceTry/YT-DLP-React-Django" target="blank">Github</a></small>
        {(this.state.videos.length !== 0) ? <VideoCard url={this.state.bestVideo.url} img={this.state.bestVideo.thumbnail} title={this.state.bestVideo.title} /> : <div></div>}
      </div>
    )
  }
}

export default App;
