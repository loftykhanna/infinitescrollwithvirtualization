import { Avatar } from "../";
import "./styles.css";

const RepoCard = ({ repoDetails = {}, orgname = "goDaddy" }) => {
  return (
    <div className="repoDetailsContainer">
      <div className="avatarContainer">
        <Avatar imageUrl={repoDetails?.owner?.avatar_url} name={orgname} />
      </div>

      <p class="name">{repoDetails?.name}</p>
      <p class="description">{repoDetails?.description}</p>
      <p class="description">Languages : {repoDetails?.language}</p>
      <p class="description">Forks : {repoDetails?.forks_count}</p>
      <p class="description">Open Issues : {repoDetails?.open_issues_count}</p>
      <p class="description">Watcher : {repoDetails?.watchers_count}</p>
      <button class="btn">
        <a href={repoDetails?.html_url} target="_blank" rel="noreferrer">
          Go to Github Repo
        </a>
      </button>
    </div>
  );
};

export default RepoCard;
