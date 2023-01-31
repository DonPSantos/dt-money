import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionsContext";

export function useSummary(){
    const { transactions } = useContext(TransactionsContext);
    const summary = transactions.reduce(
      (result, transaction) => {
        if (transaction.type === "income") {
          result.income += transaction.price;
          result.total += transaction.price;
        } else {
          result.outcome += transaction.price;
          result.total -= transaction.price;
        }
  
        return result;
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      }
    );
    return summary;
}