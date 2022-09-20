import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from './firebase';

const signIn = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

const LogIn = () => {
  const [password, setPassword] = useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        signIn('marine.diot@doctolib.com', password);
      }}
    >
      <input
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">LogIn</button>
    </form>
  );
};

export default LogIn;
