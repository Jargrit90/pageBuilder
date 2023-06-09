import React from 'react';
import ReactDOM from 'react-dom/client';
import { useSelector, useDispatch } from 'react-redux';
import * as method from './slices/changeValue';
import './App.css';

import BuilderMenu from './components/BuilderMenu/BuilderMenu';
import * as menuOption from './components/menus/Simple_menu';
import * as menuOption_2 from './components/menus/Side_menu';
import * as mainpageOption from './components/mainpages/Mainpage';
import * as galleryOption from './components/galleries/Gallery';
import * as portfolioOption from './components/portfolios/Portfolio';
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
        {state.value.rodzaj_menu === 'simple_3' ? <menuOption.Simple_3 /> : null}
        {state.value.rodzaj_menu === 'simple_4' ? <menuOption.Simple_4 /> : null}
        {state.value.rodzaj_menu === 'side_1' ? <menuOption_2.Side_1 /> : null}
        {state.value.rodzaj_menu === 'side_2' ? <menuOption_2.Side_2 /> : null}
        {state.value.komponent_glowny === 'mainpage_1' ? <mainpageOption.Mainpage_1 /> : null}
        {state.value.komponent_glowny === 'mainpage_2' ? <mainpageOption.Mainpage_2 /> : null}
        {state.value.komponent_glowny === 'mainpage_3' ? <mainpageOption.Mainpage_3 /> : null}
        {state.value.komponent_glowny === 'gallery_1' ? <galleryOption.Gallery_1 /> : null}
        {state.value.komponent_glowny === 'portfolio_1' ? <portfolioOption.Portfolio_1 /> : null}
        {state.value.komponent_glowny === 'portfolio_2' ? <portfolioOption.Portfolio_2 /> : null}
      </div>
      <BuilderMenu />
    </div>
  );
}

export default App;
