import { GitHub } from 'react-feather';

import './GithubLink.css';

const GitHubLink = () => {
  return (
    <a
      className="GithubLink__Link"
      href="https://github.com/etrobert/priorities"
      target="_blank"
      rel="noreferrer"
      title="GitHub Project Link"
    >
      <GitHub size="3rem" />
    </a>
  );
};

export default GitHubLink;
