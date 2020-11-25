import React, { useState } from 'react';
import BarcodeScanner from '../BarcodeScanner/BarcodeScanner';
import BarcodeForm from '../BarcodeForm/BarcodeForm';
import AddButton from '../AddButton';
import BlicStart from '../BlicStart';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  fetchAddCategoryAC,
  fetchAddMaterialAC,
} from '../../redux/actionCreator';
import classes from './Index.module.css';

const Index = () => {
  const [data, setData] = React.useState('Scan barcode');
  const [scanned, setScanned] = useState(true);
  const dispatch = useDispatch();
  try {
    dispatch(fetchAddCategoryAC());
    dispatch(fetchAddMaterialAC());
  } catch (e) {}
  return (
    <div>
      <div className={scanned ? null : classes.false}>
        <BarcodeForm scanned={scanned} setScanned={setScanned} />
        <BarcodeScanner scanned={scanned} setScanned={setScanned} />
      </div>
      {/*<AddButton/>*/}
      <BlicStart />
    </div>
  );
};

export default Index;
