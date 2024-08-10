import axios from "axios";

function UserSearch({ user }) {
  const data = axios.get(`https://api.github.com/users/${user}`);

  return data.data;
}

export default UserSearch;
