import Login from './Pages/Login'
import { useState } from 'react';
import Home from './Pages/Home';

const App = () => {

  const [isLoggedin, setisLoggedin] = useState(false)

  const comp = !isLoggedin ? <Login isLoggedin = {isLoggedin} setisLoggedin = {setisLoggedin} /> : <Home />

  return comp

}
export default App;
