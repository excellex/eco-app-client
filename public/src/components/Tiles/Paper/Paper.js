import React from 'react';
import FindAdress from '../../FindAdress';
import style from '../../Text.module.css'

function Paper() {
  const props = { category: 'КАТЕГОРИЯ', material: 'paper' };
  return (
    <div>
      <FindAdress props={props} />
      <br />
      <div className={style.text}>
        Мотивация + инфо о вреде неутилизированной бумаги.
  </div>
    </div>
  );
}

export default Paper;
