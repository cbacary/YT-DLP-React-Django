import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form/Form';
import DisplayVideos, { IVideo } from './Components/Video/Video'
import axios from "axios";
import Header from './Components/Header/Header';
import { API_URL } from '.';
import VideoCard from './Components/Form/VideoCard';
import InfoCard from './Components/Form/InfoCard';

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
    error: false,
    processingStatus: false,
  };

  handleSubmit = (urlPassed: string) => {
    this.setState({ error: false, videos: [], processingStatus: true });
    axios.post(API_URL, { 'url': urlPassed }).then((res) => {

      this.setState({ videos: res });
      const highestResObj = res.data.reduce((prev: any, curr: any) => {
        return parseInt(prev.res, 10) > parseInt(curr.res, 10) ? prev : curr;
      });
      this.setState({ bestVideo: highestResObj });
      console.log(this.state.bestVideo);
    })
      .catch((err) => {
        this.setState({ error: true })
      });

    this.setState({ processingStatus: false });
  }

  somethingWentWrong =
    <div className="container w-50">
      <div className="justify-content-center align-items-center">
        <div className="alert alert-danger mt-3 rounded " role="alert">Something went wrong. Please try again, check to make sure the URL is valid.</div>
      </div>
    </div>



  render() {
    return (

      <div className="App">
        <Header />
        <hr />
        <div className="container w-100">
          <Form handleSubmit={this.handleSubmit} buttonText={(this.state.processingStatus) ? "Processing..." : "Convert"} />
          {(this.state.error) ? this.somethingWentWrong : <div></div>}
          <p className="mt-3 ">
            To save bandwidth on our side and increase download speeds for our users, the download is routed through Google's server.
          </p>
          <p className="mt-2">
            Once converted, right click the player and select "Save video as..." Or, click the ellipses and then click "Download."
          </p>
        </div>
        <small id="urlHelp" className="form-text text-muted bottom">We're open source! Check out our <a href="https://github.com/CrabbleOrNiceTry/YT-DLP-React-Django" target="blank">Github</a></small>
        {(this.state.videos.length !== 0) ? <VideoCard url={this.state.bestVideo.url} /> : <div></div>}
        <div className="container mb-2 mt-3 justify-content-center">
          <div className="row justify-content-center">
            <div className="col-md-auto">
              <InfoCard className="col" img="http://thecontextofthings.com/wp-content/uploads/2015/10/leopardo-corre-1280x800.jpg" title="We're Fast!" text="We're fast. Like really fast. Using Google's servers saves us bandwidth and increases your download speed." />
            </div>
            <div className="col-md-auto">
              <InfoCard className="col" img="https://raw.githubusercontent.com/yt-dlp/yt-dlp/master/.github/banner.svg" title={<a href="https://github.com/yt-dlp/yt-dlp" >YT-DLP</a>} text={"We use the YT-DLP api to generate the videos. If possible, we reccomend you use their command line utility as it will offer a better and more robust experience."} />
            </div>
            <div className="col-md-auto">
              <InfoCard className="col" img="https://cio.ucop.edu/wp-content/uploads/2018/10/Open-Source-Software.png" title="We're Open Source!" text={<div>Support <a href="https://github.com/CrabbleOrNiceTry/YT-DLP-React-Django">open source</a> and community driven projects by using our Youtube-MP4 converter. More websites to be supported soon!</div>} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
