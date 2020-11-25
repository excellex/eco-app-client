import React, { useState, useEffect } from 'react';
import BarcodeScannerComponent from 'react-webcam-barcode-scanner';
import { Button, Col } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addBarcodeAC } from '../../redux/actionCreator';
import { FaCameraRetro } from 'react-icons/fa';


const BarcodeScanner = () => {
  const [scanned, setScanned] = useState(true);
  const dispatch = useDispatch();
  return (
    <>
      <Col sm='4'>
      <div onClick={() => setScanned(!scanned)}>
        {
          scanned
            ?
            <BarcodeScannerComponent
              width={'100%'}
              height={'50%'}
              onUpdate={(err, result) => {
                if (result) {
                  setScanned(false)
                  dispatch(addBarcodeAC(result.text));
                }
              }}
            />
            :
              <div>
                  <Button onClick={() => setScanned(!scanned)}>
                      <FaCameraRetro />
                  </Button>{' '}
              </div>
        }
      </div>
      </Col>
    </>
  );
};

export default BarcodeScanner;