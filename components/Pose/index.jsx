import React from 'react';

import "./style.css"
import image from "../../img/yoga-pose.jpg"

export const Pose = (props) => {
    return (
        <div className="pose">
            <img className="img" src={image} alt="obrazek jogina"/>
        </div>
    )
}