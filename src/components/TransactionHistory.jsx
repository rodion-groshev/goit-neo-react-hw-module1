import TransactionItem from "./TransactionItem";
import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.transactionTitle}>
          <th className={css.transactionRow}>Type</th>
          <th className={css.transactionRow}>Amount</th>
          <th className={css.transactionRow}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => {
          return (
            <TransactionItem
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
