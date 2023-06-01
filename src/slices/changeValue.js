import { createSlice } from '@reduxjs/toolkit'

export const changeValue = createSlice({
  name: 'changeValue',
  initialState: {
    kategoria: 'ogolne',
    wielkosc_czcionki: 16,
    rodzaj_czcionki: 'Abel',
    typ_czcionki: 'normalna',
    rodzaj_menu: 'simple_1',
    umiejscowienie: 'left',
    sub_menu_active: false,
    active_side_menu: "",
    button_name: false,
    button_name_value: "aaa"
  },
  reducers: {
    changeState: (state, action)=>{
      state[action.payload[0]] = action.payload[1];
    },
    negativeState: (state, action)=>{
      state[action.payload] = !state[action.payload];
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeState, negativeState, buttonName } = changeValue.actions

export default changeValue.reducer