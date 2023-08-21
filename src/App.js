import React, { Component } from 'react';
import NewsAppNavBar from './Components/NewsAppNavBar';
import NewsAppNews from './Components/NewsAppNews';

export class App extends Component {

  render() {
    
    return (
      <div>
        <NewsAppNavBar/>
        <NewsAppNews pageSize={9} country="in" category="sports"/>
      </div>
    )
  }
}

export default App
