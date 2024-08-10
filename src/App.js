import SearchBar from "./components/SearchBar";
import PanelMain from "./components/PanelMain";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState("github");
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [allRepositories, setAllRepositories] = useState(false);

  useEffect(() => {
    searchUserGithub();
  }, []);

  const searchUserGithub = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${user}`);
      setUserData(response.data);

      const reposResponse = await axios.get(
        `https://api.github.com/users/${user}/repos`
      );

      const repos4 = reposResponse.data.slice(0, 4);

      setRepos(repos4);
      setAllRepositories(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const allRepos = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${user}/repos`
      );

      if (!allRepositories) {
        setRepos(response.data);
        setAllRepositories(true);
      } else {
        const response2 = response.data.slice(0, 4);
        setRepos(response2);
        setAllRepositories(false);
      }
    } catch (error) {
      console.error("error: ", error);
    }
  };

  return (
    <div className="app">
      <SearchBar
        setUser={setUser}
        user={user}
        searchUserGithub={searchUserGithub}
        userData={userData}
        setUserData={setUserData}
      />
      <PanelMain
        userData={userData}
        setUserData={setUserData}
        repos={repos}
        allRepos={allRepos}
        allRepositories={allRepositories}
      />
    </div>
  );
}

export default App;
