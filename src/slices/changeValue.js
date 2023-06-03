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
  },
})

// Action creators are generated for each case reducer function
export const { changeState, negativeState, buttonName } = changeValue.actions

export default changeValue.reducer