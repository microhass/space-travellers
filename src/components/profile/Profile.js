import { useSelector } from 'react-redux';
import classes from './profile.module.css';
import MyRocket from './MyRocket';

const Profile = () => {
  const { rockets } = useSelector((state) => state.rockets);

  const myRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <section className={classes.profile}>

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
