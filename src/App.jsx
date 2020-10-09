import React from 'react';
import { useState } from 'react';
import getField from './fieldFunction';

function App() {

  const [field, setField] = useState(() => {
    return getField(10)
  })
  console.log(field)

  return (
    <div className="App">

    </div>
  );
}

export default App;