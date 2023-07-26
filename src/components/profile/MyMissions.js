import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { missionActions } from '../../redux/missions/missionSlice';
import classes from './profile.module.css';

const MyMission = ({ mission }) => {
  const { id, name } = mission;
  const dispatch = useDispatch();

  const cancelMembership = () => {
    dispatch(missionActions.toggleMissionMembership(id));
  };

  return (
    <li key={id} className={classes.item}>
      <span>{name}</span>
      <button
        type="button"
        className={classes.leave}
        onClick={cancelMembership}
      >
        leave mission
      </button>
    </li>
  );
};

MyMission.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
};

MyMission.defaultProps = {
  mission: {
    id: 1,
    name: 'rocket',
  },
};

export default MyMission;
