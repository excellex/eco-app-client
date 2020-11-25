import React from 'react';
import BarcodeScanner from '../BarcodeScanner/BarcodeScanner';
import BarcodeForm from '../BarcodeForm/BarcodeForm';
import AddButton from '../AddButton';
import BlicStart from '../BlicStart';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchAddCategoryAC, fetchAddMaterialAC } from '../../redux/actionCreator';

const Index = () => {
  const [data, setData] = React.useState('Scan barcode');
  const dispatch = useDispatch();
  try {
    dispatch(fetchAddCategoryAC());
    dispatch(fetchAddMaterialAC());
  } catch (e) {
  }
  return (
    <div>
      <BarcodeScanner />
      <BarcodeForm />
      {/*<AddButton/>*/}
      <BlicStart />
    </div>
  );
};

export default Index;