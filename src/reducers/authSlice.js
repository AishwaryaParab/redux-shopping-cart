const { createSlice, configureStore } = require("@reduxjs/toolkit");

const authSlice = createSlice({
    name: "auth",
    initialState: { isLoggedIn: false, goto: "/login" },
    reducers: {
        login(state) {
            state.isLoggedIn = true;
            state.goto = "/products"
        },
        logout(state) {
            state.isLoggedIn = false;
            state.goto = "/login"
        }
    }
})

export const actions = authSlice.actions;

export default authSlice.reducer;