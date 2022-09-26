import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const today = new Date();
  const day = today.toLocaleString([], {weekday: 'long'});
  const date = today.toLocaleDateString([], {dateStyle: 'long'})
};

export default App;
