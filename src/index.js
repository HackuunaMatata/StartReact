import React from 'react';
import ReactDOM from 'react-dom';
// import HelloMessage from './Hello';
// import App from './App';
// import WithProps from './WithProps';
// import WithState from './WithState';
// import WithChildren from './WithChildren';
// import WithPropsChildren from './WithPropsChildren';
// import WithCustomType from './WithCustomType';
// import SyntheticEventSystem from './SyntheticEventSystem';
// import ReactRef from './ReactRef';
// import Lifecycle from './Lifecycle';
import StateLifecycle from './StateLifecycle';

ReactDOM.render(
    <div>
        {/*<HelloMessage name="Marty" />*/}
        {/*<App />*/}
        {/*<WithProps cat={5} txt="this is the prop text" />*/}
        {/*<WithProps txt="this is the prop value" />*/}
        {/*<WithState />*/}
        {/*<WithChildren />*/}
        {/*<WithPropsChildren />*/}
        {/*<WithCustomType />*/}
        {/*<SyntheticEventSystem />*/}
        {/*<ReactRef />*/}
        {/*<Lifecycle />*/}
        <StateLifecycle />
    </div>,
  document.getElementById('root')
);
