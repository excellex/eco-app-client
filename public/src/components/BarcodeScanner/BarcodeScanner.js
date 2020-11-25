import React, { useState, useEffect } from 'react';
import BarcodeScannerComponent from 'react-webcam-barcode-scanner';
import { Button } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addBarcodeAC } from '../../redux/actionCreator';

const BarcodeScanner = () => {
  const [scanned, setScanned] = useState(true);
  const dispatch = useDispatch();
  const barcode = useSelector(store => store.barcode);
  console.log(barcode);
  return (

    <>
      <div>
        <Button onClick={() => setScanned(!scanned)} variant="primary">Primary</Button>{' '}
      </div>
      <div>
        {
          scanned
            ?
            <BarcodeScannerComponent
              width={'90%'}
              height={'50%'}
              onUpdate={(err, result) => {
                if (result) {
                  setScanned(false)
                  dispatch(addBarcodeAC(result.text));
                }
              }}
            />
            :
            null
        }
      </div>
    </>
  );
};

export default BarcodeScanner;