import React from 'react';
import { useState } from 'react';
import getCanvas from './getCanvas';

// const FIELD_SIZE = 10

function App() {

  //  need useMemo
  // const [field, setField] = useState(() => {
  //   return getField(FIELD_SIZE)
  // })

  const [field, setField] = useState(() => {
    return getCanvas()
  })

  console.log(field)

  // const getNumber = (row, column) => {
  //   console.log("->", field[row][column])
  // }

  // getNumber('row3', 3)

  return (
    <div className="App">

    </div>
  );
}

export default App;