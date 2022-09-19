import { useEffect, useState } from 'react';
import { collection, onSnapshot, query } from 'firebase/firestore';

import firestore from './firestore';

type Priority = { name: string; order: number };

const q = query(collection(firestore, 'priorities'));

const usePrioritiesData = () => {
  const [priorities, setPriorities] = useState<Priority[]>();
  useEffect(
    () =>
      onSnapshot(q, (querySnapshot) => {
        const priorities: Priority[] = [];
        querySnapshot.forEach((doc) => {
          priorities.push(doc.data() as Priority);
        });
        setPriorities(priorities);
      }),
    []
  );
  return priorities;
};

export default usePrioritiesData;
