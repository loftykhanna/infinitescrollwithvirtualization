import { useState } from "react";
import useVirtual from "react-cool-virtual";
import axios from "axios";
import { Modal, RepoCard } from "../../Component";
import { URL, CONSTANTS } from "../../Constants";
import { RepoListItems } from "../../Component";

const isItemLoadedArr = [];

const loadData = async ({ loadIndex }, setrepolist) => {
  // Set the state of a batch items as `true`
  // to avoid the callback from being invoked repeatedly
  isItemLoadedArr[loadIndex] = true;

  try {
    // Simulating a slow network
    const { data } = await axios(
      `${URL.GITHUB__ORG_API_ENDPOINT}/${URL.GITHUB_ORG}/repos?page=${
        loadIndex + 1
      }`
    );

    setrepolist((prevList) => {
      return [...prevList, ...data];
    });
    // console.log("repolist", repolist);
  } catch (err) {
    // If there's an error set the state back to `false`
    isItemLoadedArr[loadIndex] = false;
    // Then try again
    // loadData({ loadIndex }, setrepolist);
  }
};
export default function Repolist() {
  const [repolist, setrepolist] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedRepo, setSelectedRepo] = useState(false);

  // const [comments, setComments] = useState([]);
  const { outerRef, innerRef, items } = useVirtual({
    itemCount: CONSTANTS.TOTAL_COMMENTS,
    // Estimated item size (with padding)
    itemSize: 12,
    // The number of items that you want to load/or pre-load, it will trigger the `loadMore` callback
    // when the user scrolls within every items, e.g. 1 - 5, 6 - 10, and so on (default = 15)
    loadMoreCount: CONSTANTS.BATCH_COMMENTS,
    // Provide the loaded state of a batch items to the callback for telling the hook
    // whether the `loadMore` should be triggered or not
    isItemLoaded: (loadIndex) => isItemLoadedArr[loadIndex],
    // We can fetch the data through the callback, it's invoked when more items need to be loaded
    loadMore: (e) => loadData(e, setrepolist),
  });

  const showRepoModal = (repo) => {
    console.log("repo", repo);
    setSelectedRepo(repo);
    setShowModal(true);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const renderRepoList = () => {
    console.log(items, repolist);
    return items.map(({ index, measureRef }) => {
      const repo = repolist[index];
      return (
        <>
          <RepoListItems
            index={index}
            measureRef={measureRef}
            repo={repo}
            onSelectRepo={showRepoModal}
          />
        </>
      );
    });
  };

  return (
    <div
      className="outer"
      style={{ height: "500px", overflow: "auto" }}
      ref={outerRef}
    >
      {showModal && (
        <Modal onRequestClose={toggleModal}>
          <RepoCard repoDetails={selectedRepo} />
        </Modal>
      )}
      <div ref={innerRef}>{renderRepoList()}</div>
    </div>
  );
}
