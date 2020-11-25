import React, { useEffect, useRef, useState } from 'react';
import { Alert, Form, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { apiPost } from '../../utils/getFunctions';
import { taresURL } from '../../utils/fetchURL';
import { getReceptionPoints } from '../../redux/actionCreator';

const BarcodeForm = () => {
  const [isEmpty, setIsEmpty] = useState(true);
  const disptatch = useDispatch();
  const barcode = useSelector(store => store.barcode);
  useEffect(() => {
    setIsEmpty((state) => {
      return !state;
    });
    try {
      apiPost(taresURL, { barcode })
        .then(data => disptatch(getReceptionPoints(data)))
        .catch(e => console.error(e.message())); // for not found
    } catch (e) {

    }
  }, [barcode]);
  const formValue = useRef();
  return (
    <>
      <Col sm="4">

        {
          isEmpty
            ?
            <Form>
              <Form.Control type="text" defaultValue='Отсканируйте штрих-код' readOnly onChange={null} />
            </Form>
            :
            <Form>
              <Form.Control ref={formValue} type='number' value={barcode} readOnly onChange={null} />
            </Form>
        }
      </Col>
    </>
  );
};

export default BarcodeForm;