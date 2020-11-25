import React from "react";
import "./App.css";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import Form from "./components/Form/Form";
import { Route, Switch } from "react-router-dom";
import BlicStart from "../src/components/BlicStart";
import RouteCategory from "./components/RouteCategory";
import AddButton from "./components/AddButton";

function App() {
  const [data, setData] = React.useState("Scan barcode");

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">

         <AddButton/>

          <BarcodeScannerComponent
            width={"90%"}
            height={"50%"}
            onUpdate={(err, result) => {
              if (result) setData(result.text);
            }}
          />
          <BlicStart />
          <Form data={data} />
        </Route>
        <Route path="/">
          <RouteCategory />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
