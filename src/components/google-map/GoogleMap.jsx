import React from 'react';
import "./GoogleMap.scss";

export const GoogleMap = ({ width, height }) => {
    return (
        <div style={{ width: {width}, height: height, overflow: 'hidden', position: 'relative' }}>
            <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3138.998744315493!2d35.01672248442502!3d48.451368543900706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe55355a2daf9%3A0x56d5ed5f936fd8b1!2z0KHRgtC-INCQ0LLRgtC-0YHQtdGA0LLRltGBIEF1dG9XaXphcmQ!5e1!3m2!1sru!2sua!4v1736090792914!5m2!1sru!2sua"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="maps"
            ></iframe>
        </div>
    )
}