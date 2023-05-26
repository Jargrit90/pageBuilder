import React from 'react';
import ReactDOM from 'react-dom/client';
import { useSelector, useDispatch } from 'react-redux';
import * as method from '../../slices/changeValue';
import './builderMenu.css';
import '../../index.css';
import * as subcomponent from './SubComponents';

function BuilderMenu(){
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    return (
        <div className='main_menu_box'>
            <div className="top_bar flexCC">
                <div className="top_bar_button btn" onClick={()=>dispatch(method.changeState(['kategoria', 'ogolne']))}>Ogólne</div>
                <div className="top_bar_button btn" onClick={()=>dispatch(method.changeState(['kategoria', 'menu']))}>Menu</div>
                <div className="top_bar_button btn" onClick={()=>dispatch(method.changeState(['kategoria', 'glowna']))}>Strona główna</div>
                <div className="top_bar_button btn" onClick={()=>dispatch(method.changeState(['kategoria', 'portfolio']))}>Portfolio</div>
                <div className="top_bar_button btn" onClick={()=>dispatch(method.changeState(['kategoria', 'galeria']))}>Galeria</div>
                <div className="top_bar_button btn" onClick={()=>dispatch(method.changeState(['kategoria', 'kontakt']))}>Kontakt</div>
            </div>
            <div className="bottom_bar flexCC">
                {state.value.kategoria === 'ogolne' ? <subcomponent.Ogolne /> : null}
                {state.value.kategoria === 'menu' ? <subcomponent.Menu /> : null}
                {state.value.kategoria === 'glowna' ? <subcomponent.Glowna /> : null}
                {state.value.kategoria === 'portfolio' ? <subcomponent.Portfolio /> : null}
                {state.value.kategoria === 'galeria' ? <subcomponent.Galeria /> : null}
                {state.value.kategoria === 'kontakt' ? <subcomponent.Kontakt /> : null}
            </div>
        </div>
    )
}
export default BuilderMenu;