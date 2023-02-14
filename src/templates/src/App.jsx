import { useState } from 'react';
import './App.css';
import ChetView from './components/ChetView/ChetView';
import TransactionView from './components/TransactionView/TransactionView';

function App() {

  const [ChetList, SetChetList] = useState([
    {"id": 0, "title": 'main', "balance": 0},
    {"id": 1, "title": 'main', "balance": 0},
    {"id": 2, "title": 'main', "balance": 0},
    {"id": 3, "title": 'main', "balance": 0},
  ])

  const [TransactionList, SetTransactionList] = useState([
    {"id": 0, 'sum': 10, 'category': 'Food', 'datetime': new Date()},
    {"id": 1, 'sum': -10, 'category': 'Transport', 'datetime': new Date()},
    {"id": 2, 'sum': 10, 'category': 'No category', 'datetime': new Date()},
    {"id": 3, 'sum': -10, 'category': 'No category', 'datetime': new Date()},
    {"id": 4, 'sum': 10, 'category': 'No category', 'datetime': new Date()},
  ])

  return (
    <div className="App">
      <div className="chets">
        {
          ChetList.map(Chet => {
            return(
              <ChetView 
                key={Chet.id}
                ChetTitle={Chet.title} 
                ChetBalance={Chet.balance}
              />
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
                key={Transaction.id}
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
