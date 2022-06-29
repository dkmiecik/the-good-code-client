import React from 'react';
import './App.css';
import ListContainer from './containers/List/List.container';

function App() {
  return (
    <main className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <ListContainer />
    </main>
  );
}

export default App;
