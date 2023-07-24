import React from 'react';
import { useSelector } from 'react-redux';

const Missions = () => {
  const { missionData } = useSelector((store) => store.missions);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Desciption</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {missionData.map((mission) => (
            <tr key={mission.id}>
              <td>{mission.id}</td>
              <td>{mission.title}</td>
              <td>{mission.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
