import { createSlice } from '@reduxjs/toolkit'

export const changeValue = createSlice({
  name: 'changeValue',
  initialState: {
    kategoria: 'ogolne',
    wielkosc_czcionki: 16,
    rodzaj_czcionki: 'Abel',
    typ_czcionki: 'normalna',
    rodzaj_menu: 'simple_1',
    umiejscowienie: 'left'
  },
  reducers: {
    changeState: (state, action)=>{
      state[action.payload[0]] = action.payload[1];
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeState } = changeValue.actions

export default changeValue.reducer