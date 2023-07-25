import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissionsData, joinMission, leaveMission } from '../feature/missions/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissionsData());
  }, [dispatch]);
  const { missionData } = useSelector((store) => store.missions);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Desciption</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missionData.map((mission) => (
            <tr key={mission.id}>
              <td>{mission.name}</td>
              <td>{mission.description}</td>
              {mission.reserved ? <td>Active member</td> : <td>Not a member</td>}
              <td>
                <button
                  type="button"
                  onClick={() => (
                    mission.reserved
                      ? dispatch(leaveMission(mission.id))
                      : dispatch(joinMission(mission.id))
                  )}
                >
                  {mission.reserved ? 'Leave Mission' : 'Join Mission'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
