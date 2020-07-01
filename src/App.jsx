import React, { Component } from "react";
import './App.css';

import NavBar from "./components/NavBar";
import CardList from "./components/CardList";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
library.add(faBars, faTimes);

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <CardList />
      </>
    );
  }
}

export default App;
