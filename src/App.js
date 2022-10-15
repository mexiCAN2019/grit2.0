import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css'
import HomePage from './Components/home';
import Months from './Components/month/months';
import Dashboard from './Components/dashboard';
import Weeks from './Components/weeks/weeks';
import Week from './Components/week/week';
import TotalSummary from './Components/summaries/totalSummary';
import MonthSummary from './Components/summaries/monthSummary'
import YearSummary from './Components/summaries/yearSummary';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#081b4d'
    },
    secondary: {
      main: '#a77464'
    },
    background: {
      paper: 'seashell'
    }
  }
})


function App() {

  return (
    <ThemeProvider theme={theme}>
      <Link to="/">
        <h1 style={{textAlign: 'center', margin: '5px auto 30px', color: 'Seashell'}}>GRIT</h1>
      </Link>  
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/totalSummary' element={<TotalSummary />} />
        <Route path="/:year" element={<Months />} />
        <Route path="/:year/yearReview" element={<YearSummary />} />
        <Route path="/:year/:monthAndMonthID" element={<Weeks />} />
        <Route path="/:year/:monthAndMonthID/monthSummary" element={<MonthSummary />} />
        <Route path="/:year/:monthAndMonthID/:weekID" element={<Week />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;