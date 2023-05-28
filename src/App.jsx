import React from 'react';
import SecondsCounter from './SecondsCounter';
import "./App.css";




const App = () => {
  return (
    <div>
      <SecondsCounter initialSeconds={0} />
    </div>
  );
}


export default App;
