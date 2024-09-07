import css from "./TransactionItem.module.css";

const TransactionItem = ({ id, type, amount, currency }) => {
  return (
    <tr key={id}>
      <td className={css.defines}>{type}</td>
      <td className={css.defines}>{amount}</td>
      <td className={css.defines}>{currency}</td>
    </tr>
  );
};

export default TransactionItem;
