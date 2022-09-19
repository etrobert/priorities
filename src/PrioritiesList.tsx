import './PrioritiesList.css';

const mockData = ['Priority 1', 'Priority 2'];

const PrioritiesList = () => (
  <ol className="PrioritiesList__List">
    {mockData.map((priority) => (
      <li className="PrioritiesList__Priority" key={priority}>
        {priority}
      </li>
    ))}
  </ol>
);

export default PrioritiesList;
