// import React, { useEffect, useRef, useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import style from './Select.module.css';
// import { materialsURL, addTareURL } from '../../utils/fetchURL';
// import { useSelector } from 'react-redux';
// import { apiPost } from '../../utils/getFunctions';
// import { AiOutlineSend } from 'react-icons/all';
//
// export default function Select() {
//   const materials = useSelector(store => store.materials);
//   const categories = useSelector(store => store.categories);
//   const barcode = useSelector(store => store.barcode);
//   const [errorState, setErrorState] = useState(false);
//   const materialValue = useRef();
//   const categoryValue = useRef();
//
//   function FormHandler(event) {
//     event.preventDefault();
//     console.log({ value: event.target.value });
//     // const body = {
//     //   barcode,
//     //   material: materialValue.current.value,
//     //   category: categoryValue.current.value,
//     // };
//     // try {
//     //   apiPost(addTareURL, body)
//     //     .catch(e => setErrorState(true));
//     // } catch (e) {
//     //   console.log(e);
//     // }
//   }
//
//   // };
//   return (
//     <div>
//       {/*Добавить в базу этот штрх-код*/}
//       {/*<Form onSubmit={FormHandler}>*/}
//       {/*  <Form.Group controlId="exampleForm.SelectCustom">*/}
//       {/*    <Form.Label>Выберите материал: </Form.Label>*/}
//       {/*    <Form.Control as="select" custom>*/}
//       {/*      {materials.map(material => <option value={material._id} key={material._id}>{material.name}</option>)}*/}
//       {/*    </Form.Control>*/}
//       {/*      <Form.Label>Выберите категорию: </Form.Label>*/}
//       {/*      <Form.Control as="select" custom>*/}
//       {/*        {categories.map(category => <option value={category._id} key={category._id}>{category.name}</option>)}*/}
//       {/*      </Form.Control>*/}
//       {/*    <Button type="submit" value="submit"><AiOutlineSend /></Button>*/}
//       {/*  </Form.Group>*/}
//       {/*</Form>*/}
//       <form onSubmit={FormHandler}>
//         <select>
//           {materials && materials.map(material =>
//             {materials.map(material => <option value={material._id} key={material._id}>{material.name}</option>)
//           })}
//         </select>
//         <button type='submit'>send</button>
//       </form>
//     </div>
//   );
// }
