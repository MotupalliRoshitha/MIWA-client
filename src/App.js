import Login from './Pages/Login'
import { useState } from 'react';
import Home from './Pages/Home';
import Navbar from './Components/Navbar'
import { ThemeProvider, createTheme } from '@mui/material';
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
      <Navbar userName = {userName} isDarkMode = {isDarkMode} setIsDarkMode = {(val) => setIsDarkMode(val)} logout = {() => {setUser(null); setisLoggedin(false) }} />
      {!isLoggedin ? (
        <Login setIsLoggedin={(val) => setisLoggedin(val)} setUser={(val) => setUser(val)} />
      ) : (
        <Home />
      )}
      </ThemeProvider>
    </div>
  );
}
export default App;
