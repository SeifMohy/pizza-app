import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import  {RootState}  from '../Store/rootReducer';

interface DashboardState {
  dashboard?: any; //TODO: Amend Types
}

const initialState: DashboardState = {
  dashboard: null
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    dashboard: (
      state: DashboardState,
      { payload }: PayloadAction<any>
    ) => {
      console.log(payload);
      state.dashboard = payload;
    }
  }
});

export const dashboardReducer = dashboardSlice.reducer;
export const { dashboard } = dashboardSlice.actions;
export const dashboardState = (state: RootState) => state.dashboard;
