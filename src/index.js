import React from 'react';
import ReactDOM from 'react-dom';
// import HelloMessage from './Hello';
// import App from './App';
// import WithProps from './WithProps';
import WithState from './WithState';

ReactDOM.render(
    <div>
        {/*<HelloMessage name="Marty" />*/}
        {/*<App />*/}
        {/*<WithProps cat={5} txt="this is the prop text" />*/}
        {/*<WithProps txt="this is the prop value" />*/}
        <WithState />
    </div>,
  document.getElementById('root')
);
