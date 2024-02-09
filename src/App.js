import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <h2>Tabla de Proyecto</h2>
    <table className="tabla-proyecto">
      <thead>
        <tr>
          <th>id</th>
          <th>Requerimiento/ Tarea</th>
          <th>Responsable</th>
          <th>Estado</th>
          <th>Est. Esf. Horas</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>X-1</td>
          <td>
            <p>En esta parte del proyecto se necesita realizar las pruebas de testeo para revisar su funcionalidad, subirlo a la web y planear la segunda versión del sitio web.</p>
            <ul>
              <li>Reunión con las personas clave del producto</li>
              <li>Delegación de responsabilidades</li>
            </ul>
          </td>
          <td>Equipo 1<br/>Equipo 2<br/>Equipo 3</td>
          <td>En proceso<br/>En proceso<br/>En proceso</td>
          <td>9 horas<br/>9 horas<br/>10 horas</td>
        </tr>
        <tr>
          <td>X-2</td>
          <td>
            <p>Desarrollo del proyecto en todos los campos para poder tener funcionalidad sin hacer las pruebas de funcionamiento finales aún.</p>
            <ul>
              <li>Desarrollo del prototipo</li>
              <li>Desarrollo UX UI</li>
              <li>Desarrollo de la base de datos</li>
            </ul>
          </td>
          <td>Equipo 1<br/>Equipo 2<br/>Equipo 3</td>
          <td>En proceso<br/>En proceso<br/>En proceso</td>
          <td>75 horas<br/>75 horas<br/>75 horas</td>
        </tr>
        <tr>
          <td>X-3</td>
          <td>
            <p>En esta parte del proyecto se necesita realizar las pruebas de testeo para revisar su funcionalidad, subirlo a la web y planear la segunda versión del sitio web.</p>
            <ul>
              <li>Testeo del proyecto</li>
              <li>Ponerlo en línea</li>
              <li>Agendar nueva cita para el desarrollo de proyecto 2.0</li>
            </ul>
          </td>
          <td>Equipo 1<br/>Equipo 2<br/>Equipo 3</td>
          <td>En proceso<br/>En proceso<br/>En proceso</td>
          <td>30 horas<br/>30 horas<br/>30 horas</td>
        </tr>
      </tbody>
    </table>
  </div>
  );
}

export default App;
