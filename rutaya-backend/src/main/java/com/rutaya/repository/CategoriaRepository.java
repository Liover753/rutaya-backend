package com.rutaya.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rutaya.entity.Categoria;

public interface CategoriaRepository
        extends JpaRepository<Categoria, Long> {
}


