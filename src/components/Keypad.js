// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
  render() {
    return (
      <div>
        <input type="password" onChange={() => console.log('Entering password...')} />
      </div>
    );
  }
}

export default Keypad;


