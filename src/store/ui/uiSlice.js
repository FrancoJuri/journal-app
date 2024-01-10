import { createSlice } from '@reduxjs/toolkit'


export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isMobileDrawerOpen: false,
    },
    reducers: {
        handleDrawerToggle: (state) => {
            state.isMobileDrawerOpen = !state.isMobileDrawerOpen;
        }
    }
});


export const { handleDrawerToggle } = uiSlice.actions;
