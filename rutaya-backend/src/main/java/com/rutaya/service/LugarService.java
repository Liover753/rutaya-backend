package com.rutaya.service;

import com.rutaya.entity.Lugar;
import com.rutaya.exception.RecursoNoEncontradoException;
import com.rutaya.repository.LugarRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LugarService {

    private final LugarRepository repo;

    public LugarService(LugarRepository repo) {
        this.repo = repo;
    }

    // ✅ Listar todos
    public List<Lugar> listar() {
        return repo.findAll();
    }

    // ✅ Guardar
    public Lugar guardar(Lugar lugar) {
        return repo.save(lugar);
    }

    // ✅ Buscar por ID
    public Lugar buscarPorId(Long id) {
        return repo.findById(id)
                .orElseThrow(() ->
                        new RecursoNoEncontradoException("Lugar no encontrado con ID: " + id));
    }

    // ✅ Actualizar
    public Lugar actualizar(Long id, Lugar nuevoLugar) {

        Lugar lugar = buscarPorId(id);

        lugar.setNombre(nuevoLugar.getNombre());
        lugar.setDescripcion(nuevoLugar.getDescripcion());
        lugar.setHistoria(nuevoLugar.getHistoria());
        lugar.setImagen(nuevoLugar.getImagen());
        lugar.setUbicacion(nuevoLugar.getUbicacion());
        lugar.setLatitud(nuevoLugar.getLatitud());
        lugar.setLongitud(nuevoLugar.getLongitud());
        lugar.setCategoria(nuevoLugar.getCategoria());

        return repo.save(lugar);
    }

    // ✅ Eliminar
    public void eliminar(Long id) {

        Lugar lugar = buscarPorId(id);

        repo.delete(lugar);
    }

    // 🔍 Buscar por categoría
    public List<Lugar> buscarPorCategoria(Long categoriaId) {
        return repo.findByCategoriaId(categoriaId);
    }

    // 🔍 Buscar por nombre
    public List<Lugar> buscarPorNombre(String nombre) {
        return repo.findByNombreContainingIgnoreCase(nombre);
    }
}


