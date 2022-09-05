
import './App.css';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login'
import BaseScreen from './components/BaseScreen/BaseScreen';
import Navbar from './components/Navbar/Navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    
    <Router>
      <div className="App">
      <Navbar />
      
        <Routes>
          <Route path='/' element={<BaseScreen />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<BaseScreen />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
