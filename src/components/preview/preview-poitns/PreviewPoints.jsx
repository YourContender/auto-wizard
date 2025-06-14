import React from 'react'

export const PreviewPoints = ({ text }) => {
    return (
        <div className="preview__container-left-block-descr-points-item">
            <svg 
                className="check-svg" 
                aria-hidden="true" 
                focusable="false" 
                data-prefix="fas" 
                data-icon="caret-down" 
                role="img"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 320 512" 
                style={{height: "20px", width: "30px" }}>
                <path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
            </svg>
            
            <span>{text}</span>
        </div>
    )
}
