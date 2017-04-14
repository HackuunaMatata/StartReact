import React from 'react';
import ReactDOM from 'react-dom';
import HelloMessage from './Hello';
/*import App from './App';*/

ReactDOM.render(
    <div>
        <HelloMessage name="Marty" />
        {/*<App />*/}
    </div>,
  document.getElementById('root')
);
