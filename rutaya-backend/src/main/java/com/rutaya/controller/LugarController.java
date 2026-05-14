package com.rutaya.controller;

import com.rutaya.entity.Lugar;
import com.rutaya.service.LugarService;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/lugares")
@CrossOrigin(origins = "http://localhost:5173")
public class LugarController {

    private final LugarService service;

    public LugarController(LugarService service) {
        this.service = service;
    }

    // ✅ Listar todos los lugares
    @GetMapping
    public List<Lugar> listar() {
        return service.listar();
    }

    // ✅ Obtener lugar por ID
    @GetMapping("/{id}")
    public Lugar obtener(@PathVariable Long id) {
        return service.buscarPorId(id);
    }

    // ✅ Crear nuevo lugar
    @PostMapping
    public Lugar guardar(@RequestBody Lugar lugar) {
        return service.guardar(lugar);
    }

    // ✅ Actualizar lugar
    @PutMapping("/{id}")
    public Lugar actualizar(@PathVariable Long id,
                            @RequestBody Lugar lugar) {

        return service.actualizar(id, lugar);
    }

    // ✅ Eliminar lugar
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        service.eliminar(id);
    }

    // 🔍 Buscar lugares por categoría
    @GetMapping("/categoria/{categoriaId}")
    public List<Lugar> buscarPorCategoria(@PathVariable Long categoriaId) {

        return service.buscarPorCategoria(categoriaId);
    }

    // 🔍 Buscar lugares por nombre
    @GetMapping("/buscar")
    public List<Lugar> buscarPorNombre(@RequestParam String nombre) {

        return service.buscarPorNombre(nombre);
    }
}

