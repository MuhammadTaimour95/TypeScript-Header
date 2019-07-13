import * as React from 'react';
import  ModalHeader from './ModalHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCross, faBackward, faBackspace, faWindowClose, faTimes, faArrowCircleLeft, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import './App.css'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
  return <div><ModalHeader showBackIcon={true} showCloseIcon={true} Message="First" />;
   <ModalHeader showBackIcon={true} showCloseIcon={true} Message="Second" />
   </div>;
}

function Product({}) {
  return <ModalHeader showBackIcon={true} showCloseIcon={true} Message="Hello There Whats Up" />;
}



type HeaderProps = {
  showBackIcon?: boolean,
  showCloseIcon?: boolean,
  Message?: string
}
 
export class App extends React.PureComponent<any, {}> {

  
  public render() {
    return (
      <div>
        <Router>
        <ModalHeader showBackIcon={true} showCloseIcon={true} Message="In Between The Two: First" />  
        
          <div>
            <nav>
              <ul>
              <li>
                  <Link to="/headerModel/1">Header Model Page 1</Link>
                </li>
                <li>
                  <Link to="/headerModel/2">Header Model Page 2</Link>
                </li>
              </ul>
            </nav>
            <Route path="/"  exact component={Product} />
            <Route path="/headerModel/1"  component={Product} />
            <Route path="/headerModel/2" component={Index} />
          </div>
        </Router>
       </div>
    
    );
  }
}

export default App;