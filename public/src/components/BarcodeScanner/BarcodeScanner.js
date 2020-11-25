import React, { useState, useEffect } from 'react';
import BarcodeScannerComponent from 'react-webcam-barcode-scanner';
import { Button, Col } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addBarcodeAC } from '../../redux/actionCreator';
import { FaCamera } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './BarcodeScanner.module.css';


const BarcodeScanner = ({ scanned, setScanned }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Col sm="4">
        <div onClick={() => setScanned(!scanned)}>
          {scanned ? (
            <BarcodeScannerComponent
              width={'100%'}
              height={'50%'}
              onUpdate={(err, result) => {
                if (result) {
                  setScanned(false);
                  console.log(result.text);
                  dispatch(addBarcodeAC(result.text));
                }
              }}
            />
          ) : (
            <div>
              <Button
                variant="success"
                onClick={() => setScanned(!scanned)}
                className={scanned ? null : classes.false}
              >
                <FaCamera />
              </Button>{' '}
            </div>
          )}
        </div>
      </Col>
    </>
  );
};

export default BarcodeScanner;
