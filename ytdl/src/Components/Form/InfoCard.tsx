import React, { Component } from 'react';
import "./InfoCard.css"
const InfoCard = (props: any) => {
    return (
        <div className="card info-card h-100" style={{ "width": "20rem" }}>
            <div className="card-body justify-content-center">
                <h5 className="card-title">{props.title}</h5>
                <hr />
                <img src={props.img} className="card-img" alt="alt image" />
                <hr />
                <p className="card-text fs-6 fw-light">{props.text}</p>
            </div>
        </div>
    );
}

export default InfoCard;