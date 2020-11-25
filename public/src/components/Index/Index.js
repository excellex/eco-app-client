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

const Index = () => {
  const dispatch = useDispatch()
  const barcode = useSelector(store => store.barcode);
  try {
    dispatch(fetchAddCategoryAC());
    dispatch(fetchAddMaterialAC());
  } catch (e) {
  }
  return (
    <div>
      <BarcodeScanner />
      <BarcodeForm />
      {barcode.length ? <ReceptionPointsMap /> : null}
      {/*<AddButton/>*/}
      <BlicStart />
    </div>
  );
};

export default Index;