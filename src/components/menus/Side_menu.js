import React from 'react';
import ReactDOM from 'react-dom/client';
import { useSelector, useDispatch } from 'react-redux';
import changeValue, * as method from '../../slices/changeValue';

import './side_menu.css';
import './side_menu_2.css';
import './menu_basic.css';

export function Side_1 (){
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    return (
        <div className={state.value.active_side_menu === "" ? "menu_box" : state.value.active_side_menu ?"menu_box active_menu" : "menu_box not_active_menu"}>
            <div className="menu_button_place"></div>
            <div className="menu_main_button" onClick={()=>dispatch(method.negativeState('active_side_menu'))}><i className="fa-solid fa-bars"></i></div>
            <div className="menu_button flexCC">Przycisk_1</div>
            <div className="menu_button flexCC">Przycisk_2<i className="fa-solid fa-caret-down"></i></div>
            {state.submenu_active === "sub_1" ?<div className="submenu submenu_1">
                <div className="submenu_button flexCC">Przycisk_1</div>
                <div className="submenu_button flexCC">Przycisk_2</div>
                <div className="submenu_button flexCC">Przycisk_3</div>
                <div className="submenu_button flexCC">Przycisk_4</div>
                <div className="submenu_button flexCC">Przycisk_5</div>
            </div>:null}
            <div className="menu_button flexCC">Przycisk_3</div>
            <div className="menu_button flexCC">Przycisk_4</div>
            <div className="menu_button flexCC">Przycisk_5</div>
        </div>
    )
}

export function Side_2 (){
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    return (
        <div>
            <div className="menu_box_1">
                <div className="menu_button flexCC" onMouseOver={()=>{dispatch(method.negativeState('button_name')); dispatch(method.changeState(['button_name_value', "Przycisk 1"]))}} onMouseOut={()=>{dispatch(method.negativeState('button_name'))}}><i className="fa-solid fa-house"></i></div>
                <div className="menu_button flexCC" onMouseOver={()=>{dispatch(method.negativeState('button_name')); dispatch(method.changeState(['button_name_value', "Przycisk 2"]))}} onMouseOut={()=>{dispatch(method.negativeState('button_name'))}}><i className="fa-solid fa-house"></i></div>
                <div className="menu_button flexCC" onMouseOver={()=>{dispatch(method.negativeState('button_name')); dispatch(method.changeState(['button_name_value', "Przycisk 3"]))}} onMouseOut={()=>{dispatch(method.negativeState('button_name'))}}><i className="fa-solid fa-house"></i></div>
                <div className="menu_button flexCC" onMouseOver={()=>{dispatch(method.negativeState('button_name')); dispatch(method.changeState(['button_name_value', "Przycisk 4"]))}} onMouseOut={()=>{dispatch(method.negativeState('button_name'))}}><i className="fa-solid fa-house"></i></div>
                <div className="menu_button flexCC" onMouseOver={()=>{dispatch(method.negativeState('button_name')); dispatch(method.changeState(['button_name_value', "Przycisk 5"]))}} onMouseOut={()=>{dispatch(method.negativeState('button_name'))}}><i className="fa-solid fa-house"></i></div>
                
            </div>
            {state.value.button_name ? <div className="button_name flexCC"><div className="flexCC">{state.value.button_name_value}</div></div> : null}
        </div>
    )
}