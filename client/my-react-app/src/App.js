import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import ExpenseEntry from './components/ExpenseEntry';
import ExpenseSummary from './components/ExpenseSummary';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <nav className="p-4 bg-gray-800 text-white">
          <Link to="/home" className="mr-4">Home</Link>
          <Link to="/entry" className="mr-4">Add Expense</Link>
          <Link to="/summary">Expense Summary</Link>
        </nav>
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/entry" element={<ExpenseEntry />} />
            <Route path="/summary" element={<ExpenseSummary />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

