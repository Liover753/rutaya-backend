function FiltroCategoria({ categorias, categoriaSeleccionada, setCategoriaSeleccionada }) {
  return (
    <div className="mb-4">
      <select
        className="form-select form-select-lg"
        value={categoriaSeleccionada}
        onChange={(e) => setCategoriaSeleccionada(e.target.value)}
      >
        <option value="">Todas las categorías</option>

        {categorias.map((categoria) => (
          <option key={categoria.id} value={categoria.id}>
            {categoria.nombre}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FiltroCategoria;