import { createSlice } from '@reduxjs/toolkit';

const missionData = [
  {
    id: 1,
    title: 'Mission 1',
    description: 'mission1 is most useful',
  },
  {
    id: 2,
    title: 'Mission 2',
    description: 'mission1 is most useful',
  },
  {
    id: 3,
    title: 'Mission 3',
    description: 'mission1 is most useful',
  },
];

const initialState = {
  missionData,
  isLoading: true,
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
});

export default missionsSlice.reducer;
