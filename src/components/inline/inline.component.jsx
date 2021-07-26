import React from 'react';
import './inline.styles.css';
import { Button } from '../button/button.component.jsx';

export const Inline = props => (
    <div className='inlinePanel'>
        <div className='inlineInfo'>
            <a href={props.text.new_path}><span className = 'inlineButton'><Button text={props.text.buttonName} /></span></a>
            <b>{props.text.title}</b>
            <br></br>{props.text.subtitle2}
        </div>
    </div>
);