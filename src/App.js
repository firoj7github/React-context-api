import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddUser from './component/AddUser';
import { Route,Routes } from 'react-router-dom';
import Home from './component/Home';
import EditUser from './component/EditUser';


function App() {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/add' element={<AddUser></AddUser>}></Route>
      <Route path='/edit' element={<EditUser></EditUser>}></Route>
     </Routes>
    </div>
  );
}

export default App;
