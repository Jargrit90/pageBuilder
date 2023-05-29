import React from 'react';
import ReactDOM from 'react-dom/client';
import { useSelector, useDispatch } from 'react-redux';
import * as method from './slices/changeValue';
import './App.css';

import BuilderMenu from './components/BuilderMenu/BuilderMenu';
import * as menuOption from './components/menus/Simple_menu';
/*
font-family: 'Abel', sans-serif;
font-family: 'Lobster', cursive;
font-family: 'Playfair Display', serif;
font-family: 'Roboto', sans-serif;
font-family: 'Russo One', sans-serif;
font-family: 'Teko', sans-serif;
*/

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  let style = {
    fontSize: state.value.wielkosc_czcionki + "px",
    fontFamily: state.value.rodzaj_czcionki,
    fontWeight: state.value.typ_czcionki
  }
  return (
    <div className="App">
      <div style={style}>
        {state.value.rodzaj_menu === 'simple_1' ? <menuOption.Simple_1 /> : null}
        {state.value.rodzaj_menu === 'simple_2' ? <menuOption.Simple_2 /> : null}
      </div>
      <BuilderMenu />
    </div>
  );
}

export default App;
