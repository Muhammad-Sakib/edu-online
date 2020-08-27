import React from 'react';
import './Coursecard.css';
import { useState } from 'react';
import cardPhoto from '../../course_img.jpg';
const Coursecard = (props)=> {
    return (
        //card using bootstrap
        <div className="card card-Style">
          <img className="card-img-top" src={cardPhoto} alt="Card image cap"/>
          <div className="card-body">
            <h4>{props.title}</h4>
            <p> Description</p>
            <h4 className="card-title">Price: ${props.price}</h4>
            <button className="btn btn-warning" onClick={() => props.addToCart(props.price)}>Enroll Now</button>
          </div>
        </div>
    )
}
export default Coursecard;