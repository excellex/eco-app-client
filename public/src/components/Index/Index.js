import React from 'react';
import BarcodeScanner from '../BarcodeScanner/BarcodeScanner';
import BarcodeForm from '../BarcodeForm/BarcodeForm';
import AddButton from '../AddButton';
import BlicStart from '../BlicStart';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddCategoryAC, fetchAddMaterialAC } from '../../redux/actionCreator';
import ReceptionPointsMap from '../ReceptionPointsMap/ReceptionPointsMap';
import { store } from '../../redux/store';
import Select from '../Select/Select';

const Index = () => {
  const dispatch = useDispatch()
  const success = useSelector(store => store.receptionPoints.success);
  const barcode = useSelector(store => store.barcode.length)
  try {
    dispatch(fetchAddCategoryAC());
    dispatch(fetchAddMaterialAC());
  } catch (e) {
  }
  return (
    <div>
      <BarcodeScanner />
      <BarcodeForm />
      {success ? <ReceptionPointsMap /> : null}
      {!success && barcode ? <Select /> : null}
      {/*<AddButton/>*/}
      <BlicStart />
    </div>
  );
};

export default Index;