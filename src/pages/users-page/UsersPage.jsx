import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import UserCard from "../../components/user-card";
import { IsAuthProtected } from "../../hoc/isAuthProtected";
import { logOut } from "../../services";

import styles from "./userspage.module.css";

function UsersPage() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  //logout
  const history = useHistory();
  const onLogOut = async () => {
    await logOut();
    history.replace("/auth");
  };
  //endlogout

  useEffect(() => {
    fetch(`${process.env.REACT_APP_REQRES_URL}/users?page=${page}`)
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
      <div className={styles.page_wrapper}>
        <div className={styles.page_list}>
          {users.map((user) => (
            <UserCard user={user} key={user.id}></UserCard>
          ))}
        </div>
        <div>
          <button onClick={nextPage} className={`m-2 ${styles.button}`}>
            Next Page
          </button>
          <button className={`${styles.button} m-2 `} onClick={onLogOut}>
            Log Out
          </button>
        </div>
      </div>
    );
  }
}

export default IsAuthProtected(UsersPage);
