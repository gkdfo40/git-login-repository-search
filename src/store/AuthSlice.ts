import { createSlice } from '@reduxjs/toolkit';

interface ApplicantState {
  access_token: string | null;
}

const initialApplicantState: ApplicantState = {
  access_token: 'not null',
};
const authSlice = createSlice({
  name: 'auth',
  initialState: initialApplicantState,
  reducers: {
    login(state) {
      state.access_token = 'not null';
    },
    logout(state) {
      state.access_token = null;
    },
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
