import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-evoca-purple text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wider text-evoca-lime">Evocabank</h1>
        <div className="space-x-4">
          <button className="bg-evoca-lime text-evoca-dark px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition cursor-pointer">
            Online Banking
          </button>
        </div>
      </div>
    </nav>
  );
}