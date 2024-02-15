import React from 'react';
import Header from './components/common/Header';
import InventoryTable from './components/common/InventoryTable';
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <InventoryTable />
      {/* Aquí puedes agregar el enrutador y otras partes de tu aplicación */}
    </div>
  );
}

export default App;

