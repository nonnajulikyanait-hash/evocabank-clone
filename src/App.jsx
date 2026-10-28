import React from 'react';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-evoca-gray text-evoca-dark">
      <Navbar />
      <main className="container mx-auto p-6 text-center">
        <h2 className="text-3xl font-bold mt-10">Evocabank Clone</h2>
      </main>
    </div>
  );
}

export default App;