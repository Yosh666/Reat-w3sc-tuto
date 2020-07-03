import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from './Test';

import Garage from './Garage';
import * as serviceWorker from './serviceWorker';



class Wrapper extends React.Component{
  render() {return(
      <div>
        <App />
        <Test />
      </div>
   )
  }
}



ReactDOM.render(
  <Wrapper />,
  document.getElementById('root')
);
let lien = <a href='https://youtu.be/pCpLWbHVNhk?t=1385'> Vazy clique dessus</a>;
 ReactDOM.render(lien,document.getElementById('lientest'));




ReactDOM.render(<Garage/>,document.getElementById("tripatouillage"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
