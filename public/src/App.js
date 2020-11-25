import React from 'react';
import './App.css';
import BarcodeScannerComponent from 'react-webcam-barcode-scanner';
import Form from './components/Form/Form';
import { Route, Switch } from 'react-router-dom';
import BlicStart from '../src/components/BlicStart';
import RouteCategory from './components/RouteCategory';
import AddButton from './components/AddButton';
import { fetchAddCategoryAC, fetchAddMaterialAC } from './redux/actionCreator';
import { useDispatch, useSelector } from 'react-redux';
import SignInPage from './pages/SignInPage/SignInPage';
import IndexPage from './pages/IndexPage/IndexPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  const [data, setData] = React.useState('Scan barcode');
  const dispatch = useDispatch();
  try {
    dispatch(fetchAddCategoryAC());
    dispatch(fetchAddMaterialAC());
  } catch (e) {
  }
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <IndexPage />
          <AddButton data={data} />
          <BlicStart />
          <Form data={data} />
          <RouteCategory />
        </Route>
        <Route exact path='/signin' component={SignInPage} />
        <Route exact path='/signup' component={SignUpPage} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
