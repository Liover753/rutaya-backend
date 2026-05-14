package com.rutaya.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rutaya.entity.Lugar;

import java.util.List;

@Repository
public interface LugarRepository extends JpaRepository<Lugar, Long> {

    // 🔍 Buscar por categoría
    List<Lugar> findByCategoriaId(Long categoriaId);

    // 🔍 Buscar por nombre
    List<Lugar> findByNombreContainingIgnoreCase(String nombre);

    // 🔍 Buscar por nombre de categoría
    List<Lugar> findByCategoriaNombre(String nombreCategoria);
}


