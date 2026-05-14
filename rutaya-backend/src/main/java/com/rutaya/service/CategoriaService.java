package com.rutaya.service;

import com.rutaya.entity.Categoria;
import com.rutaya.repository.CategoriaRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriaService {

    private final CategoriaRepository repo;

    public CategoriaService(CategoriaRepository repo) {
        this.repo = repo;
    }

    // ✅ Listar categorías
    public List<Categoria> listar() {
        return repo.findAll();
    }

    // ✅ Buscar por ID
    public Categoria buscarPorId(Long id) {

        return repo.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Categoría no encontrada"));
    }

    // ✅ Guardar categoría
    public Categoria guardar(Categoria categoria) {
        return repo.save(categoria);
    }

    // ✅ Actualizar categoría
    public Categoria actualizar(Long id,
                                Categoria nuevaCategoria) {

        Categoria categoria = buscarPorId(id);

        categoria.setNombre(nuevaCategoria.getNombre());

        return repo.save(categoria);
    }

    // ✅ Eliminar categoría
    public void eliminar(Long id) {

        Categoria categoria = buscarPorId(id);

        repo.delete(categoria);
    }
}

