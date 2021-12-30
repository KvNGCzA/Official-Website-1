import {init} from 'emailjs-com';
import React, {Fragment} from 'react';
import Landing from './pages/Landing';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

init(process.env.REACT_APP_EMAILJS_USER_ID ?? '');

const App = (): JSX.Element =>
  <Fragment>
    <ToastContainer />
    <Landing />
  </Fragment>;

export default App;
