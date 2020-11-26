import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCurrentPositionAC } from '../../redux/actionCreator';

const CurrentPosition = () => {
  const dispatch = useDispatch();
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition((position) => {
      dispatch(addCurrentPositionAC({
        latitude: (position.coords.latitude).toString().slice(0,9),
        longitude: (position.coords.longitude).toString().slice(0,9),
      }));
    });
  }
  return (
    <>
    </>
  );
};

export default CurrentPosition;