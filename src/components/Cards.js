import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src="images/waterfall.jpg" 
                            text="Explore the Hidden Waterfall at Lake Hylia" 
                            label="Adventure"
                            path="/services"/>
                        <CardItem 
                            src="images/islands.jpg" 
                            text="Travel through the Islands of Hyrule" 
                            label="Luxury"
                            path="/services"/>
                        <CardItem 
                            src="images/Skyloft.jpg" 
                            text="Jump over the Rocks of Skyloft" 
                            label="Flight"
                            path="/services"/>
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src="images/infinite_ocean.png" 
                            text="Set Sail on the Infinite Ocean visiting Atlantis" 
                            label="Mystery"
                            path="/services"/>
                        <CardItem 
                            src="images/quidditch.jpg" 
                            text="Experience Quidditch on Top of Azkaban Prison" 
                            label="Sports"
                            path="/products"/>
                        <CardItem 
                            src="images/equestria.jpg" 
                            text="Ride through Equestria on a Pegasus" 
                            label="Adventure"
                            path="/sign-up"/>
                        <CardItem 
                            src="images/tiana.png" 
                            text="Eat Royal Jumbo at Tiana's Palace" 
                            label="Food"
                            path="/products"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
