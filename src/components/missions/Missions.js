import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMissions } from '../../redux/missions/missionSlice';
import SingleMission from './SingleMission';
import classes from './missions.module.css';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions, isLoading } = useSelector(
    (state) => state.missions,
  );

  useEffect(() => {
    if (missions?.length !== 0) return;
    dispatch(fetchMissions());
  }, [dispatch, missions]);

  if (isLoading) return <div className="loading">Loading...</div>;

  return (
    <section className={classes.missions}>
      <table className={classes.table}>
        <thead>
          <tr className={classes.tableRow}>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Join</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <SingleMission key={mission.id} mission={mission} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Missions;
