import React from 'react';

import "./style.css"

export const Header = (props) => {
    return (

                <header className="site-title">{props.title}</header>

    )
}