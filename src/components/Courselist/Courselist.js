import React from 'react';
import './Courselist.css';
import { useState } from 'react';
import Coursecard from '../Coursecard/Coursecard';
const Courselist = ()=> {
    var courseData = [{title: 'web development' , price: '9.44'}, 
                      {title: 'SEO learnig' , price: '43.22'},
                      {title: 'react js' , price: '23.00'},
                      {title: 'game development' , price: '11.00'},
                      {title: 'ICT course' , price: '8.50'},
                      {title: 'software development' , price: '31.00'}, 
                      {title: 'IT expert' , price: '13.00'},
                      {title: 'web design' , price: '33.98'},
                      {title: 'graphics design' , price: '23.00'},
                      {title: 'photoshop expert' , price: '34.35'},
                      {title: 'Auto Cad hero to zero' , price: '19.50'},
                      {title: 'react native js' , price: '31.00'},
                      {title: 'front end development' , price: '13.70'},
                      {title: 'back end development' , price: '23.99'},
                      {title: 'ethical Hacking' , price: '60.34'},]
    
    const [course, setCourse] = useState(courseData);
    const [cartNo, setCartNo] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const addToCart = (price) =>{
        setCartNo(cartNo + 1);
        setTotalPrice(totalPrice + parseFloat(price));
        
    }
    var floatPrice = totalPrice.toFixed(2);
    return (
        <div className="row">
            <div className="course-list">
                <ul>
                    {
                            course.map( data => <Coursecard title={data.title} price={data.price} addToCart= {addToCart}></Coursecard>)

                    }
                </ul>
            </div>
                <div className="order-summary">
                    <h2>Enroll Summary</h2>
                    <h4>Total Enrolled: {cartNo}</h4>
                    <h5><span>Course:</span> <span className="right">{cartNo}</span></h5>
                    <h3><span>Total Price: $ </span> <span className="right">{floatPrice}</span></h3>
                    <button className="btn btn-warning">Review cart</button>
                </div>
        </div>
    )
}
export default Courselist;