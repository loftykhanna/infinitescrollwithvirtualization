import React from 'react';
import { Avatar } from "../";
import "./styles.css";

const RepoCard = ({ repoDetails = {}, orgname = "goDaddy" }) => {
  return (
    <div className="repoDetailsContainer">
      <div className="avatarContainer">
        <Avatar imageUrl={repoDetails?.owner?.avatar_url} name={orgname} />
      </div>

      <p className="name">{repoDetails?.name}</p>
      <p className="description">{repoDetails?.description}</p>
      <p className="description">Languages : {repoDetails?.language}</p>
      <p className="description">Forks : {repoDetails?.forks_count}</p>
      <p className="description">Open Issues : {repoDetails?.open_issues_count}</p>
      <p className="description">Watcher : {repoDetails?.watchers_count}</p>
      <button className="btn">
        <a href={repoDetails?.html_url} target="_blank" rel="noreferrer">
          Go to Github Repo
        </a>
      </button>
    </div>
  );
};

export default RepoCard;
