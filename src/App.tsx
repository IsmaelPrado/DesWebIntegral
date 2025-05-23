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
            Esta simple Aplicación está creada con <strong>React y Bootstrap</strong>.
          </p>
        </div>
      </div>
    </>
  )
}

export default App;
