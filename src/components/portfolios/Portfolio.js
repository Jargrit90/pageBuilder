import React from 'react';
import ReactDOM from 'react-dom/client';
import { useSelector, useDispatch } from 'react-redux';
import * as method from '../../slices/changeValue';

import './portfolio.css';

export function Portfolio_1(){
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    return (
        <div className="portfolio_box flexCC">
            <div className="portfolio_element p_e_1 col-xl-5 col-lg-5 col-sm-10 col-10 " onMouseEnter={()=>dispatch(method.changeState(['p_e_index', 0]))} onMouseLeave={()=>dispatch(method.changeState(['p_e_index', ""]))}>
                {state.value.p_e_index === 0 ?<div className="portfolio_element_info flexCC">
                    <div>
                    <div className="p_e_title">Projekt_1</div>
                    <div className="p_e_next" onClick={()=>dispatch(method.changeState(['p_e_active', 0]))}>(kliknij by zobaczyć więcej)</div>
                    </div>
                </div> : null}
            </div>
            <div className="portfolio_element p_e_2 col-xl-5 col-lg-5 col-sm-10 col-10 " onMouseEnter={()=>dispatch(method.changeState(['p_e_index', 1]))} onMouseLeave={()=>dispatch(method.changeState(['p_e_index', ""]))}>
                {state.value.p_e_index === 1 ?<div className="portfolio_element_info flexCC">
                    <div>
                    <div className="p_e_title">Projekt_2</div>
                    <div className="p_e_next" onClick={()=>dispatch(method.changeState(['p_e_active', 1]))}>(kliknij by zobaczyć więcej)</div>
                    </div>
                </div> : null}
            </div>
            <div className="portfolio_element p_e_3 col-xl-5 col-lg-5 col-sm-10 col-10 " onMouseEnter={()=>dispatch(method.changeState(['p_e_index', 2]))} onMouseLeave={()=>dispatch(method.changeState(['p_e_index', ""]))}>
                {state.value.p_e_index === 2 ?<div className="portfolio_element_info flexCC">
                    <div>
                    <div className="p_e_title">Projekt_3</div>
                    <div className="p_e_next" onClick={()=>dispatch(method.changeState(['p_e_active', 2]))}>(kliknij by zobaczyć więcej)</div>
                    </div>
                </div> : null}
            </div>
            <div className="portfolio_element p_e_4 col-xl-5 col-lg-5 col-sm-10 col-10 " onMouseEnter={()=>dispatch(method.changeState(['p_e_index', 3]))} onMouseLeave={()=>dispatch(method.changeState(['p_e_index', ""]))}>
                {state.value.p_e_index === 3 ?<div className="portfolio_element_info flexCC">
                    <div>
                    <div className="p_e_title">Projekt_4</div>
                    <div className="p_e_next" onClick={()=>dispatch(method.changeState(['p_e_active', 3]))}>(kliknij by zobaczyć więcej)</div>
                    </div>
                </div> : null}
            </div>
            {state.value.p_e_active !== "" ? <div className="p_e_info_box flexCC">
                <div className="p_e_info">
                    <span className="close" onClick={()=>dispatch(method.changeState(['p_e_active', ""]))}>X</span>
                    <div className="p_e_title">Projekt</div>
                    <div className="p_e_desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum varius justo et imperdiet. Fusce at dapibus quam. Etiam eu leo id quam semper tempus
                        vel ac libero. Quisque vel sollicitudin lorem, non congue justo. Donec auctor consectetur accumsan. Sed placerat condimentum orci vel ultrices. Vivamus vitae 
                        efficitur magna, consectetur ultrices risus. Donec mi orci, venenatis sed sapien bibendum, posuere consectetur risus. Quisque eget accumsan turpis. Duis odio 
                        massa, tincidunt vitae venenatis vitae, tempor vitae odio. Donec non ornare metus.<br/><br/>
                        Nunc sit amet nisi elit. Vivamus eget lorem diam. Cras tincidunt gravida libero et fringilla. Aenean euismod, nisi ut pulvinar dictum, mi felis iaculis risus, 
                        nec lacinia tellus quam vitae risus. Vestibulum venenatis ut neque vel porttitor. Curabitur lobortis magna id nunc pharetra ultricies. Curabitur volutpat libero 
                        non risus auctor commodo. In venenatis risus et risus aliquet tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                        Praesent interdum, libero auctor commodo pellentesque, ante quam ornare quam, in lobortis nunc dui non felis. Ut tincidunt iaculis erat vel aliquam. Cras vehicula 
                        id augue placerat interdum. Quisque non lectus consequat, viverra purus sed, commodo risus. Fusce eu diam lorem.<br/><br/>
                        Nulla nisl purus, aliquet ut est dictum, ultrices consequat nulla. Quisque finibus sollicitudin feugiat. Quisque et libero nisl. Ut accumsan magna nec libero 
                        tristique porttitor. Curabitur fermentum, elit suscipit vehicula placerat, leo metus consequat urna, vitae varius tellus quam in lacus. Nam laoreet vel metus 
                        in cursus. Curabitur congue, sem ac maximus egestas, odio justo tristique ipsum, nec dignissim odio sem a nulla. Sed at massa vitae leo pulvinar egestas laoreet 
                        non dui. Nunc fringilla, turpis a finibus laoreet, mi neque facilisis magna, vitae consectetur metus turpis at leo. <br/><br/>
                    </div>
                    <div className="p_e_gallery flexCC">
                        <div className="main_photo flexCC">
                            <img src={state.value.gallery[state.value.gallery_num]}/>
                        </div>
                        <div className="secondary_photos flexCC">
                            <div className="sec_photo col-3" onClick={()=>dispatch(method.changeImage2([-2]))} style={{backgroundImage: state.value.gallery_num < 2 ? "url("+state.value.gallery[state.value.gallery.length + state.value.gallery_num - 2]+")" : "url("+state.value.gallery[state.value.gallery_num - 2]+")"}}></div>
                            <div className="sec_photo col-3" onClick={()=>dispatch(method.changeImage2([-1]))} style={{backgroundImage: state.value.gallery_num < 1 ? "url("+state.value.gallery[state.value.gallery.length + state.value.gallery_num - 1]+")" : "url("+state.value.gallery[state.value.gallery_num - 1]+")"}}></div>
                            <div className="sec_photo col-3" onClick={()=>dispatch(method.changeImage2([1]))} style={{backgroundImage: state.value.gallery_num >= state.value.gallery.length - 1 ? "url("+state.value.gallery[state.value.gallery_num - state.value.gallery.length + 1]+")" : "url("+state.value.gallery[state.value.gallery_num + 1]+")"}}></div>
                            <div className="sec_photo col-3" onClick={()=>dispatch(method.changeImage2([2]))} style={{backgroundImage: state.value.gallery_num >= state.value.gallery.length - 2 ? "url("+state.value.gallery[state.value.gallery_num - state.value.gallery.length + 2]+")" : "url("+state.value.gallery[state.value.gallery_num + 2]+")"}}></div>
                        </div>
                    </div>
                </div>
            </div>: null}
        </div>
    )
}

export function Portfolio_2(){
    return (
        <></>
    )
}