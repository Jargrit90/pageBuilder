import React from 'react';
import ReactDOM from 'react-dom/client';
import { useSelector, useDispatch } from 'react-redux';
import * as method from '../../slices/changeValue';

import './simple_1.css';
import './menu_basic.css';

export function Simple_1 (){
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    let style = {
        justifyContent: state.value.umiejscowienie
    }
    return (
        <div className='simple_menu_box flexCC' style={style}>
            <div className="simple_menu_btn_box flexCC">Przycisk 1</div>
            <div className="simple_menu_btn_box flexCC">Przycisk 2</div>
            <div className="simple_menu_btn_box flexCC">Przycisk 3</div>
            <div className="simple_menu_btn_box flexCC">Przycisk 4</div>
            <div className="simple_menu_btn_box flexCC">Przycisk 5</div>
            <div className="simple_menu_btn_box flexCC">Przycisk 6</div>
        </div>
    )
}