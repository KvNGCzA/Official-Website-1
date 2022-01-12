import {init} from 'emailjs-com';
import React, {Fragment} from 'react';
import Header from './components/Header';
import Landing from './pages/Landing';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

init(process.env.REACT_APP_EMAILJS_USER_ID ?? '');

const App = (): JSX.Element => {
  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Fragment>
      <ToastContainer />
      <Header />
      <Landing />
    </Fragment>);
};

export default App;
