import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext)
  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{transaction.amount}</span><button className="delete-btn" onClick={() => deleteTransaction(transaction.id)} >X</button>
    </li>
  )
}

export default Transaction;