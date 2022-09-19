import { useMemo } from 'react';
import usePrioritiesData from './usePrioritiesData';
import './PrioritiesList.css';

const PrioritiesList = () => {
  const priorities = usePrioritiesData();
  const sortedPriorites = useMemo(
    () => priorities?.sort((a, b) => a.order - b.order),
    [priorities]
  );

  return (
    <ol className="PrioritiesList__List">
      {sortedPriorites === undefined
        ? 'Loading...'
        : sortedPriorites.map((priority) => (
            <li className="PrioritiesList__Priority" key={priority.name}>
              {priority.name}
            </li>
          ))}
    </ol>
  );
};

export default PrioritiesList;
