import userData from "../data/userData.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json"
import Profile from "./Profile/Profile";
import FriendList from "./Friends/FriendList";
import TransactionHistory from "./Transactions/TransactionHistory";


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
