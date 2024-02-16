import React from 'react';
import Header from './components/common/Header';
import InventoryTable from './components/common/InventoryTable';
import './App.css';

function App() {
  // Definir los datos dentro del componente App
  const data = [
    { productName: 'Producto 1', category: 'Categoría 1', quantity: 10, brand: 'Marca 1', price: 100 },
    { productName: 'Producto 2', category: 'Categoría 2', quantity: 20, brand: 'Marca 2', price: 200 },
    { productName: 'Producto 1', category: 'Categoría 1', quantity: 10, brand: 'Marca 1', price: 100 },
    { productName: 'Producto 2', category: 'Categoría 2', quantity: 20, brand: 'Marca 2', price: 200 },
    { productName: 'Producto 1', category: 'Categoría 1', quantity: 10, brand: 'Marca 1', price: 100 },
    { productName: 'Producto 2', category: 'Categoría 2', quantity: 20, brand: 'Marca 2', price: 200 },
    { productName: 'Producto 2', category: 'Categoría 2', quantity: 20, brand: 'Marca 2', price: 200 },
    // Agregar más elementos de datos según sea necesario
  ];

  return (
    <div>
      <Header />
      {/* Pasar los datos como prop a InventoryTable */}
      <InventoryTable data={data} />
      {/* Aquí puedes agregar el enrutador y otras partes de tu aplicación */}
    </div>
  );
}

export default App;
