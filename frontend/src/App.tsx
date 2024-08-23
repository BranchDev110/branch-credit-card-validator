import React, { useState } from 'react';
import './App.css';
import CreditCardForm from './CreditCardForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Credit Card Validator</h1>
        <CreditCardForm />
      </header>
    </div>
  );
}

export default App;
