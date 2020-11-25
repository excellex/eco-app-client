import React from 'react';
import style from '../FindAdress.module.css';
import { Map, Placemark, YMaps, ZoomControl } from 'react-yandex-maps';

const ReceptionPoints = () => {
  return (
    <>
      <div className={style.flexfind}>
        <YMaps>
          <Map state={mapstate}>
            {adress &&
            adress.map((placemark, i) => (
              <Placemark key={placemark._id} {...placemark} />
            ))}
            <ZoomControl />
          </Map>
        </YMaps>
      </div>
    </>
  );
};

export default ReceptionPoints;