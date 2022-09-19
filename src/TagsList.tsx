import './TagsList.css';

type Props = {
  tags: string[];
};

const TagsList = ({ tags }: Props) => {
  return (
    <ul className="TagsList__List">
      {tags.map((tag) => (
        <li key={tag} className="TagsList__Tag">
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default TagsList;
