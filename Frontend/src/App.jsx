import React, { useEffect, useState } from 'react';
import Header from './components/common/Header';
import InventoryTable from './components/common/InventoryTable';
import './App.css';

function App() {
  // Recopilar los porductos desde la api
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([
  { name: 'Producto 1', category: 'Categoría 1', stock: 10, img: 'Marca 1', price: 100 },
  { name: 'Producto 5', category: 'Categoría 2', stock: 20, img: 'https://images.dog.ceo/breeds/cotondetulear/IMAG1063.jpg', price: 200 },
  { name: 'Producto 1', category: 'Categoría 1', stock: 10, img: 'Marca 1', price: 100 },
  { name: 'Producto 2', category: 'Categoría 2', stock: 20, img: 'Marca 2', price: 200 },
  { name: 'Producto 1', category: 'Categoría 1', stock: 10, img: 'Marca 1', price: 100 },
  { name: 'Producto 2', category: 'Categoría 2', stock: 20, img: 'Marca 2', price: 200 },
  { name: 'Producto 2', category: 'Categoría 2', stock: 20, img: 'Marca 2', price: 200 },]);
  
  const fetchData = async () => {
    await fetch("http://localhost:5000/api/productos")
      .then((response) => response.json())
      .then((products) => {
        setData([...data, ...products.data]);
        setIsLoading(false)
      });
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }

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
