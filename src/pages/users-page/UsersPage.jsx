import { useState, useEffect } from "react";

import UserCard from "../../components/user-card";

import "./userspage.css";

function UsersPage() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setUsers(result.data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [page]);

  const nextPage = () => {
    if (page === 1) {
      setPage(2);
    } else if (page === 2) {
      setPage(1);
    }
  };

  if (error) {
    return <div>Error has occured</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="users-page-wrapper">
        <div className="users-page-list">
          {users.map((user) => (
            <UserCard user={user} key={user.id}></UserCard>
          ))}
        </div>
        <button onClick={nextPage}>Next Page</button>
      </div>
    );
  }
}

export default UsersPage;
