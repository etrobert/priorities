import { useCallback, useState } from 'react';
import { AuthError, signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from './firebase';

import './LogIn.css';

const LogIn = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const signIn = useCallback(async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        'marine.diot@doctolib.com',
        password
      );
    } catch (error) {
      setError((error as AuthError).message);
    }
  }, [password]);

  return (
    <>
      {error}
      <form
        className="LogIn__Form"
        onSubmit={(event) => {
          event.preventDefault();
          if (password === '') {
            setError('Error: Password is empty.');
            return;
          }
          signIn();
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
    </>
  );
};

export default LogIn;
