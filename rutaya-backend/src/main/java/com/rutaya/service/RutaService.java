package com.rutaya.service;

import com.rutaya.entity.Ruta;
import com.rutaya.repository.RutaRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RutaService {

    private final RutaRepository repo;

    public RutaService(RutaRepository repo) {
        this.repo = repo;
    }

    // ✅ Listar todas las rutas
    public List<Ruta> listar() {
        return repo.findAll();
    }

    // ✅ Buscar ruta por ID
    public Ruta buscarPorId(Long id) {

        return repo.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Ruta no encontrada"));
    }

    // ✅ Guardar nueva ruta
    public Ruta guardar(Ruta ruta) {
        return repo.save(ruta);
    }

    // ✅ Actualizar ruta
    public Ruta actualizar(Long id, Ruta nuevaRuta) {

        Ruta ruta = buscarPorId(id);

        ruta.setNombre(nuevaRuta.getNombre());
        ruta.setDescripcion(nuevaRuta.getDescripcion());
        ruta.setDuracionHoras(nuevaRuta.getDuracionHoras());
        ruta.setDistanciaKm(nuevaRuta.getDistanciaKm());
        ruta.setDificultad(nuevaRuta.getDificultad());
        ruta.setImagen(nuevaRuta.getImagen());
        ruta.setDetalles(nuevaRuta.getDetalles());

        return repo.save(ruta);
    }

    // ✅ Eliminar ruta
    public void eliminar(Long id) {

        Ruta ruta = buscarPorId(id);

        repo.delete(ruta);
    }
}


