import React from 'react';
import './button.styles.css';

export const Button = props => (
    <div className='onboardButton'>
        <b>{props.text}</b>
    </div>
);