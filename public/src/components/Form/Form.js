import React, { useState, useRef, useEffect } from "react";
import { Map, Placemark, YMaps, ZoomControl } from "react-yandex-maps";
import { categoriesURL, materialsURL, taresURL } from "../../utils/fetchURL";
import style from "./Form.module.css";
import styles from "../FindAdress.module.css";
import Select from "../Select/Select";
import { apiGet } from "../../utils/getFunctions";
import { useSelector } from 'react-redux';

export default function Form() {
  const data = useSelector(store => store.barcode)
  const [errorState, setErrorState] = useState(false);
  const [success, setSuccess] = useState(true);
  const [places, setPlaces] = useState([]);

  const [categories, setCategories] = useState([]);
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    apiGet(materialsURL).then((data) => setMaterials(data));
  }, []);

  useEffect(() => {
    apiGet(categoriesURL).then((data) => setCategories(data));
  }, []);

  const mapstate = {
    center: [59.9371, 30.3575],
    zoom: 9,
    width: "90%",
    height: "90%",
  };

  const barcodeInput = useRef();
  const clickHandler = () => {
    if ("Scan barcode" !== barcodeInput.current.value) {
      try {
        fetch(taresURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ barcode: barcodeInput.current.value }),
        })
          .then((response) => response.json())
          .then((data) => {
            setSuccess(data.success);
            setPlaces(data.places);
          })
          .catch((e) => setErrorState(true));
      } catch (e) {
        setErrorState(true);
      }
    }
  };

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <input
          id={style.input}
          className={style.inputName}
          value={data}
          ref={barcodeInput}
          type="text"
          readOnly
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={clickHandler}
        >
          Отправить
        </button>
      </div>
      {/*{!success ? <FindAdress places={places}/> : null}*/}
      {!success ? (
        <Select materials={materials} categories={categories} data={data} />
      ) : null}
      <div className={styles.flexfind}>
        <YMaps>
          <Map state={mapstate}>
            {places &&
              places.map((placemark, i) => (
                <Placemark key={placemark._id} {...placemark} />
              ))}
            <ZoomControl />
          </Map>
        </YMaps>
      </div>
    </div>
  );
}
