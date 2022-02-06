import React, { Component } from 'react';

export interface IVideo {
    vid: {
        res: string,
        title: string,
        url: string,
    }

}

const DisplayVideos = (video: IVideo) => {
    return (
        <div className="btn-group mt-2">
            <a href={video.vid.url} target="_blank">
                <button type="button" className="btn btn-success" aria-expanded="false">
                    Go to raw video
                </button>
            </a>
        </div>

    )
};

export default DisplayVideos;