import React from 'react'
import {Button} from './Button';
import './HeroSection.css';
import '../App.css'; //to make sure you have all your styles

function HeroSection() {
    return (
        <div className='hero-container'>
            {/* <video src="/videos/dynasty-theme.mp4" autoPlay loop muted /> */}
            <video src={process.env.PUBLIC_URL + "/videos/dynasty-theme.mp4"} autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn-large'>
                    Get Started
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn-large'>
                    Watch Trailer <i className='far fa-play-circle'></i>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
