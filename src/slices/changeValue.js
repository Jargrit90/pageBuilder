import { createSlice } from '@reduxjs/toolkit'

export const changeValue = createSlice({
  name: 'changeValue',
  initialState: {
    kategoria: 'ogolne',
    wielkosc_czcionki: 16,
    rodzaj_czcionki: 'Abel',
    typ_czcionki: 'normalna',
    rodzaj_menu: 'simple_4',
    umiejscowienie: 'left',
    active_side_menu: "",
    button_name: false,
    button_name_value: "aaa",
    submenu_active: "",
    sm_4_box: "",
    komponent_glowny: 'gallery_1',
    image_index: "",
    active_full_image: false,
    gallery: ["./images/img_1.jpg", "./images/img_2.jpg", "./images/img_3.jpg", "./images/img_4.jpg", "./images/img_5.jpg", "./images/img_6.jpg", "./images/img_7.jpg",
    "./images/img_8.jpg", "./images/img_9.jpg", "./images/img_10.jpg", "./images/img_11.jpg"]
  },
  reducers: {
    changeState: (state, action)=>{
      if(state[action.payload[0]] === action.payload[1]){
        state[action.payload[0]] = "";
      }
      else {
        state[action.payload[0]] = action.payload[1];
      }
    },
    negativeState: (state, action)=>{
      state[action.payload] = !state[action.payload];
    },
    changeImage: (state, action)=>{
      if(action.payload === "minus"){
        state.image_index = state.image_index - 1;
        if(state.image_index < 0){
          state.image_index = state.gallery.length - 1;
        }
      }
      else {
        state.image_index = state.image_index + 1;
        if(state.image_index >=state.gallery.length){
          state.image_index = 0;
        }
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeState, negativeState, changeImage } = changeValue.actions

export default changeValue.reducer