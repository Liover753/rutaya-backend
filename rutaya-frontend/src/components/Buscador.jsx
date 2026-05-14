function Buscador({ busqueda, setBusqueda }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        className="form-control form-control-lg search-input"
        placeholder="Buscar lugar turístico..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
    </div>
  );
}

export default Buscador;