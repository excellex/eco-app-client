import React, { useEffect, useRef, useState } from 'react';
import { Alert, Form, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { apiPost } from '../../utils/getFunctions';
import { taresURL } from '../../utils/fetchURL';
import classes from './BarcodeForm.module.css';

const BarcodeForm = ({ scanned, setScanned }) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const barcode = useSelector(store => store.barcode);
  useEffect(() => {
    setIsEmpty(state => {
      return !state;
    });
    try {
      apiPost(taresURL, { barcode })
        .then(data => console.log(data))
        .catch(e => console.error(e.message()));
    } catch (e) {}
  }, [barcode]);
  const formValue = useRef();
  return (
    <>
      <Col sm="4">
        {isEmpty ? (
          <Form>
            <Form.Control
              type="text"
              defaultValue="Отсканируйте штрих-код"
              readOnly
              onChange={null}
            />
          </Form>
        ) : (
          <Form>
            <Form.Control
              ref={formValue}
              type="number"
              value={barcode}
              readOnly
              onChange={null}
              className={[scanned ? null : classes.false, classes.inputForm]}
            />
          </Form>
        )}
      </Col>
    </>
  );
};

export default BarcodeForm;
