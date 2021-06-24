import { memo } from "react";
import propTypes from "prop-types";

import styles from "./usercard.module.css";
function UserCard({ user }) {
  return (
    <div className={styles.card_wrapper}>
      <span className={styles.span}>
        {user.first_name} {user.last_name}
      </span>
      <span className={styles.span_second}>{user.email}</span>
      <img src={user.avatar} alt="something..." className={styles.img}></img>
    </div>
  );
}

UserCard.propTypes = {
  user: propTypes.object,
};

export default memo(UserCard);
