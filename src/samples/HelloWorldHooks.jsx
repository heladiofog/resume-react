import React, { useState } from 'react';

const HelloWorldHooks = () => {
  const [active, setActive] = useState(true);
  const [btnText, setBtnText] = useState('Ocultar');

  const handleClick = () => {
    setActive(!active);
    setBtnText(active ? 'Mostrar' : 'Ocultar');
  }

  return (<div className="Hooks-sample">
    <button onClick={handleClick}>{btnText}</button>
    {
      active &&
      <h1>Hello World Hooks!</h1>
    }
  </div>
  );
}

export default HelloWorldHooks;
