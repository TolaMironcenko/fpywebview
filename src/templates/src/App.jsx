import { useState } from 'react';
import './App.css';
import ChetView from './components/ChetView/ChetView';
import TransactionView from './components/TransactionView/TransactionView';

function App() {

  const [ChetList, SetChetList] = useState([
    {"title": 'main', "balance": 0},
    {"title": 'main', "balance": 0},
    {"title": 'main', "balance": 0},
    {"title": 'main', "balance": 0},
  ])

  const [TransactionList, SetTransactionList] = useState([
    {'sum': 10, 'category': 'Food', 'datetime': new Date()},
    {'sum': -10, 'category': 'Transport', 'datetime': new Date()},
    {'sum': 10, 'category': 'No category', 'datetime': new Date()},
    {'sum': -10, 'category': 'No category', 'datetime': new Date()},
    {'sum': 10, 'category': 'No category', 'datetime': new Date()},
  ])

  return (
    <div className="App">
      <div className="chets">
        {
          ChetList.map(Chet => {
            return(
              <ChetView ChetTitle={Chet.title} ChetBalance={Chet.balance}/>
            )
          })
        }
        <button className='addchet'>+</button>
      </div>

      <div className="transactions">
        {
          TransactionList.length === 0
          ?<h2>Пока что нет транзакций</h2>
          :TransactionList.map(Transaction => {
            return(
              <TransactionView 
                sum={Transaction.sum} 
                category={Transaction.category} 
                datetime={Transaction.datetime.getDay()+'.'+Transaction.datetime.getMonth()+'.'+Transaction.datetime.getFullYear()}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
