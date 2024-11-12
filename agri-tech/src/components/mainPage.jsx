// import React from 'react'
import { Link } from 'react-router-dom';
import './mainPage.css';
import Button from 'react-bootstrap/Button';

// import BackgroundImage from '/smart-farming_img.webp';

function MainPage() {
  return (
    <>

    <div id='body'>
    <h1>Agri-Tech</h1>
        <div id='main'>
          <div id='text'> 
            <p>Agri-Tech is a web application that helps farmers to predict the best crops to plant based on the soil and weather conditions in their area.</p>
            <p>It uses machine learning algorithms to analyze the data and provide recommendations to the farmers.</p>
            <p>With Agri-Tech, farmers can make informed decisions about their crops and improve their yield.</p>
            </div>
            <div id='image'>
            <img src="smart-farming_img.webp" alt="Smart Farming" />
            </div>
        </div>

        <div id='lower'>
        <div id='image'>
            <img src="smart-farming_img.webp" alt="Smart Farming" />
            </div>

          <div id='text'>
            <h2>How it works</h2>
                <li>User inputs data from Soil Analysis</li>
                <br></br>
                <li>User inputs results of weather measurements</li>
                <br></br>
                <li>Crop Recommendations through predictions based on our pre-trained model</li>
                <br></br>
          </div>
          
        </div>

        <br></br>
        <Link to="/data">
        <Button variant="outline-success">Get Started</Button>{' '}
        </Link>
        <br></br>
    </div>
   
    </>
  )
}

export default MainPage