import React from 'react';
import { Link } from "react-router-dom";
import "./styles.css";

const RepoListItems = ({ index, measureRef, repo, onSelectRepo }) => {
  return (
    <div
      key={repo?.id || `fb-${index}`}
      className={`item ${index % 2 ? "darkRow" : "normalRow"}`}
      ref={measureRef}
    >
      {repo ? (
        <div className="repoCardRow">
          <div className="rowContent">
            {index + 1}
            <span className="repoName">
              <Link to={`/repodetails/${repo?.full_name}`} target="_blank">
                {repo?.name}
              </Link>
            </span>
          </div>
          <div className="rowActions">
            <button
              onClick={() => {
                onSelectRepo(repo);
              }}
              className="showDetails"
            >
              show Details
            </button>
          </div>
        </div>
      ) : (
        <div className="repoCardRow">
          <div className="rowContent">⏳ Loading...</div>
        </div>
      )}
    </div>
  );
};

export default RepoListItems;
