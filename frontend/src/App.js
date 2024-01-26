import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';
import Dashboard from './Component/Dashboard/Dashboard';
import PrivateRoute from './Helpers/PrivateRoute';
import Editor from './Component/Editor/Editor';

function App() {
  
  return (
    <div style={{backgroundColor:"#1c2333",  background: 'linear-gradient(to right, #8e44ad, #3498db, #00cec9)'}}>
    <BrowserRouter>
        <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}></Route>
      <Route path='/room/:roomId' element={<PrivateRoute><Editor/></PrivateRoute>}></Route>

    </Routes>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
