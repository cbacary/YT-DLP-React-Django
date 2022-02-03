import React, { Component } from 'react';

export interface IUrl {
    url: {
        res: string,
        url: string,
    }[]
}

const UrlBody = (urls: IUrl) => {
    const rows = urls.url.map((row, index) => {
        return (
            <li><a className="dropdown-item" href={row.url} target="_blank" download>{row.res}</a></li>
        )
    })
    return (
        <div className="btn-group mt-2">
            <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Choose Resolution
            </button>
            <ul className="dropdown-menu">
                {rows}
            </ul>
        </div>

    )
};

export default UrlBody;