import React from 'react';
import ReactDOM from 'react-dom/client';
import { useSelector, useDispatch } from 'react-redux';
import * as method from '../../slices/changeValue';

export function Ogolne(){
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    return (
        <div className="sub_buttons_box flexCC">
            <div className="sub_button">
                <div className="sub_button_title">Wielkość czcionki</div>
                <select onChange={(event)=>dispatch(method.changeState(['wielkosc_czcionki', parseInt(event.target.value)]))} value={state.value.wielkosc_czcionki}>
                    <option value={16}>16</option>
                    <option value={18}>18</option>
                    <option value={20}>20</option>
                    <option value={22}>22</option>
                    <option value={24}>24</option>
                    <option value={26}>26</option>
                </select>
            </div>
            <div className="sub_button">
                <div className="sub_button_title">Rodzaj czcionki</div>
                <select onChange={(event)=>dispatch(method.changeState(['rodzaj_czcionki', event.target.value]))} value={state.value.rodzaj_czcionki}>
                    <option value="Abel">Abel</option>
                    <option value="Playfair Display">Playfair Display</option>
                    <option value="Roboto">Roboto</option>
                    <option value="Lobster">Lobster</option>
                    <option value="Russo One">Russo One</option>
                    <option value="Teko">Teko</option>
                    <option value="Ubuntu">Ubuntu</option>
                    <option value="Kanit">Kanit</option>
                    <option value="Times New Roman">Times New Roman</option>
                    <option value="Calibri">Calibri</option>
                </select>
            </div>
            <div className="sub_button">
            <div className="sub_button_title">Typ czcionki</div>
                <select onChange={(event)=>dispatch(method.changeState(['typ_czcionki', event.target.value]))} value={state.value.typ_czcionki}>
                    <option value="normal">Normalna</option>
                    <option value="bold">Pogrubiona</option>
                </select>
            </div>
        </div>
    )
}
export function Menu(){
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    return (
        <div className="sub_buttons_box flexCC">
        <div className="sub_button">
            <div className="sub_button_title">Rodzaj menu</div>
            <select onChange={(event)=>dispatch(method.changeState(['rodzaj_menu', event.target.value]))} value={state.value.rodzaj_menu}>
                <option value="simple_1">Simple 1</option>
                <option value="simple_2">Simple 2</option>
                <option value="simple_3">Simple 3</option>
                <option value="simple_4">Simple 4</option>
                <option value="side_1">Side 1</option>
                <option value="side_2">Side 2</option>
            </select>
        </div>
        <div className="sub_button">
        <div className="sub_button_title">Umiejscowienie przycisków</div>
            <select onChange={(event)=>dispatch(method.changeState(['umiejscowienie', event.target.value]))} value={state.value.umiejscowienie}>
                <option value="left">Po lewej</option>
                <option value="center">Centralnie</option>
                <option value="right">Po prawej</option>
            </select>
        </div>
    </div>
    )
}
export function Glowna(){
    return (
        <>Glowna</>
    )
}
export function Portfolio(){
    return (
        <>Portfolio</>
    )
}
export function Galeria(){
    return (
        <>Galeria</>
    )
}
export function Kontakt(){
    return (
        <>Kontakt</>
    )
}
