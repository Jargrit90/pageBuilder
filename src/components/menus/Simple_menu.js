import React from 'react';
import ReactDOM from 'react-dom/client';
import { useSelector, useDispatch } from 'react-redux';
import changeValue, * as method from '../../slices/changeValue';

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

export function Simple_2 (){
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
            <div className="simple_menu_btn_box flexCC">
                <div className='simple_menu_sub_btn_box flexCC' onClick={()=>dispatch(method.negativeState('sub_menu_active'))}>Przycisk 4<i className="fa-solid fa-caret-down"></i></div>
                {state.value.sub_menu_active ?<div className='sub_btns_box'>
                    <div className="simple_menu_sub_btn">Przycisk 1</div>
                    <div className="simple_menu_sub_btn">Przycisk 2</div>
                    <div className="simple_menu_sub_btn">Przycisk 3</div>
                    <div className="simple_menu_sub_btn">Przycisk 4</div>
                </div>: null}
            </div>
            <div className="simple_menu_btn_box flexCC">Przycisk 5</div>
            <div className="simple_menu_btn_box flexCC">Przycisk 6</div>
        </div>
    )
}