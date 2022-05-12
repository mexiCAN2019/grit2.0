import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/home';
import Months from './Components/month/months';
import Dashboard from './Components/dashboard';
import Weeks from './Components/weeks/weeks';
import Week from './Components/week/week';
import MonthSummary from './Components/summaries/monthSummary'
import YearSummary from './Components/summaries/yearSummary';


function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path="/:year" element={<Months />} />
      <Route path="/:year/yearReview" element={<YearSummary />} />
      <Route path="/:year/:monthAndMonthID" element={<Weeks />} />
      <Route path="/:year/:monthAndMonthID/monthSummary" element={<MonthSummary />} />
      <Route path="/:year/:monthAndMonthID/:weekID" element={<Week />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  );
}

export default App;