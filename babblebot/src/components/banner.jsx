import React from "react";
import './componentStyles.css';

export default function Banner({
    backgroundColor = '',
    headline = '',
    subText = '',
    buttonColor = '',
    buttonText = '',
    textColor = ''
}) {

    return (
        <div className='bannerContainer' style={{ backgroundColor: backgroundColor  }}>
            <h2 className='bannerHeadline' style={{ color: textColor }}>{ headline }</h2>
            <p className='bannerSubtext' style={{ color: textColor }}>{ subText }</p>
            <button className='bannerBtn' style={{backgroundColor:  buttonColor, color: textColor  }}>{ buttonText }</button>
        </div>
    )
}