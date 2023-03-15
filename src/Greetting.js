import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetting } from './redux/greettingSlice';

const Greetting = () => {
  const data = useSelector((state) => state.greettings.data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreetting());
  }, [dispatch]);
  return (
    <div>
      <h1>Greeting</h1>
      <p>{data.text}</p>
    </div>
  );
};

export default Greetting;
