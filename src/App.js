import { useState } from "react";

import './App.css';
import Switch from './components/switch/switch.component';

function App() {
  const [switchStatus, setSwitchStatus] = useState('day');

  const changeSwitchStatus = () => {
    if(switchStatus === 'day'){
        setSwitchStatus('night')
    } else {
        setSwitchStatus('day')
    }
  }

  return (
    <div className={`App ${switchStatus}`} >
      <header className="App-header">
        <h1>Night and Day Switch</h1>
        <div className='switch-container'>
          <span>☀️</span>
            <Switch switchStatus={switchStatus} handlerChangeSwitchStatus={changeSwitchStatus}/>
          <span>🌙</span>
        </div>
      </header>
    </div>
  );
}

export default App;
