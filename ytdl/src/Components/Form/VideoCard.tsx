import React, { Component } from 'react';
import './VideoCard.css'

interface PropsCard {
    url: string;
}

class VideoCard extends Component<PropsCard, any> {
    render() {
        return (
            <div className="container mt-2 justify-content-center w-75" >
                <div className="embed-responsive embed-responsive-16by9">
                    <video controls className="embed-responsive-item" width="100%" height="auto">
                        <source src={this.props.url} type="video/mp4" />
                    </video>
                </div>
            </div >
        );
    }
}

export default VideoCard;