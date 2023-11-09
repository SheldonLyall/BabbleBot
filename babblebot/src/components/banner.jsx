import React from "react";
import './componentStyles.css';

export default function Banner({
    imgSrc = '',
    backgroundColor = '',
    headline = '',
    subText = '',
    buttonColor = '',
    buttonText = '',
    textColor = ''
}) {

    return (
        <div className='bannerContainer' style={{ backgroundImage: 'url('+imgSrc+')' }} >
            <div className='div1' style={{ backgroundColor: backgroundColor  }}>

            </div>
            <div className='div2'>
                <h2 className='bannerHeadline' style={{ color: textColor }}>{ headline }</h2>
                <p className='bannerSubtext' style={{ color: textColor }}>{ subText }</p>
            </div>
            <div className='div3'>
                <button className='bannerBtn' style={{backgroundColor:  buttonColor, color: textColor  }}>{ buttonText }</button>
            </div>
        </div>
    )
}