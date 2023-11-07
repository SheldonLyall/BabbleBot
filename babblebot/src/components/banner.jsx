import React from "react";

export default function Banner({
    backgroundColor = '',
    headline = '',
    subText = '',
    buttonColor = '',
    buttonText = '',
    textColor = ''
}) {

    return (
        <div className='parent' style={{ backgroundColor: backgroundColor  }}>
            <h2 style={{ color: textColor }}>{ headline }</h2>
            <p style={{ color: textColor }}>{ subText }</p>
            <button style={{backgroundColor:  buttonColor, color: textColor  }}>{ buttonText }</button>
        </div>
    )
}