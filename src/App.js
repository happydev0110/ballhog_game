// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// import Dashboard from './components/Dashboard';
import React, { useState } from 'react';
import Event from './components/Event';

import 'bootstrap/dist/css/bootstrap.css'
import './assets/App.css';

const PASSWORD = 'BallHog'

function App() {
  const [access, setAccess] = useState(false);
  const [pass, setPass] = useState();
  const [tabStatus, setTabStatus] = useState(true);

  const [primaryColor, setPrimaryColor] = useState('#0d6efd');
  const [secondaryColor, setSecondaryColor] = useState('white');

  const getAccess = () => {
    // console.log(localStorage.getItem('password'), 'password')
    let status = false;

    if (localStorage.getItem('password') === PASSWORD) {
      status = true
    }

    return status
  }

  const handleTab = () => {
    setTabStatus(!tabStatus);
  }

  const style = {
    menuContent: {
      position: 'absolute',
      display: 'inline-block',
      right: 11,
      top: 15
    },
    menuContentItem: {
      width: 20,
      height: 3,
      backgroundColor: secondaryColor,
      margin: '5px 0'
    }
  }

  return (
    <>
      <div className="p-2 text-left" style={{ backgroundColor: primaryColor, color: secondaryColor }}>
        <h1 className='text-center text-uppercase w-100' style={{ fontFamily: 'Varsity Font', fontSize: 35 }} onClick={handleTab}>BALLHOG</h1>
        <div style={style.menuContent} onClick={handleTab}>
          <div style={style.menuContentItem}></div>
          <div style={style.menuContentItem}></div>
          <div style={style.menuContentItem}></div>
        </div>
      </div>
      <div className='container px-3'>
        {/* <Dashboard /> */}
        {
          getAccess() ?
            <Event
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
              tabStatus={tabStatus}
              setPrimaryColor={setPrimaryColor}
              setSecondaryColor={setSecondaryColor}
              handleTab={handleTab}
            /> :
            <div className='my-3'>
              <div className='row'>
                <div className='col-12 text-center'>
                  <input
                    className='col-12'
                    value={pass}
                    onChange={(evt) => {
                      setPass(evt.target.value);
                      setAccess(false);
                    }}
                  />
                  <button
                    className='btn btn-primary mt-3'
                    onClick={() => {
                      setAccess(true);
                      localStorage.setItem('password', pass);
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
        }
      </div>
    </>
  );
}


export default App;
