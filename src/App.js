
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import TodoList from './components/TodoList';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './components/RequireAuth';

function App() {

  return (
    <div className="w-full lg:w-9/12 mx-auto">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/todo" element={
          <RequireAuth>
            <TodoList></TodoList>
          </RequireAuth>
        }
        ></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>

    </div >
  );
}

export default App;
