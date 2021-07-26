import React, { Component } from 'react';
import { Hero } from './components/hero/hero.component.jsx';
import { Inline } from './components/inline/inline.component.jsx';
import { Sidebar } from './components/sidebar/sidebar.component.jsx';
import { Button } from './components/button/button.component.jsx';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      buttonName: 'Get Started',
      title: 'Plan your trip to Greece',
      subtitle: 'Customize your trip with help from a local travel specialist',
      subtitle2: 'Chat with a local specialist who can help organise your trip',
      subtitle3: 'Create your custom-made trip to Greece',
      subtitle4: 'Peronsalized trips for independent travelers',
      backgroundImage: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9',
      new_path: '/onboarding_path'
    };
  }

  render() {
    return (
      <div className='App'>
          <StickyHeader
            header={
              <div className="Header_root">
                <a href={this.state.new_path}><span className="Header_button"><Button text={this.state.buttonName} /></span></a>
                <h3 className="Header_title">{this.state.subtitle3}</h3>
              </div>
            }>
          </StickyHeader>
          <Hero text={this.state} />
          <br></br>
          <br></br>
          <Inline text={this.state} />
          <br></br>
          <br></br>
          <Sidebar text={this.state} />
      </div>
    );
  }
}

export default App;