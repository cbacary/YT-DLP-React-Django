import React, { Component } from 'react';
import "./Header.css"
const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>
                            <a className="header-tag-main" href="/">Youtube-MP4</a>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;