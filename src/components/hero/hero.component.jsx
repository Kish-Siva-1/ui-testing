import React from 'react';
import './hero.styles.css';
import { Button } from '../button/button.component.jsx';

export const Hero = props => (
    
        <div className='heroImage' style={{backgroundImage: `url(${props.text.backgroundImage})`}}>
            {/* <div className='heroTitle'>{props.text.subtitle4}</div> */}
            <b><div className = 'fontSubtitle'>{props.text.subtitle4}</div></b>
            <div className='heroButton'>
                <br></br>
                <a href={props.text.new_path}><Button text={props.text.buttonName} /></a>
            </div>
        </div>
);