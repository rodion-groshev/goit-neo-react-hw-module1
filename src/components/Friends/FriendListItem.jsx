import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.friendCard}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      {isOnline ? (
        <p className={isOnline ? [css.online] : [css.offline]}>Online</p>
      ) : (
        <p className={isOnline ? [css.online] : [css.offline]}>Offline</p>
      )}
    </div>
  );
};

export default FriendListItem;
