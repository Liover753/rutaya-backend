package com.rutaya.controller;

import com.rutaya.entity.RutaDetalle;
import com.rutaya.service.RutaDetalleService;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ruta-detalles")
@CrossOrigin(origins = "http://localhost:5173")
public class RutaDetalleController {

    private final RutaDetalleService service;

    public RutaDetalleController(RutaDetalleService service) {
        this.service = service;
    }

    // ✅ Listar todos los detalles
    @GetMapping
    public List<RutaDetalle> listar() {
        return service.listar();
    }

    // ✅ Obtener detalle por ID
    @GetMapping("/{id}")
    public RutaDetalle obtener(@PathVariable Long id) {

        return service.buscarPorId(id);
    }

    // ✅ Guardar detalle
    @PostMapping
    public RutaDetalle guardar(@RequestBody RutaDetalle detalle) {

        return service.guardar(detalle);
    }

    // ✅ Eliminar detalle
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {

        service.eliminar(id);
    }
}


