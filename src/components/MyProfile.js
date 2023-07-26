import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const { missionData } = useSelector((store) => store.missions);
  return (
    <div>
      <h1>My Missions</h1>
      {missionData.map((mission) => mission.reserved && <p key={mission.id}>{mission.name}</p>)}
    </div>
  );
};

export default MyProfile;
