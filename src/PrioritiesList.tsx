import usePrioritiesData from './usePrioritiesData';
import './PrioritiesList.css';

const PrioritiesList = () => {
  const priorities = usePrioritiesData();

  return (
    <ol className="PrioritiesList__List">
      {priorities === undefined
        ? 'Loading...'
        : priorities.map((priority) => (
            <li className="PrioritiesList__Priority" key={priority}>
              {priority}
            </li>
          ))}
    </ol>
  );
};

export default PrioritiesList;
