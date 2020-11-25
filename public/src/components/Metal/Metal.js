import React from 'react';
import FindAdress from '../FindAdress';
import style from '../Text.module.css'


function Metal() {
  const props = { category: 'КАТЕГОРИЯ', material: 'metal' };

  return (
    <div>
      <FindAdress props={props} />
      <br />
      <div className={style.text}>
        Мотивация + инфо о вреде неутилизированного металла.
    </div>
    </div>

  );
}

export default Metal;
