import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../../redux/rockets/rocketSlice';

const Rocket = () => {
  const dispatch = useDispatch();

  const { rockets, isLoading } = useSelector(
    (state) => state.rockets
  );

  useEffect(() => {
    if (rockets?.length !== 0) return;
    dispatch(fetchRockets());
  }, []);

  if (isLoading) return <div className='loading'>Loading...</div>;
  
  return <section>Rocket</section>;
};

export default Rocket;
