import React from 'react';
import { useSelector } from 'react-redux';
import { store } from '../../redux/store';
import style from '../FindAdress.module.css';
import { Map, Placemark, YMaps, ZoomControl } from 'react-yandex-maps';

const ReceptionPointsMap = () => {
  const receptionPointsPlaces = useSelector(store => store.receptionPoints.places);
  const receptionPointsDescription= useSelector(store => store.receptionPoints.description)
  const mapstate = {
    center: [59.9371, 30.3575],
    zoom: 9,
    width: "90%",
    height: "90%",
  };
  return (
    <div>
      Пункты приема.
      <br />
      <div>
        <YMaps>
          <Map state={mapstate}>
            {receptionPointsPlaces &&
            receptionPointsPlaces.map(placemark => (
              <Placemark key={placemark._id} {...placemark} />
            ))}
            <ZoomControl />
          </Map>
        </YMaps>
      </div>
      <p>{receptionPointsDescription}</p>
    </div>
  );
};

export default ReceptionPointsMap;