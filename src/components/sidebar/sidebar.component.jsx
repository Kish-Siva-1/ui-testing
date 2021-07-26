import React from 'react';
import './sidebar.styles.css';
import { Button } from '../button/button.component.jsx';

export const Sidebar = props => (
    <div className='outer-div'>
        <div className='sidebarPanel'>
                <b>{props.text.title}</b>
                <br></br>
                {props.text.subtitle2}
                <br></br>
                <br></br>
                <a href={props.text.new_path}><div className = 'sidebarButton'><Button text={props.text.buttonName} /></div></a>
        </div>
    </div>
);