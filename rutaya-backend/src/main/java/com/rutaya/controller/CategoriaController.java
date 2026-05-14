package com.rutaya.controller;

import com.rutaya.entity.Categoria;
import com.rutaya.service.CategoriaService;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categorias")
@CrossOrigin(origins = "http://localhost:5173")
public class CategoriaController {

    private final CategoriaService service;

    public CategoriaController(CategoriaService service) {
        this.service = service;
    }

    // ✅ Listar categorías
    @GetMapping
    public List<Categoria> listar() {
        return service.listar();
    }

    // ✅ Obtener categoría por ID
    @GetMapping("/{id}")
    public Categoria obtener(@PathVariable Long id) {

        return service.buscarPorId(id);
    }

    // ✅ Crear categoría
    @PostMapping
    public Categoria guardar(@RequestBody Categoria categoria) {

        return service.guardar(categoria);
    }

    // ✅ Actualizar categoría
    @PutMapping("/{id}")
    public Categoria actualizar(@PathVariable Long id,
                                @RequestBody Categoria categoria) {

        return service.actualizar(id, categoria);
    }

    // ✅ Eliminar categoría
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {

        service.eliminar(id);
    }
}
