/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import Home from './pages/Home'
import { ThemeProvider } from '@material-ui/core'
import { createTheme } from '@material-ui/core/styles'
import * as MUI from '@material-ui/core'
import Layout from './components/Layout/Layout'

//components
import BsNavbar from './components/BsNavbar/BsNavbar'
// styles
import './App.css';
import { purple } from '@material-ui/core/colors';


const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }

})


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>

          <div className="App">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/notes" element={<Notes />}></Route>
              <Route exact path="/create" element={<Create />}></Route>
            </Routes>
          </div>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
