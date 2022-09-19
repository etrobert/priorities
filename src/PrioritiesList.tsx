const mockData = ['Priority 1', 'Priority 2'];

const PrioritiesList = () => (
  <ol>
    {mockData.map((priority) => (
      <li key={priority}>{priority}</li>
    ))}
  </ol>
);

export default PrioritiesList;
