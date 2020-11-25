import React, { useRef, useEffect, useState } from "react";
import { useDispatch } from 'react-redux';

import { featchAddCompanyAC } from '../../redux/actionCreator';

export default function CompanyRegistration() {
  const dispatch = useDispatch();
  const long = useRef();
  const lat = useRef();
  const address = useRef();
  const metro = useRef();
  const link = useRef();
  const material = useRef();
  const categories = useRef();
  const [errorState, setErrorState] = useState(false);

  const inputHelper = (event) => {
    event.preventDefault();


    const obj = {
      geometry: [lat.current.value, long.current.value],
      properties: {
        hintContent: metro.current.value,
        balloonContent: address.current.value,
      },
      modules: ["geoObject.addon.hint", "geoObject.addon.balloon"],
      link: link.current.value,
      materials: [material.current.value],
      categories: [categories.current.value],
    };

    try {
      dispatch(featchAddCompanyAC(obj))
        .catch((e) => setErrorState(true));
    } catch (e) {
      setErrorState(true);
    }
  };

  return (
    <div>
      <form onSubmit={inputHelper}>
        <label>Введите широту и долготу</label> <br />
        <input ref={lat} name="lat"  type="text" placeholder="широта" />{" "}
        <input ref={long} name="long" type="text" placeholder="долгота" /> <br />
        <label>Название и территориальное расположение(метро)</label> <br />
        <input ref={metro} name="metro" type="text" /> <br />
        <label>Адрес</label> <br />
        <input ref={address} name="address" type="text" placeholder="адрес" /> <br />
        <label>Ссылка</label> <br />
        <input ref={link} name="link" type="text" placeholder="ссылка" /> <br />
        <label>Выберите материал: </label> <br />
        <select ref={material} name="material" id="material" defaultValue={"DEFAULT"}>
          <option value="DEFAULT" disabled>
            -- Материал --
          </option>
          <option value="СТЕКЛО">Стекло</option>
          <option value="МЕТАЛЛ">Металл</option>
          <option value="ПЛАСТИК">Пластик</option>
          <option value="БУМАГА">Бумага</option>
          <option value="РЕЗИНА">Резина</option>
        </select>

        <select ref={categories} name="categories" id="category" defaultValue={"DEFAULT"} >
          <option value="DEFAULT" disabled>
            -- Категории --
          </option>
          <option value="БУТЫЛКИ">Бутылка</option>
          <option value="БАНКИ">Банка</option>
          <option value="КОРОБКИ/КОНТЕЙНЕРЫ">Коробка/Упаковка</option>
          <option value="КАНИСТРЫ">Канистра</option>
          <option value="БОЧКИ">Бочка</option>
        </select>

        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Закрыть
          </button>
          <button type="submit" className="btn btn-primary">
            Добавить
          </button>
        </div>
      </form>
    </div>
  );
}
