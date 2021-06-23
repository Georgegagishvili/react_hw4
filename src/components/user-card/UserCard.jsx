import "./usercard.css";
function UserCard({ user }) {
  return (
    <div className="user-card-wrapper">
      <span>
        {user.first_name} {user.last_name}
      </span>
      <span>{user.email}</span>
      <img src={user.avatar} alt="something..."></img>
    </div>
  );
}

export default UserCard;
