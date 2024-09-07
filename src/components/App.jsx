import userData from "../data/userData.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json"
import Profile from "./Profile";
import FriendList from "./FriendList";
import TransactionHistory from "./TransactionHistory";


const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
