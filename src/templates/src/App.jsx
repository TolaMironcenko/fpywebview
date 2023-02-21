import { useEffect, useState } from 'react';
import './App.css';
import ChetView from './components/ChetView/ChetView';
import Loader from './components/LoaderView/Loader';
import TransactionView from './components/TransactionView/TransactionView';

function App() {
  const [ChetList, SetChetList] = useState([])
  const [activeload, setActiveload] = useState(false)


  const get_all_chets = () => {
    window.pywebview.api.get_all_chets(1).then(
      result => SetChetList(JSON.parse(result))
    )
    setActiveload(false)
  }


  useEffect(() => {
    setActiveload(true)
    const interval = setInterval(() => {
      get_all_chets()
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const [TransactionList, SetTransactionList] = useState([
    {"id": 0, 'sum': 10, 'category': 'Food', 'datetime': new Date()},
    {"id": 1, 'sum': -10, 'category': 'Transport', 'datetime': new Date()},
    {"id": 2, 'sum': 10, 'category': 'No category', 'datetime': new Date()},
    {"id": 3, 'sum': -10, 'category': 'No category', 'datetime': new Date()},
    {"id": 4, 'sum': 10, 'category': 'No category', 'datetime': new Date()},
  ])

  const create_chet = () => {
    window.pywebview.api.create_chet(1, 'new')
    .then(res => {
      if (res.code === 'OK') {
        SetChetList([...ChetList, res])
      }
    })
  }

  return (
    <div className="App">
      <div className="chets">
        <Loader active={activeload}/>
        {
          ChetList.map(Chet => {
            return(
              <ChetView 
                key={Chet.id}
                ChetTitle={Chet.name} 
                ChetBalance={Chet.balance}
              />
            )
          })
        }
        {
          !activeload?
          <button 
            className='addchet'
            onClick={create_chet}
          >+</button>:
          <></>
        }
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
