import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';
export const getMissionsData = createAsyncThunk(
  'Missions/getMissionsData',

  async (_, thunkAPI) => {
    try {
      const resp = await axios(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Error fetching missions');
    }
  },
);

const initialState = {
  missionData: [],
  isLoading: false,
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, { payload }) => {
      state.missionData = state.missionData.map((mission) => {
        if (mission.id !== payload) { return mission; }
        return { ...mission, reserved: true };
      });
    },
    leaveMission: (state, { payload }) => {
      state.missionData = state.missionData.map((mission) => {
        if (mission.id !== payload) { return mission; }
        return { ...mission, reserved: false };
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMissionsData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMissionsData.fulfilled, (state, action) => {
        state.isLoading = false;
        const data = action.payload;

        const missions = data.map((item) => ({
          id: item.mission_id,
          name: item.mission_name,
          description: item.description,
        }));
        state.missionData = missions;
      })
      .addCase(getMissionsData.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export const { joinMission, leaveMission } = missionsSlice.actions;
export default missionsSlice.reducer;
