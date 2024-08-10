import Presentation from "./Presentation";
import ShowRepositories from "./ShowRepositories";

function PanelMain({ userData, repos, allRepos, allRepositories }) {
  if (!userData) {
    return (
      <div className="panel-main">
        <h2 className="user-not-found">User Not Found</h2>
      </div>
    );
  }

  return (
    <div className={`panel-main ${allRepositories ? "panel-all" : ""}`}>
      <Presentation userData={userData} />
      <ShowRepositories
        repos={repos}
        allRepos={allRepos}
        allRepositories={allRepositories}
      />
    </div>
  );
}

export default PanelMain;
