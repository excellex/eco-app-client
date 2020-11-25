import React, { useState, useEffect } from 'react';
import BarcodeScannerComponent from 'react-webcam-barcode-scanner';
import { Button } from 'react-bootstrap';
import { Route } from 'react-router-dom';

const BarcodeScanner = () => {
  const [data, setData] = useState('Scan barcode');
  const [scanned, setScanned] = useState(true);
  useEffect(() => {
    if (data !== 'Scan barcode') {
      setScanned(false);
    }
  }, [data]);
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
                if (result) setData(result.text);
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