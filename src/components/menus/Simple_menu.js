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

function Submenu (){
    const state = useSelector((state) => state);
    let style = {
        justifyContent: state.value.umiejscowienie
    };
    let arr = [["Przycisk 1", "Przycisk 2", "Przycisk 3", "Przycisk 4", "Przycisk 5"],["Przycisk 6", "Przycisk 7", "Przycisk 8", "Przycisk 9", "Przycisk 10"]];
    let sub = state.value.submenu_active === 'sub_3' ? arr[0].map((el, index) => <div key={index} className="sub_menu_btn_box flexCC">{el}</div>) : state.value.submenu_active === 'sub_4' ? arr[1].map((el, index) => <div key={index} className="sub_menu_btn_box flexCC">{el}</div>) : null;
    return (
       <div className='sub_menu_box flexCC' style={style}>
            {sub}
       </div>
    )
}

export function Simple_3 (){
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    let style = {
        justifyContent: state.value.umiejscowienie
    }
    return (
        <>
        <div className='simple_menu_box flexCC' style={style}>
            <div className="simple_menu_btn_box flexCC">Przycisk 1</div>
            <div className="simple_menu_btn_box flexCC" onClick={()=>dispatch(method.changeState(['submenu_active', 'sub_3']))}>Przycisk 2<i className="fa-solid fa-caret-down"></i></div>
            <div className="simple_menu_btn_box flexCC">Przycisk 3</div>
            <div className="simple_menu_btn_box flexCC" onClick={()=>dispatch(method.changeState(['submenu_active', 'sub_4']))}>Przycisk 4<i className="fa-solid fa-caret-down"></i></div>
            <div className="simple_menu_btn_box flexCC">Przycisk 5</div>
            <div className="simple_menu_btn_box flexCC">Przycisk 6</div>
        </div>
        {state.value.submenu_active === "sub_3" || state.value.submenu_active === "sub_4" ? <Submenu />: null}
        </>
    )
}

export function Simple_4 (){
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    return (
        <>
        <div className='sm_4_box flexCC'>
            <div className='sm_4_btns_box'>
                <div className="square_btn">
                    <div className="square_btn_box flexCC"><i class="fa-solid fa-bars"></i></div>
                </div>
            </div>
        </div>
        </>
    )
}