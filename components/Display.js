import React from 'react';

function Display({messages, newMess}) {
  return (
    <main>
      <form onSubmit={(e) => { e.preventDefault(); newMess(e.target[0].value); e.target.reset();}}>
        <input type="text"></input>
        <input type="submit"></input>
      </form>
      {messages.map(message => <p>{message}</p>)}
    </main>
  );
}

export default Display;
