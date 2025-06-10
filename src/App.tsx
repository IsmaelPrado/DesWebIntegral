import NavBar from './NavBar'

function App() {
  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <div className="card shadow-sm p-4">
          <h2 className="text-primary">Bienvenido a mi página Web</h2>
          <hr />
          <p className="lead">
            Esta simple aplicación está creada con <strong>React y Bootstrap</strong>.
          </p>

          <div className="mt-4">
            <h4>¿Qué contiene esta página?</h4>
            <ul>
              <li>⚛️ React con Vite</li>
              <li>🎨 Estilos con Bootstrap 5</li>
              <li>🚀 Despliegue automático con GitHub Actions</li>
              <li>📄 Publicada en GitHub Pages</li>
            </ul>
          </div>

          <div className="mt-4 alert alert-success">
            <strong>✅ ¡Si ves este contenido, el workflow funcionó correctamente!</strong>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
