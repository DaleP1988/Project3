import React from "react";
import background from '../../images/floor2.jpg';

const ParallaxBackground = () => (
    <div className="parallax">
        <img
        className="background-img"
        src={background}
        alt="Unsplashed background img 1"
        />
    </div>
)

export default ParallaxBackground; 
