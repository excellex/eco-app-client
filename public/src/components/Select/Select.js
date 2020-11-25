import React, { useEffect, useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import style from './Select.module.css';
import { materialsURL, addTareURL } from '../../utils/fetchURL';
import { useSelector } from 'react-redux';
import { apiPost } from '../../utils/getFunctions';
import { AiOutlineSend } from 'react-icons/all';

export default function Select() {
  const materials = useSelector(store => store.materials);
  const categories = useSelector(store => store.categories);
  const barcode = useSelector(store => store.barcode);
  const [errorState, setErrorState] = useState(false);
  const materialValue = useRef();
  const categoryValue = useRef();

  function FormHandler(event) {
    event.preventDefault();
    const body = {
      barcode,
      material: materialValue.current.value,
      category: categoryValue.current.value,
    };
    try {
      apiPost(addTareURL, body)
        .catch(e => setErrorState(true));
    } catch (e) {
      console.log(e);
    }
  }

  // };
  return (
    <div>
      Добавить в базу этот штрх-код
      <Form onSubmit={FormHandler}>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Выберите материал: </Form.Label>
          <Form.Control as="select" custom ref={materialValue}>
            {materials.map(material => <option name={material.name} key={material._id}>{material.name}</option>)}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Выберите категорию: </Form.Label>
          <Form.Control as="select" custom ref={categoryValue}>
            {categories.map(category => <option key={category._id}>{category.name}</option>)}
          </Form.Control>
        </Form.Group>
        <Button type="submit" value="Submit"><AiOutlineSend /></Button>
      </Form>
    </div>
  );
}
