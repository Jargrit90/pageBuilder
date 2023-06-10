import React from 'react';
import ReactDOM from 'react-dom/client';
import { useSelector, useDispatch } from 'react-redux';
import changeValue, * as method from '../../slices/changeValue';

import './mainpage.css';

export function Mainpage_1(){
    return (
        <div className="mainpage">
            <div className="logo_box flexCC">
                <img src="./images/logo.jpg" />
            </div>
            <div className="main_desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </div>
            <div className="sub_desc">
                <div className="below_background"></div>
                <div className="sub_desc_info_box flexCC">
                    <div className="side empty_side"></div>
                    <div className="side full_side flexCC">
                        <div className="sub_desc_title">Tytuł</div>
                        <div className="sub_desc_side_text">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                </div>
                <div className="sub_desc_info_box flexCC">
                    <div className="side full_side flexCC">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                            <div className="sub_desc_title">Tytuł</div>
                        <div className="sub_desc_side_text">
                    </div>
                    </div>
                    <div className="side empty_side"></div>
                </div>
            </div>
        </div>
    )
}

export function Mainpage_2(){
    return (
        <div className="mainpage">
            <div className="logo_box flexCC">
                <img src="../images/logo.jpg" />
            </div>
            <div className="mp2_desc_box">
                <div className="below_background"></div>
                <div className="mp2_desc_text_box flexCC">
                    <div className="white_bg"></div>
                    <div className="mp2_desc_text flexCC">
                        <div className="sub_desc_title">Tytuł</div>
                        <div className="sub_desc_side_text">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                </div>
                <div className="mp2_desc_text_box flexCC">
                    <div className="white_bg_2"></div>
                    <div className="mp2_desc_text flexCC">
                        <div className="sub_desc_title">Tytuł</div>
                        <div className="sub_desc_side_text">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Mainpage_3(){
    return (
        <div className="mainpage">
            <div className="logo_box flexCC">
                <img src="images/logo.jpg" />
            </div>
            <div className="mp3_desc_box flexCC">
                <div className="mp3_img mp3_img_1 col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12"></div>
                <div className="mp3_desc col-xl-8 col-lg-8 col-md-7 col-sm-12 col-12 flexCC">
                    <div className="sub_desc_title">Tytuł</div>
                    <div className="sub_desc_side_text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
            </div>
            <div className="mp3_desc_box flexCC">
                <div className="mp3_desc col-xl-8 col-lg-8 col-md-7 col-sm-12 col-12 flexCC">
                    <div className="sub_desc_title">Tytuł</div>
                    <div className="sub_desc_side_text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
                <div className="mp3_img mp3_img_2 col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12"></div>
            </div>
            <div className="mp3_desc_box flexCC">
                <div className="mp3_img mp3_img_3 col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12"></div>
                <div className="mp3_desc col-xl-8 col-lg-8 col-md-7 col-sm-12 col-12 flexCC">
                    <div className="sub_desc_title">Tytuł</div>
                    <div className="sub_desc_side_text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
            </div>
        </div>
    )
}