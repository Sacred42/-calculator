import React, { useState } from 'react';
import Pole from './components/pole/pole';
import Buttons from './components/buttons/buttons';
import Equal from './components/equall/equall';
import ClearButton from './components/clear/clear'

function App() {
  
  return (
    <div className="App">
      <Pole/>
      <Buttons/>
      <Equal/>
      <ClearButton/>
    </div>
  );
}

export default App;
