package com.rutaya.service;

import com.rutaya.entity.RutaDetalle;
import com.rutaya.repository.RutaDetalleRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RutaDetalleService {

    private final RutaDetalleRepository repo;

    public RutaDetalleService(RutaDetalleRepository repo) {
        this.repo = repo;
    }

    // ✅ Listar detalles
    public List<RutaDetalle> listar() {
        return repo.findAll();
    }

    // ✅ Guardar detalle
    public RutaDetalle guardar(RutaDetalle detalle) {
        return repo.save(detalle);
    }

    // ✅ Buscar por ID
    public RutaDetalle buscarPorId(Long id) {

        return repo.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Detalle de ruta no encontrado"));
    }

    // ✅ Eliminar detalle
    public void eliminar(Long id) {

        RutaDetalle detalle = buscarPorId(id);

        repo.delete(detalle);
    }
}

