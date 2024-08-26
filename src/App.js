import './App.css';

/*imagenes*/
import camaroteImg from './imagenes/camarote.jpg';
import logoInicioImg from './imagenes/logoInicio.jpg';
import habitacionImg from './imagenes/habitacion.jpg';
import camarotedosImg from './imagenes/camarotedos.jpg';
import camarotetripleImg from './imagenes/camarotetriple.jpg';
import camaroteEstudioImg from './imagenes/camaroteEstudio.jpg';

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className="navbar">
          <ul>
            <li>Inicio</li>
            <li>Acerca de nosotros(as)</li>
            <li>Tienda</li>
            <li>Contacto</li>
            <li>Ayuda</li>
            <li>Reseñas</li>
            <li>Ubicaciones</li>
            <li>Preguntas frecuentes</li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <div className="image-section">
          <img src={habitacionImg} alt="Imagen secundaria" className="secondary-image" />
          <img src={logoInicioImg} alt="Producto 1" className="product-image" />
        </div>

        <div className="">
          <img src={camaroteImg} alt="Producto 1" className="product-image" />
          <img src={camarotedosImg} alt="Producto 2" className="product-image" />
          <img src={camarotetripleImg} alt="Producto 3" className="product-image" />
          <img src={camaroteEstudioImg} alt="Producto 3" className="product-image" />
        </div>
        <div>
          <button className="shop-button">Ir a la tienda</button>
        </div>
      </main>
      <footer className="footer">
        <p>© 2024 Tu tienda de mascotas</p>
      </footer>
    </div>
  );
}

export default App;
