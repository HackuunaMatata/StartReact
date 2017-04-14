import React from 'react';
import ReactDOM from 'react-dom';
// import HelloMessage from './Hello';
// import App from './App';
import WithProps from './WithProps';

ReactDOM.render(
    <div>
        {/*<HelloMessage name="Marty" />*/}
        {/*<App />*/}
        <WithProps txt="this is the prop text" />
        {/*<WithProps txt="this is the prop value" />*/}
    </div>,
  document.getElementById('root')
);
