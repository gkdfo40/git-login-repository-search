import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  access_token: string | null;
}

const initialApplicantState: AuthState = {
  access_token: localStorage.getItem('gitToken'),
};
const authSlice = createSlice({
  name: 'auth',
  initialState: initialApplicantState,
  reducers: {
    login(state) {
      localStorage.setItem('gitToken', 'not null');
      state.access_token = 'not null';
    },
    logout(state) {
      state.access_token = null;
      localStorage.removeItem('gitToken');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
