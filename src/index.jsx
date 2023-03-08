
import ReactDOM from 'react-dom/client'


import React, { useState } from 'react';

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsToggled(prevValue => !prevValue)}>
        Toggle
      </button>
      <br />
      {isToggled ? "This is react toggle" : ""}
    </div>
  )
}

export default Toggle;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toggle />
  </React.StrictMode>
)