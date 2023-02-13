import './App.css';
import ChetView from './components/ChetView/ChetView';

function App() {
  return (
    <div className="App">
      <div className="chets">
        <ChetView ChetTitle={'main'} ChetBalance={'0'}/>
        <ChetView ChetTitle={'main'} ChetBalance={'0'}/>
        <ChetView ChetTitle={'main'} ChetBalance={'0'}/>
        <button className='addchet'>+</button>
      </div>
    </div>
  );
}

export default App;
