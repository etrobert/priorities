import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from './firebase';

import './LogIn.css';

const signIn = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

const LogIn = () => {
  const [password, setPassword] = useState('');

  return (
    <form
      className="LogIn__Form"
      onSubmit={(event) => {
        event.preventDefault();
        if (password === '') return;
        signIn('marine.diot@doctolib.com', password);
      }}
    >
      <input
        className="LogIn__Element"
        value={password}
        type="password"
        placeholder="Password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <button className="LogIn__Element LogIn__Button" type="submit">
        Unlock
      </button>
    </form>
  );
};

export default LogIn;
