import { useEffect, useState } from 'react';
import { User } from 'firebase/auth';

import { auth } from './firebase';

const useCurrentUser = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => auth.onAuthStateChanged((user) => setUser(user)));

  return user;
};

export default useCurrentUser;
