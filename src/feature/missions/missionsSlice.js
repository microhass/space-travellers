import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';
export const FetchMissions = createAsyncThunk(
  'Missions/FetchMissions',

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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchMissions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(FetchMissions.fulfilled, (state, action) => {
        state.isLoading = false;
        const data = action.payload;

        const missions = data.map((item) => ({
          id: item.mission_id,
          name: item.mission_name,
          description: item.description,
        }));
        state.missions = missions;
      })
      .addCase(FetchMissions.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default missionsSlice.reducer;
