import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Counter from "./components/Counter";
import Stopwatch from "./components/Stopwatch";

const App = () => {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/stopwatch">Stopwatch</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="*" element={<h1>Error: Page not found</h1>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App