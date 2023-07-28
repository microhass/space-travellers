import { useSelector } from 'react-redux';
import classes from './profile.module.css';
import MyRocket from './MyRocket';
import MyMission from './MyMissions';

const Profile = () => {
  const { missions } = useSelector((state) => state.missions);
  const { rockets } = useSelector((state) => state.rockets);

  const myMissions = missions.filter((mission) => mission.isMember);
  const myRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <section className={classes.profile}>
      <div className="profile-missions">
        <h3 className={classes.title}>my missions</h3>
        <ul className={classes.list}>
          {myMissions.length === 0 && (
            <li className={classes.item}>no missions joined</li>
          )}
          {myMissions.map((mission) => (
            <MyMission key={mission.id} mission={mission} />
          ))}
        </ul>
      </div>
      <div className="profile-rockets">
        <h3 className={classes.title}>my rockets</h3>
        <ul className={classes.list}>
          {myRockets.length === 0 && (
            <li className={classes.item}>no rockets reserved</li>
          )}
          {myRockets.map((rocket) => (
            <MyRocket key={rocket.id} rocket={rocket} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Profile;
