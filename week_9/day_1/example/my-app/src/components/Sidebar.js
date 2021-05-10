import React, { Component } from 'react';
import "../App.css"

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;