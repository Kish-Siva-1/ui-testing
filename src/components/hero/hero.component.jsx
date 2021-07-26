import React from 'react';
import './hero.styles.css';
import { Button } from '../button/button.component.jsx';

export const Hero = props => (
    <a href={props.text.new_path}>
        <div className='heroImage' style={{backgroundImage: `url(${props.text.backgroundImage})`}}>
            <div className='heroButton'>
                <Button text={props.text.buttonName} />
            </div>
        </div>
    </a>
);