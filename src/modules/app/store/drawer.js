import { createSlice } from "@reduxjs/toolkit";
const DrawerSclice = createSlice({
  name: "drawer",
  initialState: {
    opened: false,
  },
  reducers: {
    toggledDrawer(state, action) {
      state.opened = !state.opened;
    },
  },
});

export const { toggledDrawer } = DrawerSclice.actions;
export default DrawerSclice.reducer;
