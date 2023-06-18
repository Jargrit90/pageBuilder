import React from 'react';
import ReactDOM from 'react-dom/client';
import { useSelector, useDispatch } from 'react-redux';
import * as method from '../../slices/changeValue';

import './gallery.css';

export function Gallery_1(){
    const state = useSelector((state) => state);
    /*method.changeState(['image_index', index])); dispatch(method.negativeState('active_full_image')) */
    const dispatch = useDispatch();
    let gallery = state.value.gallery.map((el, index)=>
    <div className='image_box_1 flexCC' key={index}>
        <img src={state.value.gallery[index]} onClick={()=>{dispatch(method.changeState(['image_index', index])); dispatch(method.negativeState('active_full_image'))}}/>
    </div>);
    return (
        <div className="gallery_box flexCC">
            {gallery}
            {state.value.active_full_image ? <div className='full_image_box flexCC'>
                <img src={state.value.gallery[state.value.image_index]}/>
                <div className='arrows_box flexCC'>
                    <span className="arrow_box" onClick={()=>dispatch(method.changeImage('minus'))}><i className="fa-solid fa-chevron-left"></i></span>
                    <span className="arrow_box" onClick={()=>dispatch(method.changeImage('plus'))}><i className="fa-solid fa-chevron-right"></i></span>
                    
                </div>
                <span className="close" onClick={()=>dispatch(method.negativeState('active_full_image'))}><i class="fa-solid fa-xmark"></i></span>
            </div>: null}
        </div>
    )
}