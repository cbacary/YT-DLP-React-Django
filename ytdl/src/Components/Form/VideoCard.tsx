import React, { Component } from 'react';
import './VideoCard.css'
interface PropsCard {
    img: string;
    title: string;
    url: string;
}

class VideoCard extends Component<PropsCard, any> {
    render() {
        return (
            <div className="container mt-2 card vid-card">
                <div className="card-body">
                    <h5 className="card-title fs-6">{this.props.title}</h5>
                    <img className="card-img" src={this.props.img} alt={this.props.title} width="286" height="180" />
                    <div className="btn-group mt-2">
                        <a href={this.props.url} target="_blank">
                            <button type="button" className="btn btn-success" aria-expanded="false">
                                Go to raw video
                            </button>
                        </a>
                    </div>
                </div>
            </div >
        );
    }
}

export default VideoCard;