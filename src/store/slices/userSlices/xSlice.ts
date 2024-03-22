import { createSlice } from "@reduxjs/toolkit";

const xSlice = createSlice({
    name: 'user',
    initialState: 0,
    reducers: {
        setX(state, { payload }: { payload: number }) {
            state = payload
        }
    }
})

export const { setX } = xSlice.actions;
export default xSlice.reducer;