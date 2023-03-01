
import './App.css';
import Form from './components/Form';
import Edit from './components/Edit';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Add from './components/Add';

function App() {
  return (
    <div className="App">
      <header className="App-header">
   
    <Router>
      <Routes>
        <Route path='/' element={ <Form/>}/>
        <Route path='/edit' element={ <Edit/>}/>
        <Route path='/add' element={ <Add/>}/>
      </Routes>
    </Router>
      </header>
    </div>
  );
}

export default App;
