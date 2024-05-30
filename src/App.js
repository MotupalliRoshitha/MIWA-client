import Login from './Pages/Login'
import { useState } from 'react';
import Home from './Pages/Home';
import Navbar from './Components/Navbar'
import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './Pages/Profile';
import WatchList from './Pages/WatchList';
const App = () => {

  const [isLoggedin, setisLoggedin] = useState(false)
  const [user, setUser] = useState(null)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const userName = user != null ? user.email : ""
  const theme = isDarkMode ? 'dark' : 'light'
  const darkTheme = createTheme({
    palette: {
      mode: theme,
    },
  });
  return (
    <div>
      <ThemeProvider theme={  darkTheme}>
      {!isLoggedin ? (
        <>
        <Login setIsLoggedin={(val) => setisLoggedin(val)} setUser={(val) => setUser(val)} />
        </>
      ) : (
     <BrowserRouter>
      <Navbar userName = {userName} isDarkMode = {isDarkMode} setIsDarkMode = {(val) => setIsDarkMode(val)} logout = {() => {setUser(null); setisLoggedin(false) }} />
      <Routes>
      <Route path='/' element={<Home user={user} />}  />
      <Route path='/profile' element={<Profile user = {user}/>}  />
      <Route path='/watchlist' element={<WatchList />}  />
      </Routes>
     </BrowserRouter> 
      )}
      </ThemeProvider>
    </div>
  );
}
export default App;
