package com.rutaya.controller;

import com.rutaya.entity.Ruta;
import com.rutaya.service.RutaService;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rutas")
@CrossOrigin(origins = "http://localhost:5173")
public class RutaController {

    private final RutaService service;

    public RutaController(RutaService service) {
        this.service = service;
    }

    // ✅ Listar todas las rutas
    @GetMapping
    public List<Ruta> listar() {
        return service.listar();
    }

    // ✅ Obtener ruta por ID
    @GetMapping("/{id}")
    public Ruta obtener(@PathVariable Long id) {
        return service.buscarPorId(id);
    }

    // ✅ Crear nueva ruta
    @PostMapping
    public Ruta guardar(@RequestBody Ruta ruta) {
        return service.guardar(ruta);
    }

    // ✅ Actualizar ruta
    @PutMapping("/{id}")
    public Ruta actualizar(@PathVariable Long id,
                           @RequestBody Ruta ruta) {

        return service.actualizar(id, ruta);
    }

    // ✅ Eliminar ruta
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        service.eliminar(id);
    }
}

