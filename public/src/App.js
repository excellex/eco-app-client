import React from "react";
import "./App.css";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import Form from "./components/Form/Form";
import { Route, Switch } from "react-router-dom";
import BlicStart from "../src/components/BlicStart";
import RouteCategory from "./components/RouteCategory";
import AddButton from "./components/AddButton";
import { fetchAddCategoryAC, fetchAddMaterialAC } from "./redux/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import SignInPage from './pages/SignInPage/SignInPage';
import IndexPage from './pages/IndexPage/IndexPage';

function App() {
  const [data, setData] = React.useState("Scan barcode");
  const dispatch = useDispatch();
  try {
    dispatch(fetchAddCategoryAC());
    dispatch(fetchAddMaterialAC());
  } catch (e) {}
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={IndexPage}/>
        <Route exact path='/signin' component={SignInPage} />
        <Route/>
        <Route/>
        <Route exact path='/'>
          <AddButton data={data} />
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
